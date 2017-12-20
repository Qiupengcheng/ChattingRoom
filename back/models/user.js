var base = require('./BaseModel');

async function getUser(){
    let users = await base.query('SELECT * FROM users')
    console.log(users,' users');
    return users
}


module.exports = {
    getUser
}