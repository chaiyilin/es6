//NodeList_HTMLCollection_jquery_array

//http://stackoverflow.com/questions/15763358/difference-between-htmlcollection-nodelists-and-arrays-of-objects

//returns a NodeList
document.getElementsByTagName("td");
// to array
Array.prototype.slice.call(document.childNodes);
//es6
var divs = document.querySelectorAll('div');
var arr = Array.from(divs); // Array of <div>s
var arr=[...divs]

//returns a jQuery object, then .toArray()
$("td");

//The biggest differences between standard DOM collections and jQuery selections: live vs snapshot

//https://toddmotto.com/a-comprehensive-dive-into-nodelists-arrays-converting-nodelists-and-understanding-the-dom/
// return a NodeList
var divs = document.getElementsByTagName('div');
//returns a static NodeList, not live
var divs = document.querySelectorAll('div');

//regular for loop is fine
for (var i = 0; i < divs.length; i++) {
    // access to individual element:
    var elem = divs[i];
}

// but not forEach

//live collection, so not always want to convert a NodeList to Array
    var nodes = document.getElementsByTagName('div');

    // outputs 3
    console.log(nodes);

    // create a new element
    var newDiv = document.createElement('div');
    document.body.appendChild(newDiv);

    // outputs 4
    console.log(nodes);

