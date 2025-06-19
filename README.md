# DOCX to PDF Converter

## Description

This project is a full stack application that enables users to upload `.docx` files and convert them into `.pdf` documents. It leverages Flask as a backend API to handle document conversion, and React with Tailwind CSS for the frontend interface. The application runs in a containerized environment using Docker, providing an efficient and portable development experience.

### Features

- Upload `.docx` files via an intuitive web interface
- Convert documents to `.pdf` format
- Download converted files instantly
- Loading state and form validation feedback
- Fully containerized with Docker and Docker Compose
- Responsive UI powered by React and Tailwind CSS

## Built With

![Python][python-badge]
![Flask][flask-badge]

![JavaScript][javascript-badge]
![React][react-badge]
![Tailwind CSS][tailwindcss-badge]

## Visuals

// TODO

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository**

   ```
   git clone https://github.com/cristianscheid/docx-to-pdf-converter.git
   cd docx-to-pdf
   ```

2. **Set up environment**

   - Build the containers:

     ```
     docker compose build
     ```

   - Start the application:

     ```
     docker compose up -d
     ```

## Usage

Once the application is running, you can access it at `http://localhost:3000`.

## License

Distributed under the MIT License. See LICENSE.txt for more information.

<!-- Badges for 'Built With' section -->

[python-badge]: https://img.shields.io/badge/Python-3.12-gray?style=for-the-badge&logo=python&logoColor=white
[flask-badge]: https://img.shields.io/badge/Flask-3.1-gray?style=for-the-badge&logo=flask&logoColor=white
[javascript-badge]: https://img.shields.io/badge/JavaScript-ES6-gray?style=for-the-badge&logo=javascript&logoColor=white
[react-badge]: https://img.shields.io/badge/React-19.1-gray?style=for-the-badge&logo=react&logoColor=white
[tailwindcss-badge]: https://img.shields.io/badge/Tailwind%20CSS-4.1-gray?style=for-the-badge&logo=tailwindcss&logoColor=white
