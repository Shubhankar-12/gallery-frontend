# Gallery Frontend

## Overview

**Gallery Frontend** is a responsive web application that enables users to upload, view, and manage images seamlessly. Built with modern web technologies, it offers an intuitive interface and efficient performance.

## Features

- **Image Upload & Preview**: Users can select images from their devices, preview them before uploading, and submit them to the gallery.
- **Responsive Design**: The application is optimized for various screen sizes, ensuring a consistent experience across desktops, tablets, and mobile devices.
- **Image Gallery**: Displays uploaded images in a grid layout, allowing users to browse through their collection effortlessly.
- **Lazy Loading**: Implements lazy loading for images to enhance performance, especially when dealing with large datasets.
- **Error Handling**: Provides user-friendly error messages and validations during the image upload process.

## Tech Stack

- **Nuxt 3**: Utilized for its powerful features in building modern web applications.
- **Vue 3**: Employed for building interactive user interfaces.
- **Tailwind CSS**: Applied for styling, offering a utility-first approach to design.
- **Pinia**: Used for state management, ensuring a predictable state container for the application.
- **TypeScript**: Implemented to add static typing, enhancing code quality and maintainability.

## Installation & Setup

To run this project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Shubhankar-12/gallery-frontend.git
   cd gallery-frontend
   ```

2. **Install Dependencies:**

   Choose your preferred package manager:

   **Using npm:**
   ```bash
   npm install
   ```

   **Using yarn:**
   ```bash
   yarn install
   ```

3. **Run the Development Server:**

   Start the server on `http://localhost:3000`:

   **Using npm:**
   ```bash
   npm run dev
   ```

   **Using yarn:**
   ```bash
   yarn dev
   ```

4. **Build for Production:**

   To create a production build:

   **Using npm:**
   ```bash
   npm run build
   ```

   **Using yarn:**
   ```bash
   yarn build
   ```

5. **Preview Production Build:**

   To locally preview the production build:

   **Using npm:**
   ```bash
   npm run preview
   ```

   **Using yarn:**
   ```bash
   yarn preview
   ```

## Contributing

Contributions are welcome! If you have suggestions or encounter issues, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

**Note:** Ensure that the backend API is running and accessible for the full functionality of the application.

---

# Gallery Backend

## Overview
The **Gallery Backend** is a robust server-side application designed to handle image uploads, storage, and retrieval for the Gallery application. It provides secure and efficient APIs to manage media files, ensuring seamless integration with the frontend.

## Tech Stack
- **Node.js**: JavaScript runtime environment for building scalable network applications.
- **Express.js**: Web framework for Node.js, facilitating the creation of robust APIs.
- **MongoDB**: NoSQL database for storing image metadata and user information.
- **Multer**: Middleware for handling multipart/form-data, primarily used for uploading files.

## Features
- **Secure Image Uploads**: Validates and processes user-uploaded images securely.
- **Efficient Storage**: Manages image metadata in MongoDB and stores image files efficiently.
- **RESTful API Endpoints**: Offers structured endpoints for uploading, retrieving, and managing images.
- **Performance Optimization**: Implements techniques like compression to enhance data retrieval speeds.

## API Endpoints
### Upload an Image
- **Endpoint**: `POST /api/upload`
- **Description**: Uploads a new image to the gallery.
- **Request Body**: Form-data containing the image file.
- **Response**:
  - `201 Created`: Returns the URL of the uploaded image and a success status.
  - `400 Bad Request`: If the file is missing or invalid.

### Get All Images
- **Endpoint**: `GET /api/images`
- **Description**: Retrieves a list of all uploaded images.
- **Response**:
  - `200 OK`: Returns an array of image metadata, including `id`, `imageURL`, and `uploadedAt`.

### Delete an Image
- **Endpoint**: `DELETE /api/image/:id`
- **Description**: Deletes an image by its unique identifier.
- **Response**:
  - `200 OK`: Confirmation message indicating successful deletion.
  - `404 Not Found`: If the image with the specified `id` does not exist.

## Installation & Setup
### Install Dependencies:
```bash
npm install
```

### Set Up Environment Variables:
Create a `.env` file in the root directory and configure the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### Start the Server:
```bash
npm start
```
The server will run on `http://localhost:5000`.

## Contributing
Contributions are welcome! If you have suggestions or encounter issues, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

**Note**: Ensure that the MongoDB database is running and accessible for the backend to function correctly.
