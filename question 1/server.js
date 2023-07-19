
const http = require('http');

const product_men = [
    {
        "id":"1",
        "name":"men's t-shirt",
        "brand":"abc",
        "size":"m",
        "price":20.22,
        "color":"red",
        "categorg":"clothings"
    },
     {
        "id":"2",
        "name":"men's t-shirt",
        "brand":"qqq",
        "size":"s",
        "price":25.22,
        "color":"yellow",
        "categorg":"clothings"
    },
     {
        "id":"3",
        "name":"men's t-shirt",
        "brand":"ppp",
        "size":"m",
        "price":45,
        "color":"black",
        "categorg":"clothings"
    },
     {
        "id":"4",
        "name":"men's t-shirt",
        "brand":"zara",
        "size":"m",
        "price":50,
        "color":"white",
        "categorg":"clothings"
    },
     {
        "id":"5",
        "name":"men's shirt",
        "brand":"abc",
        "size":"m",
        "price":50.22,
        "color":"blue",
        "categorg":"clothings"
    },
     {
        "id":"6",
        "name":"men's shirt",
        "brand":"abc",
        "size":"l",
        "price":80.22,
        "color":"grey",
        "categorg":"clothings"
    },
     {
        "id":"7",
        "name":"men's t-shirt",
        "brand":"abc",
        "size":"m",
        "price":20.22,
        "color":"red",
        "categorg":"clothings"
    },
     {
        "id":"8",
        "name":"men's t-shirt",
        "brand":"abc",
        "size":"m",
        "price":20.22,
        "color":"red",
        "categorg":"clothings"
    }, {
        "id":"9",
        "name":"men's t-shirt",
        "brand":"abc",
        "size":"m",
        "price":20.22,
        "color":"red",
        "categorg":"clothings"
    },{
        "id":"10",
        "name":"men's t-shirt",
        "brand":"abc",
        "size":"m",
        "price":20.22,
        "color":"red",
        "categorg":"clothings"
    }
];
const product_women = [
    {
        "id":"1",
        "name":"women's t-shirt",
        "brand":"abc",
        "size":"m",
        "price":20.22,
        "color":"red",
        "categorg":"clothings"
    },
     {
        "id":"2",
        "name":"women's t-shirt",
        "brand":"qqq",
        "size":"s",
        "price":25.22,
        "color":"yellow",
        "categorg":"clothings"
    },
     {
        "id":"3",
        "name":"women's t-shirt",
        "brand":"ppp",
        "size":"m",
        "price":45,
        "color":"black",
        "categorg":"clothings"
    },
     {
        "id":"4",
        "name":"women's t-shirt",
        "brand":"zara",
        "size":"m",
        "price":50,
        "color":"white",
        "categorg":"clothings"
    },
     {
        "id":"5",
        "name":"women's shirt",
        "brand":"abc",
        "size":"m",
        "price":50.22,
        "color":"blue",
        "categorg":"clothings"
    },
     {
        "id":"6",
        "name":"women's shirt",
        "brand":"abc",
        "size":"l",
        "price":80.22,
        "color":"grey",
        "categorg":"clothings"
    },
     {
        "id":"7",
        "name":"women's t-shirt",
        "brand":"abc",
        "size":"m",
        "price":20.22,
        "color":"red",
        "categorg":"clothings"
    },
     {
        "id":"8",
        "name":"women's t-shirt",
        "brand":"abc",
        "size":"m",
        "price":20.22,
        "color":"red",
        "categorg":"clothings"
    }, {
        "id":"9",
        "name":"women's t-shirt",
        "brand":"abc",
        "size":"m",
        "price":20.22,
        "color":"red",
        "categorg":"clothings"
    },{
        "id":"10",
        "name":"women's t-shirt",
        "brand":"abc",
        "size":"m",
        "price":20.22,
        "color":"red",
        "categorg":"clothings"
    }
];

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('<h1>Welcome to Men & Women Dummy Data</h1>');
    }else if(req.url == '/men'){
        res.end(JSON.stringify(product_men));
    }else if(req.url == '/women'){
        res.end(JSON.stringify(product_women));
    }else if(req.url == '/other'){
        res.write("PAGE NOT FOUND !");
    }
    res.end();
})

server.listen(3000);
console.log("HTTP is running on PORT no. 3000");
