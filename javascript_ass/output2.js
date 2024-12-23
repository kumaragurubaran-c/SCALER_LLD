let a = 2;
{
    let a = 3;
    {
        let a = 4
        {
            console.log(a);
            let a = 5;
        }
        console.log(a);
    }
    console.log(a);
}
console.log(a);
