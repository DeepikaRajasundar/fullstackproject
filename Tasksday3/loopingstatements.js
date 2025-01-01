array=[10,20,30,[40.5,50.6],"a","KEC",true]
console.log(array);


//1.for ..in loop
for (var a in array){
    console.log(a);
    console.log("Element present in index",a,"is",array[a]);
} 

//2.for..of loop
for(var b of array)
{
    console.log(b);
}

//3.for..each 1st variable always value 2nd variable always index value
array.forEach((element,index)=>{
    console.log("Element is",element, "and","Index is",index)
})

array.forEach((index,element)=>{
    console.log("Index is",index, "and","Element is",element,)
})

objtype1={
    "Firstname":"deeps",
    "Lastname":"speed",
    "age":20
}
console.log(objtype1)
console.log(objtype1.age)

for ( let key in objtype1) {
    console.log("Key is", key, "and Value is", objtype1[key]);
}


Object.entries(objtype1).forEach(([key, value]) => {
    console.log("Key is", key, "and Value is", value);
});

for (const [key, value] of Object.entries(objtype1)) {
    console.log("Key is", key, "and Value is", value);
}


