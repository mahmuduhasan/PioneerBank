const loginButton = document.getElementById("login-button");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const loginField = document.getElementById("login-area");
const transactionField = document.getElementById("transaction-area");
const depositButton = document.getElementById("deposit-button");
const withdrawButton = document.getElementById("withdraw-button");
const depositField = document.getElementById("deposit-input");
const withdrawField = document.getElementById("withdraw-input");

const loginHandler = () => {
  const email = emailField.value;
  const password = passwordField.value;
  if (email.trim() === "" || password.trim() === "") {
    alert("Enter Email and Password!");
  } else {
    loginField.className = "invisible";
    transactionField.className = "visible";
  }
};

const depositHandler = () => {
  let newDepositValue = 0;
  const depositMoney = parseInt(
    document.querySelector(".deposit-money").innerHTML
  );
  const balanceMoney = parseInt(
    document.querySelector(".balance-money").innerHTML
  );
  const amountDeposit = parseInt(depositField.value);
  if (amountDeposit < 0 || isNaN(amountDeposit)) {
    alert("Please Enter Positive Value!");
  } else {
    newDepositValue = depositMoney + amountDeposit;
    let newBalance = balanceMoney;
    newBalanceMoney = newBalance + amountDeposit;
    document.querySelector(".deposit-money").innerHTML = newDepositValue;
    document.querySelector(".balance-money").innerHTML = newBalanceMoney;
  }
  clearInput();
};

const withdrawHandler = () => {
  let newWithdrawValue = 0;
  const withdrawMoney = parseInt(
    document.querySelector(".withdraw-money").innerHTML
  );
  const balanceMoney = parseInt(
    document.querySelector(".balance-money").innerHTML
  );
  const amountWithdraw = parseInt(withdrawField.value);
  if (amountWithdraw < 0 || isNaN(amountWithdraw)) {
    alert("Please Enter Positive Value!");
  } else if (balanceMoney < amountWithdraw) {
    alert("Insufficient Balance");
  } else {
    newWithdrawValue = withdrawMoney + amountWithdraw;
    let newBalance = balanceMoney;
    newBalanceMoney = newBalance - amountWithdraw;
    document.querySelector(".withdraw-money").innerHTML = newWithdrawValue;
    document.querySelector(".balance-money").innerHTML = newBalanceMoney;
  }
  clearInput();
};

const clearInput = () => {
  depositField.value = "";
  withdrawField.value = "";
};

loginButton.addEventListener("click", loginHandler);
depositButton.addEventListener("click", depositHandler);
withdrawButton.addEventListener("click", withdrawHandler);
