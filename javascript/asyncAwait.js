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
    return"hello"
    },1000)
}
arrowFunmName=async()=>{
    setTimeout(()=>{
    return"KEC"
    },1000)
}
console.log(funmName())
console.log(arrowFunmName())
