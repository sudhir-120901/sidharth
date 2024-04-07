
function myFun()
{
    var a= document.myForm.Email.value;
    var b= document.myForm.phone.value;
    if((a.indexOf('@')<=0) || ((a.charAt (a.length-4) !='.') && (a.charAt (a.length-3)!='.') ))
    {
        document.getElementById("Message").innerHTML="**Invalid Email ID";
        return false;
    }   
    if(b.length!=10 || isNaN(b))
    {
            document.getElementById("PhMessage").innerHTML="**Invalid Phone Number";
            return false;
    }
}
