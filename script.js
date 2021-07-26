// function for lowecase the string....
function capitalizeFirstLetter(string) {
    return string.toLowerCase();
}
// function for talking ....
function talk(){
    const know={
    "hi":"hello,Developers community Here",
    "how are you":"Good:!!!",
    "what can i do for You":"Please Give us A subscirbe",
    "ok":"Thank You So much<3",
    "bye":"Okay! Wil mwwt Soon. TC:)..",

    };
    const user=document.getElementById('userBox').value;
    const newuser = capitalizeFirstLetter(user);
    
    document.getElementById('chatlog').innerHTML=newuser +'<br>';
    if(newuser in know){
        document.getElementById('chatlog').innerHTML= know[newuser]+'<br>';
    }
    else
    {
        document.getElementById('chatlog').innerHTML= "Sorry,I didn't understand <br>";
    }

}
