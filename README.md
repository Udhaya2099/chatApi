# chatApi
# Chat API

## Overview
Chat API is a Node.js-based application that provides a backend for real-time messaging applications. It supports sending and receiving messages, file uploads, and user management.

## Features
- Real-time messaging
- User authentication
- File upload support
- Database integration with Sequelize and PostgreSQL

## Installation
### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- PostgreSQL database
- Git

### Steps to Set Up
1. Clone the repository:
   ```sh
   git clone https://github.com/Udhaya2099/chatApi.git
   ```
2. Navigate to the project directory:
   ```sh
   cd chatApi
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add your database credentials and other configurations.

5. Run database migrations:
   ```sh
   npx sequelize-cli db:migrate
   ```
6. Start the server:
   ```sh
   npm start
   ```

## API Endpoints
| Method | Endpoint        | Description            |
|--------|----------------|------------------------|
| POST   | `/register`    | Register a new user    |
| POST   | `/login`       | User authentication    |
| GET    | `/messages`    | Get chat messages      |
| POST   | `/messages`    | Send a new message     |

## Contributing
Feel free to contribute by submitting issues or pull requests.

## License
This project is licensed under the MIT License.

---
**Author:** Udhayakumar

