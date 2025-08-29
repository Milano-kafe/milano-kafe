# Milano Kafe Application

Welcome to the Milano Kafe Application! This project is a full-stack web application designed for a cafe, featuring both frontend and backend components. Below is an overview of the project's structure and functionality.

## Project Structure

```
milano-kafe-app
├── backend
│   ├── src
│   │   ├── controllers        # Contains controllers for handling requests
│   │   ├── middlewares        # Contains middleware for authentication and error handling
│   │   ├── models             # Contains database models
│   │   ├── routes             # Contains route definitions
│   │   ├── services           # Contains business logic for various functionalities
│   │   ├── utils              # Contains utility functions for localization and SEO
│   │   ├── app.ts             # Initializes the Express application
│   │   └── server.ts          # Starts the server
│   ├── package.json           # Backend dependencies and scripts
│   ├── tsconfig.json          # TypeScript configuration for the backend
│   └── README.md              # Documentation for the backend
├── frontend
│   ├── public
│   │   └── index.html         # Main HTML file for the frontend
│   ├── src
│   │   ├── components         # Contains React components for various features
│   │   ├── contexts           # Contains context providers for authentication and language
│   │   ├── hooks              # Contains custom hooks
│   │   ├── pages              # Contains page components
│   │   ├── routes             # Defines application routes
│   │   ├── services           # Contains API call functions
│   │   ├── styles             # Contains main styles
│   │   ├── utils              # Contains utility functions for SEO
│   │   ├── App.tsx            # Main application component
│   │   └── main.tsx           # Entry point for the React application
│   ├── package.json           # Frontend dependencies and scripts
│   ├── tsconfig.json          # TypeScript configuration for the frontend
│   └── README.md              # Documentation for the frontend
└── README.md                  # Documentation for the entire project
```

## Features

- **User Authentication**: Users can register and log in using Google or iCloud accounts.
- **Menu Management**: Users can view the menu, add items to their cart, and leave reviews.
- **Order Processing**: Users can place orders, and the admin can manage these orders.
- **Admin Panel**: Admins can manage users, view orders, and handle contact form submissions.
- **Localization**: The application supports multiple languages (Turkish, Uzbek, Korean, Russian, English).
- **Responsive Design**: The application is designed to work seamlessly on tablets and mobile devices.
- **SEO Optimization**: The application includes features for search engine optimization.

## Getting Started

To get started with the Milano Kafe Application, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd milano-kafe-app/backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

4. Start the backend server:
   ```
   cd backend
   npm start
   ```

5. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For any inquiries, please contact the project maintainer at devolper2011@gmail.com.