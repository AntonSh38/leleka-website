# 🤰 Leleka
Leleka is a modern web application designed to be a supportive companion for pregnant women. Built with Next.js and TypeScript, it provides a personalized and comforting environment to track the journey of motherhood.

## � Project Description
Leleka helps expectant mothers monitor their well-being and their baby's development. The application offers daily tips, a personal diary for thoughts and feelings, and a comprehensive journey tracker. It creates a digital space where technology meets care.

## ✨ Key Features
- **Onboarding System** — personalized setup to enter pregnancy details and choose an avatar
- **Dashboard Hub** — daily overview with current date, pregnancy week, and welcoming messages
- **Journey Tracker** — detailed weekly insights for both the baby's growth and the mother's changes
- **Personal Diary** — secure space to record thoughts, feelings, and memories
- **Authentication** — secure registration and login system
- **Interactive UI** — smooth animations and responsive components for a premium experience

## 🛠️ Technologies
The project is built using a modern technology stack:

- **Next.js 16** — React framework with App Router
- **TypeScript** — type safety and better developer experience
- **React 19** — library for building user interfaces
- **Zustand** — flexible and scalable state management
- **TanStack Query** — powerful asynchronous state management
- **Axios** — HTTP client for API requests
- **Formik & Yup** — robust form handling and validation
- **Swiper** — modern touch slider for carousels
- **React DatePicker** — intuitive date selection
- **React Hot Toast** — elegant user notifications
- **CSS Modules** — modular and maintainable styling

## � Installation
### Prerequisites
Make sure you have installed:
- Node.js (LTS version recommended)
- npm or yarn

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/leleka-website.git
   cd leleka-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the application:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Usage
### Available Commands
- `npm run dev` — start development server
- `npm run build` — build project for production
- `npm start` — run production build
- `npm run lint` — check code with linter

### Project Structure
```
leleka-website/
├── app/                    # Next.js App Router pages & layouts
│   ├── (auth)/             # Authentication routes
│   ├── (other routes)/     # Protected application routes (Dashboard, Diary, etc.)
│   └── layout.tsx          # Root layout
├── components/             # Reusable React components
│   ├── Dashboard/          # Dashboard specialized components
│   ├── DiaryPage/          # Diary feature components
│   ├── JourneyDetails/     # Journey tracking components
│   └── TopBar/             # Navigation and layout components
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities and helper functions
├── types/                  # TypeScript definitions
└── public/                 # Static assets (images, icons)
```

### Main Pages
- `/` — Dashboard / Landing
- `/diary` — Personal Diary
- `/journey` — Weekly Pregnancy Tracker
- `/profile` — User Profile Settings

## 🌐 Deployment
The project is optimized for deployment on Vercel:
1. Connect your GitHub repository to Vercel.
2. Configure environment variables.
3. Vercel will automatically build and deploy your project.

## 👥 Team
This project was created by a dedicated team of developers as an educational project.


