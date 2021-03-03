*To run the database server locally you need to have MySQL installed and running
*Run the sql scripts in the sql folder (run populate_student_milestone.sql last because it relies on foreign keys)
*The server assumes the MySQL is running on localhost on the default port 3306 and the root user has no password (you can edit dbconfig.js if this is not the case)
*Run "npm -i" to install dependencies
*Run "node server.js" to start the server
*If the server and database are running correctly, going to localhost:3001/student in a browser should return an array of json object filled with mock student data