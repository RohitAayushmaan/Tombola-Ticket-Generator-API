# Unibit-Task-Tambula

##### Develop a Login API and Tambula ticket creation API to generate unique ticket IDs for a variable number of tickets. Additionally, create a Tambula ticket fetch API to retrieve all ticket lists linked to their respective IDs with pagination support.

### To run a Node.js API project with the given specifications, you can follow these steps:

1. Clone the Git repository:
   - Copy the repository's URL: https://github.com/RohitAayushmaan/Unibit-Task-Tambula.git
   - Open your terminal or command prompt.
   - Navigate to the directory where you want to clone the project.
   - Run the command: git clone https://github.com/RohitAayushmaan/Unibit-Task-Tambula.git
     
2. Install Dependencies:
    - Navigate into the cloned project directory using cd <directory_name>
    - Run the command: npm install
      
3. Create a .env file:
   - This file will store your environment variable:
     ```
     PORT=8000
     MONGODB_URI=<your_mongodb_uri>
     JWT_SECRET=<your_jwt_secret>
     ```
4. Start the server:
   ```
   npm start
   ```
5. You can now access the following routes:
   - User registration: http://localhost:8000/register
   - User login: http://localhost:8000/login
   - Create a Tambula ticket: http://localhost:8000/createTicket
   - Fetch tickets: http://localhost:8000/tickets/<userid>

###### Note: The above steps assume that you have Node.js, npm (Node Package Manager), and MongoDB installed and properly configured on your system.




 
