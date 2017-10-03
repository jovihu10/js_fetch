//New way
//Esta es una funcion entera que se activará cuando cliquemos el bottón
var getData = function (){
    //Estas dos funciones son necesarias para crear los lis y los img src
function createNode(element) {
    return document.createElement(element)
}

function append(parent, el) {
    return parent.appendChild(el)
}
//Esta  var es lo que se almacenará que pongamos en el buscador
const user = document.getElementById('search-user').value
const ul = document.getElementById('users');
const url = 'http://api.github.com/users/' + user;

console.log(user)
//Más abajo invocaremos esta función

//Fetch Method.
fetch(url)
    .then(response => response.json())
    .then(data => {
        let users = data;
        console.log(users)
        const name = `${data.name}`
        console.log(`${data.name} (${data.id})`)
        console.log(`${data.followers_url} (${data.repos_url})`)
        console.log(`${data.gists_url} (${data.starred_url})`)
        console.log(`${data.followers_url.login})`)

        console.log(users)
        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');

        img.src = data.avatar_url;
        

        //img.src = data.html_url;
        span.innerHTML = `${data.name} ${data.login} ${data.id} ${data.followers_url} (${data.repos_url.name}) ${data.gists_url} (${data.starred_url})`;
        document.getElementById('repos-container').style.display = 'none'
        append(li, img);
        append(li, span);
        append(ul, li);
    })

    .catch(error => console.error(error));

    //Para los repos. Mismo procedimiento que el anterior
const repos = 'http://api.github.com/users/' + user + '/repos';
fetch(repos)
    .then(response => response.json())
    .then(repositories => {
        let projectsGit = repositories;
        console.log(projectsGit)

        userRepos = repositories
        document.getElementById('repos-ul').innerHTML = '<li><h5>Repositories</h5></li><ul id="repos-li-child"></ul>'
        for (i = 0; i < userRepos.length; i++){
         document.getElementById('repos-li-child').innerHTML += `<li><h4>${userRepos[i].name}</h4><span><i class="fa fa-star" aria-hidden="true"> ${userRepos[i].stargazers_count}</i><i class="fa fa-code-fork" aria-hidden="true"> ${userRepos[i].forks_count}</i></span></li>`   
        }
        })
    .catch(error => console.error(error));

}




