const inputValue = document.querySelector("#temperature");
const fromUnit = document.querySelector("#from-units");
const toUnit = document.querySelector("#to-units");
const convertBtn = document.querySelector(".convert-btn");
const result = document.querySelector("#result");

// events
document.addEventListener("DOMContentLoaded", toggleButtonState);
inputValue.addEventListener("input", toggleButtonState);
fromUnit.addEventListener("change", toggleButtonState);
toUnit.addEventListener("change", toggleButtonState);
convertBtn.addEventListener("click", convertTemperature);

// functions
function toggleButtonState() {
  const inputTemp = parseFloat(inputValue.value);

  if (!isNaN(inputTemp) && fromUnit.value !== "#" && toUnit.value !== "#") {
    convertBtn.disabled = false;
  } else {
    convertBtn.disabled = true;
  }
}

function convertTemperature() {
  const inputTemp = parseFloat(inputValue.value);
  const from = fromUnit.value;
  const to = toUnit.value;
  let convertedTemp;

  if (from === to) {
    convertedTemp = inputTemp;
  } else if (from === "celsius") {
    convertedTemp =
      to === "fahrenheit" ? (inputTemp * 9) / 5 + 32 : inputTemp + 273.15;
  } else if (from === "fahrenheit") {
    convertedTemp =
      to === "celsius"
        ? ((inputTemp - 32) * 5) / 9
        : ((inputTemp - 32) * 5) / 9 + 273.15;
  } else if (from === "kelvin") {
    convertedTemp =
      to === "celsius"
        ? inputTemp - 273.15
        : ((inputTemp - 273.15) * 9) / 5 + 32;
  }

  result.textContent = `${inputTemp} ${from} is ${convertedTemp.toFixed(
    1
  )} ${to}`;
}
