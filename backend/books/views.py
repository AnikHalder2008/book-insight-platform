from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Book
from .serializers import BookSerializer
from .utils import (
    scrape_books,
    generate_summary,
    classify_genre,
    recommend_books
)


# 🔹 GET all books
@api_view(['GET'])
def get_books(request):
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)


# 🔹 GET single book
@api_view(['GET'])
def get_book(request, pk):
    try:
        book = Book.objects.get(id=pk)
        serializer = BookSerializer(book)
        return Response(serializer.data)
    except Book.DoesNotExist:
        return Response({"error": "Book not found"}, status=status.HTTP_404_NOT_FOUND)


# 🔹 POST add book manually
@api_view(['POST'])
def add_book(request):
    serializer = BookSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# 🔹 POST scrape and store books
@api_view(['POST'])
def scrape_and_store(request):
    data = scrape_books()

    for item in data:
        Book.objects.create(
            title=item["title"],
            author=item["author"],
            rating=item["rating"],
            description=item["description"],
            url=item["url"]
        )

    return Response({"message": "Books scraped and stored successfully"})


# 🔹 GET summary of a book
@api_view(['GET'])
def get_summary(request, pk):
    try:
        book = Book.objects.get(id=pk)
        summary = generate_summary(book.description)

        return Response({
            "title": book.title,
            "summary": summary
        })
    except Book.DoesNotExist:
        return Response({"error": "Book not found"}, status=status.HTTP_404_NOT_FOUND)


# 🔹 GET genre classification
@api_view(['GET'])
def get_genre(request, pk):
    try:
        book = Book.objects.get(id=pk)
        genre = classify_genre(book.description)

        return Response({
            "title": book.title,
            "genre": genre
        })
    except Book.DoesNotExist:
        return Response({"error": "Book not found"}, status=status.HTTP_404_NOT_FOUND)


# 🔹 GET recommendations
@api_view(['GET'])
def get_recommendations(request, pk):
    try:
        book = Book.objects.get(id=pk)
        recommendations = recommend_books(book.title)

        return Response({
            "title": book.title,
            "recommendations": recommendations
        })
    except Book.DoesNotExist:
        return Response({"error": "Book not found"}, status=status.HTTP_404_NOT_FOUND)


# 🔹 POST ask AI (basic version)
@api_view(['POST'])
def ask_question(request):
    question = request.data.get("question", "")

    if not question:
        return Response({"error": "Question is required"}, status=status.HTTP_400_BAD_REQUEST)

    # Placeholder response (replace with RAG/OpenAI later)
    answer = f"This is an AI-generated answer for: {question}"

    return Response({
        "question": question,
        "answer": answer
    })
