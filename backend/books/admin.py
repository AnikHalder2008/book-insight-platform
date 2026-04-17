from django.contrib import admin
from .models import Book


class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'rating')
    search_fields = ('title', 'author')
    list_filter = ('rating',)


admin.site.register(Book, BookAdmin)
