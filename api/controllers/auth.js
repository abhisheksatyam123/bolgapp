import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req,res) => {
    console.log("Received registration request:", req.body);
    const q = "SELECT * FROM users WHERE email = ? and username =?"
    db.query(q,[req.body.email,req.body.name],(err,data)=>{
       if (err) {
            console.log("Error while checking if user exists:", err); // Log the error
            return res.json(err);
        } 
        if(data.length) return res.status(409).json("User alredy exists!");
        console.log("Query result:", data);

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);

        const q = "INSERT INTO users(`username`,`email`,`image`,`password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            "image1",
            hash,
        ]
        console.log("Inserting user into the database with query:", q, "Values:", values);
        db.query(q,[values],(err,data) => {
            if (err) {
                console.log("Error while inserting user:", err);
                return res.json(err);
            }
            console.log("User registered successfully:", data);
            return res.status(200).json("User has been created.");
        });
    });
};

export const login = (req,res) => {

}

export const logout = (req,res) => {

}
