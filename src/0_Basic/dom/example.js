//https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/

//the result of .querySelector() is not live;
//immediately gathers everything in a static list, making it less performant.

//first match
const myElement = document.querySelector('#foo > div.bar');
//check match
myElement.matches('div.bar') === true;
//all occurrences
const myElements = document.querySelectorAll('.bar');
//from parent
const myChildElemet = myElement.querySelector('input[type="submit"]');

//live
//element interface
myElement.children
myElement.firstElementChild
myElement.lastElementChild
myElement.previousElementSibling
myElement.nextElementSibling

//node interface
myElement.childNodes
myElement.firstChild
myElement.lastChild
myElement.previousSibling
myElement.nextSibling
myElement.parentNode
myElement.parentElement

myElement.firstChild.nodeType === 3 // this would be a text node
myElement.firstChild.nodeType instanceof Text

//modify
myElement.classList.add('foo')
myElement.classList.remove('bar')
myElement.classList.toggle('baz')

// Get an attribute value
const value = myElement.value

// Set an attribute as an element property
myElement.value = 'foo'

// Set multiple properties using Object.assign()
Object.assign(myElement, {
    value: 'foo',
    id: 'bar'
})

// Remove an attribute
myElement.value = null

//Note that there are also the methods .getAttibute(), .setAttribute() and .removeAttribute()
//only use them for attributes that don’t have a corresponding DOM property (such as colspan) or...

myElement.style.marginLeft = '2em'
//vs
window.getComputedStyle(myElement).getPropertyValue('margin-left')

// Append element1 as the last child of element2
element1.appendChild(element2)

// Insert element2 as child of element 1, right before element3
element1.insertBefore(element2, element3)

// Create a clone
//The .cloneNode() method optionally takes a boolean as argument; if set to true, a deep copy will be created, meaning its children are also cloned.
const myElementClone = myElement.cloneNode()
myParentElement.appendChild(myElementClone)

const myNewElement = document.createElement('div')
const myNewTextNode = document.createTextNode('some text')

myParentElement.removeChild(myElement)
myElement.parentNode.removeChild(myElement)

// Replace the inner HTML
myElement.innerHTML = `
  <div>
    <h2>New content</h2>
    <p>beep boop beep boop</p>
  </div>
`

// Remove all child nodes
myElement.innerHTML = null

// Append to the inner HTML
myElement.innerHTML += `
  <a href="foo.html">continue reading...</a>
  <hr/>
`

const link = document.createElement('a')
const text = document.createTextNode('continue reading...')
const hr = document.createElement('hr')

link.href = 'foo.html'
link.appendChild(text)
myElement.appendChild(link)
myElement.appendChild(hr)

const fragment = document.createDocumentFragment()

fragment.appendChild(text)
fragment.appendChild(hr)
myElement.appendChild(fragment)

