import mysql from "mysql2"

export const db = mysql.createConnection({
  host:"localhost",
  user:"abhi",
  password: "dandacon",
  database:"blog",
  port: 33061
})


db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

