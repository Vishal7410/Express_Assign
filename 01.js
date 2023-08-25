
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.writeHead(200,{'Context-Type': 'text/plain'});
        res.end('wlecome to men & Women Dummy Data');

    }

    else if (req.url ==='/men')
    {

        const menProducts = generateDummyProduct(10,'Men');
        res.writeHead(200,{'Context-Type': 'application/json'});
        res.end(JSON.stringify(menProducts));
    }
    else if (req.url === '/women')
    {
        const womenProducts =  generateDummyProduct(10,'Women');
        res.writeHead(200,{'Context-Type': 'application/json'});
        res.end(JSON.stringify(womenProducts));
    }

    else {
        res.writeHead(404,{'Content-Type': 'text/plain'});
        res.end('page not found')
    }
});

server.listen(3011, () => {
    console.log('Server is listening on port 3011');
});

 function generateDummyProduct(count, gender) {
    const products = [];
    for (let i = 1; i<= count; i++){
        products.push({
            id : i,
            name: `${gender} product ${i}`,
            price: Math.floor(Math.random()* 100)+10,
            gender : gender,

        });
    }

    return products;
    
 }