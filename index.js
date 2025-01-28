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

function addTextTo(elem, str) {
    elem.textContent += str;
}

function moreBears() {
    animals.src = "http://placebear.com/400/200";
    animals.alt = "A bear.";
    animals.title = "A BEAR!";
}

function setId(elem, str) {
    elem.id = str;
    return elem;
}

function setClass(elem, str) {
    elem.className = str;
    return elem;
}

function addAClass(elem, str) {
    elem.classList.add(str);
    return elem;
}

function removeAClass(elem, str) {
    elem.classList.remove(str);
    return elem;
}

function newElement(name) {
    return document.createElement(name);
}

function findElementById(id) {
    return document.getElementById(id);
}

function findElementsByQuery(query) {
    return document.querySelectorAll(query);
}

function reverseList(query) {
    const list = document.querySelector(query);
    const items = Array.from(list.children);
    items.reverse();
    items.forEach(item => list.appendChild(item));

    return list;
}

function mover(moveThis, appendToThis) {
    const element = document.querySelector(moveThis);
    const target = document.querySelector(appendToThis);
    target.appendChild(element);
}

function filler(list, candidates) {
    candidates.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    })
}

function dupe(selector) {
    let element = document.querySelector(selector);
    let newElement = element.cloneNode(true);
    
    element.parentNode.appendChild(newElement);
}

function removeAll(selector) {
    document.querySelectorAll(selector).forEach(element => {
        element.remove();
    })
}

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