function sayHello(userName , userLastname)
{
    return "Hello " + userName +"  "+ userLastname
}

function getAge()
{
    return 25
}
let userInput = prompt("Input your name :")
let userLastname = prompt("Input your Lastname :")
alert(sayHello(userInput , userLastname))
document.getElementById("showName").innerHTML = sayHello(userInput , userLastname)
