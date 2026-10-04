# 📰 Bangla News 24

**Bangla News 24** is a modern, responsive news website built with **Next.js, TypeScript, Tailwind CSS, and DaisyUI**. It fetches news dynamically from a REST API and provides category-based news, most-read articles, latest headlines, and detailed article pages.

---

## 🌐 [View Live Website](https://bangla-news24-one.vercel.app/)

---

## 📸 Features

- 🏠 Modern homepage with featured news
- 📰 Latest news sections
- 🔥 Most Read News section
- 📢 Scrolling latest-headlines marquee
- 🗂️ Category-based news browsing
- 📖 Detailed article pages
- 🖼️ Dynamic news images
- 🏷️ News categories and tags
- 👤 Reporter information
- 📅 Published date and time
- 🔗 Original article source links
- 📱 Fully responsive design
- ✨ Interactive hover effects
- ⚡ Next.js App Router
- 🎨 Tailwind CSS + DaisyUI styling

---

## 🛠️ Technologies Used

| Technology             | Purpose                       |
| ---------------------- | ----------------------------- |
| **Next.js**            | React framework and routing   |
| **TypeScript**         | Type-safe development         |
| **React**              | UI development                |
| **Tailwind CSS**       | Styling and responsive design |
| **DaisyUI**            | UI components                 |
| **Next/Image**         | Optimized images              |
| **React Marquee Text** | Latest-news scrolling ticker  |
| **REST API**           | Fetching news data            |

---

## 🔌 API

This project uses the following news API:

```text
https://news-api-v2.vercel.app
```

### Available Endpoints

#### Get News Sections

```text
GET /api/news/sections
```

Used on the homepage to retrieve the main news and other news sections.

---

#### Get Latest News

```text
GET /api/news?limit=10
```

Used for the latest-headlines marquee.

---

#### Get Most Read News

```text
GET /api/news/most-read
```

Used in the **Most Read News** sidebar.

---

#### Get Categories

```text
GET /api/categories
```

Used to generate the navigation menu.

---

#### Get Category News

```text
GET /api/category/{categoryId}
```

Example:

```text
/api/category/sports
```

Used to display news belonging to a specific category.

---

#### Get Article Details

```text
GET /api/article/{newsId}
```

Example:

```text
/api/article/ckqxnrwx10ydt
```

Used for individual news article pages.

---

## 📁 Project Structure

```text
bangla-news-24/
│
├── app/
│   ├── category/
│   │   └── [categoryId]/
│   │       └── page.tsx
│   │
│   ├── news/
│   │   └── [newsId]/
│   │       └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── MainNews.tsx
│   ├── MostRead.tsx
│   ├── Navlinks.tsx
│   ├── NewsCard.tsx
│   └── Marquee.tsx
│
├── public/
│   └── logo.webp
│
├── types/
│   └── Types.ts
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 🏠 Homepage

The homepage contains several major sections.

### Main News

The first section displays the main featured article with:

- News image
- Category
- Title
- Description
- Read More link

Additional articles are displayed beside the main article.

### Other News Sections

Additional sections are rendered dynamically from the API.

Each section contains:

- Section title
- News cards
- Article images
- Categories
- Titles
- Descriptions

### Most Read

A sidebar displays popular articles with numbered rankings.

Example:

```text
01  Latest important news
02  Another popular article
03  Trending story
04  Important update
```

---

## 📢 Latest News Marquee

A scrolling headline section is displayed below the header.

It fetches the latest news and allows users to click directly on a headline to open the article.

```text
Latest: News headline 1 • News headline 2 • News headline 3 •
```

---

## 🗂️ Category Pages

Users can browse news by category.

Example routes:

```text
/category/sports
/category/national
/category/international
```

The category page dynamically fetches news using the category ID.

---

## 📖 News Details

Each news article has a dynamic route:

```text
/news/{newsId}
```

Example:

```text
/news/ckqxnrwx10ydt
```

The article page can display:

- Source
- Article title
- Description
- Reporter
- Published date
- Main image
- Article body
- Subheadings
- Additional images
- Image captions
- Tags
- Original source link

---

## 🎨 UI & Design

The project uses a clean news-style interface with:

- Red as the primary accent color
- White backgrounds
- Responsive layouts
- Card-based news presentation
- Hover animations
- Image zoom effects
- Smooth transitions
- Mobile-friendly navigation

### Interactive Effects

```text
Hover over a news card
        ↓
Card slightly moves upward
        ↓
Image zooms in
        ↓
Title changes color
        ↓
Read More arrow moves forward
```

---

## 📱 Responsive Design

The website is designed to work across different screen sizes.

### Desktop

```text
┌─────────────────────────────────────────────┐
│                   Header                    │
├─────────────────────────────────────────────┤
│                 Navigation                  │
├──────────────────────────┬──────────────────┤
│                          │                  │
│       News Content       │    Most Read    │
│                          │                  │
├──────────────────────────┴──────────────────┤
│                   Footer                    │
└─────────────────────────────────────────────┘
```

### Mobile

The layout automatically changes to a single-column design.

```text
┌───────────────────┐
│      Header       │
├───────────────────┤
│    Navigation     │
├───────────────────┤
│    Main News      │
├───────────────────┤
│    News Cards     │
├───────────────────┤
│    Most Read      │
├───────────────────┤
│      Footer       │
└───────────────────┘
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/bangla-news-24.git
```

### 2. Go to the Project Directory

```bash
cd bangla-news-24
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Website

Visit:

```text
http://localhost:3000
```

---

## 📦 Available Scripts

### Development

```bash
npm run dev
```

Starts the development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm run start
```

Starts the production server.

### Lint

```bash
npm run lint
```

Checks the project for linting issues.

---

## 🧩 Important Components

### `Header.tsx`

Responsible for:

- Website logo
- Website title
- Current date
- Sign In button
- Sign Up button
- Navigation

### `Navlinks.tsx`

Fetches categories from the API and creates navigation links dynamically.

### `Marquee.tsx`

Displays the latest news headlines in a scrolling ticker.

### `MainNews.tsx`

Displays the featured news and additional main-news articles.

### `NewsCard.tsx`

Reusable card component used for displaying news items.

### `MostRead.tsx`

Displays the most-read news articles.

### `Footer.tsx`

Contains:

- Website information
- Quick links
- Social links
- Copyright information

---

## 🧠 TypeScript Types

The project maintains API-related interfaces inside:

```text
types/Types.ts
```

Some important interfaces include:

```text
INews
IOtherSection
IHeadlines
IMostRead
INewsDetails
INewsBodyItem
INavlinks
```

These interfaces help keep API data structured and improve type safety throughout the application.

---

## 🔗 Dynamic Routing

The project uses the **Next.js App Router**.

### Category Route

```text
app/category/[categoryId]/page.tsx
```

URL:

```text
/category/sports
```

### News Route

```text
app/news/[newsId]/page.tsx
```

URL:

```text
/news/ckqxnrwx10ydt
```

The dynamic route parameters are used to request the corresponding data from the API.

---

## ⚡ Performance

The project uses Next.js features such as:

- Server Components
- Dynamic routing
- `next/image`
- Optimized image rendering
- Server-side API fetching

Images are rendered using the Next.js `Image` component for better image optimization.

---

## 🔮 Future Improvements

Possible future improvements include:

- 🔍 News search functionality
- 🌙 Dark mode
- ❤️ Bookmark/save articles
- 👤 User authentication
- 💬 Comments
- 🔔 Breaking-news notifications
- 📊 News analytics
- 🔄 Pagination
- 🧭 Better mobile navigation
- 🕐 Relative article timestamps
- 📱 PWA support

---

## 👨‍💻 Author

**Bholanath Bala**

Electronics & Communication Engineering Graduate

Interested in AI, Machine Learning, Computer Vision, and Software Development.

---

## 📄 License

This project was created for educational purposes as part of the **Programming Hero Web Development course**.
