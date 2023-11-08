# ShowGoogleReviews.jsx

This project uses React.js to display Google reviews for a specific location using the Google Places API. It is set up with Vite.js for quick starts and efficient development.

## Description

The `GoogleReviews.jsx` file is the main component that uses the Google Places API to fetch and display reviews for a specific location. For instance, we are using the place ID for the Eiffel Tower in Paris, France.

![show_google_reviews](https://github.com/BabylooPro/ShowGoogleReviews.jsx/assets/35376790/cea99485-78cc-47af-b256-3578d4b32c8d)

## Features of GoogleReviews.jsx

- Fetches and displays Google reviews for a specific location.
- Shows the author's name, rating, and text of each review.
- Displays user profile pictures and photos associated with each review.

## Features of AdvancedGoogleReviews.jsx

- Displays the name of the location along with the corresponding reviews.
- Manages request errors and HTTP status codes with specific error messages.
- Offers a test review simulation for development purposes without the need for a place ID.
- Allows for the simulation of reviews using static data when reviews are not available or in the absence of a valid place ID.
- Supports handling reviews in multiple languages through the integration of the `language` option.
- Includes a referrer policy for images to enhance user privacy.
- Provides additional details about reviews such as the original language, the review text, and the relative time description.
- [In Development] Manages translated reviews and offers options for sorting reviews.


## Configuration

1. **Vite.js**:
    - Make sure you have [Vite.js](https://vitejs.dev/) installed on your machine.
    - You can create a new Vite project with React by running the following command:
        ```bash
        npm init vite@latest
        ```
    - Follow the prompts and select `react` as the project template.

2. **Google Maps API**:
    - Go to the [Google Cloud Console](https://console.cloud.google.com/), create a new project, and enable the Google Maps JavaScript API and Places API.
    - Create a new API key and take note of it; you will need it to configure your project.

3. **PlaceID**:
    - To obtain a place ID, visit the [Google documentation](https://developers.google.com/maps/documentation/places/web-service/place-id) that explains how to find or generate the place ID for reviews.

## Installation

1. Clone this repository onto your local machine.
2. Install the dependencies by running the following command in the project directory:
    ```bash
    npm install
    ```
3. Open the `GoogleReviews.jsx` or `AdvancedGoogleReviews.jsx` file and replace `YOUR_API_KEY` with your Google Maps API key.
4. Replace the place ID with the ID of the location you want to fetch reviews for.

## Usage

1. **New Component Choice Script**
   A new feature has been added to allow developers to choose between the standard `GoogleReviews` component and the advanced `AdvancedGoogleReviews` version before starting the development server. To do this, run:
    ```bash
    npm run dev
    ```
   And follow the instructions in the terminal to select the component you want to use.

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Notice

- Do not forget to update `YOUR_API_KEY` with your actual API key and adjust the instructions as necessary to match the exact setup of your project.

- Please be aware that access to review images may be restricted and result in 403 (Forbidden) errors. It may be necessary to check your Google API settings and ensure that all necessary permissions are properly configured.

## Support

For any questions or issues, feel free to open an issue on GitHub or contact Google support.
