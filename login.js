function gotohome() {
    var email1 = document.getElementById("inputEmail")
    var password1 = document.getElementById("inputPassword")

    var a = JSON.parse(localStorage.getItem('userDetail'));

    var flag= false
    
    for(var i = 0; i < a.length; i++){
        
        // console.log(a[i].email)
       
    if (email1.value === a[i].email && password1.value === a[i].password){
        flag = true
            location.href = "home.html"
        }

       
    }

    if (email1.value === "" || password1.value === ""  ) {
           
        alert("fill both fields")
    }

    else if(flag == false){
        alert("wrong email or password")
    }
    
}
