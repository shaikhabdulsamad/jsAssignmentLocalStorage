function gotonext(){
var name = document.getElementById("inputName")
var number = document.getElementById("inputNumber")
var email = document.getElementById("inputEmail")
var password = document.getElementById("inputPassword")

if(email.value !== "" || password.value !== "" || name.value !== "" || number.value !== ""){

    if(localStorage.getItem('userDetail') === null){
        var abc = [];
        localStorage.setItem('userDetail', JSON.stringify(abc));  
    }

var userDetail = {
    name: name.value,
    number: number.value,
    email: email.value,
    password: password.value
}


var get =  JSON.parse(localStorage.getItem('userDetail'));
get.push(userDetail);

localStorage.setItem('userDetail', JSON.stringify(get));


// localStorage.setItem('userDetail',JSON.stringify(userDetail))
}


else{
    alert('fill all fields')
    
}
}


