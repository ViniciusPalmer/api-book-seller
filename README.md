# 📚 API Book Seller

A REST API for managing books, built with **Express.js** and **MongoDB**.

## 🚀 Features

- 📖 **CRUD Operations** — Create, Read, Update, and Delete books
- 🔍 **Get by ID** — Retrieve specific books by their ID
- 🔎 **Search Books** — Filter books by title, year, gender, or price
- 🌐 **Express Server** — Fast and lightweight web server
- 💾 **MongoDB Database** — Persistent data storage with Mongoose ODM
- ⚡ **Hot Reload** — Development mode with Nodemon

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express.js | Web framework |
| MongoDB + Mongoose | Database & ODM |
| Nodemon | Development auto-reload |
| ESLint | Code linting |

## 📁 Project Structure

```
├── src/
│   ├── config/
│   │   └── dbConnect.js       # MongoDB connection
│   ├── controllers/
│   │   ├── bookController.js  # Book business logic
│   │   └── authorController.js # Author business logic
│   ├── models/
│   │   ├── Book.js            # Mongoose schema
│   │   └── Author.js          # Author schema
│   ├── rotes/
│   │   ├── booksRoutes.js      # Book API routes
│   │   ├── authorsRoutes.js    # Author API routes
│   │   └── index.js            # Route aggregator
│   └── app.js                  # Express app setup
├── server.js                   # Server entry point
└── package.json
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB account (Atlas or local)

### Installation

```bash
npm install
```

### Configuration

Create a `.env` file in the root directory:

```env
MONGO_CONNECTION_STRING=mongodb+srv://<username>:<password>@personal-projects.ykzfenp.mongodb.net/library?appName=personal-projects
```

### Running the Server

```bash
# Development mode (with hot reload)
npm run dev

# Production mode
npm start
```

The server will start at **http://localhost:3000/**

## 📡 API Endpoints

### Books

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/livros` | Get all books |
| GET | `/livros/busca` | Search books by query params |
| GET | `/livros/:id` | Get a book by ID |
| POST | `/livros` | Create a new book |
| PUT | `/livros/:id` | Update a book |
| DELETE | `/livros/:id` | Delete a book |

### Authors

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/autores` | Get all authors |
| GET | `/autores/:id` | Get an author by ID |
| POST | `/autores` | Create a new author |
| PUT | `/autores/:id` | Update an author |
| DELETE | `/autores/:id` | Delete an author |

### Example Request

**POST** `/livros`

```json
{
  "title": "The Great Gatsby",
  "author": "AUTHOR_ID",
  "year": 1925,
  "gender": "Fiction",
  "isbn": "978-0-7432-7356-5",
  "price": 12.99,
  "pages": 180
}
```

> Replace `AUTHOR_ID` with a valid author ID from `/autores` endpoint.

### Search Books

**GET** `/livros/busca`

Query parameters (all optional):

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | string | Search by title (case-insensitive) |
| `year` | number | Filter by publication year |
| `gender` | string | Filter by gender (case-insensitive) |
| `price` | number | Filter by exact price |

**Example:** `GET /livros/busca?gender=terror&year=2022`

```bash
curl "http://localhost:3000/livros/busca?title=gatsby"
```

## 🧪 Linting

```bash
npm run lint
```

## 📄 License

ISC