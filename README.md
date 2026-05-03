# 📚 API Book Seller

A REST API for managing books, built with **Express.js** and **MongoDB**.

## 🚀 Features

- 📖 **CRUD Operations** — Create, Read, Update, and Delete books
- 🔍 **Get by ID** — Retrieve specific books by their ID
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
│   │   └── bookController.js  # Book business logic
│   ├── models/
│   │   └── Book.js            # Mongoose schema
│   ├── rotes/
│   │   ├── booksRoutes.js      # Book API routes
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
MONGO_USER=your_username
MONGO_PASSWORD=your_password
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

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/livros` | Get all books |
| GET | `/livros/:id` | Get a book by ID |
| POST | `/livros` | Create a new book |
| PUT | `/livros/:id` | Update a book |
| DELETE | `/livros/:id` | Delete a book |

### Example Request

**POST** `/livros`

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "year": 1925,
  "gender": "Fiction",
  "isbn": "978-0-7432-7356-5",
  "price": 12.99,
  "pages": 180
}
```

## 🧪 Linting

```bash
npm run lint
```

## 📄 License

ISC