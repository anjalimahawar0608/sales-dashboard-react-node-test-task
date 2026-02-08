# Sales Dashboard Backend

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install

```

## API Endpoints

### 1. Get All States
- **Endpoint:** `GET /api/sales/states`
- **Description:** Returns a list of all available states
- **Response:** Array of state objects

### 2. Get Min/Max Dates
- **Endpoint:** `GET /api/sales/min-max-dates`
- **Query Parameters:**
  - `state` (required): State name
- **Description:** Returns the minimum and maximum dates available for a specific state
- **Response:** Object with `minDate` and `maxDate` properties

### 3. Get Dashboard Data
- **Endpoint:** `GET /api/sales/dashboard-data`
- **Query Parameters:**
  - `state` (required): State name
  - `from` (required): Start date (YYYY-MM-DD format)
  - `to` (required): End date (YYYY-MM-DD format)
- **Description:** Returns aggregated sales data for the specified filters
- **Response:** Dashboard data with sales metrics and trends

## Running the Server

Development mode:
```bash
npm run dev
```

## Technologies Used
- Express.js - Web framework
- TypeScript - Type safety
- Node.js - Runtime environment

### Data Source

This project uses `sales.json` as the data source for backend APIs as per the task instructions.  
No database is used in this implementation.