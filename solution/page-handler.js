// Event handler for confirm
function handleConfirmMessage() {
  let opt = confirm("Do you want to continue?");
  if (opt) alert("You have pressed on OK button!");
  else alert("You have pressed on CANCEL button!");
}

// Event handler for confirm
function handlePromptMessage() {
  let name = prompt("Enter your name");
  alert(`Good day, ${name}.`);
}
