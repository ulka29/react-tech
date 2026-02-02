// DOM (Document Object Model) is: A JavaScript representation of your HTML as a tree of objects.



/*
window: Top-level object of browser
    It Represents:browser tab, screen, history, storage, timers

window.alert("Hi")
window.setTimeout()
window.localStorage
*/



/*
document:only the webpage (HTML)
    It Represents:Used to select elements, modify content, change UI
    document.querySelector("h1")

    window
        └── document
*/



/*
DOM Nodes vs Elements

Node (generic): Everything is a node
tags, text, comments, attributes

Element (specific):Only HTML tags
<div>, <p>, <h1></h1>

Ex: childNodes     // includes text nodes
    children       // only elements
*/



/*
Selecting Elements
1. getElementById (fastest)(live)       : document.getElementById("title")
2. getElementsByClassName               : document.getElementsByClassName("card")
                                          Returns HTMLCollection (array-like)
3. querySelector(most used in modern JS): document.querySelector(".card")
                                          Uses CSS selectors like "#id", ".class", "div p", "input[type=text]"
4. querySelectorAll                     : document.querySelectorAll(".card")
                                          Returns NodeList (can loop)
                                          Mostly use querySelector / querySelectorAll (static)
*/
    
/*
Manipulating Elements
Change text                : element.innerText = "Hello"
                             element.textContent = "Hello"
                             Usually use textContent
Change styles              : element.style.color = "red"
                             element.style.backgroundColor = "black"
Change classes (better way):element.classList.add("dark")
                            element.classList.remove("dark")
                            element.classList.toggle("dark")
Read attributes            :element.getAttribute("href")
                            element.setAttribute("href", "google.com")
            
*/

// LIVE
// DOM change
//    ↓
// Collection updates automatically

// STATIC
// DOM change
//    ↓
// Collection unchanged
//    ↓
// Need to query again

// use querySelectorAll()
const paras = document.querySelectorAll(".para_orignal");

para_toggle.addEventListener("click", () => {
  paras.forEach(p => p.classList.toggle("para"));
});



// 1. Content Manipulation
innerText= respects CSS
textContent= ignores CSS, fast, recommended

textContent → text
innerHTML → only when inserting HTML

//2. Attributes Manipulation

// <img src="cat.jpg" alt="cat">

img.setAttribute("src", "dog.jpg")
img.getAttribute("src")
img.removeAttribute("alt")

{/* modern way */}
const img = document.querySelector("img")
img.src = "new.jpg"


// 3. Styles Manipulation
Direct style (not scalable)
element.style.color = "red"

//classList (professional way)
element.classList.add("active")
element.classList.remove("active")
element.classList.toggle("active")

//4. Creating Elements (MOST IMPORTANT PART)


const div = document.createElement("div")
// Creates element in memory only Not visible yet.
parent.appendChild(div) //Now visible.
parent.prepend(div) //Adds at beginning.
div.remove() //Deletes element.
parent.replaceChild(newNode, oldNode)