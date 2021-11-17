


/*
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">PT Module 2 | Focused Javascript</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarWeek1" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
       <div class="collapse navbar-collapse" id="navbarWeek1">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarWeek1Link" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Week 1
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarWeek1Link">
                  <!-- filled in from the MenuItem class -->
                  <a class="dropdown-item" href="#">Variables</a>
                  <a class="dropdown-item" href="#">Conditionals</a>
                  <a class="dropdown-item" href="#">Loops</a>
                </div>
              </li>
            </ul>
          </div> 
    </nav>
*/

$(document).ready(initilized);

function initilized() {
  var nav = new NavigationBar();
  nav.loadMenuItems();
}

class NavigationBar {
  constructor(callbacks) {

    this.MENU_ITEMS = [
      {
        name: "Ajax Post (Twillio)",
        week: 5,
        link: "/twilio/index.html" // todo: update this to our path
      },
      {
        name: "BookWorm",
        week: 3,
        link: "/bookworm/index.html" // todo: update this to our path
      },
      {
        name: "PizzaOrder",
        week: 3,
        link: "/pizzaOrder/index.html" // todo: update this to our path
      },
      {
        name: "TacoList",
        week: 2,
        link: "/tacoList/index.html" // todo: update this to our path
      },
      {
        name: "Proposal",
        week: 1,
        link: "/Proposal/index.html" // todo: update this to our path
      },
    ];
    this.callbacks = callbacks;
    this.dom = {
      items: [],
      renderNav: {}
    }
    this.addMenuItem = this.addMenuItem.bind(this);
    this.renderNav = this.renderNav.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.loadMenuItems = this.loadMenuItems.bind(this);
    this.changePage = this.changePage.bind(this);

  }
  addMenuItem(navlist) {
    this.dom.items.push(new MenuItem(navlist, {
      click: this.handleItemClick
    }))
  }
  loadMenuItems() {
    this.MENU_ITEMS.forEach(this.addMenuItem);
    return this.renderNav(this.dom.items);
  }
  renderNav(list) {
    var navbar = this.dom.renderNav.navbar = $(`<nav>`, { class: "navbar navbar-expand-lg navbar-dark bg-dark" });
    var navbarBrand = this.dom.renderNav.navbarBrand = $(`<a>`, { class: "navbar-brand", href: "#", text: "PT Module 2 | Focused Javascript" })

    var button = this.dom.renderNav.button = $(`<button>`, { class: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarWeek1", "aria-controls": "navbarNavDropdown", "aria-expanded": "false", "aria-label": "Toggle navigation" })
    var spanIcon = this.dom.renderNav.spanIcon = $(`<span>`, { class: "navbar-toggler-icon" });
    button.append(spanIcon);
    navbar.append(navbarBrand, button)

    var collapse = this.dom.renderNav.collapse = $(`<div>`, { class: "collapse navbar-collapse", id: "navbarWeek1" });
    navbar.append(collapse);
    var ul = this.dom.renderNav.ul = $(`<ul>`, { class: "navbar-nav" });
    collapse.append(ul);

    var weeks = [1, 2, 3, 5];

    weeks.forEach((x,i) => {
      var weekDom = this.dom.renderNav.weeks = { "week ": x };
      var toggle = weekDom.toggle = $(`<a>`, { class: "nav-link dropdown-toggle", href: "#", id: "navbarWeek1Link", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false", text: `week ${x}` });
      var li = this.dom.renderNav.li = $(`<li>`, { class: "nav-item dropdown" });
      li.append(toggle);
      var dropDown = this.dom.renderNav.dropDown = $(`<div>`, { class: "dropdown-menu", "aria-labelledby": "navbarWeek1Link" });
      li.append(dropDown);
      var aTag = list.filter(v => { return v.data.week == x}).map(v => { return v.renderItem() });
      dropDown.append(aTag)
      ul.append(li);
      })
    return navbar;
    // return $(`#navgationBar`).append(navbar);

  }
  handleItemClick(list) {
    this.callbacks.click(list);
  }
  changePage(list) {
    window.location = `..${list.data.link}`;
  }
}

class MenuItem {
  constructor(data, callbacks) {
    this.data = data;
    this.callbacks = callbacks;
    this.dom = {

    }
    this.handleClick = this.handleClick.bind(this);
  }
  renderItem() {
    var a = $("<a>", {
      class: `dropdown-item`,
      // href:`../${this.data.link}`,
      text: this.data.name,
      click: this.handleClick
    })
    return a;
  }
  handleClick(e) {
    if (e) e.preventDefault();
    this.callbacks.click(this);
  }
}

/**
 * Challenge: Create the NavigationBar ES6 class.
 * Inside of the constructor, accept a parameter called "callbacks" which will be an object
 * containing the callbacks, declare a property called "dom" which will contain the
 * individual DOM elements. Declare a property called "items" which will be an empty array.
 *
 * Challenge: Create a function called "addMenuItem" which will accept a parameter representing
 * the data, create a new instance of "MenuItem" passing in the "data" parameter, and
 * an object containing the callbacks (click). Add the item into the "items" array.
 *
 * Challenge: Create a function called loadMenuItems which will accept an array of menu items.
 * and for each item, call "addMenuItem" and pass in the data object.
 *
 * Challenge: Create a function called "renderNav" which will generate the navigation area
 * using the above template.
 * Remember, rendering the nav includes rendering all of the menu items.
 *
 * Challenge: Create a function called "handleItemClick" which will accept a parameter
 * which will be the MenuItem object "item". Inside the function, get the text of the
 * menu item which was clicked, then call into the callbacks "click" function, pass the
 * current instance of the class and the name of the page from the item parameter
 * Remember to bind the function in the constructor.
 *
 * Challenge: Create a function called "changePage" which will accept a parameter
 * containing the name of the page the user wishes to change to. Change the page the user is
 * currently on by assigning "self.location" to the relative path of the lab index.html file.
 *
 * Challenge: Add the menu to each of the lab pages created throughout the course of the module.
 * You will need to create a function in each page's controller called "handlePageChange" which
 * will have a parameter containing the NavBar class, and another containing the name of
 * the page the user wishes to change to. Call into the "changePage" function in the "NavBar" class
 * and pass the page name.
*/

//               <a class="dropdown-item" href="#">Variables</a>
/**
 * Challenge: Create the MenuItem ES6 class.
 * Inside of the constructor, accept a parameter called "data" which will be an object and
 * a parameter called "callbacks" which will be an object. Create a property called "dom"
 * which will be an empty object.
 *
 * Challenge: Create a function called "renderItem" which will generate the menu item using the
 * above template.
 *
 * Challenge: Create a function called "handleClick" which will accept a parameter which
 * will be the Event object. Call into the "click" property of the "callbacks" property and
 * pass the current instance of the class.
 * Remember to bind the function in the constructor and add it as an event listener to the
 * "a" tag in renderItem.
 */