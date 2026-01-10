# API Design

## Overview

This document describes the REST API design for the Finance Tracker application.
The API follows REST principles and is designed to be secure, consistent, and easy to consume by web and future mobile
clients.

---

## API Conventions

* Base URL: /api
* Data format: JSON
* Authentication: JWT (Bearer Token)
* All protected routes require Authorization header
* Consistent HTTP status codes

---

## Authentication API

### 1. Register User

#### Endpoint

```text 
POST /api/auth/register
```

#### Request Body

```text
{
"name": "User Name",
"email": "user@email.com",
"password": "strongPassword"
}
```

#### Response

```text
{
  "message": "User registered successfully"
}
```

### 2. Login User

#### Endpoint

```text
POST /api/auth/login
```

#### Request Body

```text
{
  "email": "user@email.com",
  "password": "strongPassword"
}
```

#### Response

```text
{
  "accessToken": "jwt-token"
}
```

### 3. Logout User

#### Endpoint

```text
POST /api/auth/logout
```

#### Notes

* Client-side token removal
* Server remains stateless

---

## Category API

### 4. Get Categories

#### Endpoint

```text
GET /api/categories
```

#### Description

* Returns default + user-created categories

### 5. Create Category

#### Endpoint

```text
POST /api/categories
```

#### Request Body

```text
{
  "name": "Snacks",
  "type": "expense"
}
```

### 6. Update Category

#### Endpoint

```text
PUT /api/categories/:id
```

#### Rules

* Only custom categories can be updated

### 7. Delete Category

#### Endpoint

```text
DELETE /api/categories/:id
```

#### Rules

* Default categories cannot be deleted

---

## Account API

Accounts represent where money is stored (e.g., Cash, Bank, Wallet).

### 8. Get Accounts

#### Endpoint

```text
GET /api/accounts
```

#### Description

* Returns all accounts created by the authenticated user

### 9. Create Account

#### Endpoint

```text
POST /api/accounts
```
#### Request Body

```text
{
  "name": "Cash",
  "initialBalance": 5000
}
```

#### Notes

* `initialBalance` is optional
* Balance is calculated from transactions in future versions

### 10. Update Account
    
#### Endpoint

```text
PUT /api/accounts/:id
```

#### Rules

* User can update only their own accounts

### 11. Delete Account

#### Endpoint

```text
DELETE /api/accounts/:id
```

#### Rules

* Account cannot be deleted if it has linked transactions
* Or transactions must be reassigned (decision deferred)

---

## Transaction API

### 12. Get Transactions

#### Endpoint

```text
GET /api/transactions
```

### 13. Create Transaction

#### Endpoint

```text
POST /api/transactions
```

#### Request Body

```text
{
  "type": "expense",
  "accountId": "account_id",
  "categoryId": "category_id",
  "amount": 250,
  "date": "2026-05-10",
  "note": "Snacks"
}
```

### 14. Update Transaction

#### Endpoint

```text
PUT /api/transactions/:id
```

### 15. Delete Transaction

#### Endpoint

```text
DELETE /api/transactions/:id
```

---

## Dashboard & Summary API

### 16. Monthly Summary

#### Endpoint

```text
GET /api/summary/monthly
```

#### Response

```text
{
  "totalIncome": 30000,
  "totalExpense": 18000,
  "balance": 12000
}
```

### 17. Category Breakdown

#### Endpoint

```text
GET /api/summary/categories
```

---

## Error Handling

### Common Status Codes

| Code | Meaning          |
| ---- | ---------------- |
| 200  | Success          |
| 201  | Created          |
| 400  | Validation error |
| 401  | Unauthorized     |
| 403  | Forbidden        |
| 404  | Not found        |
| 500  | Server error     |

### Error Response Format

```text
{
  "error": "Error message"
}
```
---

### Security Rules

* JWT required for all protected routes
* Users can only access their own data
* Input validation on all write operations

---

### Versioning (Future)

* API versioning may be introduced (`/api/v1`)
* Backward compatibility maintained

---

### Summary

**This API design:**
* Covers all MVP features
* Is frontend and mobile friendly
* Follows REST best practices
* Is easy to extend and maintain