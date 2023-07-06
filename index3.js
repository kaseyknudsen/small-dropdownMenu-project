const buttons = [
  {
    id: 1,
    label: "Button 1",
    active: false,
  },
  {
    id: 2,
    label: "Button 2",
    active: false,
  },
  {
    id: 3,
    label: "Button 3",
    active: false,
  },
];

const renderButtons = () => {
  const container = document.getElementById("toggleButtons");

  buttons.forEach((button) => {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = button.label;
    buttonElement.className = "button";
    container.appendChild(buttonElement);
    buttonElement.addEventListener("click", () => {
      if (!button.active) {
        button.active = true;
        buttonElement.style.backgroundColor = "red";
        buttonElement.innerText = "change back";
        buttonElement.style.color = "white";
      } else {
        buttonElement.style.backgroundColor = "white";
        buttonElement.innerText = button.label;
        buttonElement.style.color = "red";
        button.active = false;
      }
    });
  });
};

renderButtons();
