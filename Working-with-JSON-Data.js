/*
    The json looks like
    products = [
    {
        "id": 1,
        "name": "Dell Inspiron",
        "category": "Laptop",
        "price" : 50000,
        "available": true
    }
    ]
 */

    function parseJSONData(jsonString) {
        return JSON.parse(jsonString);
    }
    
    function addPdt(products, newProduct) {
        const parsedProduct = JSON.parse(newProduct);
        products.push(parsedProduct);
    }
    
    function changePdtPrice(products, productId, newPrice) {
        const product = products.find(p => p.id === productId);
        if (product) {
            product.price = newPrice;
        } else {
            console.log("Product not found.");
        }
    }
    
    function getAvailablePdts(products) {
        return products.filter(product => product.available);
    }
    
    function getPdtsByCategory(products, category) {
        return products.filter(product => product.category === category);
    }
    
    const jsonData = `[
        {
            "id":1,
            "name":"Laptop",
            "category":"Electronics",
            "price":12000,
            "available":true
        },
        {
            "id":2,
            "name":"Headphones",
            "category":"Electronics",
            "price":500,
            "available":false
        },
        {
            "id":3,
            "name":"Room Heater",
            "category":"Home Appliances",
            "price":8000,
            "available":true
        }]`;
    
    // 1.
    const products = parseJSONData(jsonData);
    console.log(products);  
    
    const newProduct = 
        `{
            "id":4,
            "name":"Smartwatch",
            "category":"Wearable Technology",
            "price":1500,
            "available":true
        }`;
    
    // 2.
    addPdt(products, newProduct);
    console.log(products);
    
    // 3.
    changePdtPrice(products, 1, 1300);
    console.log(products);  
    
    // 4.
    const availableProducts = getAvailablePdts(products);
    console.log(availableProducts);
    
    // 5.
    const filteredProducts = getPdtsByCategory(products, "Electronics");
    console.log(filteredProducts);  