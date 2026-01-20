# 🚀 ItemHub – Item Listing Application

ItemHub is a simple and modern item listing web application built with **Next.js 16 (App Router)**.  
The project demonstrates public and protected routing, mock authentication using # 🚀 ItemHub – Item Listing Application

ItemHub is a simple and modern item listing web application built with **Next.js 16 (App Router)**.  
The project demonstrates public and protected routing, mock authentication using localStorage, and item management using an Express.js API.

---

## 📖 Overview

This project was created as part of a frontend task to showcase:
- Next.js App Router concepts
- Basic authentication flow
- Public & protected pages
- API data fetching
- Clean UI using Tailwind CSS & DaisyUI

Users can browse items publicly, while authenticated users can access protected features like adding new items.

---

## ✨ Features

### 🌍 Public
- Landing page with **7 meaningful sections**
- Public item list page
- Public item details page
- Responsive Navbar & Footer
- Clean and responsive UI with **DaisyUI**

### 🔐 Authentication
- Mock login with **hardcoded email & password**
- Authentication data stored in **localStorage**
- Protected routes for authenticated users
- Auto redirect after login
- Logout functionality

### 📦 Item Management
- Fetch items from **Express.js API / JSON**
- Display item name, description, price, and image
- Dynamic item details page
- Protected **Add Item** page (authenticated users only)
- Store new items via Express.js server

### 🔔 Extra
- Toast notification on successful item creation
- Clean folder structure using App Router

---

## 🧭 Routes

| Route | Description | Access |
|------|------------|--------|
| `/` | Landing Page | Public |
| `/login` | Login Page | Public |
| `/products` | Item List | Public |
| `/products/[id]` | Item Details | Public |
| `/products/add` | Add New Item | Protected |

---

## 🛠️ Tech Stack

- **Next.js 16** (App Router)
- **React**
- **Express.js**
- **Tailwind CSS**
- **DaisyUI**
- **localStorage** (Mock Authentication)
- **Fetch API**

---

