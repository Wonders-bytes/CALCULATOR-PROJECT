const billInput = document.querySelector("#billAmount");
const tipSelect = document.querySelector("#tipPercentage");
const calculateBtn = document.querySelector("#calculateBtn");
const resetBtn = document.querySelector("#resetBtn");

const tipAmount = document.querySelector("#tipAmount");
const totalAmount = document.querySelector("#totalAmount");
const message = document.querySelector("#message");

function calculateTip() {
    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipSelect.value);

    if (isNaN(bill) || bill <= 0) {
        message.textContent = "Please enter a valid bill amount.";
        return;
    }

    message.textContent = "";

    const tip = bill * (tipPercent / 100);
    const total = bill + tip;

    tipAmount.textContent = `₦${tip.toFixed(2)}`;
    totalAmount.textContent = `₦${total.toFixed(2)}`;
}

function resetCalculator() {
    billInput.value = "";
    tipSelect.value = "10";

    tipAmount.textContent = "₦0.00";
    totalAmount.textContent = "₦0.00";
    message.textContent = "";
}

calculateBtn.addEventListener("click", calculateTip);
resetBtn.addEventListener("click", resetCalculator);