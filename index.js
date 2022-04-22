// const userObj = require ('./user')
// console.log(userObj.user)
// userObj.sayHello()

const http = require ('http')

const server = http.createServer(
    (req,res) => {
console.log(req.url)

res.write('<h1>hello from NodeJs</h1>')
res.write('<h2>hello from NodeJs</h2>')
res.write('<h3>hello from NodeJs</h3>')
res.end(`
<div style="background:red; width:200px; height:200px">
<h1>Test nodeJs</h1>
</div>
`)
    }
)

server.listen(3000, ()=>{
    console.log('Server was runing...')
})