# 3D NIfTI Image Viewer

This project is a single-page React application that loads and visualizes 3D NIfTI images using the NIfTI-Reader-JS library.

## Features

- Upload a NIfTI file from your local machine.
- Display the Axial Image of the 3D NIfTI file.
- Navigate through the slices of the 3D image using a slider.

## Requirements

- Node.js
- npm (Node package manager)

## Getting Started

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/nifti-viewer.git
   cd nifti-viewer
   ```

2. Install the necessary packages:

   ```sh
   npm install
   ```

3. Install and configure Tailwind CSS:

   ```sh
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. Configure `tailwind.config.js`:

   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

5. Add Tailwind CSS directives to `src/index.css`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. Import `index.css` in `src/index.js`:

   ```javascript
   import "./index.css";
   ```

### Running the Application

1. Start the development server:

   ```sh
   npm start
   ```

2. Open your web browser and go to `http://localhost:3000`.

## Usage

1. Click on the file upload button to select a NIfTI file from your local machine.
2. Use the slider to navigate through the slices of the 3D image.
3. The selected slice will be displayed on the canvas.

## File Structure

src/
components/
FileUpload.js # Component for handling file uploads
ImageSlider.js # Component for the slider navigation
ImageViewer.js # Component for displaying the NIfTI image slices
App.js # Main component that manages state and handles file uploads
index.js # Entry point of the React application
index.css # Tailwind CSS configuration

## Libraries Used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [NIfTI-Reader-JS](https://github.com/rii-mango/NIFTI-Reader-JS) - Library for reading NIfTI files
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This project utilizes the NIfTI-Reader-JS library for handling NIfTI files.
- Thanks to the developers of React and Tailwind CSS for providing great tools for building this application.

## Example NIfTI File

You can download an example NIfTI file to test the application from [this link](https://drive.google.com/file/d/1DkZVtfqThCS2CkRwh2fziYYOl8rlA4iH/view?usp=drive_link).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
