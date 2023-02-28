
/**
Homework
Login functionality with the usage of the package colors
Create a function that accepts two params: username & password
If user exists in users array print the message : "User is logged in" in green text
If not: "User not found" in red text and yellow background */

console.log('Hello')

let colors = require('colors');

let users = [
    {role: "admin", fullname: "Marko Carls", username: "User01", password: "123qwe"},
    {role: "client", fullName: "Alek Alexy", username: "User02", password: "zxczxc"}
];

logIn=(UserName,Password)=>{
    let flag=false;
    for (let i=0; i<users.length; i++){
        if(UserName !== users[i].username){
            flag = false;
        }else{
            flag = true;
            break
        }
    }
    flag == true ? console.log(`${UserName} is logged in`.green)  : console.log(`${UserName} isnt found`.red.bgYellow) 
}

    
logIn('User02')
logIn('User01')
logIn('Marko')
logIn('User01')
logIn('Asd')
logIn('User02')
