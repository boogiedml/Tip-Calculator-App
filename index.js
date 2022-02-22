
document.querySelector("input").addEventListener("click", () => {
    document.querySelector(".reset-btn").style.opacity = 1;
})

// User bill
let userBill = document.querySelector("#bill_input").addEventListener("input", (e) => {
    let userBillEntered = e.target.value;
    console.log(userBillEntered);

});


// Custom Input
let customBill = document.querySelector("#custom_input").addEventListener("input", (e) =>{
    let customInputEntered = e.target.value
    console.log(customInputEntered);
})



//Tip Percentage
let numOfButtons = document.querySelectorAll("button.per_btn").length
for(let i = 0; i < numOfButtons; i++){
    document.querySelectorAll("button.per_btn")[i].addEventListener("click", function(){
        console.log(this.innerHTML)
    })
}