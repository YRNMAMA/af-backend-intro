# Frontend Project

This project is a frontend application built with React and TypeScript that integrates with a backend API developed using Express. The application fetches and displays a list of lessons from the backend.

## Project Structure

```
frontend-project
├── public
│   ├── index.html          # Main HTML file
│   └── styles
│       └── main.css       # Main styles for the application
├── src
│   ├── App.tsx            # Main component of the application
│   ├── components
│   │   ├── Header.tsx     # Header component
│   │   ├── Footer.tsx     # Footer component
│   │   └── LessonList.tsx  # Component to display lessons
│   ├── services
│   │   └── api.ts         # API service for backend calls
│   └── index.tsx          # Entry point for the React application
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd frontend-project
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

The application provides a simple interface to view lessons fetched from the backend API. The main components include:

- **Header:** Displays the title and navigation.
- **LessonList:** Fetches and displays the list of lessons from the backend.
- **Footer:** Contains copyright information.

## API Integration

The frontend communicates with the backend API at the `/api/lezioni` endpoint to retrieve the list of lessons. Ensure that the backend server is running for the frontend to function correctly.