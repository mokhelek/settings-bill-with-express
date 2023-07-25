let inputError = document.querySelector(".input-error");
let billTypeError = document.querySelector(".bill-type-input-error");

let formElem = document.querySelector(".costs-form")
let billTypeFormElem = document.querySelector(".bill-type-form")

let callCostInputElem = document.querySelector(".callCostSetting");
let smsCostInputElem = document.querySelector(".smsCostSetting");
let warningLevelElem = document.querySelector(".warningLevelSetting");
let criticalLevelElem = document.querySelector(".criticalLevelSetting");


let radioBtn = document.querySelector(".billItemTypeWithSettings").checked;

document.addEventListener("DOMContentLoaded",()=>{

    formElem.addEventListener("submit",(event)=>{
        event.preventDefault();


        if (callCostInputElem.value && smsCostInputElem.value && warningLevelElem.value && criticalLevelElem.value) {
            formElem.submit()
        } else {
            inputError.style.display = "block"
    
            setTimeout(()=>{
                inputError.style.display = "none"
            },4000)
        }

    })

    // **************************** Bill Type Error ************************

    billTypeFormElem.addEventListener("submit",(event)=>{
        event.preventDefault();

        console.log(radioBtn)

        if (radioBtn) {
            formElem.submit()
        } else {
            billTypeError.style.display = "block"
    
            setTimeout(()=>{
                billTypeError.style.display = "none"
            },4000)
        }

    })

})