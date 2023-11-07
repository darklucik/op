

function codeOper() {
    let code = Number(document.getElementById("codeNum").value)

    if(code==97 || code==88) {
        document.getElementById("compOper").innerHTML = "MobiUz"
    }
    if(code==90 || code==91) {
        document.getElementById("compOper").innerHTML = "Beeline"
    }
    if(code==93 || code==94 || code==55) {
        document.getElementById("compOper").innerHTML = "Ucell"
    }
    if(code==33) {
        document.getElementById("compOper").innerHTML = "Humans"
    }
     if(code==99 || code==77) {
        document.getElementById("compOper").innerHTML = "Uzmobile GSM"
    }
    if(code==95) {
        document.getElementById("compOper").innerHTML = "Uzmobile"
    }
   
}