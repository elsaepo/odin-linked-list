# odin-linked-list
A JavaScript linked list as part of The Ofin Project curriculum
# Linked Lists
A linked list class created with JavaScript.

Part of The Odin Project's [curriculum](https://www.theodinproject.com/lessons/javascript-linked-lists).

Created by Carl Madsen, 2022.

## Functionality

* **append(value)** - Adds a new Node containing the specified value to the end of the list
* **prepend(value)** - Adds a new Node containing the specified value to the start of the list
* **size()** - Returns the size of the list
* **head** - Contains the first node in the list
* **tail** - Contains the last node in the list
* **at(index)** - Returns the node at the given index
* **pop()** - Removes the last Node from the list and returns it
* **contains(value)** - Returns true or false whether or not the specified value is contained within the list
* **find(value)** - Returns the index of the Node containing value, or null if not found
* **toString()** - Logs the list in the console with the following format: ( value ) -> ( value ) -> ( value ) -> null
* **insertAt(value, index)** - Inserts a new Node with the specified value at the given index within the list
* **removeAt(index)** - Removes the Node of the given index and returns it

## Learning outcomes & challenges

* **Linked Lists** are something that I've not done before, and only read about in passing. Implementing them into JavaScript really drove home the recursive methodology from previous lessons, as all of the methods created for the class used recursion in one way or another.
* Tracking the **list head and list tail** definitely upped the complexity of some of the functions, due to having to constantly keep in mind how the edge cases would affect the list - especially the insertAt and deleteAt methods when they were used at the beginning or end of the list.
* I fell in love with **classes** a lot more during this project - it made tracking objects and properties within the code a lot easier.