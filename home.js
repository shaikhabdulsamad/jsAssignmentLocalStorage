
var user = localStorage.getItem('userDetail')

var userName = JSON.parse(user).name

var span = document.getElementById('userName')
var text = document.createTextNode(userName.toUpperCase())
span.appendChild(text)