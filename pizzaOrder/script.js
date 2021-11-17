var Orders = [
  {
    time: "12:00 AM",
    customer: "Stoner Pete",
    cost: 48,
    quantity: 4,
    type: "pepperoni"
  },
  {
    time: "11:50 AM",
    customer: "Jo Schmit",
    cost: 15,
    quantity: 1,
    type: "works"
  },
  {
    time: "11:50 AM",
    customer: "Willem Song",
    cost: 10,
    quantity: 1,
    type: "cheese"
  },
  {
    time: "11:55 AM",
    customer: "Julie Styles",
    cost: 12,
    quantity: 1,
    type: "pepperoni"
  },
  {
    time: "12:00 PM",
    customer: "Julie Styles",
    cost: 12,
    quantity: 1,
    type: "pepperoni"
  },
  {
    time: "1:00 PM",
    customer: "Real Company Inc",
    cost: 300,
    quantity: 30,
    type: "cheese"
  },
  {
    time: "1:50 PM",
    customer: "Redbeard The Pyrate",
    cost: 120,
    quantity: 10,
    type: "mushroom"
  },
  {
    time: "1:50 PM",
    customer: "KJ",
    cost: 30,
    quantity: 2,
    type: "works"
  },
  {
    time: "2:30 PM",
    customer: "Zack Attack",
    cost: 45,
    quantity: 3,
    type: "works"
  },
  {
    time: "6:00 PM",
    customer: "Sandy Member",
    cost: 30,
    quantity: 3,
    type: "cheese"
  },
];

/**
* Challenge: Create a document ready with JQuery which will call into
* your "initializeApp" function.
*/

/**
* Challenge: Create an empty "initializeApp" function.
*/

/**
* Challenge: Create a ES6 class called "Order", in the constructor
* accept a parameter representing the order data, save this to a "data"
* property in the object. Create a "domElements" property which will
* be an object with 2 properties, one called "list" and the other
* "detail" both will be empty object literals.
* 
* Create a function called "getData" which will return the data property.
* 
* Create a function called "renderRow" which will build the DOM
* elements using the data saved in the "data" property and return
* the DOM elements back to the caller.
* 
* - stop here and make sure you've tested the Order class functionality.
*  [ ] renderRow displays correctly
*/

/**
* Challenge: Create an ES6 class called "OrderList", in the constructor
* accept a paramter representing the DOM element pointers. Save each property
* to a "dom" property in the object wrapping the string in a JQuery initializer.
* Create an additional property called "orders" which will be an empty array.
* 
* Create a function called "addOrder" which will accept a parameter called "orderData"
* which will be a single object representing a single order. This will initialize
* a new instance of "Order" class, passing in the "orderData", then add the "Order"
* instance to the "orders" property of the class, and return the number of orders in
* the "orders" property.
* 
* Create a function called "loadOrders" which will accept a parameter called "orders"
* which will be the array of order objects. This function will loop through the array
* and for each item, call the function "addOrder".
* 
* Create a function called "renderOrders" which will accept an array of DOM elements
* and will empty the ".item-area" div and append the array to the div.
* 
* Create a function called "displayAllOrders" which will go through all items in the
* "orders" property, and for each item call the "renderRow" function, and save the
* result into a new array. Then, after complete, it will call into the "renderOrders"
* function and pass in the array of DOM elements.
* 
* Create a function called "addEventListeners" which will add event listeners to all
* of the different form & filter elements calling "handleOrderFilterAndSort".
* 
* Create a function called "handleOrderFilterAndSort" which will accept the
* event object and will, get all values from the form. Then, filter the list of orders
* in the "orders" property based on the filter values, and sort the filtered array
* according to the sort value. Next, pass the filtered array to the "renderOrders"
* ** REMEMBER: bind the function in the constructor.
* 
* - stop here and make sure you've tested the OrderList class functionality.
*  [ ] addOrder intiializes correctly
*  [ ] loadOrders loads correctly
*  [ ] displayAllOrders renders correctly
*  [ ] handleOrderFilterAndSort applies the filters as the user interacts with the page.
*/

/**
* Challenge: Modify your "initializeApp" function to create a new
* instance of the class "OrderList" passing in an object containing all of
* the pointers to the DOM elements on the page which will be saved to a
* global variable called "orderList"
{
  itemArea: ".item-area",
  timeSortHeader: ".sort-time",
  customerSortHeader: ".sort-customer",
  typeSortHeader: ".sort-type",
  quantitySortHeader: ".sort-quantity",
  costSortHeader: ".sort-cost",
  sortInput: "#sortInput"
}
* call into the "loadOrders" function and pass in the "OrderData" array
* call into the "displayAllOrders" function.
* call into the "addEventListeners" function.
* 
* - stop here and test your page.
*/


$(document).ready(initilized);


function initilized() {
  var ol = new OrderList({
    itemArea: '.item-area',
    sortInput: '#sortInput',
    time: '.sort-time',
    customer: '.sort-customer',
    quantity: '.sort-quantity',
    cost: '.sort-cost',
    type: '.sort-type',
    nameInput: '#nameInput',
    typeInput: '#typeInput',
    quantityFromInput: '#quantityFromInput',
    quantityToInput: '#quantityToInput',
    priceFromInput: '#priceFromInput',
    priceToInput: '#priceToInput',
    navgationBar:"#navgationBar"
  })
  ol.loadData(Orders);
  ol.displayAllOrders();
  ol.addEventHandler();
  ol.loadMenu();
}

class Order {
  constructor(data, callbacks) {
    this.data = data;
    this.callbacks = callbacks;
  }
  render() {
    var row = $("<div>", {
      class: `row`
    })
    var time = $("<div>", {
      class: `col-2`,
      text: this.data.time
    })
    var customer = $("<div>", {
      class: `col-3`,
      text: this.data.customer
    })
    var type = $("<div>", {
      class: `col-3`,
      text: this.data.type
    })
    var quantity = $("<div>", {
      class: `col-2`,
      text: this.data.quantity
    })
    var cost = $("<div>", {
      class: `col-2`,
      text: this.data.cost
    })
    row.append(time, customer, type, quantity, cost);
    return row;

  }
}

class OrderList {
  constructor(elementConfig) {
    this.itemArea = $(elementConfig.itemArea);
    this.dom = {
      sort: {
        sortInput: $(elementConfig.sortInput),
      },
      headers: {
        time: $(elementConfig.time),
        customer: $(elementConfig.customer),
        quantity: $(elementConfig.quantity),
        cost: $(elementConfig.cost),
        type: $(elementConfig.type),
      },
      input: {
        nameInput: $(elementConfig.nameInput),
        typeInput: $(elementConfig.typeInput),
        quantityFromInput: $(elementConfig.quantityFromInput),
        quantityToInput: $(elementConfig.quantityToInput),
        priceFromInput: $(elementConfig.priceFromInput),
        priceToInput: $(elementConfig.priceToInput),
      },
      nav:{
        navgationBar:$(elementConfig.navgationBar)
      }
    }
    this.orderList = [];
    this.boolean = true;

    this.addData = this.addData.bind(this);
    this.addEventHandler = this.addEventHandler.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.handleOrderFilterAndSort = this.handleOrderFilterAndSort.bind(this);
    this.changePage = this.changePage.bind(this);
    this.nav = new NavigationBar({
      click:this.changePage
    });

  }
  changePage(list){
    this.nav.changePage(list);
  }
  addData(data) {
    this.orderList.push(new Order(data, {
      click: this.handleClick
    }))
  }
  loadData(orders) {
    orders.forEach(this.addData)
  }
  render(orderlist) {
    var list = orderlist.map(v => v.render());
    this.itemArea.empty().append(list);
  }
  loadMenu(){
    this.dom.nav.navgationBar.append(this.nav.loadMenuItems())
  }
  displayAllOrders() {
    this.render(this.orderList)
  }
  handleClick() {

  }
  addEventHandler() {
    this.dom.sort.sortInput.change(this.handleOrderFilterAndSort);
    this.dom.headers.time.click(this.handleHeaderClick);
    this.dom.headers.customer.click(this.handleHeaderClick);
    this.dom.headers.quantity.click(this.handleHeaderClick)
    this.dom.headers.cost.click(this.handleHeaderClick);
    this.dom.headers.type.click(this.handleHeaderClick);

    this.dom.input.nameInput.keyup(this.handleOrderFilterAndSort);
    this.dom.input.typeInput.change(this.handleOrderFilterAndSort);
    this.dom.input.quantityFromInput.keyup(this.handleOrderFilterAndSort);
    this.dom.input.quantityToInput.keyup(this.handleOrderFilterAndSort);
    this.dom.input.priceFromInput.keyup(this.handleOrderFilterAndSort);
    this.dom.input.priceToInput.keyup(this.handleOrderFilterAndSort);
  }

  handleHeaderClick(e) {
    var target = $(e.currentTarget);
    var type = target.attr('data-type');
    var hasAsc = target.hasClass("fa-sort-asc");
    var direction = hasAsc ? "desc" : "asc";
    this.dom.sort.sortInput.val(type + "-" + direction);
    this.dom.sort.sortInput.trigger("change");
    console.log(type);

  }

  handleOrderFilterAndSort() {

    var nameInputVal = this.dom.input.nameInput.val();
    var typeInputVal = this.dom.input.typeInput.val();
    var quantityFromInput = this.dom.input.quantityFromInput.val();
    var quantityToInput = this.dom.input.quantityToInput.val();
    var priceFromInput = this.dom.input.priceFromInput.val();
    var priceToInput = this.dom.input.priceToInput.val();

    var sortInput = this.dom.sort.sortInput.val();

    var filterResult = this.orderList;

    if (nameInputVal) {
      filterResult = filterResult.filter(v => {
        var data = v.data;
        return data.customer.toLowerCase().includes(nameInputVal);
      })
    }
    if (typeInputVal) {
      filterResult = filterResult.filter(v => {
        return v.data.type == typeInputVal;
      })
    }
    if (quantityFromInput) {
      filterResult = filterResult.filter(v => {
        return v.data.quantity >= quantityFromInput;
      })
    }
    if (quantityToInput) {
      filterResult = filterResult.filter(v => {
        return v.data.quantity <= quantityToInput;
      })
    }
    if (priceFromInput) {
      filterResult = filterResult.filter(v => {
        return v.data.cost >= priceFromInput;
      })
    }
    if (priceToInput) {
      filterResult = filterResult.filter(v => {
        return v.data.cost <= priceToInput;
      })
    }
    this.dom.headers.time.removeClass("fa-sort-asc fa-sort-desc");
    this.dom.headers.customer.removeClass("fa-sort-asc fa-sort-desc");
    this.dom.headers.quantity.removeClass("fa-sort-asc fa-sort-desc");
    this.dom.headers.cost.removeClass("fa-sort-asc fa-sort-desc");
    this.dom.headers.type.removeClass("fa-sort-asc fa-sort-desc");

    if (sortInput) {
      var [type, direction] = sortInput.split("-");

      filterResult.sort((a, b) => {
        var aData = a.data;
        var bData = b.data;

        if (aData[type] > bData[type]) return direction == "asc" ? 1 : -1;
        if (aData[type] < bData[type]) return direction == "asc" ? -1 : 1;
        return 0;
      })
      this.dom.headers[type].addClass("fa-sort-" + direction);
    }
    this.render(filterResult)
  }
}
