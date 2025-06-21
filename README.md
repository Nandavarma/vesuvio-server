# 🍽️ Vesuvio Server

This is the backend for the **Vesuvio** food ordering web application. It serves restaurant data to the frontend via a REST API.

## 🚀 Live API

The backend is deployed on [Render](https://render.com) and can be accessed here:

https://vesuvio-server.onrender.com/api/restaurants

## 📁 Project Structure
```page
vesuvio-server/
├── index.js # Entry point of the server
├── data/ # Static JSON data used by the API
├── routes/ # API route handlers
├── middleware/ # CORS configuration
├── package.json # Dependencies and scripts
└── README.md
```
## 🔧 Local Development

### Requirements:
- Node.js ≥ 16

### Setup:

```bash
# Clone the repository
git clone https://github.com/Nandavarma/vesuvio-server.git
cd vesuvio-server

# Install dependencies
npm install

# Start the server
npm start
The API will start at http://localhost:3000.
```
## 🛡️ CORS Policy
Only requests from the following origin are allowed:

arduino
https://vesuvio-in.vercel.app
## 📫 Contact
Have questions or suggestions?

📧 nandavarma84@gmail.com

⭐️ Star this repo if you found it helpful!
