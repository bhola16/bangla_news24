# 📰 Bangla News 24

**Bangla News 24** is a modern, responsive news web application built with **Next.js, TypeScript, Tailwind CSS, DaisyUI, and Better Auth**.

The application fetches real-time news data from a REST API and provides users with categorized news, featured stories, latest headlines, most-read articles, detailed news pages, and user authentication.

## 🌐 Live Demo

**Vercel**:  [Live Website:](https://bangla-news-24-taupe.vercel.app/)
##
**GitHub**: [Visit Repository](https://github.com/bhola16/bangla_news24)
---

## ✨ Features

### 📰 News Features

* 🏠 Modern and responsive homepage
* ⭐ Featured/main news section
* 📰 Latest news sections
* 🔥 Most-read news
* 📢 Scrolling latest-news marquee
* 🗂️ Dynamic category navigation
* 📖 Detailed news article pages
* 🖼️ Dynamic news images
* 🏷️ Categories and tags
* 👤 Reporter/byline information
* 📅 Published date and time
* 🔗 Original article/source links
* 📱 Fully responsive design
* ⚡ Fast navigation with Next.js App Router

### 👤 Authentication & User Features

* 🔐 Email/password authentication
* 🔵 Google authentication
* ⚫ GitHub authentication
* 👤 User profile page
* ✏️ Edit profile information
* 🖼️ Update profile image
* 📧 Email verification status
* 🚪 Sign out functionality
* 🔗 Account linking support
* 🗄️ MongoDB-backed authentication

### 🎨 UI Features

* Responsive layout
* Tailwind CSS styling
* DaisyUI components
* News-card hover effects
* Responsive navigation
* Loading states
* Custom 404 page
* Toast notifications
* Mobile-friendly interface

---

## 🛠️ Tech Stack

| Technology             | Purpose                                            |
| ---------------------- | -------------------------------------------------- |
| **Next.js 16**         | React framework, routing and server-side rendering |
| **React 19**           | User interface                                     |
| **TypeScript**         | Type-safe development                              |
| **Tailwind CSS 4**     | Styling and responsive design                      |
| **DaisyUI 5**          | UI components                                      |
| **Better Auth**        | Authentication and session management              |
| **MongoDB**            | Authentication database                            |
| **Lucide React**       | Icons                                              |
| **React Toastify**     | Toast notifications                                |
| **React Marquee Text** | Scrolling news headlines                           |
| **REST API**           | News data source                                   |
| **Vercel**             | Deployment                                         |

---

## 🏗️ Project Architecture

The application uses the **Next.js App Router** architecture.

```text
Bangla News 24
│
├── Next.js App Router
│
├── News API
│   ├── News Sections
│   ├── Latest News
│   ├── Categories
│   ├── Most Read
│   └── Article Details
│
├── Authentication
│   ├── Better Auth
│   ├── MongoDB
│   ├── Email & Password
│   ├── Google OAuth
│   └── GitHub OAuth
│
└── Responsive UI
    ├── Tailwind CSS
    └── DaisyUI
```

---

## 📂 Project Structure

```text
bangla-news-24/
│
├── public/
│   └── logo.webp
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...all]/
│   │   │           └── route.ts
│   │   │
│   │   ├── category/
│   │   │   └── [categoryId]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── news/
│   │   │   └── [newsId]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   │
│   │   ├── signin/
│   │   │   └── page.tsx
│   │   │
│   │   ├── signup/
│   │   │   └── page.tsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── MainNews.tsx
│   │   ├── Marquee.tsx
│   │   ├── MostRead.tsx
│   │   ├── Navlinks.tsx
│   │   ├── NewsCard.tsx
│   │   ├── ToastProvider.tsx
│   │   └── UserInfo.tsx
│   │
│   ├── lib/
│   │   ├── auth-client.ts
│   │   └── auth.ts
│   │
│   ├── types/
│   │   └── Types.ts
│   │
│   └── proxy.ts
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

# 🔌 News API

Bangla News 24 uses the following REST API:

```text
https://news-api-v2.vercel.app
```

The application consumes several endpoints from this API.

### News Sections

```http
GET /api/news/sections
```

Used by the homepage to retrieve the main news and other curated news sections.

### Latest News

```http
GET /api/news?limit=10
```

Used by the latest-news marquee.

### Categories

```http
GET /api/categories
```

Used to dynamically generate the category navigation.

### Most Read News

```http
GET /api/news/most-read
```

Used in the **Most Read** section.

### Category News

```http
GET /api/category/{categoryId}
```

Example:

```text
/api/category/sports
```

Used to display news belonging to a specific category.

### Article Details

```http
GET /api/article/{newsId}
```

Example:

```text
/api/article/ckqxnrwx10ydt
```

Used to retrieve the complete information for an individual article.

---

# 🏠 Homepage

The homepage is built around several reusable components.

### Main News

The featured section displays the primary news stories with:

* News image
* Category
* Title
* Description
* Article link

### Other News Sections

Additional sections are dynamically generated from the API.

Each section contains multiple reusable `NewsCard` components.

### Most Read

The sidebar displays popular articles retrieved from the Most Read API endpoint.

---

# 📢 Latest News Marquee

The application includes a scrolling headline ticker that displays the latest news.

Example:

```text
Latest News
───────────────────────────────────────────────
News headline 1 • News headline 2 • News headline 3
```

Users can select a headline to navigate directly to the corresponding article.

---

# 🗂️ Category Pages

News can be filtered by category using dynamic routes.

The category route is:

```text
/category/[categoryId]
```

For example:

```text
/category/sports
/category/national
/category/international
```

The page dynamically retrieves the corresponding category data from the API.

---

# 📖 News Article Pages

Each article has its own dynamic route:

```text
/news/[newsId]
```

Example:

```text
/news/ckqxnrwx10ydt
```

An article can contain:

* Article title
* Description
* Main image
* Reporter/byline
* Published date
* Source
* Article body
* Text blocks
* Subheadings
* Additional images
* Image captions
* Topics
* Tags
* Original source URL

---

# 🔐 Authentication

Authentication is implemented using **Better Auth** with a **MongoDB adapter**.

The application supports:

### Email & Password

Users can create an account using:

```text
Name
Profile Image URL
Email
Password
```

Users can subsequently sign in using their email and password.

### Google OAuth

Users can authenticate through Google.

### GitHub OAuth

Users can authenticate through GitHub.

### Account Linking

Better Auth account linking is enabled so supported authentication providers can be associated with an existing account.

---

# 👤 User Profile

Authenticated users can access:

```text
/profile
```

The profile page provides:

* Profile image
* Name
* Email address
* User ID
* Account creation date
* Last updated date
* Email verification status
* Account status

Users can also update:

* Name
* Profile image

and sign out from their account.

---

# 🗄️ Database

MongoDB is used as the database for Better Auth.

The authentication database is:

```text
bangla-news-24
```

Better Auth uses the MongoDB adapter to manage authentication-related data such as:

* Users
* Sessions
* Accounts
* Authentication providers

---

# 🔑 Environment Variables

Create a `.env` file in the root of the project.

```env
MONGODB_URL=your_mongodb_connection_string

BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

### Environment Variable Description

| Variable               | Description                 |
| ---------------------- | --------------------------- |
| `MONGODB_URL`          | MongoDB connection string   |
| `BETTER_AUTH_URL`      | Base URL of the application |
| `GOOGLE_CLIENT_ID`     | Google OAuth client ID      |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret  |
| `GITHUB_CLIENT_ID`     | GitHub OAuth client ID      |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth client secret  |

> **Important:** Never commit `.env` or OAuth secrets to GitHub.

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/bangla-news-24.git
```

## 2. Navigate to the Project

```bash
cd bangla-news-24
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Configure Environment Variables

Create:

```text
.env
```

and add the required environment variables.

## 5. Start the Development Server

```bash
npm run dev
```

## 6. Open the Application

Visit:

```text
http://localhost:3000
```

---

# 📦 Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm run start
```

Starts the application in production mode.

### Lint

```bash
npm run lint
```

Runs ESLint to check the project for code-quality issues.

---

# 🧩 Main Components

### `Header.tsx`

Responsible for the main website header, branding, date, authentication controls, and navigation.

### `Navlinks.tsx`

Retrieves categories from the API and generates the navigation links dynamically.

### `Marquee.tsx`

Displays the latest news headlines in a scrolling ticker.

### `MainNews.tsx`

Displays the featured news section.

### `NewsCard.tsx`

Reusable component for displaying individual news cards.

### `MostRead.tsx`

Displays the most-read articles.

### `UserInfo.tsx`

Handles the authenticated user's information and authentication controls.

### `ToastProvider.tsx`

Provides toast notifications throughout the application.

### `Footer.tsx`

Contains the website footer and related links.

---

# 🧠 TypeScript

API response structures are defined in:

```text
src/types/Types.ts
```

Important interfaces include:

```text
INews
IOtherSection
IHeadlines
IMostRead
INewsDetails
INewsBodyItem
INavlinks
```

Using TypeScript interfaces helps maintain consistent data structures and improves type safety across the application.

---

# ⚡ Next.js Features

The project takes advantage of several Next.js features:

* App Router
* Dynamic routes
* Server Components
* Client Components
* Server-side data fetching
* `next/image`
* Loading UI
* Custom 404 page
* API route handlers

---

# 📱 Responsive Design

Bangla News 24 is designed to work across:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

The layout adapts automatically using responsive Tailwind CSS utilities.

### Desktop Layout

```text
┌──────────────────────────────────────────────┐
│                   Header                     │
├──────────────────────────────────────────────┤
│                 Navigation                   │
├──────────────────────────────┬───────────────┤
│                              │               │
│        News Content          │   Most Read   │
│                              │               │
├──────────────────────────────┴───────────────┤
│                    Footer                    │
└──────────────────────────────────────────────┘
```

### Mobile Layout

```text
┌────────────────────┐
│       Header       │
├────────────────────┤
│     Navigation     │
├────────────────────┤
│     Main News      │
├────────────────────┤
│    News Cards      │
├────────────────────┤
│     Most Read      │
├────────────────────┤
│       Footer       │
└────────────────────┘
```

---

# 🖼️ Image Configuration

External news images are handled through Next.js Image optimization.

The current configuration allows images from:

```text
ichef.bbci.co.uk
```

This configuration can be extended in `next.config.ts` when additional trusted image hosts are required.

---

# ☁️ Deployment

The application is deployed using **Vercel**.

### Production URL

```text
https://bangla-news-24-taupe.vercel.app/
```

For a new deployment:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Deploy the application.
5. Update OAuth callback URLs for the production domain.

---

# 🔒 Security Notes

For production deployments:

* Never expose MongoDB credentials.
* Never commit `.env`
* Keep Google OAuth secrets private.
* Keep GitHub OAuth secrets private.
* Configure OAuth redirect URLs correctly.
* Use a restricted MongoDB network configuration where possible.
* Do not expose sensitive authentication information in client-side code.

---

# 🔮 Future Improvements

Possible improvements for future versions include:

* 🔍 News search
* ❤️ Save/bookmark articles
* 💬 Comment system
* 🔔 Breaking-news notifications
* 🌙 Dark mode
* 📊 Reading analytics
* 🔄 Pagination or infinite scrolling
* 📰 Personalized news feed
* 🔖 Reading history
* 📱 Progressive Web App support
* 🌐 Improved SEO and structured metadata
* ⚡ Further performance optimization

---

# 👨‍💻 Author

## Bholanath Bala

---

# 📄 License

This project was developed for **educational and learning purposes** as part of the **Programming Hero Web Development course**.

---

## ⭐ Acknowledgements

* **Next.js** for the application framework
* **React** for the UI library
* **Tailwind CSS** for styling
* **DaisyUI** for UI components
* **Better Auth** for authentication
* **MongoDB** for database services
* **Vercel** for deployment
* **Programming Hero** for the web development learning environment
* **BBC and other original news sources** for the news content provided through the API

---

## 📌 Project Summary

**Bangla News 24** combines a modern news-reading experience with dynamic API-driven content and a complete authentication system.

The project demonstrates practical implementation of:

```text
Next.js
   ↓
TypeScript
   ↓
Tailwind CSS + DaisyUI
   ↓
REST API
   ↓
Better Auth
   ↓
MongoDB
   ↓
Vercel
```

Built with ❤️ by **Bholanath Bala**.
