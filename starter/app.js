const budgetController = (function() {
  const Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  const Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let data = {
    allItems: {
      expense: [],
      income: []
    },
    total: {
      expense: 0,
      income: 0
    }
  };
  return {
    addItem: function(type, description, value) {
      let newItem, ID;
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      if (type === "expense") {
        newItem = new Expense(ID, description, value);
      } else if (type === "income") {
        newItem = new Income(ID, description, value);
      }
      data.allItems[type].push(newItem);
    },
    testing: function() {
      console.log(data);
    }
  };
})();

const UIController = (function() {
  const DOMstrings = {
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

const controller = (function(budgetController, UIController) {
  const setupEventListeners = function() {
    const DOM = UIController.getDOMstrings();
    document
      .querySelector(DOM.inputBtn)
      .addEventListener("click", controlAddItem);
    document.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        controlAddItem();
      }
    });
  };

  const controlAddItem = function() {
    let input, newItem;
    input = UIController.getInput();
    newItem = budgetController.addItem(
      input.type,
      input.description,
      input.value
    );
  };

  return {
    init: function() {
      setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
