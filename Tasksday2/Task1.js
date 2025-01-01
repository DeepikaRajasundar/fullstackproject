//Finding odd even without using
function oddeven(number)
{
    if((number & 1)==0)
    {
        console.log(number,"Even");
    }
    else
    {
        console.log(number,"odd");
    }
}
oddeven(40);
oddeven(15);
