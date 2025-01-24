let a;

console.log(a);

function F() {
  console.log(a);
  a = 3;
}

a = 2;

F();