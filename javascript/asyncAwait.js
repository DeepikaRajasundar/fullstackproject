async function funName(){
    console.log ("hello")
}
arrowFunName=async()=>{
    console.log("KEC")
}
funName()
arrowFunName()


async function funnName(){
    return"hello"
}
arrowFunnName=async()=>{
    return"KEC"
}
console.log(funnName())
console.log(arrowFunnName())


async function funmName(){
    setTimeout(()=>{
    console.log("hello")
    },5000)
    console.log(await"Hello");
}
arrowFunmName=async()=>{
    setTimeout(()=>{
    console.log("KEC")
    },4000)
    console.log(await "KEC");
}
funmName()
arrowFunmName()

