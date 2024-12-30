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

//3.for..each
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
for(key in objtype1){
    value=objtype1[key];
    console.log(key,value);
}

Object.keys(objtype1).forEach(key=>{
    const vaue=objtype1[key];
    console.log(key,value)
})