let a = "guru"
{
    let a = "arun";
    // console.log(a);
}

let actress = {
    name : "emma watson",
    country: "UK"
}

for(let key in actress){
    console.log(key ," ", actress[key]);
    console.log(key ," ", actress.key); //un defined
}