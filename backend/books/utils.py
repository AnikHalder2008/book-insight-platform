import requests
from bs4 import BeautifulSoup


# 🔹 Scrape books from website
def scrape_books():
    url = "https://books.toscrape.com/"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    books = soup.find_all("article", class_="product_pod")

    data = []

    for book in books:
        title = book.h3.a["title"]

        data.append({
            "title": title,
            "author": "Unknown",
            "rating": 0,
            "description": "No description available",
            "url": url
        })

    return data


# 🔹 Generate simple summary (placeholder AI)
def generate_summary(description):
    if not description:
        return "No description available"

    return description[:100] + "..."


# 🔹 Genre prediction (basic logic)
def classify_genre(description):
    description = description.lower()

    if "love" in description:
        return "Romance"
    elif "war" in description:
        return "History"
    elif "magic" in description:
        return "Fantasy"
    else:
        return "General"


# 🔹 Recommendation logic (basic)
def recommend_books(book_title):
    return [
        f"If you liked {book_title}, you may also like Book A",
        f"If you liked {book_title}, you may also like Book B"
    ]
