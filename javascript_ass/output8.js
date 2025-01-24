function modifier(a, b) {
    a[0] = 10;
    b[0] = 20;
}

let p = [1, 2, 3];
let q = [4, 5, 6];
modifier(p, q)
console.log(p, q);