let round = prompt("ต้องการเล่นกี่รอบ?")
let sum = 0
for(var i=1 ; i<=round ; i++){
    var answer = prompt("กรอกรอบที่ : "+i+" หัว หรือ ก้อย")
    var random_answer = ""
    if(Math.floor(Math.random()*10 <= 4)){
        random_answer = "หัว"
    }else{
        random_answer = "ก้อย"
    }
    if(answer == random_answer){
        alert("คุณทายถูก")
        sum = sum + 1
    }else{
        alert("คุณทายผิด")
    }
    document.getElementById("gamer-list").innerHTML += "สุ่มรอบที่ : "+i+"<br>"+"คุณทาย = "+answer+"<br>"+"ตัวที่ออก = "+random_answer+"<br>"
    
}
document.getElementById("result").innerHTML = "ทายถูกจำนวน : "+sum+" ครั้ง"