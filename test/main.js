const button = document.getElementById("button");
const container = document.getElementById("container");

// STEP 1 - Creating an Element
    const p = document.createElement("p");

// STEP 2 -  Add Attributes
    const text = "Hello World!";
    p.textContent = "Hello World!";
    p.id = "para";
    p.style.color = "tomato";
    p.style.textAlign = "center"

// STEP 3 - Append Element
    //container.append(p);
    //container.prepend(p);
    document.body.insertBefore(p , container);


//  Remove HTML Element
    //p.remove();