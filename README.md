# book-insight-platform
AI-powered book insight platform using Django, React, and RAG
## Database Setup

This project uses SQLite as the default database.

The database file (`db.sqlite3`) is not included with preloaded data.

To create the database, run:

```id="x8c4zf"
python manage.py migrate
```

After running migrations, you can add data using:

* Django Admin Panel (`/admin/`)
* API endpoint (`/api/add-book/`)
