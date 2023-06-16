# Blog Website Template with Dynamic Routing using EJS
This is a simple blog website template that is built using the Express.js framework, EJS templating engine, and Bootstrap for styling. It allows users to create blog posts and view them on the website.

<img width="100%" alt="Example" src="https://github.com/ghubnerr/blog-website-template/assets/91924667/959dd875-2b13-439b-97aa-eb7c1194a1d9">

## How to Run the Application
To run this application on your local machine, please follow the steps below:

### Prerequisites
Make sure you have the following software installed on your machine:
- Node.js (version 12 or above)
- npm (Node Package Manager)
- A MongoDB database connection string. Find more at [mongodb.com/atlas](https://www.mongodb.com/atlas)

### Installation
1. Clone the repository or download the source code: ```git clone https://github.com/ghubnerr/blog-website-template/```
2. Navigate to the project directory: ```cd <directory>```
3. Install dependencies with NPM: ```npm install```

### Starting the Server
1. Open the app.js file and ensure that the necessary packages are imported correctly:
- `express`
- `body-parser`
- `ejs`
- `lodash`
- `mongoose`
- `dotenv`

2. In the `app.js` file, you can modify the homeStartingContent, aboutStartingContent, and contactStartingContent variables to customize the starting content of the respective pages. You can also edit the footer to your liking.
3. In the terminal, run the following command to start the server: ```node app.js```
4. Create a separate `.env` file according to the sample file and edit your environment variables from there

## Accessing the Application
You can access the blog website by opening your web browser and visiting `http://localhost:3000`.
- Home page: `http://localhost:3000`
- About page: `http://localhost:3000/about`
- Contact page: `http://localhost:3000/contact`
- Compose page: `http://localhost:3000/compose`

## Creating Blog Posts
To create a new blog post:
1. Visit the "Compose" page by navigating to `http://localhost:3000/compose` in your browser.
2. Enter a title for your blog post in the "Title" field.
3. Enter the content of your blog post in the "Body" field.
4. Click the "Publish" button to submit the post.

The post will be saved, and you will be redirected to the home page where you can see the newly published post. With a Cloud-hosted MongoDB Atlas integration, your posts will not be lost, and you can even access them from the Atlas UI website to perform multiple operations with it.

## Viewing Individual Blog Posts
Each blog post can be viewed individually by clicking on its title on the home page.

On the home page, click on the `Read More` section near the post you want to view. You will be directed to a page displaying the full content of the selected blog post.
