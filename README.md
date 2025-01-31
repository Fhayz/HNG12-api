# HNG12 Backend Task

This simple API returns my registered email address, the current datetime in ISO 8601 format, and the GitHub URL of the project's codebase. It is built using 
**Javascript** with the **Express** framework and deployed to a publicly accessible end point.

## API Documentation

### Endpoint
- **GET** `/`

### Response Format
```json
{
    "email": "your-email@example.com",
    "current_datetime": "2025-01-30T09:30:00Z",
    "github_url": "https://github.com/yourusername/your-repo"
}
```
##Example Usage
curl https://hng12-api-je29.onrender.com

#Clone the repository:
```
git clone https://github.com/Fhayz/HNG12-api/tree/master
```
#Install Dependencies:
```
npm install
```

#Start the server:
```
node index.js
```
#Test the API
HTTP://localhost:3000/

Deployment
The API is deployed using Render. Follow these steps to deploy your version:

1. Sign up for a free account on Render.
2. Create a new Web Service and connect it to your GitHub repository.
3. Configure the service:
     Build Command: Leave this blank.
     Start Command: node index.js.
4. Deploy the service.

#AUTHOR
**Name** : Favour Augustine
**Email**: Favourdozie@gmail.com
**GitHub**: Fhayz
