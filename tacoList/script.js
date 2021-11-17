var TacoData = [
  {
    name: "Portabella Mushroom Taco",
    price: 11.23,
    quantity: 3,
    calories: 100
  },
  {
    name: "Tortilla Shell",
    price: 0.23,
    quantity: 1,
    calories: 0
  },
  {
    name: "Peking Sauce Taco",
    price: 2.30,
    quantity: 0.5,
    calories: 10
  },
  {
    name: "Carne Asada Taco",
    price: 2.00,
    quantity: 2,
    calories: 50
  },
  {
    name: "Mystery Mix Taco",
    price: 20.00,
    quantity: 2,
    calories: 70
  },
];

/**
* Challenge: Modify model (Taco) class.
* 
* Create a function called "getData" which will return the data property.
*/
class Taco {
  constructor(tacoData) {
    this.data = tacoData;

    this.dom = {};
  }

  getData() {
    return this.data;
  }

  render() {
    var $row = this.dom.row = $("<div>", {
      class: "row"
    });

    var $name = this.dom.name = $("<div>", {
      class: "col",
      text: this.data.name
    });

    var $calories = this.dom.calories = $("<div>", {
      class: "col",
      text: this.data.calories
    });

    var $quantity = this.dom.quantity = $("<div>", {
      class: "col",
      text: this.data.quantity
    });

    var $price = this.dom.price = $("<div>", {
      class: "col",
      text: this.data.price
    });

    $row.append($name, $calories, $quantity, $price);

    return $row;
  }
}

/**
* Challenge: Modify controller(TacoList) class.
* 
* Create a function called "addEventListeners" which will add event listeners to all
* of the different form filter elements using "handleTacoFilter".
* 
* Create a function called "handleTacoFilter" which will accept the
* event object.
*  * Get all values from the form.
*  * Filter the list of tacos in the "tacos" property based on the form values.
*  * Pass the filtered array to the "renderTacos"
* ** REMEMBER: bind the function in the constructor.
* 
* - stop here and make sure you've tested the TacoList class functionality.
*  [ ] handleTacoFilter applies the filters as the user interacts with the page.
*/

/**
* Challenge: Modify your "initializeApp" function.
* 
*  * call into the "addEventListeners" function.
* 
* - stop here and test your page.
*/
class TacoList {
  constructor(elementConfig) {
    this.dom = {
      listDisplay: $(elementConfig.listDisplay),
      nameInput: $(elementConfig.nameInput),
      caloriesFromInput: $(elementConfig.caloriesFromInput),
      caloriesToInput: $(elementConfig.caloriesToInput),
      priceFromInput: $(elementConfig.priceFromInput),
      priceToInput: $(elementConfig.priceToInput),
      nav:{
        navgationBar:$(elementConfig.navgationBar)
      }
    };

    this.tacos = [];

    this.handleFilterAndSorting = this.handleFilterAndSorting.bind(this);
    this.handleEventListener = this.handleEventListener.bind(this);
    this.changePage = this.changePage.bind(this);
    this.nav = new NavigationBar({
      click:this.changePage
    });

    this.addTaco = this.addTaco.bind(this);
  }

  changePage(list){
    this.nav.changePage(list);
  }

  loadTacos(tacoData) {
    tacoData.forEach(this.addTaco);
  }

  addTaco(tacoData) {
    var taco = new Taco(tacoData);
    this.tacos.push(taco);
  }

  render(tacoList) {
    var tacos = tacoList.map((t) => { return t.render(); });

    this.dom.listDisplay.empty().append(tacos);
  }

  loadMenu(){
    this.dom.nav.navgationBar.append(this.nav.loadMenuItems())
  }

  displayAllTacos() {
    this.render(this.tacos);
  }

  handleEventListener() {
    this.dom.nameInput.keyup(this.handleFilterAndSorting);
    this.dom.caloriesFromInput.keyup(this.handleFilterAndSorting);
    this.dom.caloriesToInput.keyup(this.handleFilterAndSorting)
    this.dom.priceFromInput.keyup(this.handleFilterAndSorting)
    this.dom.priceToInput.keyup(this.handleFilterAndSorting)

  }
  handleFilterAndSorting() {
    var name = this.dom.nameInput.val();
    var calorieFromInput = this.dom.caloriesFromInput.val();
    var calorieToInput = this.dom.caloriesToInput.val();
    var priceFromInput = this.dom.priceFromInput.val();
    var priceToInput = this.dom.priceToInput.val();

    var filterResult = this.tacos;
    if (name) {
      filterResult = filterResult.filter(v => {
        var data = v.getData();
        return data.name.includes(name);
      })
    }
    if (calorieFromInput) {
      filterResult = filterResult.filter(v => {
        var data = v.getData();
        return data.calories > calorieFromInput;
      })
    }
    if (calorieToInput) {
      filterResult = filterResult.filter(v => {
        var data = v.getData();
        return data.calories < calorieToInput;
      })
    }
    if (priceFromInput) {
      filterResult = filterResult.filter(v => {
        var data = v.getData();
        return data.price > priceFromInput;
      })
    }
    if (priceToInput) {
      filterResult = filterResult.filter(v => {
        var data = v.getData();
        return data.price < priceToInput;
      })
    }
    this.render(filterResult);
  }
}

$(document).ready(() => {
  var shop = new TacoList({
    listDisplay: ".taco-list",
    nameInput: "#nameInput",
    caloriesFromInput: "#caloriesFromInput",
    caloriesToInput: "#caloriesToInput",
    priceFromInput: "#priceFromInput",
    priceToInput: "#priceToInput",
    navgationBar:"#navgationBar"
  });
  shop.loadTacos(TacoData);
  shop.displayAllTacos();
  shop.handleEventListener()
  shop.loadMenu();
});

