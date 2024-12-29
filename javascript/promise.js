function locationFinder(){
    loc="ooty"
    train =7
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(loc=="ooty"&& time==7){
                locFound("Train has arrived")
            }
        })
        if(train==8){
            resolve("Train has arrived");
        }
        else{
            reject("Train hasn't arrived yet");
        }
    })


}
locationFinder().then((resolveMsg)=>{
    console.log(resolveMsg);
}).catch(function(rejectedMsg){
    console.log(rejectedMsg);
})