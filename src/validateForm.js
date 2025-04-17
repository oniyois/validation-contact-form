import {
  form,
  email,
  query1,
  query2,
  textArea,
  checkbox,
  lastName,
  firstName,
  successMessage,
} from "./formElements.js";

import { showError } from "./showError.js";

function validate(event) {
  event.preventDefault();
  let isValid = true;

  // Remove previous error messages dynamically
  document
    .querySelectorAll(".error-message")
    .forEach((error) => error.remove());

  // Validate form fields
  if (!email || email.value.trim() === "") {
    showError(email, "Please enter email address");
    isValid = false;
  }

  if (!lastName || lastName.value.trim() === "") {
    showError(lastName, "This field is required");
    isValid = false;
  }

  if (!textArea || textArea.value.trim() === "") {
    showError(textArea, "This field is required");
    isValid = false;
  }

  if (!firstName || firstName.value.trim() === "") {
    showError(firstName, "This field is required");
    isValid = false;
  }

  if (!query1 || !query2 || (!query1.checked && !query2.checked)) {
    showError(query1, "Please select a query option");
    isValid = false;
  }

  if (!checkbox || !checkbox.checked) {
    showError(
      checkbox,
      "To submit this form, please consent to being contacted"
    );
    isValid = false;
  }

  // Show success message and reset form if valid
  if (isValid)
    successMessage && successMessage.classList.remove("hidden"), form.reset();

  return isValid;
}

// Attach the validate function to the form's submit event
form && form.addEventListener("submit", validate);
