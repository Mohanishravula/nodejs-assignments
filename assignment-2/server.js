const fs = require('fs')
const http = require('http')

fs.writeFileSync(
  './index.html',
  '<h1>Hello World<h1/> <p> Welcome! Rahul<p/>'
)
const content = fs.readFileSync('./index.html', 'utf-8')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write(content)
    res.end() // ending the srver
  }
})
server.listen(8000, ()=>{
  console.log("Server started at 8000")
})