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


