//first do code for length
function getlen(){
    let getval=document.getElementById("get").value/*it get value of select tag*/
    let setval=document.getElementById("set").value
    let x=document.getElementById("demo")
    let y=document.getElementById("inc")
    if(getval ===setval){
        alert(`if you are convert ${getval} into ${getval} you get same answer`)
        //if user try to convert ex meter into meter it show alert
    }
    if(getval==="meter" && setval==="foot"){
        y.innerText= x.innerText *3.28084 /*the formula is meter * 3.28084 to convert meter into foot*/
    }

    //we write to conver meter into cm formula meter * 100
    else if(getval==="meter" && setval==="cm"){
        y.innerText=x.innerText * 100
    }
    //now convert foot in meter
    else if(getval==="foot" && setval==="meter"){
        y.innerText=x.innerText / 3.281//the formula is meter devide by 3.281*/

}
//now convert foot into cm
else if(getval==="foot" && setval==="cm"){
    y,innerText=X.innerText * 30.48/* The formula is foot multifly 30.48*/

}
/*now convert cm into foot*/
else if(getval==="cm" && setval==="foot"){
    y.innerText=x.innerText /30.48 /* the formula is foot divided by 30.48*/
}
/*now convert cm into meter*/
else if(getval==="cm" && setval==="meter"){
    y.innerText=x.innerText /100 /* the formula is foot divided by 100*/
}
//write the code if user input the alphabet show alert 
let z=/[a-z]/i//reg ex
if(z.test(x.innerText)===true){
    alert("enter valid number")
}
}
/* now we create a function to convert temperature celcius into farenheit it is easy not a complex */
function getceli(){
    let x = document.getElementById("celi")
    let y = document.getElementById("fah")
    y.innerText=(x.innerText) * 1.8 + 32 //the formula is farenheit multiply 1.8 plus 32
//write the code if user input the alphabet show alert 
let z=/[a-z]/i//reg ex
if(z.test(x.innerText)===true){
    alert("enter valid number")
}

}
//now we are creating new to convert farenheit into celsius
function getf(){
let x=document.getElementById("celi")
let y=document.getElementById("fah")
x.innerText=(y.innerText-32) * 5/9
//write the code if user input the alphabet show alert 
let z=/[a-z]/i//reg ex
if(z.test(y.innerText)===true){
    alert("enter valid number")
}
}
//now we are creating new to convert kilogram into gram
function getgram(){
    let x=document.getElementById("kilo")
    let y=document.getElementById("gram")
    y.innerText=x.innerText * 1000
    //write the code if user input the alphabet show alert 
let z=/[a-z]/i//reg ex
if(z.test(y.innerText)===true){
    alert("enter valid number")
}
}
//now we are creating new to convert gram into kilogram
function getkilo(){
    let x=document.getElementById("gram")
    let y=document.getElementById("kilo")
    y.innerText=x.innerText / 1000
    //write the code if user input the alphabet show alert 
let z=/[a-z]/i//reg ex
if(z.test(y.innerText)===true){
    alert("enter valid number")
}


}


































