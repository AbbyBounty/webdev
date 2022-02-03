

// const cars = [ "i20", "XUV500" , "POLO" , "Jaaz" ]


//object
const car= { 
    name : "i20" , 
    color: "gray" ,
    price: 7.2
}


// array of objects 
const cars=[
    {   name : "i20" , color: "gray" ,  price: 7.2},
    {   name : "XUV500" , color: "black" ,  price: 18},
    {   name : "POLO" , color: "red" ,  price: 8},
    {   name : "Jaaz" , color: "brown" ,  price: 6}
]


console.log("🚀 ~ file: day16_1.js ~ line 6 ~ car", cars)

// map , reduce , filter 

// double the price of each car
const double=cars.map(elem=>elem.price*2)
console.log(double)