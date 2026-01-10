# Project Requirements

---

## Functional Requirements

### User Management

- User can register with email and password
- User can log in securely
- User can log out
- user can access only their own data

### Income and Expense Management

- User can add income entries
- user can add expenses entries
- Each income or Expense include :
    - Amount
    - Category
    - Date
    - Note (Optional)
- User can edit and delete income and expense

### Category Management

- System provides default categories
- User can :
    - Create custom categories
    - Edit categories
    - Delete categories
- Categories can be used for both income and expenses.

### Account Management

- User can create multiple accounts (e.g., Cash, Bank, Wallet).
- Each transaction belongs to an account.
- User can edit or delete accounts.

### Dashboard & Summary

- User can view:
    - Total income
    - Total expenses
    - Current balance
- Monthly summary view.
- Category-wise expense breakdown.

---

## Non-Functional Requirements

- Secure authentication using JWT.
- Fast API response time
- Scalable and maintainable architecture.
- Clean and user-friendly UI.
- Proper error handling and validation.
- Modular code structure for future expansion.

---

## Out of Scope

- Mobile application (Android / iOS)
- AI-based spending prediction
- Bank API integrations
- Multi-currency support

---

## Assumption

- Single user per account
- Internet connection required
- Web application only (desktop-first, responsive design).

---

### Future Enhancements (Optional)

- Budget limits per category
- Data export (CSV / PDF)
- Monthly reports
- Notifications and alerts

---

## Notes

This document defines what the system should do, not how it is implemented.
Technical implementation details are covered in later documents.