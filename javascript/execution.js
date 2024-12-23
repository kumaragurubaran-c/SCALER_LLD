let fruits = "orange";
console.log(fruits); // orange
{
    let fruits;
    console.log(fruits); // undefined
    fruits = "apple";
    {
        console.log(fruits); //apple
        let fruits;
    }
    console.log(fruits);// apple
}
console.log(fruits);// orange