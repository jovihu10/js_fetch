// Revisar cierres


//function to do the code simpler
function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
    return parent.appendChild(el) //Append the second parameter to the first one
}


//1- is set the URL of the API and also the list we are going to put the data in (author's list)
const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users

//2- Fetch API
/*
fetch(url)
    .then(function(data) {
        console.log(data)
        //Here you get the data to modify as you please
    })

    .catch(function(error) {
        // If there is any error  you will catch them here
    });
*/

fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
        // Create and append the li's to the "ul"

        let authors = data.results; // Get the results
        return authors.map(function(author) {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = author.picture.medium; //Add the source of the image to be the src of the img element
            span.innerHTML = `${author.name.first} ${author.name.last}`; // Make the HTML of our span to be the first and last name of our author
            append(li, img); //Append all our elements
            append(li, span);
            append(ul, li);
        })

    })
    .catch(function(error) {
        console.log(error);
    });