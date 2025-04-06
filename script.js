let firstName = document.getElementById("input1");

let lastName = document.getElementById("input2");
let email = document.getElementById("input3");
let checkbox = document.getElementById("checkbox");

let submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (firstName.value.trim() === "" || lastName.value.trim() === "") {
    let errorMessage = document.createElement("p");
    let errorMessageTextNode = document.createTextNode(
      "This field is required"
    );
    errorMessage.appendChild(errorMessageTextNode);
    errorMessage.style.color = "red";
    firstName.parentNode.appendChild(errorMessage);
  } else if (email.value.trim() === "") {
    let errorMessage3 = document.createElement("p");
    let errorMessageTextNode3 = document.createTextNode(
      "please enter email address"
    );
    errorMessage3.appendChild(errorMessageTextNode3);
    errorMessage3.style.color = "red";
    email.parentNode.appendChild(errorMessage3);
  } else if(!checkbox.checked){
    let errorMessage3 = document.createElement("p");
    let errorMessageTextNode3 = document.createTextNode(
      "To submit this form, please consent to being contacted"
    );


  }else{
    
  }
});
