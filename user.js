const user= {
    name:'Irina',
    age:30
}

module.exports = {
    user:user,
    sayHello(message){
        console.log('Hello ', user.name + message)
    }
}