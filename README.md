# 📚 BookNest

> **Read. Discover. Repeat.**

BookNest is a modern and responsive online bookstore frontend built with **React.js** and **Tailwind CSS**. It provides a clean and user-friendly interface for discovering books, exploring categories, managing a wishlist, adding books to a cart, and completing a demo checkout process.

---

## 🌐 Live Demo

🚀 **Coming Soon**

---

## 📸 Preview

### Home Page

<img width="1920" height="3678" alt="image" src="https://github.com/user-attachments/assets/ee84fabb-91cd-41b7-b03b-8c17cc43dff0" />


### Books

<img width="1920" height="6707" alt="image" src="https://github.com/user-attachments/assets/13ba4a57-d30b-4a58-8b05-f5e0fb98453c" />



### Book Details

<img width="1920" height="1746" alt="image" src="https://github.com/user-attachments/assets/feb46751-b6a3-4c17-919a-f2173ef60e07" />



### Cart & Checkout

<img width="1920" height="1462" alt="image" src="https://github.com/user-attachments/assets/7641fde5-6f33-49bb-90c8-4ae620682e0e" />


## ✨ Features

- 🏠 Modern and responsive homepage
- 📚 Browse book collection
- 🔍 Search books by title or author
- 🏷️ Filter books by category
- ↕️ Sort books by price and rating
- 📖 Book details page
- ❤️ Wishlist functionality
- 🛒 Shopping cart
- ➕ Increase / decrease cart quantity
- 🗑️ Remove books from cart
- 💳 Demo checkout page
- 👤 Login page
- 📝 Registration page
- 📱 Fully responsive design
- 🧭 React Router navigation
- 🎨 Modern UI with Tailwind CSS

---

## 📚 Book Categories

BookNest currently includes:

- 📖 Fiction
- 💕 Romance
- 🔎 Mystery
- 💻 Technology
- 💼 Business
- ✨ Self Development

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| React.js | Frontend UI |
| Vite | Development & Build Tool |
| JavaScript | Application Logic |
| Tailwind CSS | Styling |
| React Router | Page Navigation |
| Lucide React | Icons |
| Context API | Cart & Wishlist State |
| Git | Version Control |
| GitHub | Source Code Hosting |


---

## 📂 Project Structure

```text
booknest/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   └── images
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── BookCard.jsx
│   │   ├── Categories.jsx
│   │   ├── FeaturedBooks.jsx
│   │   ├── Newsletter.jsx
│   │   └── Footer.jsx
│   │
│   ├── context/
│   │   ├── cartContextValue.jsx
│   │   └── WishlistContext.jsx
│   │
│   ├── data/
│   │   └── books.js
│   │
│   ├── pages/
│   │   ├── Books.jsx
│   │   ├── BookDetails.jsx
│   │   ├── CategoriesPage.jsx
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Wishlist.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
