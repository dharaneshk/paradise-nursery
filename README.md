# Paradise Nursery – Shopping Cart Application

**Project name:** Paradise Nursery

Paradise Nursery is an online houseplant shop built with **React** and **Redux Toolkit**.
Visitors land on a welcome page, browse houseplants grouped by category, add plants to a
shopping cart, and manage the cart (change quantities, remove items, see totals).

## Features
- Landing page with company name, short description and a **Get Started** button
- About Us section describing the company
- Product listing page: 3 categories with 6 unique houseplants each (thumbnail, name, price)
- "Add to Cart" button that becomes disabled once a plant is in the cart
- Navigation bar with a live cart icon showing the total number of items
- Shopping cart page: per-item subtotal, total cart cost, increase / decrease / delete,
  **Continue Shopping** and **Checkout** ("Coming Soon") buttons
- Redux slice (`CartSlice.jsx`) with `addItem`, `removeItem`, `updateQuantity`

## Tech stack
React 18 · Redux Toolkit · react-redux · Vite

## Getting started
```bash
npm install
npm run dev
```
Open the URL printed in the terminal (usually http://localhost:5173).

## Project structure
```
src/
  main.jsx        – app entry, Redux Provider
  store.js        – Redux store
  App.jsx         – landing page + page switching
  App.css         – global styles and landing background image
  AboutUs.jsx     – company details
  ProductList.jsx – plant listing + navbar
  CartItem.jsx    – shopping cart page
  CartSlice.jsx   – cart reducers
```
