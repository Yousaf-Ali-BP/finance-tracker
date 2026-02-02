# Database Design

## Overview

This document describes the database **schema and data relationships** for the Finance Tracker application.
The database is designed to be **simple, scalable, and user-centric**, supporting current features and future expansion.

---

## Database Technology

* **Database:** MongoDB (NoSQL, document-based)
* **ODM:** Mongoose
* **Reason for Choice:**
  * Flexible schema
  * Easy horizontal scaling
  * Good fit for JSON-based APIs

---

## Design Principles

* Each user’s data is **isolated**
* Relationships handled using **references**
* Frequently queried data is indexed
* Schema designed for future extension (budgets, accounts)

---

## Core Entities

### 1. User

Stores authentication and profile information.

#### Fields:

```text
User
- _id
- name
- email (unique)
- password (hashed)
- createdAt
- updatedAt
```

#### Notes:

* Email must be unique
* Password is never stored in plain text

### 2. Category

Stores both system-defined and user-defined categories.

#### Fields:

```text
Category
- _id
- name
- type (income | expense | both)
- isDefault (boolean)
- userId (nullable for default categories)
- createdAt
```

#### Notes:

* Default categories have `userId = null`
* Custom categories belong to a user
* Users can edit/delete only their own categories

### 3. Transaction

Represents income and expense records.

#### Fields:

```text
Transaction
- _id
- userId (reference to User)
- categoryId (reference to Category)
- accountId (reference to Account)
- type (income | expense)
- amount
- date
- note (optional)
- createdAt
```

#### Notes:

* Each transaction belongs to exactly one user
* Category is referenced to avoid duplication
* Type must match category type

### 4. Account (Optional)

Used to support multiple wallets or bank accounts.

#### Fields:

```text
Account
- _id
- userId
- name (Cash, Bank, Wallet)
- balance
- createdAt
```

#### Notes:

* Transactions can reference an account

---

## Relationships Overview

```text
User
 ├── Category (custom)
 ├── Transaction
 ├── Account (optional)
 └── Budget (future)
```

* One user → many transactions
* One user → many custom Accounts
* One user → many custom categories
* One category → many transactions

---

## Indexing Strategy

* `User.email` → unique index
* `Transaction.userId` → index for fast queries
* `Transaction.date `→ index for monthly filtering
* `Category.userId` → index for user-specific categories

---

## Data Integrity Rules

* A user cannot access another user’s data
* Default categories cannot be deleted
* Deleting a category requires:
  * Prevent deletion if used by transactions
  * Or reassign transactions (decision deferred)

---

## Future Considerations

* Soft delete for transactions
* Multi-currency support
* Data archiving for old records

---

## Summary

* This database design:
* Supports all MVP requirements
* Is easy to understand and maintain
* Avoids unnecessary complexity
* Is ready for future features