const http=require('http')
const port=process.env.PORT ||8080
const server=http.createServer(function(req,res){
    res.status=200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1>hELOORE BRO</h1>");
    console.log(req.url)
    if(req.url=="/test")
    {
        res.status=200;
        return res.end("<h1>hELOORE BRO 2</h1>");
    }
    else
    {
        res.status=404;
        return res.end("<h1>hELOORE BRO 2 nhi hai</h1>");
    }
})
server.listen(port, function(){
    console.log("listening on port " + port);

})
