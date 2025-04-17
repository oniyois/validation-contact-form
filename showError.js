// Defines a helper function to display error messages
export function showError(inputElement, message) {
  const error = document.createElement("p");
  error.textContent = message;
  error.style.color = "red";
  error.classList.add("error-message");
  inputElement.insertAdjacentElement("afterend", error);
}
