//function without arguments but without return type
hello=()=>{
    console.log("Hello");
}
hello()

//function without arguments but with return type
hi=()=>'hi'
console.log(hi());

//function with arguments but without return type
add=(a,b)=>{
    console.log("Sum",a+b);
}
add(6,8);

//function with arguments but with return type
addition=(a,b)=>a+b;
console.log(addition(8,9));

//function without parameters with no return type
const showMessage = () => {
    console.log("No parameters, no return");
};
showMessage();

//function without parameters with return type
const getNumber = () => 42;
console.log(getNumber());

//function with parameters with no return type
const greet = (name, age) => {
    console.log(`Hello ${name}, you are ${age} years old.`);
};
greet("Deepika", 21);

//
//function with parameters with return type
const sum = (a, b) => a + b;
console.log(sum(5, 10));
//a,b parameters 5,10 arguments(values)
