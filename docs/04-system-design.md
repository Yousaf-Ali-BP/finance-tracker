# System Design

## Overview

This document describes the **system architecture and component design** of the Finance Tracker application.
The system follows a **modular, scalable, and maintainable architecture** suitable for real-world applications.

---

## High-Level Architecture

The application follows a **client–server architecture**.

```text
Client (Web - Next.js)
        |
        | HTTP (REST API)
        ↓
Backend (Node.js + Express)
        |
        ↓
Database (MongoDB)
```

* The frontend is responsible for user interface and user interactions.
* The backend handles business logic, authentication, and data persistence.
* The database stores user and financial data.

---

## Frontend Architecture

### Technology

* Next.js (React Framework)
* TypeScript
* Tailwind CSS

### Responsibilities

* Render UI components
* Handle user input and validation
* Communicate with backend via REST APIs
* Manage authentication state
* Display analytics and summaries

### Key Frontend Modules

* **Auth Module:** login, registration, session handling
* **Dashboard Module:** summary and analytics views
* **Transactions Module:** income and expense management
* **Category Module:** category creation and management
* **Shared UI Components:** buttons, forms, charts

---

## Backend Architecture

### Technology

* Node.js
* Express.js
* MongoDB (via Mongoose)
* JWT Authentication

### Architectural Style

* Modular architecture inspired by **Clean Architecture**
* Feature-based module separation

---

## Backend Component Layers

### 1. Routes Layer

* Defines API endpoints
* Maps HTTP requests to controllers

### 2. Controller Layer

* Handles request and response
* Performs validation
* Calls service layer

### 3. Service Layer

* Contains business logic
* Processes data and rules
* Independent of HTTP and database

### 4. Data Access Layer

* Handles database operations
* Interacts with MongoDB
* Abstracted via repositories/models

---

## Authentication & Authorization

* JWT-based authentication
* Access tokens used for API authorization
* Protected routes require valid tokens
* Each user can only access their own data

---

## Database Architecture

* MongoDB used as NoSQL document database
* Data modeled around users, transactions, and categories
* Relationships managed via references (userId)

(Details covered in [05-database-design.md](05-database-design.md))

---

## Communication Flow

1. User performs an action on frontend
2. Frontend sends HTTP request to backend
3. Backend validates request and token
4. Business logic executed
5. Database queried or updated
6. Response sent back to frontend
7. UI updated accordingly

---

## Error Handling Strategy

* Centralized error handling in backend
* Meaningful error messages returned to frontend
* Frontend displays user-friendly messages
* Server errors logged for debugging

---

## Security Considerations

* Passwords stored as hashed values
* JWT used for stateless authentication
* Input validation on both frontend and backend
* Protected API routes

---

Scalability & Maintainability

* Modular structure allows easy feature expansion
* Clean separation of concerns
* Ready for:
    * Mobile frontend integration
    * Additional services
    * Microservices (future)

---

## Deployment Architecture (Initial)

```text
Frontend (Vercel)
Backend (Render)
Database (MongoDB Atlas)
```

---

## Summary

This system design ensures:
* Clear separation of responsibilities
* Scalable and maintainable structure
* Industry-standard architecture
* Future-ready design