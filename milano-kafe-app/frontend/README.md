# Milano Kafe Frontend Documentation

## Overview
Milano Kafe is a web application designed for a cafe that allows users to browse the menu, place orders, and manage their profiles. The application is built using React and TypeScript, providing a modern and responsive user experience.

## Features
- User authentication via Google or iCloud accounts.
- Dynamic menu with the ability to view, review, and purchase items.
- Shopping cart functionality with item quantity adjustment.
- User profile management to view and edit personal information and order history.
- Admin panel for managing users, orders, and menu items.
- Multi-language support (Turkish, Uzbek, Korean, Russian, English).
- Contact form for user inquiries.

## Project Structure
```
frontend
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Auth
│   │   ├── Menu
│   │   ├── Cart
│   │   ├── Profile
│   │   ├── Admin
│   │   ├── Contact
│   │   └── News
│   ├── contexts
│   ├── hooks
│   ├── pages
│   ├── routes
│   ├── services
│   ├── styles
│   ├── utils
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── tsconfig.json
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the frontend directory:
   ```
   cd milano-kafe-app/frontend
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Application
To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

## API Integration
The frontend communicates with the backend API for user authentication, menu management, order processing, and more. Ensure the backend server is running to test the full functionality.

## Localization
The application supports multiple languages. Users can switch languages using the Language Switcher component.

## SEO Optimization
The application includes SEO optimization features to enhance visibility in search engines.

## Contact
For any inquiries or issues, please use the contact form available in the application.

## License
This project is licensed under the MIT License.