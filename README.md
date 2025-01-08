# 📌 Weather App

A simple weather app that fetches real-time weather data using the **OpenWeather API**. Built with **Node.js, Express.js, JavaScript, HTML, and CSS**, this app allows users to check the temperature and weather conditions of any city.

## 📸 Screenshot

![Weather App Screenshot](screenshots/image.png)
![Example 1](screenshots/image-1.png)
![Example 2](screenshots/image-2.png)

## :rocket: Features
&nbsp;&nbsp;&nbsp;&nbsp;&#9989; Users can enter a city name to get **real-time weather data**.  
&nbsp;&nbsp;&nbsp;&nbsp;&#9989; Displays **temperature, weather conditions, and an icon**.  
&nbsp;&nbsp;&nbsp;&nbsp;&#9989; Uses the **OpenWeatherMap API** to fetch data.  
&nbsp;&nbsp;&nbsp;&nbsp;&#9989; **Responsive design** (mobile-friendly).  
&nbsp;&nbsp;&nbsp;&nbsp;&#9989; **Express.js backend** to handle API requests securely.   

## 🛠 Tech Stack
* **Frontend:** HTML, CSS, JavaScript  
* **Backend:** Node.js, Express.js  
* **API:** OpenWeatherMap API
* **Tools:** Fetch API (AJAX), Nodemon, Axios  

## 📁 Project Structure

```plaintext
weather-app
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── server.js
├── .env
├── package.json
├── README.md
└── .gitignore
```

## 📖 How to Run the Project

### 1️⃣ Clone the Repository
```plaintext
git clone https://github.com/jbloch100/weather-app.git
cd weather-app
```

### 2️⃣ Install Dependencies
```plaintext
npm install
```

### 3️⃣ Set Up Environment Variables
1. Create a .env file in the root folder.  
2. Add your **OpenWeather API Key**:  

```plaintext
OPENWEATHER_API_KEY=your_api_key_here
```