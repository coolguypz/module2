var bookListData = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Unknown",
    "country": "Sumer and Akkadian Empire",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh",
    "pages": 160,
    "title": "The Epic Of Gilgamesh",
    "year": -1700
  },
  {
    "author": "Unknown",
    "country": "Achaemenid Empire",
    "language": "Hebrew",
    "link": "https://en.wikipedia.org/wiki/Book_of_Job",
    "pages": 176,
    "title": "The Book Of Job",
    "year": -600
  },
  {
    "author": "Unknown",
    "country": "India/Iran/Iraq/Egypt/Tajikistan",
    "language": "Arabic",
    "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights",
    "pages": 288,
    "title": "One Thousand and One Nights",
    "year": 1200
  },
  {
    "author": "Unknown",
    "country": "Iceland",
    "language": "Old Norse",
    "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga",
    "pages": 384,
    "title": "Nj\u00e1l's Saga",
    "year": 1350
  },
  {
    "author": "Jane Austen",
    "country": "United Kingdom",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
    "pages": 226,
    "title": "Pride and Prejudice",
    "year": 1813
  },
  {
    "author": "Honor\u00e9 de Balzac",
    "country": "France",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot",
    "pages": 443,
    "title": "Le P\u00e8re Goriot",
    "year": 1835
  },
  {
    "author": "Samuel Beckett",
    "country": "Republic of Ireland",
    "language": "French, English",
    "link": "https://en.wikipedia.org/wiki/Molloy_(novel)",
    "pages": 256,
    "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
    "year": 1952
  },
  {
    "author": "Giovanni Boccaccio",
    "country": "Italy",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/The_Decameron",
    "pages": 1024,
    "title": "The Decameron",
    "year": 1351
  },
  {
    "author": "Jorge Luis Borges",
    "country": "Argentina",
    "language": "Spanish",
    "link": "https://en.wikipedia.org/wiki/Ficciones",
    "pages": 224,
    "title": "Ficciones",
    "year": 1965
  },
  {
    "author": "Emily Bront\u00eb",
    "country": "United Kingdom",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Wuthering_Heights",
    "pages": 342,
    "title": "Wuthering Heights",
    "year": 1847
  },
  {
    "author": "Albert Camus",
    "country": "Algeria, French Empire",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)",
    "pages": 185,
    "title": "The Stranger",
    "year": 1942
  },
  {
    "author": "Paul Celan",
    "country": "Romania, France",
    "language": "German",
    "link": "",
    "pages": 320,
    "title": "Poems",
    "year": 1952
  },
  {
    "author": "Louis-Ferdinand C\u00e9line",
    "country": "France",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night",
    "pages": 505,
    "title": "Journey to the End of the Night",
    "year": 1932
  },
  {
    "author": "Miguel de Cervantes",
    "country": "Spain",
    "language": "Spanish",
    "link": "https://en.wikipedia.org/wiki/Don_Quixote",
    "pages": 1056,
    "title": "Don Quijote De La Mancha",
    "year": 1610
  },
  {
    "author": "Geoffrey Chaucer",
    "country": "England",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales",
    "pages": 544,
    "title": "The Canterbury Tales",
    "year": 1450
  },
  {
    "author": "Anton Chekhov",
    "country": "Russia",
    "language": "Russian",
    "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov",
    "pages": 194,
    "title": "Stories",
    "year": 1886
  },
  {
    "author": "Joseph Conrad",
    "country": "United Kingdom",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Nostromo",
    "pages": 320,
    "title": "Nostromo",
    "year": 1904
  }
];

/**
* Challenge: Create a document ready with JQuery which will call into
* your "initializeApp" function.
*/

/**
* Challenge: Create your "initializeApp" function which will create a new
* instance of the class "BookList" passing in an object containing all of
* the pointers to the DOM elements on the page which will be saved to a
* global variable called "bookList"
{
  bookArea: ".book-area",
  headerArea: ".header-area",
  listArea: ".list-area",
  pageTitle: ".page-title",
  pageHeader: ".page-header",
}
*/

/**
* Challenge: Create an ES6 class called "BookList", in the constructor
* accept a paramter representing the DOM element pointers. Save each property
* to a "dom" property in the object wrapping the string in a JQuery initializer.
* Create an additional property called "books" which will be an empty array.
* 
* Create a function called "addBook" which will accept a parameter called "bookData"
* which will be a single object representing a single book. This will initialize
* a new instance of "Book" class, passing in the "bookData", then add the "Book"
* instance to the "books" property of the class, and return the number of books
* in the "books" property.
* 
* Create a function called "loadBooks" which will accept a parameter called "books"
* which will be the array of book objects. This function will loop through the array
* and for each item, call the function "addBook".
* 
* Create a function called "renderBooks" which will accept an array of DOM elements
* and will empty the ".book-area" div and append the array to the div.
* 
* Create a function called "displayAllBooks" which will go through all items in the
* "books" property, and for each item call the "renderBook" function, and save the
* result into a new array. Then, after complete, it will call into the "renderBooks"
* function and pass in the array of DOM elements.
*/

/**
* Challenge: Create a ES6 class called "Book", in the constructor
* accept a parameter representing the song data, save this to a "data"
* property in the object.
* 
* Create a function called "renderBook" which will build the DOM
* elements using the data saved in the "data" property and return
* the DOM elements back to the caller.
*/




class Book {
  constructor(data) {
    this.data = data;
    this.dom = {

    }
  }

  render() {
    var row = $("<div>", {
      class: "row"
    })
    var title = $("<div>", {
      class: "col",
      text: this.data.title
    })
    var aTag = $("<div>", {
      href: this.data.link
    })
    title.append(aTag);
    var author = $("<div>", {
      class: "col-3",
      text: this.data.author
    })
    var country = $("<div>", {
      class: "col-2",
      text: this.data.country
    })
    var language = $("<div>", {
      class: "col-1",
      text: this.data.language
    })
    var pages = $("<div>", {
      class: "col-1",
      text: this.data.pages
    })
    var year = $("<div>", {
      class: "col-1",
      text: this.data.year
    })
    row.append(title, author, country, language, pages, year);
    return row;
  }
}


class BookList {
  constructor(data, domElement) {
    this.data = data;
    this.bookArea = $(domElement.bookArea)

    this.addBook = this.addBook.bind(this);

    this.list = [];

    this.data.forEach(this.addBook);
  }

  addBook(book) {
    this.list.push(new Book(book));
    return this.list;
  }

  loadBook() {
   var oneBook = this.list.map(v =>{
    return v.render();
   })
    this.bookArea.empty().append(oneBook);
  }
}




$(document).ready(initialized);

function initialized() {

  var bookList = new BookList(bookListData,{
    bookArea: ".book-area",
    headerArea: ".header-area",
    listArea: ".list-area",
    pageTitle: ".page-title",
    pageHeader: ".page-header",
  })

  bookList.loadBook();

}






















