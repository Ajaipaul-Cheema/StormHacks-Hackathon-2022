const db = require('../db')
const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

let router = express.Router();

router.use(bodyParser.json())

const accessTokenSecret = 'lol'

router
    .route("/login")
    .post(async (req, res) => {
        const { username, password } = await req.body;
        if (username == null || password == null) res.sendStatus(500)
        try {
            const dbuser = await db.query('select username, password from users where username=$1', [username])
            console.debug(dbuser)
            if (dbuser.rowCount < 1) {
                res.sendStatus(404)
            }
            if (dbuser.rows[0].password == password) {
                const token = jwt.sign({ username: dbuser.rows[0].username }, accessTokenSecret)
                res.json({ token })
            } else {
                res.sendStatus(401)
            }
        } catch (err) {
            console.log(err)
        }
    })

router
    .route("/signup")
    .post(async (req, res) => {
        const { email, username, password } = req.body;
        if (email == null || username == null || password == null)
            res.sendStatus(400)

        let checkUsername = await db.query("select * from users where username=$1", [username])
        if (checkUsername.rowCount > 0) return res.sendStatus(409)

        let checkEmail = await db.query("select * from users where email=$1", [email])
        if (checkEmail.rowCount > 0) return res.sendStatus(409)

        const query = {
            text: 'insert into users (email, username, password) values ($1, $2, $3)',
            values: [email, username, password]
        }

        let addUser = await db.query(query)
        const token = jwt.sign({ username: addUser.rows[0] }, accessTokenSecret)
        return res.sendStatus(201)

    })

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token = authHeader.split(' ')[1]
        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) return res.sendStatus(403)
            next()
        })
    }
    else res.sendStatus(401)
}

module.exports = { router: router, authenticateJWT: authenticateJWT }