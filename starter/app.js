let budgetController = (function() {})();

let UIController = (function() {
  let DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

let controller = (function(budgetController, UIController) {
  let DOM = UIController.getDOMstrings();
  let controlAddItem = function() {
    let input = UIController.getInput();
    console.log(input);
  };
  document
    .querySelector(DOM.inputBtn)
    .addEventListener("click", controlAddItem);
  document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      controlAddItem();
    }
  });
})(budgetController, UIController);
