let scor = prompt("คะแนนที่ได้ : ")
if(scor >= 80){
    document.getElementById("resolt").innerHTML = " A "
}
else if(scor >= 70){
    document.getElementById("resolt").innerHTML = " B "
}
else if(scor >= 60){
    document.getElementById("resolt").innerHTML = " C "
}
else if(scor >= 50){
    document.getElementById("resolt").innerHTML = " D "
}
else{
    document.getElementById("resolt").innerHTML = " F "
}