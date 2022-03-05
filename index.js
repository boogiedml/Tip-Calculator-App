let screenOutput = document.getElementById("tip__output"); // get the text on the UI for the tip output
let totalScreenOutput = document.getElementById("tip__total") ;// get the total screen output
let userBillEntered; //track bill input entries
let numberOfPeopleEntered; // get the number of people that paid the same amount of bill
let removeString; // remove string (percentage) from the Tip Percentage button
let calcCustomValue; // evaluate the custom value
let calcBtnPercent; // evaluate percent btn value
// console.log(screenOutput)
// console.log(totalScreenOutput)

document.querySelector("input").addEventListener("click", () => {
    document.querySelector(".reset-btn").style.opacity = 1;
})

// User bill
let userBill = document.querySelector("#bill_input").addEventListener("input", (e) => {
    userBillEntered = e.target.value;
});

//Number of Customers
const numberOfPeople = document.querySelector("#number-of-people-input").addEventListener("input", (e) => {
    numberOfPeopleEntered  = e.target.value;
 })

// Custom Input Tip Percentage
let customPercentage = document.querySelector("#custom_input").addEventListener("input", (e) => {
    let customInputEntered = e.target.value
    //manipulate output on screen from the percentage entered in custom entry
    calcCustomValue = (customInputEntered/100) * userBillEntered;
    screenOutput.innerHTML = `$${calcCustomValue}`
    totalScreenOutput.innerHTML = `$${calcCustomValue * numberOfPeopleEntered}`
})



//Tip Percentage
function accessTipPercent(){
    let numOfButtons = document.querySelectorAll("button.per_btn").length
    for (let i = 0; i < numOfButtons; i++) {
        document.querySelectorAll("button.per_btn")[i].addEventListener("click", function () {
        removeString = this.innerHTML
        //remove percentage sign on the button texts
            removeString = removeString.replace(/\D/g, '');
            
            //manipulate output on screen from the percentage when button is clicked
            let calcBtnPercent =(removeString/100 )* userBillEntered;
            // set the output to the evaluated value
            screenOutput.innerHTML = `$${calcBtnPercent}`
            console.log(screenOutput, totalScreenOutput);
            // set the value of the total screen to the evaluated value
            totalScreenOutput.innerHTML = `$${(calcBtnPercent * numberOfPeopleEntered)}`
        })
    }
}
accessTipPercent()


// Reset Function
function resetAll(){
    document.getElementById("bill_input").value = ""
    document.getElementById("custom_input").value = ""
    document.getElementById("number-of-people-input").value = ""
        screenOutput.innerHTML = "$0.00";
        totalScreenOutput.innerHTML = "$0.00"
}
