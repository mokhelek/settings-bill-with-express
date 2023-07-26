let inputError = document.querySelector(".input-error");
let billTypeError = document.querySelector(".bill-type-input-error");

let billTypeErrorNoSettings = document.querySelector(".bill-type-input-error-no-settings");
let inputErrorGreaterThanZero = document.querySelector(".bill-type-input-error-greater-zero")

let formElem = document.querySelector(".costs-form");
let billTypeFormElem = document.querySelector(".bill-type-form");

let callCostInputElem = document.querySelector(".callCostSetting");
let smsCostInputElem = document.querySelector(".smsCostSetting");
let warningLevelElem = document.querySelector(".warningLevelSetting");
let criticalLevelElem = document.querySelector(".criticalLevelSetting");

document.addEventListener("DOMContentLoaded", () => {
    formElem.addEventListener("submit", (event) => {
        event.preventDefault();

        if (callCostInputElem.value && smsCostInputElem.value && warningLevelElem.value && criticalLevelElem.value) {
            if(callCostInputElem.value > 0 && smsCostInputElem.value > 0 && warningLevelElem.value > 0 && criticalLevelElem.value ){
                formElem.submit();
            }else{
                inputErrorGreaterThanZero.style.display = "block";

                setTimeout(() => {
                    inputErrorGreaterThanZero.style.display = "none";
                }, 4000);
            }
        } else {
            inputError.style.display = "block";

            setTimeout(() => {
                inputError.style.display = "none";
            }, 4000);
        }
    });

    // **************************** Bill Type Error ************************

    billTypeFormElem.addEventListener("submit", (event) => {
        event.preventDefault();

        let radioBtn = document.querySelector(".billItemTypeWithSettings:checked");

        if (radioBtn) {
            if (callCostInputElem.value && smsCostInputElem.value && warningLevelElem.value && criticalLevelElem.value){
                billTypeFormElem.submit();
            }else{
                billTypeErrorNoSettings.style.display = "block";

                setTimeout(() => {
                    billTypeErrorNoSettings.style.display = "none";
                }, 4000);
            
            }
        } else {
            billTypeError.style.display = "block";

            setTimeout(() => {
                billTypeError.style.display = "none";
            }, 4000);
        }
    });
});
