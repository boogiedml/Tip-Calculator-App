let allButtons = document.querySelectorAll("button.percentage-btn")
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener("click", () => {
            // console.log(allButtons[i]);
            allButtons[i].style.opacity = 1;
        })
        
    }


document.querySelector("input").addEventListener("click", () => {
    document.querySelector(".reset-btn").style.opacity = 1;
})

// User bill
let userBill = document.querySelector("#bill_input").addEventListener("input", (e) => {
    let userBillEntered = e.target.value;
    console.log(userBillEntered);
});


//Tip Percentage
let numOfButtons = document.querySelectorAll("button.per_btn").length
for(let i = 0; i < numOfButtons; i++){
    document.querySelectorAll("button.per_btn")[i].addEventListener("click", function(){
        console.log(this.innerHTML)
    })
}

// Custom Input Tip Percentage
let customPercentage = document.querySelector("#custom_input").addEventListener("input", (e) => {
    customPercentageEntered = e.target.value
    console.log(customPercentageEntered);
})

//Number of Customers
let numberOfPeople = document.querySelector("#number-of-people-input").addEventListener("input", (e) => {
    let numberOfPeopleEntered = e.target.value;
    console.log(numberOfPeopleEntered);
})

