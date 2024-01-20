const { Users } = require("../../models");
const bcrypt = require('bcrypt');
const { generateAccessToken } = require("../generateAccessToken/generateAccessToken")
const { verifySendEmail } = require('../verifySendEmail/verifySendEmail')
// const jwt = require('jsonwebtoken');
// const SECRET = process.env.T_SECRET;
// const fs = require('fs')
async function register(req, res){
    const {name,surname,email,password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);
    const newUser = {
        name,
        surname,
        email,
        password: hashed_password,
    };        
    const user = await Users.create(newUser);
    const token = generateAccessToken(user.email);
    verifySendEmail(user.email, token);
    return res.json({registered:"ok", message:"We have sent an email to your email for verification", token})
};
async function login (req, res){
    try{
        const { email, password } = req.body;
        const user = await Users.findOne({
            where: {
            email
            },
        })
        const validPassword = await bcrypt.compare(password, user.password);
        if (email === user.email && validPassword){
            const token = generateAccessToken(user.email);
            res.json({
                login: "ok", 
                jwt:token, 
                user_id:user.id, 
                user:user.name, 
                surname:user.surname, 
                email:user.email,
            });
        } else {
            return res.json("Invalid password");
        }
    } catch {
        return res.json("user is not found");
    }
};
module.exports = {register, login}