/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here
function replaceText(elem, str) {
    elem.textContent = str;
}

/*
    Inputs: elem: Element, str: String
    Return: None
    Description: This function appends the parameter string to the element's textContent.
*/
function addTextTo(elem, str) {
    elem.textContent += str;
}

/*
    Inputs: None
    Return: None
    Description: This function updates the src, alt, and title, of the animals element. 
*/
function moreBears() {
    animals.src = "http://placebear.com/400/200";
    animals.alt = "A bear.";
    animals.title = "A BEAR!";
}

/*
    Inputs: elem: Element, str: String
    Return: elem: Element
    Description: This function sets the id of the element to str.
*/
function setId(elem, str) {
    elem.id = str;
    return elem;
}

/*
    Inputs: elem: Element, str: String
    Return: elem: Element
    Description: This function sets the className of the element to str.
*/
function setClass(elem, str) {
    elem.className = str;
    return elem;
}

/*
    Inputs: elem: Element, str: String
    Return: elem: Element
    Description: This function adds a new class str to elem.
*/
function addAClass(elem, str) {
    elem.classList.add(str);
    return elem;
}

/*
    Inputs: elem: Element, str: String
    Return: elem: Element
    Description: This function removes a class str from elem.
*/
function removeAClass(elem, str) {
    elem.classList.remove(str);
    return elem;
}

/*
    Inputs: name: String
    Return: None
    Description: This function creates a new element instance of name.
*/
function newElement(name) {
    return document.createElement(name);
}

/*
    Inputs: id: String
    Return: Element
    Description: This function retrieves the first element with the provided id.
*/
function findElementById(id) {
    return document.querySelector(`#${id}`);
}

/*
    Inputs: query: String 
    Return: NodeList
    Description: This function retrieves a NodeList of all elements that match query.
*/
function findElementsByQuery(query) {
    return document.querySelectorAll(query);
}

/*
    Inputs: query: String
    Return: Array
    Description: This function reverses the contents of unordered/ordered lists.
*/
function reverseList(query) {
    const list = document.querySelector(query);
    const items = Array.from(list.children);

    items.reverse();
    items.forEach(item => list.appendChild(item));

    return list;
}

/*
    Inputs: moveThis: elem, appendToThis: elem
    Return: None
    Description: This function moves the element "moveThis" to the child of element "appendToThis".
*/
function mover(moveThis, appendToThis) {
    const element = document.querySelector(moveThis);
    const target = document.querySelector(appendToThis);
    target.appendChild(element);
}

/*
    Inputs: list: elem, candidates: Array
    Return: None
    Description: This function adds each candidate item as a list item to the list element.
*/
function filler(list, candidates) {
    candidates.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    })
}

/*
    Inputs: selector: String
    Return: None
    Description: This function duplicates an element, and appends it to its parent.
*/
function dupe(selector) {
    let element = document.querySelector(selector);
    let newElement = element.cloneNode(true);
    
    element.parentNode.appendChild(newElement);
}

/*
    Inputs: selector: String
    Return: None
    Description: This function removes all elements that match the selector.
*/
function removeAll(selector) {
    document.querySelectorAll(selector).forEach(element => {
        element.remove();
    })
}

/*
    Inputs: None
    Return: Object
    Description: This function returns an object containing the name, speed, and student retrieved from input.
*/
function getUserData() {
    const name = document.querySelector("#username").value;
    const speed = document.querySelector("#speed").value;
    const student = document.querySelector("#student").checked;

    return {
        name: name,
        speed: parseInt(speed, 10),
        student: student
    }
}