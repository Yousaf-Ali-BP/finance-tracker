# User Flow

## Overview

This document describes the user journey and interaction flow within the Finance Tracker application.
It outlines how users move through the system from registration to daily usage.

---

## 1. User Entry Flow

### 1.1 Landing Page

- User visits the application URL.
- User sees:
- App name and short description
- Login button
- Register button

---

## 2. Authentication Flow

### 2.1 Registration Flow

1. User clicks Register
2. User enters:
    - Name
    - Email
    - Password
3. System validates input
4. Account is created
5. User is redirected to the dashboard

### 2.2 Login Flow

1. User clicks **Login**
2. User enters email and password
3. System verifies credentials
4. On success - redirect to dashboard
5. On failure - show error message

### 2.3 Logout Flow

1. user clicks **Logout**
2. Session/token is cleared
3. User is redirected to login page

---

## 3. Dashboard Flow

### 3.1 Dashboard Overview

After login user sees :

- Total income
- Total expenses
- Current balance
- Quick summery for the current month

### 3.2 Navigation

From the dashboard, the user can navigate to:

- Income management
- Expense management
- Categories
- Reports (if enabled)
- Profile / Settings

---

## 4. Income Management Flow

1. User opens **Income** section
2. User clicks **Add Income**
3. User enters:
    - Amount
    - Category
    - Date
    - Optional note
4. User saves the record
5. System updates income list and dashboard

### Edit/Delete

- User selects an existing income
- Can edit or delete it
- Changes reflect immediately

---

## 5. Expense Management Flow

1. User opens **Expense** section
2. User clicks **Add Expense**
3. User enters:
    - Amount
    - Category
    - Date
    - Optional note
4. User saves the record
5. System updates expense list and dashboard

### Edit/Delete

- User selects an existing expense
- Can edit or delete it
- Changes reflect immediately

---

## 6. Category Management Flow

1. User navigates to Categories
2. User sees default and custom categories
3. User can:
    * Create new category
    * Edit category
    * Delete category
4. Categories become available in income and expense forms

---

## 7. Summary & Reports Flow

1. User opens Summary / Reports
2. System shows:
    * Monthly income vs expenses
    * Category-wise breakdown
3. User can change month/year to view history

---

### 8. Error Handling Flow

* Invalid input → show validation message
* Unauthorized access → redirect to login
* Server error → show friendly error message

---

## 9. Session Handling

* User session maintained using authentication token
* On session expiry:
    * User is redirected to login
    * Unsaved data is not persisted

---

## 10. Future Flow Extensions

(Not part of current implementation)

* Budget alerts
* Notifications
* Multi-account support
* Data export

---

## Summary

This user flow ensures:

* Simple navigation
* Clear separation of features
* Predictable user experience
* Easy extension in future phases