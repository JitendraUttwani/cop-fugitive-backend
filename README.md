# Cop Fugitive Backend

This is the backend component of the Cop Fugitive project. It simulates the location of a fugitive and determines if cops find the fugitive based on their city and vehicle selections.

## Features
- Simulates the fugitive's location in one of the cities.
- Handles city and vehicle data.
- Determines if cops successfully captured the fugitive.

## API Endpoints
- `/cities`: Returns the list of cities and their distances.
- `/vehicles`: Returns the list of vehicles with their ranges and counts.
- `/capture`: Determines if the fugitive is captured based on cop selections.

## Assumptions
- The fugitive is randomly located in one of the cities.
- There are three cops, and they must select unique cities.
- The vehicle must have enough range for a round trip.

## Build and Run
1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. The server listens on port 4000 by default.
