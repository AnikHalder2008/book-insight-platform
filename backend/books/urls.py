from django.urls import path
from . import views

urlpatterns = [
    path('books/', views.get_books, name='get_books'),
    path('books/<int:pk>/', views.get_book, name='get_book'),
    path('add-book/', views.add_book, name='add_book'),
    path('query/', views.ask_question, name='ask_question'),
]
