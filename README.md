# Create-your-space
This project is a web application that provides a space for authorized users to share their thoughts, ideas, and innovations through a blogging platform. It utilizes various frameworks and technologies, including MongoDB, Express, React.js, Node.js, and JWT authentication.
This app consists of the implementation of the MERN stack which involves the use of JWT auth to sign-up users or log in if already have an account for which I have used MONGO-DB as a medium 
for the storage of different users across the app.
Once the user is signed-in, they are authorized to enter the space or feed surrounded by their favorite individual's posts and share his/her thoughts across his social space.

Features
User Registration and Authentication: Users can create an account and authenticate themselves using JWT (JSON Web Tokens). This ensures that only authorized users can access and contribute to the blogging platform.

Create and Publish Blog Posts: Authenticated users can create and publish blog posts. They can add content, including text, images, and any other media, to share their ideas with the community.

Commenting and Discussion: Users can engage in discussions by commenting on blog posts. This feature promotes collaboration and enables users to share their thoughts, provide feedback, and contribute to the conversation.

Search and Filtering: The application allows users to search for specific blog posts or filter posts based on categories, tags, or keywords. This enhances the user experience by providing easy access to relevant content.

Technologies Used
The following frameworks and technologies were used to develop this project:

MongoDB: A NoSQL database that provides scalability and flexibility for storing user information, blog posts, and comments.

Express: A web application framework for Node.js that simplifies the development of server-side logic, routing, and API endpoints.

React.js: A JavaScript library for building user interfaces. React.js allows for the creation of reusable UI components and provides an interactive and responsive front-end experience.

Node.js: A JavaScript runtime environment that allows server-side execution of JavaScript code. Node.js is used to build the back-end logic and handle API requests.

JWT-auth: JSON Web Tokens are used for user authentication. They provide a secure method for transmitting authentication credentials between the client and the server.

Installation
To run this project locally, follow these steps:

Clone the repository:
git clone https://github.com/your-username/your-repo.git

Navigate to the project directory:
cd your-repo

Install the dependencies:
npm install

Set up the MongoDB database:

Install MongoDB on your local machine or use a cloud-based MongoDB service.
Create a new database and configure the connection details in the project's configuration file (server/config.js).

Set up JWT authentication:
Generate a secret key for JWT authentication and update the project's configuration file (server/config.js).

Start the server:
npm run server
Open your browser and navigate to http://localhost:8000

Start the client:
npm run client

Open your browser and navigate to http://localhost:3000 to access the blogging platform.
