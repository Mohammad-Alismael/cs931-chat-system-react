# Social Networking App

## Introduction

The Social Networking App is a web-based application that allows users to connect with friends, send friend requests, search for users, create and participate in chats, update their profile information, and manage their contact list.

## Features

1. User Login
    - Users can log in to the system using their email address and password.

2. User Registration
    - New users can register for the system by providing their name, email address, and password.

3. Sending Friend Requests
    - Users can send friend requests to other users.
    - The recipient of the friend request will receive a notification.

4. Searching Through User List
    - Users can search for other users based on name or location.
    - The search results display user names and profile pictures.

5. Creating Chats
    - Users can create chats with one or more friends.
    - Chats allow users to send messages, images, and files.
    - Users can leave and rejoin chats at any time.

6. Updating 'About' Description
    - Users can update their profile 'About' section to add a description about themselves.

7. Listing Contacts
    - Users can view a list of contacts who have accepted their friend requests but with whom they have not yet created a chat.

## Requirements

### Functional Requirements

- User login and registration functionalities should be implemented.
- The system should allow users to send and accept friend requests.
- Users should be able to search for other users based on specific criteria.
- Chat creation and participation functionalities should be implemented.
- Users should be able to update their profile information.
- The contact list should display users who have accepted friend requests but with whom no chat has been created.

### Non-Functional Requirements

- The application should be performant, able to handle a large number of concurrent users.
- User data and passwords should be securely stored and protected.
- The user interface should be user-friendly, responsive, and intuitive.
- The application should be compatible with various web browsers and devices.

## Assumptions and Constraints

- Users are expected to have a stable internet connection to use the application.
- Users are required to have a valid email address for registration.
- The application will be accessible only via a web browser.
- The application will be available in the English language.

## Getting Started

To run the Social Networking App locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies.
3. Configure the database and environment variables.
4. Run the application using the provided commands.
```
   npm run dev
```
You will get the generated link inside the command line.
### Server
To run the fake express server you to go to 'FakeServer' folder then run the following command
```
json-server --watch FakeServer/db.json
```
```
cd FakeServer
```
```
   nodemon server.js
```

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org): JavaScript library for building user interfaces.
- [reactstrap](https://reactstrap.github.io): Bootstrap-based React UI library.
- [Bootstrap](https://getbootstrap.com): Used for responsive and customizable UI components.
- [JSON Server](https://github.com/typicode/json-server): Simulate a RESTful API with a JSON file.
- [Vite](https://vitejs.dev): Fast build tool and development server.

Please refer to the project documentation and codebase for further details and implementation specifics.
