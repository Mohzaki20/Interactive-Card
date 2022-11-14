let nameError = document.getElementById("nameError");
let DateError = document.getElementById("DateError");
let cvcError = document.getElementById("cvcError");
let form = document.querySelector(".inputs");
let number = document.getElementById("num");
let cvc = document.getElementById("cvcNum");
let finish = document.querySelector(".success-form");
let numCard = document.querySelector(".numCard");
let className =  document.querySelector(".className");
let idName = document.querySelector("#name")
let dateCard = document.querySelector(".dateCard");
let cvcNumber = document.querySelector(".cvcNumber");
let month = document.getElementById("mnth");
let year = document.getElementById("years");
let continue1 = document.getElementById("continue")

console.log(idName)
function ValidateName() {
    if (idName.value.length === 0) {
        form.onsubmit = function() {
            return false;
            
        }
        }
    
    if (month.value.length === 0 || year.value.length === 0) {
        DateError.innerHTML = "can't be blank";
        DateError.style.cssText = "color:red;font-size:18px;margin-left:5px";
        year.style.cssText = "outline:.5px solid red"
        month.style.cssText = "outline:.5px solid red"
        let testDate = false;
        form.onsubmit = function() {
            if (testDate === false){
            return false;
            }
        }
    }
    if (year.value.length > 0 && month.value.length > 0) {
        DateError.style.cssText = "display:none"
        year.style.cssText = "outline:.5px solid #eee"
        month.style.cssText = "outline:.5px solid #eee"
        testDate = true;
        form.onsubmit = function() {
            if (testDate === true){
            return true;
            }
        }
    }
    
    if (cvc.value.length === 0) {
        cvcError.innerHTML = "can't be blank";
        cvcError.style.cssText = "color:red;font-size:18px;margin-left:5px";
        cvc.style.cssText = "outline:.5px solid red"
        let testCvc = false;
        form.onsubmit = function() {
            if (testCvc === false){
            return false;
            }
        
    }
    }
    if (cvc.value.length > 0 ) {
        cvcError.style.cssText = "display:none"
        cvc.style.cssText = "outline:.5px solid #eee"
        testCvc = true;
        form.onsubmit = function() {
            if (testCvc === true){
            return true;
            }
        
    }
    if (!number.value.match(/\d{4}\s\d{4}\s\d{4}\s\d{4}/) || number.value.length > 19){
        nameError.innerHTML = "Wrong format ,numbers only";
        nameError.style.cssText = "color:red;font-size:18px;margin-left:5px";
        let testNumber = false;
        form.onsubmit = function() {
            if (testNumber === false){
            return false;
            }
        
    }
    
    } else {
        nameError.style.cssText = "display:none";
        testNumber = true;
        form.onsubmit = function() {
            if (testNumber === true){
            return true;
            }
        
    }
    
    form.onsubmit = function() {
        form.style.display = "none"
        finish.style.display = "block"
        if(finish.style.display = "block") {
            numCard.innerHTML = number.value;
            className.innerHTML = idName.value;
            dateCard.innerHTML = `${month.value}/${year.value}`;
            cvcNumber.innerHTML = cvc.value;
        }
        return false;
        }
    }
    
}
}

continue1.onclick = function() {
    window.location.reload()
}