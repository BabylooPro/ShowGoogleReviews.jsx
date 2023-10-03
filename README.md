# ShowGoogleReviews.jsx

This project utilizes React.js to display Google reviews of a specific place using the Google Places API. It is set up with Vite.js for fast startup and efficient development.

## Description

The `GoogleReviews.jsx` file is the main component that uses the Google Places API to fetch and display reviews of a specific place. In this example, we are using the place ID of the Eiffel Tower.

![show_google_reviews](https://github.com/BabylooPro/ShowGoogleReviews.jsx/assets/35376790/cea99485-78cc-47af-b256-3578d4b32c8d)

## Configuration

1. **Vite.js**:
    - Ensure you have [Vite.js](https://vitejs.dev/) installed on your machine.
    - You can create a new Vite project with React by executing the following command:
        ```bash
        npm init vite@latest
        ```
    - Follow the prompts and select `react` as the project template.

2. **Google Maps API**:
    - Go to the [Google cloud console](https://console.cloud.google.com/), create a new project and enable the Google Maps JavaScript API and Places API.
    - Create a new API key and note it down, you will need it to configure your project.

## Installation

1. Clone this repository to your local machine.
2. Install the dependencies by executing the following command in the project folder:
    ```bash
    npm install
    ```
3. Open the `GoogleReviews.jsx` file and replace `YOUR_API_KEY` with your Google Maps API key.
4. Replace the place ID with the place ID of the place you want to fetch reviews of.

## Usage

1. Execute the following command to start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and go to `http://localhost:3000` to see the application in action.

## Features

- Fetches and displays Google reviews of a specific place.
- Displays the author's name, rating, and text of each review.
- (Optional) Displays user profile photos and photos associated with each review.

## Notice

- Please note that access to review images might be restricted and cause 403 (Forbidden) errors. It might be necessary to check your Google API settings and ensure all necessary permissions are properly set up.

## Support

For any questions or issues, feel free to open an issue on GitHub or contact Google support.
