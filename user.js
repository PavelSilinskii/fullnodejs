const user= {
    name:'Irina',
    age:30
}

module.exports = {
    user:user,
    sayHello(){
        console.log('Hello ', user.name)
    }
}