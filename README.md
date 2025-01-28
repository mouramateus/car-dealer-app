# Car Dealer App

## Overview
The **Car Dealer App** is a Next.js application that allows users to filter vehicles by make and model year. Users can select a vehicle make and year on the home page, and then view a dynamically generated list of vehicle models on the results page. The app is styled with Tailwind CSS and uses React Suspense for smooth loading experiences.

---

## Features
- **Dynamic Filtering**: Filter vehicles by make and model year.
- **Responsive Design**: Fully responsive UI using Tailwind CSS.
- **API Integration**: Fetches data from the [VPIC API](https://vpic.nhtsa.dot.gov/api/?ref=public_apis).
- **Dynamic Routing**: Uses Next.js App Router for dynamic route handling.
- **Error Handling**: Displays appropriate error messages for data fetching issues.

---

## Installation and Setup

### Prerequisites
- Node.js (v16 or later recommended)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd car-dealer-app
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open the app in your browser at:
   ```
   http://localhost:3000
   ```

---

## Environment Variables

Create a `.env.local` file in the root of the project to store environment variables. Example:
```env
NEXT_PUBLIC_VPIC_API=https://vpic.nhtsa.dot.gov/api
```

---

## Project Structure

```
/car-dealer-app
|├── src
|   ├── app
|   |   ├── result
|   |   |   ├── [makeId]
|   |   |   |   ├── [year]
|   |   |   |   |   └── page.js  # Result page
|   |   └── page.js               # Home page
|   ├── styles                   # Tailwind CSS styles
|   └── utils                    # Helper functions
|├── public                      # Static assets
|└── .env.local                  # Environment variables
```

---

## APIs Used

### Vehicle Makes API
- **Endpoint**: `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`
- **Description**: Fetches a list of vehicle makes for the type "car."

### Vehicle Models API
- **Endpoint**: `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json`
- **Description**: Fetches vehicle models based on make ID and year.

---

## Running the Build

To create a production-ready build:
```bash
npm run build
# or
yarn build
```

To preview the production build:
```bash
npm run start
# or
yarn start
```

---

## Screenshots

### Home Page
The user can select a vehicle make and model year from dropdown menus.

### Results Page
Displays a list of vehicle models dynamically based on the selected filters.

---

## Known Issues
- Ensure API endpoints are reachable.
- Handle edge cases for empty API responses or invalid inputs.

---

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License.

