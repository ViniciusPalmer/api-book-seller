# 📚 API Book Seller

A REST API for managing books and authors, built with **Express.js** and **MongoDB**.

## 🚀 Features

- 📖 **CRUD Operations** — Create, Read, Update, and Delete books and authors
- 🔍 **Get by ID** — Retrieve specific books or authors by their ID
- 🔎 **Search Books** — Filter books by title, year, gender, or price
- ⚠️ **Error Handling** — Structured error classes with centralized middleware
- 🔄 **Validation** — Global request validation using Mongoose
- 🌐 **Express Server** — Fast and lightweight web server
- 💾 **MongoDB Database** — Persistent data storage with Mongoose ODM
- ⚡ **Hot Reload** — Development mode with Nodemon
- 🧹 **Code Linting** — ESLint for code quality

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
│   │   └── dbConnect.js          # MongoDB connection
│   ├── controllers/
│   │   ├── bookController.js     # Book business logic
│   │   └── authorController.js  # Author business logic
│   ├── errors/
│   │   ├── appError.js           # Base application error
│   │   ├── badRequest.js         # Bad request error (400)
│   │   ├── notFound.js           # Not found error (404)
│   │   └── validationError.js    # Validation error (400)
│   ├── middlewares/
│   │   ├── error.js              # Global error handler
│   │   └── handler404.js         # 404 not found handler
│   ├── models/
│   │   ├── Author.js             # Author Mongoose schema
│   │   ├── Book.js               # Book Mongoose schema
│   │   ├── globalValidator.js    # Global request validator
│   │   └── index.js              # Models index (exports)
│   ├── rotes/
│   │   ├── authorsRoutes.js      # Author API routes
│   │   ├── booksRoutes.js        # Book API routes
│   │   └── index.js              # Route aggregator
│   └── app.js                    # Express app setup
├── server.js                     # Server entry point
├── package.json
└── .env                          # Environment variables
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
MONGO_CONNECTION_STRING=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/library?appName=personal-projects
PORT=3000
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

## ⚠️ Error Handling

The API uses structured error classes with centralized middleware:

| Error Class | HTTP Status | Description |
|-------------|-------------|-------------|
| `AppError` | 500 | Generic application error |
| `BadRequest` | 400 | Invalid request (invalid ID format) |
| `NotFound` | 404 | Resource not found |
| `ValidationError` | 400 | Mongoose validation error |

All errors are handled by the global `errorHandler` middleware.

## 🧪 Linting

```bash
npm run lint
```

## 📄 License

ISC