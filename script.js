let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let console = document.getElementById('console'); // Get the console textarea element

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      string = eval(string);
      input.value = string;
      printToConsole(string); // Print the result to the console
    } else if (e.target.innerHTML === 'AC') {
      string = "";
      input.value = string;
      clearConsole(); // Clear the console
    } else if (e.target.innerHTML === 'DEL') {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

function printToConsole(text) {
  if (console) { // Check if the console element exists
    console.value += text + '\n'; // Append the text to the console and move to the next line
  }
}

function clearConsole() {
  if (console) { // Check if the console element exists
    console.value = ""; // Clear the console
  }
}
