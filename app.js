function gotonext(){
var name = document.getElementById("inputName")
var number = document.getElementById("inputNumber")
var email = document.getElementById("inputEmail")
var password = document.getElementById("inputPassword")



var userDetail = {
    name: name.value,
    number: number.value,
    email: email.value,
    password: password.value
}

localStorage.setItem('userDetail',JSON.stringify(userDetail))


}

