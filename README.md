# JobChaser

Job search platform featuring Firebase authentication, protected routes, and Redux-powered filtering for browsing and searching job listings.

## Features

- 🔐 **Firebase Authentication** - Secure user authentication with email/password
- 🛡️ **Protected Routes** - Job listings page requires user authentication
- 🔍 **Advanced Filtering** - Search and filter jobs by:
  - Search term (position, company, location, skills)
  - Full-time positions
  - Remote opportunities
  - USA-based jobs
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ⚡ **Redux State Management** - Efficient state management for filters and search

## Tech Stack

- **Frontend Framework**: React 18.2
- **Build Tool**: Vite 5.1
- **Language**: TypeScript 5.4
- **State Management**: Redux Toolkit 2.2
- **Routing**: React Router DOM 6.22
- **Authentication**: Firebase 10.9
- **HTTP Client**: Axios 1.6
- **Forms**: React Hook Form 7.51
- **Icons**: Font Awesome 6.5

## Prerequisites

- Node.js v20.12.0 (see `engines` in `package.json`)
- npm or yarn package manager
- Firebase project with Authentication enabled

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jobchaser
```

2. Install dependencies:
```bash
npm install
```

## Environment Variables Setup

1. Create a `.env` file in the root directory of the project.

2. Get your Firebase configuration:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project (or create a new one)
   - Click the gear icon ⚙️ next to "Project Overview"
   - Select "Project settings"
   - Scroll down to "Your apps" section
   - If you don't have a web app, click "Add app" and select the web icon (</>)
   - Copy the Firebase configuration values

3. Add the following environment variables to your `.env` file:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

**Note**: `VITE_FIREBASE_MEASUREMENT_ID` is optional (for Google Analytics), but the other 6 variables are required.

4. Enable Firebase Authentication:
   - In Firebase Console, go to "Authentication"
   - Click "Get started"
   - Enable "Email/Password" sign-in method
   - Save the changes

## Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in the terminal).

### Build for Production

Build the application for production:

```bash
npm run build
```

The production build will be created in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

## Project Structure

```
jobchaser/
├── public/              # Static assets
│   └── assets/         # Images and other static files
│   └── data/           # Job data JSON file
├── src/
│   ├── components/     # React components
│   │   ├── context/    # Auth context provider
│   │   ├── pages/      # Page components
│   │   ├── slices/     # Redux slices
│   │   └── types/      # TypeScript type definitions
│   ├── styles/         # CSS/SCSS stylesheets
│   ├── App.tsx         # Main app component
│   ├── firebase-config.ts  # Firebase configuration
│   └── main.tsx        # Application entry point
├── .env                # Environment variables (create this)
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.js      # Vite configuration
```

