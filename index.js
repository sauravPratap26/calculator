function Operations(value, key) {
  switch (key) {
    case "AC": {
      value = "0";
      return value;
    }
    case "del": {
      value = value.length > 1 ? value.slice(0, -1) : "0";
      return value;
    }
    case "+":
    case "-":
    case "/":
    case "*": {
      if (["+", "-", "*", "/"].includes(value[value.length - 1])) {
        value = value.slice(0, -1);
      }
      value += key;
      return value;
    }
    case "=":
      return eval(value);

    case "0": {
      if (value[value.length - 1] !== "/") {
        value += "0";
      }
      return value;
    }
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9": {
      if (value === "0") {
        value = key;
      } else {
        value += key;
      }
      return value;
    }
    // case ".":{
    //     if (["+", "-", "*", "/"].includes(value[value.length - 1])) {
    //         value+="0."
    //     }
    //     else {
    //         value+=key
    //     }
    //     return value
    // }
    case ".": {
      let i = value.length - 1;
      while (i >= 0 && !["+", "-", "*", "/"].includes(value[i])) {
        i--;
      }
      const lastNumber = value.slice(i + 1);
      if (!lastNumber.includes(".")) {
        value += lastNumber ? "." : "0.";
      }

      return value;
    }

    default:
      return value;
  }
}

document.querySelector(".calBody").addEventListener("click", (event) => {
  const displayString = document.querySelector(".display");
  if (!event.target.classList.contains("btn")) return;
  const clickKey = event.target.dataset.id;
  displayString.textContent = Operations(displayString.textContent, clickKey);
});
