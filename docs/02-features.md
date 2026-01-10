# Project Features

## Overview

This document describes the core and extended features of the Finance Tracker application.
Features are grouped by phases to clearly define the current scope and future expansion.

---

## Phase 1 – Core Features (MVP)

These features form the minimum viable product and must be implemented first.

---

### User Authentication & Authorization

- User registration using email and password
- Secure login and logout
- Password encryption and secure session handling (JWT-based)
- Access control to ensure users can only access their own data

---

### Income Management

- Add new income records
- Edit existing income records
- Delete income records
- Store income details :
    - Amount
    - Category
    - Date
    - Note (Optional)

---

### Expense Management

- Add new expense records
- Edit existing expense records
- Delete expense records
- Store expense details :
    - Amount
    - Category
    - Date
    - Note (Optional)

---

### Account Management

- Multiple accounts (cash, bank, wallet)
- Transfer between accounts

---

### Category Management

- Predefined system categories (e.g., Salary, Food, Transport, Rent)
- User-created custom categories
- Edit categories
- Delete categories
- Categories reusable for both income and expenses

---

### Dashboard & Overview

- Display total income
- Display total expenses
- Display current balance
- Monthly summary view
- Simple category-based breakdown

---

## Phase 2 – Enhanced Features

These features improve usability and analytics but are not required for MVP.

---

### Budget Management

- Set monthly budget per category
- View budget usage progress
- Warnings when approaching or exceeding limits

---

### Reports & Analytics

- Monthly and yearly financial summaries
- Visual charts for income vs expenses
- Category-wise spending analysis

---

### Data Export

- Export transactions as CSV
- Export summaries as PDF

---

## Non-Functional Features

- Secure authentication and authorization
- Fast and reliable API responses
- Scalable architecture
- Clean and consistent UI/UX
- Proper error handling and validation
- Maintainable and modular codebase

---

## Notes

- All features are designed to be modular and extensible.
- Implementation priority follows Phase order.
- Mobile support and advanced analytics are intentionally excluded from early phases.