studentslist=["Tom","Ram","Bob"]
newstudent=["Sam","Ajay"]
combinedstudents=[...studentslist,newstudent]
console.log(combinedstudents);


arr1=[10,20,30]
arr2=[...arr1,40,50]
console.log(arr2)

function restop(...arr1){
    console.log(arr1)
}
restop(a,b,c)