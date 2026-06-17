# 🚀 Developer Hub

A React-based GitHub analytics dashboard that allows users to explore developer profiles, analyze repositories, track favorite projects, and visualize repository statistics.

## 🌐 Live Demo

🔗 developer-hub-xi.vercel.app/

---

## ✨ Features

### 👤 GitHub Profile Search

* Search any public GitHub user
* View profile information
* Display followers, following, repositories, and account details

### 📦 Repository Explorer

* Browse user repositories
* Search repositories by name
* Sort repositories by:

  * ⭐ Stars
  * 📝 Name
  * 🕒 Recently Updated

### 📊 Repository Analytics

* Total repositories
* Total stars
* Total forks
* Top repository detection

### ⭐ Favorites System

* Save favorite repositories
* Remove favorites
* Persistent storage using Local Storage

### 🌍 Language Statistics

* Analyze repository languages
* View language distribution

### 📄 Pagination

* Efficient repository browsing
* Previous / Next navigation
* Page number controls

### 🕒 Search History

* Track previously searched GitHub users
* Quick access to past searches

### 🎨 User Experience

* Dark Mode / Light Mode
* Responsive Design
* Loading States
* Error Handling
* Enter Key Search Support

---

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript (ES6+)
* Vite
* Tailwind CSS

### APIs

* GitHub REST API

### Deployment

* Vercel

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProfileCard.jsx
│   ├── RepoList.jsx
│   ├── RepoCard.jsx
│   ├── RepositoryStats.jsx
│   ├── GitHubAnalytics.jsx
│   ├── LanguageStates.jsx
│   ├── FavoritesList.jsx
│   ├── SearchHistory.jsx
│   ├── Pagination.jsx
│   ├── Loading.jsx
│   └── Error.jsx
│
├── App.jsx
└── main.jsx
```

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/Shruti8122/developer-hub.git
```

Navigate to the project:

```bash
cd developer-hub
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 📚 What I Learned

During this project, I practiced:

* React Components
* Props & State Management
* Conditional Rendering
* Lists & Keys
* Event Handling
* React Hooks
* Local Storage
* API Fetching
* Component Refactoring
* Pagination Logic
* Responsive Design
* Project Deployment

---

## 📄 License

This project is built for learning and portfolio purposes.
