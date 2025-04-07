function validate(event) {
  event.preventDefault();
  let isValid = true;

  let firstName = document.getElementById("input1");

  let lastName = document.getElementById("input2");
  let email = document.getElementById("input3");
  let query1 = document.getElementById("query1");
  let query2 = document.getElementById("query2");

  let checkbox = document.getElementById("checkbox");
  let textArea = document.querySelector("textarea");
  let form = document.getElementById("contact-form");

  let previousErrors = document.querySelectorAll(".error-message");
  previousErrors.forEach(function (error) {
    error.remove();
  });

  function showError(inputElement, message) {
    let error = document.createElement("p");
    error.textContent = message;
    error.style.color = "red";
    error.classList.add("error-message");
    // inputElement.parentNode.appendChild(error);
    inputElement.insertAdjacentElement("afterend", error);

  }

  if (firstName.value.trim() == "") {
    showError(firstName, "this field is required");
    isValid = false;
  }
  if (lastName.value.trim() == "") {
    showError(lastName, "this field is required");
    isValid = false;
  }
  if (email.value.trim() == "") {
    showError(email, "please enter email address");
    isValid = false;
  }
  if (!query1.checked && !query2.checked) {
    showError(query1, "Please select a query option");
    isValid = false;
  }
  if (textArea.value.trim() == "") {
    showError(textArea, "this field is required");
    isValid = false;
  }
  if (!checkbox.checked) {
    showError(
      checkbox,
      "To submit this form, please consent to being contacted"
    );
    isValid = false;
  }
  if (isValid) {
    document.getElementById("success-message").classList.remove("hidden");
    form.reset();

  }
  return isValid;
}
