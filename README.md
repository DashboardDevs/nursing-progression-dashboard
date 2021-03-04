# nursing-progression-dashboard
To run the database server locally you need to:
* Install a MySQL server and client (I use MySQL Community Server and MySQL Workbench)
* Make sure the MySQL server is running (In windows I had to go into Services to start it). The server assumes that MySQL is running on localhost:3306 and the root user has no password. These should be the default settings.
* Run the sql scripts found in /server/sql folder using the MySQL client to create and populate the database(run populate_student_milestone.sql last because it uses foreign keys)
* Run "npm install" in the server directory to install dependencies
* Run "node server.js" to start the server
* If the server and database are running correctly, going to localhost:3001/student in a browser should return an array of jsons object filled with mock student data

To run the client run "npm start" in the client directory  
Both the client and the server need to be running for the app to fetch/update data from the database