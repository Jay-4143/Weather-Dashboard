# Weather Dashboard

A simple Vue.js application to search and view weather details, featuring current weather and a 5-day forecast.

## Features
- **City Search**: View current weather (Temperature, Condition, Humidity, Wind).
- **5-Day Forecast**: View min/max temperatures and conditions for the next 5 days.
- **State Management**: Powered by Pinia.
- **Premium UI**: Glassmorphism design with responsive layout.
- **Unit Tests**: comprehensive unit and component tests using Vitest.

## SreenShot

![Dashboard Page](https://github.com/Jay-4143/Weather-Dashboard/blob/544daf4e951dc499ff414df464b713d0e9c5094e/assets/Screenshot%20(1).png)
## Setup Instructions

1.  **Install Dependencies**:
    ```sh
    npm install
    ```

2.  **Run Development Server**:
    ```sh
    npm run dev
    ```

3.  **Run Tests**:
    ```sh
    npm run test:unit
    ```

## Technologies
- Vue 3 (Composition API)
- Vite
- Pinia (State Management)
- Axios (API Requests)
- Vitest (Testing)
- Vanilla CSS (Variables, Flexbox, Grid)

## API Notes
The application uses mock endpoints provided in the assignment requirements. The search function simulates a fetch but returns the static mock data as per the provided JSONBin URLs.
