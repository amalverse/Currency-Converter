
// This is the base URL for the currency exchange rate API
const BASE_URL = "https://api.exchangerate-api.com/v4/latest/USD";


// Get references to important elements in the HTML
const dropdowns = document.querySelectorAll(".dropdown select"); // All dropdowns for currency selection
const btn = document.querySelector("form button"); // The convert button
const fromCurrency = document.querySelector(".from select"); // The 'from' currency dropdown
const toCurrency = document.querySelector(".to select"); // The 'to' currency dropdown
const msg = document.querySelector(".msg"); // The message area to show results


// Loop through each dropdown and add all currency options
for (let select of dropdowns) {
  for (let currencyCode in countryList) {
    let newOption = document.createElement("option"); // Create a new option for the dropdown
    newOption.innerText = currencyCode; // Show the currency code (like USD, INR)
    newOption.value = currencyCode;

    // Set default selected values: USD for 'from', INR for 'to'
    if (select.name === "from" && currencyCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currencyCode === "INR") {
      newOption.selected = "selected";
    }

    select.append(newOption); // Add the option to the dropdown
  }

  // When the user changes the currency, update the flag image
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}


// This function gets the exchange rate and updates the result on the page
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input"); // Get the input box for amount
  let amountValue = amount.value; // Get the value entered by the user

  // If the input is empty or less than 1, set it to 1
  if (amountValue === "" || amountValue < 1) {
    amountValue = 1;
    amount.value = "1";
  }

  try {
    // Fetch the latest exchange rates from the API
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch exchange rate");
    }

    let data = await response.json(); // Convert the response to JSON
    let rate = data.rates[toCurrency.value]; // Get the rate for the selected 'to' currency

    // If the rate is not found, show an error message
    if (!rate) {
      msg.innerText = "Exchange rate not found!";
      return;
    }

    // Calculate the converted amount and show it
    let finalAmount = (amountValue * rate).toFixed(2);
    msg.innerText = `${amountValue} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`;
  } catch (error) {
    // If there is an error (like no internet), show an error message
    msg.innerText = "Failed to fetch exchange rate!";
    console.error(error);
  }
};


// This function updates the flag image next to the dropdown when the currency changes
const updateFlag = (element) => {
  let currencyCode = element.value; // Get the selected currency code
  let countryCode = countryList[currencyCode]; // Get the country code for the flag
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`; // URL for the flag image
  let img = element.parentElement.querySelector("img"); // Find the image element
  img.src = newSrc; // Change the image to the new flag
};


// When the convert button is clicked, prevent the form from submitting and update the exchange rate
btn.addEventListener("click", (evt) => {
  evt.preventDefault(); // Stop the page from reloading
  updateExchangeRate(); // Update the result
});

// When the page loads, show the initial exchange rate
window.addEventListener("load", () => {
  updateExchangeRate();
});

// Show the current value of 1 USD in INR in the msg div
fetch("https://api.exchangerate-api.com/v4/latest/USD")
  .then(res => res.json())
  .then(data => {
    document.querySelector(".msg").innerText = `1 USD = ${data.rates["INR"]} INR`;
  });
