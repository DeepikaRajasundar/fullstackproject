//1.assingment operator
a=10
console.log("Assingment operator",a);

//2.unary operator
a++
console.log("Unary operator",a);

//3.Arithmetic operator
console.log("Arithmetic operator",a+5);

//4.Relational operator
console.log("The value of a",a);
if(a<10)
{
    console.log("Relational operator Less than 10")
}
else{
    console.log("Relational operator Greater than 10");
}

//5.Logical operator
console.log("The value of a",a)
if((a!=0)&&(a>=10)){
    console.log("Logical operator True");
}
else{
    console.log("Logical operator False");
}

//6.Bitwise operator
console.log("Bitwise operator",a<<5);

//7.Ternary operator
b=(a!=0)?(a,"not equal to zero"):(a,"is equal to zero");
console.log("Ternary operator",b)