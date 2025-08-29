# Milano Kafe Backend

## Overview
Milano Kafe is a full-stack web application designed for managing a café's operations, including user authentication, menu management, order processing, and customer feedback. This backend documentation provides an overview of the structure, setup, and functionality of the backend services.

## Project Structure
The backend is organized into several key directories:

- **src**: Contains the main application code.
  - **controllers**: Handles incoming requests and responses.
  - **middlewares**: Contains middleware functions for authentication and error handling.
  - **models**: Defines the data models for users, menu items, orders, reviews, and contact submissions.
  - **routes**: Defines the API endpoints for various functionalities.
  - **services**: Contains business logic for handling requests.
  - **utils**: Utility functions for localization and SEO.
  - **app.ts**: Initializes the Express application and middleware.
  - **server.ts**: Starts the server and listens for incoming requests.

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd milano-kafe-app/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Configuration
- Ensure that your database is set up and configured in the environment variables.
- Update any necessary configurations in the `src/utils/localization.ts` and `src/utils/seo.ts` files.

## Running the Application
To start the backend server, run:
```
npm start
```
The server will listen on the specified port (default is 3000).

## API Endpoints
The backend provides several API endpoints for the frontend to interact with:

- **Authentication**
  - POST `/api/auth/register`: Register a new user.
  - POST `/api/auth/login`: Log in an existing user.

- **Menu Management**
  - GET `/api/menu`: Retrieve the list of menu items.
  - POST `/api/menu`: Add a new menu item (admin only).

- **Order Management**
  - POST `/api/order`: Create a new order.
  - GET `/api/order/:id`: Retrieve order details.

- **Review Management**
  - POST `/api/review`: Submit a review for a menu item.

- **User Management**
  - GET `/api/user/:id`: Retrieve user profile information.
  - PUT `/api/user/:id`: Update user profile information.

- **Contact Management**
  - POST `/api/contact`: Submit a contact form.

## Admin Panel
The admin panel is accessible only to users with admin privileges. It allows for managing users, orders, and menu items.

## Localization
The application supports multiple languages. You can switch languages using the language switcher in the frontend.

## SEO Optimization
The backend includes functions for SEO optimization to enhance the visibility of the café in search engines.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.