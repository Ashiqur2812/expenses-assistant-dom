function getInputValueById(id) {
  return Number(document.getElementById(id).value);
}

function showError(id) {
  return document.getElementById(id).classList.remove("hidden");
}

function addError(id) {
  return document.getElementById(id).classList.add("hidden");
}


// add event listener for calculate button
let count = 0;
const calculateBalance = document
  .getElementById("calculate")
  .addEventListener("click", function () {
    count += 1;
    // const incomeMoney = Number(document.getElementById("income").value);
    // const softwareBox = Number(document.getElementById("software").value);
    // const coursesBox = Number(document.getElementById("courses").value);
    // const internetBalance = Number(document.getElementById("internet").value);

    const incomeMoney = getInputValueById("income");
    const softwareBox = getInputValueById("software");
    const coursesBox = getInputValueById("courses");
    const internetBalance = getInputValueById("internet");

    if (incomeMoney <= 0 || isNaN(incomeMoney)) {
      showError("income-error");
      return;
    }
    if (softwareBox <= 0 || isNaN(softwareBox)) {
      showError("software-error");
      return;
    }
    if (coursesBox <= 0 || isNaN(coursesBox)) {
      showError("courses-error");
      return;
    }
    if (internetBalance <= 0 || isNaN(internetBalance)) {
      // document.getElementById("internet-error").classList.remove("hidden");
      showError("internet-error");
      return;
    }

    console.table({ incomeMoney, softwareBox, coursesBox, internetBalance });

    const totalAmount = softwareBox + coursesBox + internetBalance;
    const balance = incomeMoney - totalAmount;

    if (incomeMoney < totalAmount) {
      // document.getElementById("logic-error").classList.remove("hidden");
      showError("logic-error");
      return;
    }
    console.table(totalAmount, balance);

    const totalExpensesElement = document.getElementById("total-expenses");
    totalExpensesElement.textContent = totalAmount.toFixed(2);

    const balanceElement = document.getElementById("balance");
    balanceElement.textContent = balance.toFixed(2);

    const results = document.getElementById("results");
    results.classList.remove("hidden");

    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white p-3 rounded-md border-l-2 border-indigo-500";

    historyItem.innerHTML = `
   <p class='text-lg font-bold'>Serial: ${count}</p>
   <p class = 'text-xs text-gray-500'>${new Date().toLocaleString()}</p>
   <p class = 'text-xs font-bold'>Income: $${incomeMoney.toFixed(2)}</p>
   <p class = 'text-xs text-gray-500'>Expenses: $${totalAmount.toFixed(2)}</p>
   <p class = 'text-xs text-gray-500'>Balance: $${balance.toFixed(2)}</p>
   `;

    const historyList = document.getElementById("history-list");
    historyList.insertBefore(historyItem, historyList.firstChild);
  });

//add event listener for calculate savings button

const calculateSavingsButton = document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    const savings = Number(document.getElementById("savings").value);
    const incomeMoney = Number(document.getElementById("income").value);
    const softwareBox = Number(document.getElementById("software").value);
    const coursesBox = Number(document.getElementById("courses").value);
    const internetBalance = Number(document.getElementById("internet").value);

    const totalAmount = softwareBox + coursesBox + internetBalance;
    const balance = incomeMoney - totalAmount;
    const savingsAmount = (savings * balance) / 100;

    const savingsElement = document.getElementById("savings-amount");
    savingsElement.textContent = savingsAmount.toFixed(2);

    const remainingBalance = balance - savingsAmount;
    const remainingBalanceElement =
      document.getElementById("remaining-balance");
    remainingBalanceElement.textContent = remainingBalance.toFixed(2);
  });

// Assistant to history tab functional

const historyTab = document.getElementById("history-tab");
historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  historyTab.classList.remove("text-gray-600");

  const assistantTab = document.getElementById("assistant-tab");
  assistantTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  assistantTab.classList.add("text-gray-600");

  // const expenseForm = document.getElementById("expense-form");
  // expenseForm.classList.add("hidden");
  addError("expense-form" )

  // const historySection = document.getElementById("history-section");
  // historySection.classList.remove("hidden");
  showError("history-section");
});



// History to Assistant tab functional

const assistantTab = document.getElementById("assistant-tab");
assistantTab.addEventListener("click", function () {
  assistantTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  assistantTab.classList.remove("text-gray-600");

  const historyTab = document.getElementById("history-tab");
  historyTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  historyTab.classList.add("text-gray-600");

  // const expenseForm = document.getElementById("expense-form");
  // expenseForm.classList.remove("hidden");
  showError("expense-form");

  // const historySection = document.getElementById("history-section");
  // historySection.classList.add("hidden");
  addError("history-section");
});

document.getElementById("income").addEventListener("input", function () {
  const inputValue = Number(document.getElementById("income").value);
  if (inputValue <= 0 || isNaN(inputValue)) {
    // document.getElementById("income-error").classList.remove("hidden");
    showError("income-error");
    return;
  }
});

document.getElementById("software").addEventListener("input", function () {
  const inputValue = Number(document.getElementById("software").value);
  if (inputValue <= 0 || isNaN(inputValue)) {
    // document.getElementById("software-error").classList.remove("hidden");
    showError("software-error");
    return;
  }
});

document.getElementById("courses").addEventListener("input", function () {
  const inputValue = Number(document.getElementById("courses").value);
  if (inputValue <= 0 || isNaN(inputValue)) {
    // document.getElementById("courses-error").classList.remove("hidden");
    showError("courses-error");
    return;
  }
});

document.getElementById("internet").addEventListener("input", function () {
  const inputValue = Number(document.getElementById("internet").value);
  if (inputValue <= 0 || isNaN(inputValue)) {
    // document.getElementById("internet-error").classList.remove("hidden");
    showError("internet-error");
    return;
  }
});
