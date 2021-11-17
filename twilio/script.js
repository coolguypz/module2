//https://www.twilio.com/docs/sms/api/message-resource#read-multiple-message-resources
//https://www.twilio.com/docs/sms/api/message-resource#create-a-message-resource

/**
 * How to base64 encode/decode
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
 */

/**
 * NOTE: in the trial account, you will only be able to text your own telephone number.
 */

/**
 * Challenge: Create a ES6 class called "Message", in the constructor
 * accept a parameter representing the message data, save this to a "data"
 * property in the object. Create a "dom" property which will be an
 * empty object literal.
 * 
 * Create a function called "renderRow" which will build the DOM
 * elements using the data saved in the "data" property and return
 * the DOM elements back to the caller.
 * 
 * - stop here and make sure you've tested the Message class functionality.
 *  [ ] renderRow displays correctly
 */

/**
* Challenge: Create an ES6 class called "MessageList", in the constructor
* accept a paramter representing the DOM element pointers. Save each property
* to a "dom" property in the object wrapping the string in a JQuery initializer.
* Create an additional property called "messages" which will be an empty array.
* 
* Create a function called "addMessage" which will accept a parameter called "messageData"
* which will be a single object representing a single message. This will initialize
* a new instance of "Message" class, passing in the "messageData", and an object literal
* with a click property set to the "handleSendClick" function, then add the "Message"
* instance to the "messages" property of the class, and return the number of messages in
* the "messages" property.
* 
* Create a function called "loadMessages" which will accept a parameter called "messages"
* which will be the array of message objects. This function will loop through the array
* and for each item, call the function "addMessage".
* 
* Create a function called "renderMessages" which will accept an array of DOM elements
* and will empty the ".item-area" div and append the array to the div.
* 
* Create a function called "displayAllMessages" which will go through all items in the
* "messages" property, and for each item call the "renderRow" function, and save the
* result into a new array. Then, after complete, it will call into the "renderMessages"
* function and pass in the array of DOM elements.
* 
* Create a function called "authenticateTwillio" which will have two parameters, but will
* create an ajax call to the endpoint https://api.twilio.com/2010-04-01/Accounts. The
* dataType will be "xml", it will have a "Authorization" header, which will be set to a
* "Basic " followed by a base64 encoded string of the {Account_SID}:{Account_Secret}. Upon
* success call into the "processAuthenticationFromTwillio", if unsuccessful, call into the
* "failedAuthenticationFromTwillio".
* 
* Create a function called "processAuthenticationFromTwillio" which will accept the response
* body as a parameter. Create a variable called "$response" and assign it to the value of
* a jquery object initialized with the response body paramter. Use the jQuery ".find" method
* to locate the "Status" node and call the ".text" function on the result. If the value is
* "active", then call into the "getMessagesFromServer". Otherwise console log the result.
* 
* Create a function called "failedAuthenticationFromTwillio" which will accept the xhr object
* and will console error "Unable to authenticate with twillio" followed by the "responseText"
* property of the xhr object.
* 
* Create a function called "getMessagesFromServer" which will have a parameter representing
* the search query. Inside the function, create a new http GET request with the data type
* set to "xml" for the endpoint https://api.twilio.com/2010-04-01/Accounts/{Account_SID}/Messages.json
* it will have a "Authorization" header, which will be set to "Basic " followed by a base64
* encoded string of the {Account_SID}:{Account_Secret}
* If successful, have the response call the "processMessagesFromServer", if unsuccessful,
* have the response call "failedMessagesFromServer"
* 
* Create a function called "processMessagesFromServer" which will accept the response
* body as the parameter. Check to see if the response body contains the "messages" property,
* if so, clear the "messages" property of the current class, then call into the "loadMessages"
* function and pass in the "messages" property, then call into the "displayAllMessages".
* ** REMEMBER: bind the function in the constructor.
* 
* Create a function called "failedMessagesFromServer" which will accept
* the xhr object as a parameter. It will console.error, failed to get messages
* ** REMEMBER: bind the function in the constructor.
* 
* Create a function called "addEventListeners" which will accept no parameters,
* inside, add a click event handler to the send button, which will fire
* "handleSearchClick".
* 
* Create a function called "handleSendClick" which will accept the Event object
* current instance of the Message class, "message". Inside the function, get the
* data stored in the "number" input and "message" input. Create a new POST ajax
* call to https://api.twilio.com/2010-04-01/Accounts/{Account_SID}/Messages.json
* it will have a "Authorization" header, which will be set to "Basic " followed by
* a base64 encoded string of the {Account_SID}:{Account_Secret}
* set the "dataType" to "json"
* set the content type to "application/x-www-form-urlencoded"
* set the data to a new object with the following properties:
*  "To": which will be the number pulled from the "number" input (prefixed with "+1")
*  "From": which will be the twillio account number
*  "Body": which will be the text from the message input.
* If successful, call into "processMessageFromServer", otherwise call into
* "failedMessageFromServer"
* ** REMEMBER: bind the function in the constructor.
* 
* Create a function called "processMessageFromServer" which will accept the response
* body, then call into the "addMessage" function passing in the response body. Then
* call into the "displayAllMessages" function
* ** REMEMBER: bind the function in the constructor.
* 
* Create a function called "failedMessageFromServer" which will console error
* "failed to send message"
* ** REMEMBER: bind the function in the constructor.
*/

/**
* Challenge: Create your "initializeApp" function which will create a new
* instance of the class "MessageList" passing in an object containing all of
* the pointers to the DOM elements on the page which will be saved to a
* global variable called "messageList"
{
   messageArea: ".message-list",
   sendButton: ".btn-send",
   messageInput: "#messageInput",
   numberInput: "#numberInput"
}
* call into the "addEventListeners" function.
* call into the "authenticateTwillio" function.
*/

/**
 * Challenge: Create a document ready with JQuery which will call into
 * your "initializeApp" function.
 * 
 * - stop here and make sure you've tested the MessageList class functionality.
 *  [ ] addMessage intiializes correctly
 *  [ ] loadMessages loads correctly
 *  [ ] displayAllMessages renders correctly
 *  [ ] handleSendClick gets the details of the message and send the message successfully.
 */

class Message {
  constructor(data, callbacks) {
    this.data = data;
    this.callbacks = callbacks;

    this.dom = {

    }
  }

  renderRow() {
    var row = this.dom.row = $("<div>", {
      class: "row",
    })
    var data = $("<div>", {
      class: "col"
    })
    var number = $("<div>", {
      class: "col"
    })
    var message = $("<div>", {
      class: "col"
    })
    var status = $("<div>", {
      class: "col"
    })
    row.append(data, number, message, status);
    return row
  }
}


class MessageList {
  constructor(elementConfig) {
    this.dom = {
      messageArea: $(elementConfig.messageArea),
      sendButton: $(elementConfig.sendButton),
      messageInput: $(elementConfig.messageInput),
      numberInput: $(elementConfig.numberInput),
      navgationBar: $(elementConfig.navgationBar),

      nav: {
        navgationBar: $(elementConfig.navgationBar)
      },
    }
    this.addMessage = this.addMessage.bind(this);
    this.handleSendClick = this.handleSendClick.bind(this);
    this.processMessagesFromServer = this.processMessagesFromServer.bind(this);
    this.failedMessagesFromServer = this.failedMessagesFromServer.bind(this);
    this.changePage = this.changePage.bind(this);
    
    this.nav = new NavigationBar({
      click: this.changePage
    });
    this.messages = [];
  }

  changePage(list){
    this.nav.changePage(list);
  }

  addMessage(messageData) {
    this.messages.push(new Message(messageData, {
      click: this.handleSendClick
    }))
  }
  loadMessages(messages) {
    messages.forEach(this.addMessage);
  }
  renderMessages(messages) {
    var message = messages.map(v => { return v.renderRow() })
    this.dom.messageArea.empty().append(message);
  }
  loadMenu() {
    this.dom.nav.navgationBar.append(this.nav.loadMenuItems())
  }
  displayAllMessages() {
    this.renderMessages(this.messages)
  }
  authenticateTwillio() {

  }
  processAuthenticationFromTwillio() {
    this.getMessagesFromServer();
  }
  failedAuthenticationFromTwillio() {

  }
  getMessagesFromServer() {
    $.ajax({
      url: `https://api.twilio.com/2010-04-01/Accounts/{Account_SID}/Messages.json`,
      method: "GET",
      dataType: "json",
    }).done(this.processMessagesFromServer)
      .fail(this.failedMessagesFromServer)
  }
  processMessagesFromServer(res) {
    console.log("successed processed data: ", res);
  }
  failedMessagesFromServer(xhr) {
    console.log("failedMessageFromServer: ", xhr)
  }
  handleSendClick(data) {
    console.log("handle Send click data: ", data)
  }
  processMessageFromServer() {

  }
  failedMessageFromServer() {

  }
  addEventListeners() {

  }

}

$(document).ready(initialized);

function initialized() {
  var ml = new MessageList({
    messageArea: ".message-list",
    sendButton: ".btn-send",
    messageInput: "#messageInput",
    numberInput: "#numberInput",
    navgationBar: "#navgationBar"
  })
  ml.addEventListeners();
  ml.authenticateTwillio();
  ml.loadMenu();
}