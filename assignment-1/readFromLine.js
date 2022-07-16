const readline = require('readline')
let que= readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

que.question(('whats your name'), ans=>{
    console.log(`hello ${ans}`);
    que.close()
})