FEATURES
Create Blog Post: Allows users to create and add new blog posts to the system.

Read Blog Post: Fetch and view individual or multiple blog posts.

Update Blog Post: Modify existing blog posts.

Delete Blog Post: Remove blog posts from the system.

TECHNOLOGIES USED
Backend Framework: Node.js, Express.js

Database:  MongoDB

INSTALLATION
Clone the repository:
bash
Copy code
git clone https://github.com/Just-del-web/API-blog.git  
cd blogging-api  
Install dependencies:
bash
Copy code
npm install  
Set up the environment variables:
Create a .env file in the root directory and configure the following:
env
Copy code
DATABASE_URL=your_database_url  
PORT=your_port  
Start the server:
bash
Copy code
npm start  
API Endpoints
Blog Posts
HTTP Method	Endpoint	Description
POST	/api/posts	Create a new blog post.

GET	/api/posts	Fetch all blog posts.

GET	/api/posts/:id	Fetch a single blog post.

PUT	/api/posts/:id	Update an existing post.

DELETE	/api/posts/:id	Delete a blog post.

Request Body
Create/Update Post
json
Copy code
{  
  "title": "Post Title",  
  "content": "Post content goes here...",  
  "author": "Author Name"  
}  
License
This project is licensed under the MIT License.
