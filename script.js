const handleLogin = (e) => {
  e.preventDefault();

  const accountNumber = document.getElementById("account_number").value;
  const pinNumber = document.getElementById("pin_number").value;

  if (accountNumber === "" || pinNumber === "") {
    const isExist = document.getElementsByClassName("error_massage");

    if (isExist.length !== 0) {
      return;
    }

    const parentContainer = document.getElementById("error_massage_conainer");
    const newElement = document.createElement("p");

    newElement.innerText = "This fild is required!";
    newElement.classList.add("error_massage");

    parentContainer.appendChild(newElement);
    return;
  }

  window.location.href = "./home.html";
};
