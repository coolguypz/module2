// const HOST = "https://api.ohmvision.com/proxy/openlibrary.org"

// $.ajax({
//   url: HOST + "/search.json?q=the+lord+of+the+rings",
//   method: "GET",
//   dataType: "json"
// }).done(r => {
//   console.log(r);
//   $.ajax({
//     url: HOST + "/" + r.docs[0].key + '.json',
//     method: "GET",
//     dataType: "json"
//   }).done(d => console.log(d)).fail(xhr => console.error("fail"));
// }).fail(xhr => console.error("fail"));

/**
 * Challenge: Create a ES6 class called "Book", in the constructor
 * accept a parameter representing the book data, save this to a "data"
 * property in the object. Accept a second parameter representing
 * the callbacks, save this to a "callbacks" property in the object.
 * Create a "domElements" property which will be an object with 2
 * properties, one called "list" and the other "detail" both will be
 * empty object literals.
 * 
 * Create a function called "renderRow" which will build the DOM
 * elements using the data saved in the "data" property and return
 * the DOM elements back to the caller.
 * ** REMEMBER: add the event listener to the ".row" class.
 * 
 * Create a function called "renderDetail" which will build the DOM
 * elements using the data saved in the "detail" property and return
 * the DOM elements back to the caller.
 * 
 * Create a function called "handleClick" which will accept the
 * Event object as a parameter, "e". Inside, make a GET ajax call to
 * the url https://api.ohmvision.com/proxy/openlibrary.org/{data.key}.json,
 * with the data type set to "json" have the success call into
 * processDetailsFromServer, and the fail call into failedDetailsFromServer
 * 
 * Create a function called "processDetailsFromServer" which will accept
 * the result object as a parameter. It will save the results to the "detail"
 * property, then call into the "click" property of the "callbacks" property
 * and pass in the current instance of the Book class (using "this").
 * ** REMEMBER: bind the function in the constructor.
 * 
 * Create a function called "failedDetailsFromServer" which will accept
 * the xhr object as a parameter. It will console.error, failed to get book details
 * ** REMEMBER: bind the function in the constructor.
 * 
 * - stop here and make sure you've tested the Book class functionality.
 *  [ ] renderRow displays correctly
 *  [ ] handleClick fires ajax function when row is clicked.
 *  [ ] processDetailsFromServer fires callback function correctly.
 *         hint: you may need to create a Named function to test
 *              the click and callback functionality properly.
 */

/**
* Challenge: Create an ES6 class called "BookList", in the constructor
* accept a paramter representing the DOM element pointers. Save each property
* to a "dom" property in the object wrapping the string in a JQuery initializer.
* Create an additional property called "books" which will be an empty array.
* 
* Create a function called "addBook" which will accept a parameter called "bookData"
* which will be a single object representing a single book. This will initialize
* a new instance of "Book" class, passing in the "bookData", and an object literal
* with a click property set to the "handleBookClick" function, then add the "Book"
* instance to the "books" property of the class, and return the number of books in
* the "books" property.
* 
* Create a function called "loadBooks" which will accept a parameter called "books"
* which will be the array of book objects. This function will loop through the array
* and for each item, call the function "addBook".
* 
* Create a function called "renderBooks" which will accept an array of DOM elements
* and will empty the ".item-area" div and append the array to the div.
* 
* Create a function called "displayAllBooks" which will go through all items in the
* "books" property, and for each item call the "renderRow" function, and save the
* result into a new array. Then, after complete, it will call into the "renderBooks"
* function and pass in the array of DOM elements.
* 
* Create a function called "handleBookClick" which will accept the
* current instance of the Book class, "book". Inside the function, call into 
* the "renderDetail" function of the "book" class and append the result to
* the ".detail-area".
* ** REMEMBER: bind the function in the constructor.
* 
* Create a function called "handleSearchClick" which will accept the Event object, e,
* as a parameter, then call into "getBooksFromServer" passing in the search parameters.
* ** REMEMBER TO BIND THIS FUNCTION
* 
* Create a function called "getBooksFromServer" which will have a parameter representing
* the search query. Inside the function, create a new http GET request with the data type
* set to "json" for the endpoint https://api.ohmvision.com/proxy/openlibrary.org/search.json
* set the following query string paramters:
*  q: search query parameter
* If successful, have the response call the "processBooksFromServer", if unsuccessful,
* have the response call "failedBooksFromServer"
* 
* Create a function called "processBooksFromServer" which will accept the response
* body as the parameter. Check to see if the response body contains the "docs" property,
* if so, call into the "loadBooks" function and pass in the "docs" property,
* then call into the "displayAllBooks".
* ** REMEMBER: bind the function in the constructor.
* 
* Create a function called "failedBooksFromServer" which will accept
* the xhr object as a parameter. It will console.error, failed to get books
* ** REMEMBER: bind the function in the constructor.
* 
* Create a function called "addEventListeners" which will accept no parameters,
* inside, add a click event handler to the search button, which will fire "handleSearchClick"
*/

/**
* Challenge: Create your "initializeApp" function which will create a new
* instance of the class "BookList" passing in an object containing all of
* the pointers to the DOM elements on the page which will be saved to a
* global variable called "bookList"
{
   detailArea: ".detail-area",
   listArea: ".item-area",
   searchInput: "#searchInput",
   searchButton: ".btn-search"
}
* call into the "addEventListeners" function.
*/

/**
 * Challenge: Create a document ready with JQuery which will call into
 * your "initializeApp" function.
 * 
 * - stop here and make sure you've tested the BookList class functionality.
 *  [ ] addBook intiializes correctly
 *  [ ] loadBooks loads correctly
 *  [ ] displayAllBooks renders correctly
 *  [ ] handleBookClick gets the details of the book that was clicked.
 *  [ ] handleSearchClick makes an http GET call and returns the book data.
 */


$(document).ready(intiializes);

function intiializes() {
  var bl = new BookList({
    detailArea: ".detail-area",
    listArea: ".item-area",
    searchInput: "#searchInput",
    searchButton: ".btn-search",
    navgationBar: "#navgationBar"
  })
  bl.getBooksFromServer();
  bl.handleSearchClick();
  bl.addEventListeners();
  bl.loadMenu();
}

class Book {
  constructor(data, callbacks) {
    this.data = data;
    this.callbacks = callbacks;

    this.dom = {};

    this.handleClick = this.handleClick.bind(this);
    this.processDetailsFromServer = this.processDetailsFromServer.bind(this);
    this.failedDetailsFromServer = this.failedDetailsFromServer.bind(this);
  }
  handleClick(e) {
    if (this.detail) {
      this.callbacks.click(this);
    } else {
      $.ajax({
        url: `https://api.ohmvision.com/proxy/openlibrary.org/${this.data.key}.json`,
        method: "GET",
        dataType: "json",
      }).done(this.processDetailsFromServer)
        .fail(this.failedDetailsFromServer);
    }
  }
  processDetailsFromServer(res) {
    console.log("object: ", res);
    this.detail = res;
    this.callbacks.click(this);
  }
  failedDetailsFromServer(err) {
    console.log("failedDetailsFromServer: ", err)
  }
  renderRow() {
    var row = this.dom.row = $("<div>", {
      class: "row",
      click: this.handleClick
    })
    var title = $("<div>", {
      class: "col-5",
      text: this.data.title
    })
    var author = $("<div>", {
      class: "col-5",
      text: this.data.author_name
    })
    var year = $("<div>", {
      class: "col-2",
      text: this.data.publish_year
    })
    row.append(title, author, year);
    return row;
  }
  renderDetail() {

    var card = $("<div>", {
      class: "card",
    })
    var img = $("<img>", {
      class: "card-img-top",
      src: `http://covers.openlibrary.org/b/id/${this.detail.covers ? this.detail.covers : ""}.jpg`,
      alt: "Card image"
    })
    var overlay = $("<div>", {
      class: "card-img-overlay"
    })
    var title = $("<h4>", {
      class: "card-title",
      text: this.detail.title
    })
    var cardText = $("<p>", {
      class: "card-text card-text-scrollable",
      text: this.detail.subjects
    })

    overlay.append(title, cardText);
    card.append(img, overlay);
    return card;
  }
}

class BookList {
  constructor(elementConfig) {
    this.dom = {
      area: {
        detailArea: $(elementConfig.detailArea),
        listArea: $(elementConfig.listArea),
      },
      search: {
        searchInput: $(elementConfig.searchInput),
        searchButton: $(elementConfig.searchButton),
      },
      nav: {
        navgationBar: $(elementConfig.navgationBar)
      }
    }
    this.addBook = this.addBook.bind(this);
    this.loadBooks = this.loadBooks.bind(this);
    this.handleBookClick = this.handleBookClick.bind(this);
    this.getBooksFromServer = this.getBooksFromServer.bind(this);
    this.processBooksFromServer = this.processBooksFromServer.bind(this);
    this.failedBooksFromServer = this.failedBooksFromServer.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleEnterButton = this.handleEnterButton.bind(this);
    this.changePage = this.changePage.bind(this);
    this.books = [];
    this.nav = new NavigationBar({
      click:this.changePage
    });

  }
  changePage(list){
    this.nav.changePage(list);
  }
  addBook(book) {
    this.books.push(new Book(book, {
      click: this.handleBookClick
    }))
  }
  loadBooks(books) {
    books.forEach(this.addBook);
  }
  renderBooks(books) {
    var book = books.map(v => { return v.renderRow() });
    this.dom.area.listArea.empty().append(book);
  }
  loadMenu() {
    this.dom.nav.navgationBar.append(this.nav.loadMenuItems())
  }

  displayAllBooks() {
    this.renderBooks(this.books)
  }
  handleBookClick(bookdata) {
    var detail = bookdata.renderDetail();
    this.dom.area.detailArea.empty().append(detail);
  }
  handleSearchClick() {
    var searchVal = this.dom.search.searchInput.val();
    this.getBooksFromServer(searchVal);
  }
  getBooksFromServer(q) {
    if (q) {
      if (q.test("#$%^&*()@")) {
        alert("undefined enter");
      }
    }

    $.ajax({
      url: `https://api.ohmvision.com/proxy/openlibrary.org/search.json?q=${encodeURIComponent(q)}`,
      method: "GET",
      dataType: "json",
    }).done(this.processBooksFromServer)
      .fail(this.failedBooksFromServer);
  }
  processBooksFromServer(res) {
    this.books.length = 0;
    var books = [];
    if (res.docs.length) {
      books = res.docs;
      this.loadBooks(books)
      this.displayAllBooks();
    }
  }
  failedBooksFromServer(xml) {
    console.log("fail Books From Server", xml)
  }
  addEventListeners() {
    this.dom.search.searchButton.click(this.handleSearchClick);
    this.dom.search.searchInput.keydown(this.handleEnterButton)
  }
  handleEnterButton(event) {
    if (event.which == 13) {
      event.preventDefault();
      this.handleSearchClick();
    }
  }
}