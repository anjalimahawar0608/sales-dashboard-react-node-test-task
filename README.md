
# Sales Dashboard – Full Stack Practical Assignment

A full-stack sales analytics dashboard built using **React, TypeScript, Node.js and Express**, developed as part of a practical assessment task.

This application visualizes sales data from a provided `sales.json` file and allows users to filter and analyze information by state and date range.

---

## 🚀 Live Features Implemented

### ✅ UI – Required Tasks (Completed)

- Dashboard UI created  based on the provided Figma design  
- State selection dropdown populated dynamically from backend API  
- “From” and “To” date dropdowns bound to minimum and maximum order dates  
- Default selection of first available state  
- Data fetching based on selected filters  

### 🎯 UI – Bonus Tasks (Completed)

- Charts and  cards dynamically populated from API  
- Expand and collapse functionality for sidebar navigation  
- Light and Dark theme switching  
- responsive layout for desktop and tablet  
- Entire React application built using TypeScript  
- Custom hooks used to separate logic from UI components  

### ✅ Backend – Required Tasks (Completed)

- API to return list of available states  
- API to return minimum and maximum order dates for a selected state  

### 🎯 Backend – Bonus Tasks (Completed)

- API to return aggregated dashboard data for charts and cards  
- Data processing done using `sales.json` as data source (no database used as per instructions)  
- Backend fully implemented using TypeScript  

---
## Code Comments & Documentation

Extensive inline comments have been added across components, hooks, and services to clearly explain logic, data flow, and implementation decisions for better understanding and maintainability.


## 🛠 Tech Stack

### Frontend
- React  
- TypeScript  
- Material UI  
- ECharts  
- Axios  

### Backend
- Node.js  
- Express  
- TypeScript  

---## Demo Video

Working demo: [Watch Here](https://www.awesomescreenshot.com/video/49218724?key=4f9ec2ab00af94f8977c0d39d4f8e4a3)

## 🔧 Environment Setup

The project uses environment variables to configure API URLs.

### Frontend Environment (.env)

Create a `.env` file inside the `frontend` folder:

```env
REACT_APP_API_BASE_URL=http://localhost:5000/api

######## Run Backend ###########
cd backend
npm install
npm run dev

######## Run Frintend ###########
cd frontend
npm install
npm start


