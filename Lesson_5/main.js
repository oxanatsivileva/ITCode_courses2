let response;
let result;
let content = document.querySelector('.content');
let buttons = document.querySelector('.buttons');
// let pagesQuantity = document.querySelector('.select');

// function showSelect() {
//   pagesQuantity.style.display = 'inline-block'
// }

// function hideSelect() {
//   pagesQuantity.style.display = 'none'
// }


async function getPhotos() {
  response = await fetch('https://jsonplaceholder.typicode.com/photos');
  result = await response.json();
  result = result.splice(0, 12);
  for (let key in result) {
    content.innerHTML += `
        <li>
          <img src="${result[key].url}">
          <h4>${result[key].title}</h4>
        </li>
    `
  }  
}
async function getPosts() {
  response = await fetch('https://jsonplaceholder.typicode.com/posts');
  result = await response.json();
  result = result.splice(0, 12);
  for (let key in result) {
    content.innerHTML += `
      <li>
        <h4>${result[key].title}</h4>
        <p>${result[key].body}</p>
      </li>
    `
  }  
}
async function getComments() {
  response = await fetch('https://jsonplaceholder.typicode.com/comments');
  result = await response.json();
  result = result.splice(0, 12);
  for (let key in result) {
    content.innerHTML += `
        <li>
          <div><b>name:</b> ${result[key].name}</div>
          <div><b>email:</b> ${result[key].email}</div>
          <p>${result[key].body}</p>
        </li>
    `
  }  
}
async function getAlbums() {
  response = await fetch('https://jsonplaceholder.typicode.com/albums');
  result = await response.json();
  result = result.splice(0, 12);
  for (let key in result) {
    content.innerHTML += `
        <li>
        <h4>${result[key].title}</h4>
      </li>
    `
  }  
}
async function getTodos() {
  response = await fetch('https://jsonplaceholder.typicode.com/todos');
  result = await response.json();
  result = result.splice(0, 12);
  for (let key in result) {
    content.innerHTML += `
        <li>
        <h4 class = 'h4'>${result[key].title}</h4>
        <span>completed: ${result[key].completed}</span>
      </li>
    `
  }  
}
async function getUsers() {
  response = await fetch('https://jsonplaceholder.typicode.com/users');
  result = await response.json();
  result = result.splice(0, 12);
  for (let key in result) {
    content.innerHTML += `
        <li>
        <div><b>name:</b> ${result[key].name}</div>
        <div><b>username:</b> ${result[key].username}</div>
        <div><b>email:</b> ${result[key].email}</div>
        <div><b>address:</b> ${result[key].address.street}, ${result[key].address.suite}, ${result[key].address.city}, ${result[key].address.zipcode}, ${result[key].address.geo.lat} ${result[key].address.geo.lng} </div>
        <div><b>company:</b> ${result[key].company.name}, ${result[key].company.catchPhrase}, ${result[key].company.bs}</div>
      </li>
    `
  }  
}

buttons.addEventListener('click', async function (event) { 
  content.innerHTML = ``;
  // showSelect();
      if (event.target.id === 'photos') { 
        getPhotos();
      } else if (event.target.id === 'posts') { 
        getPosts();
      } else if (event.target.id === 'comments') { 
        getComments();
      } else if (event.target.id === 'albums') { 
        getAlbums()   
      } else if (event.target.id === 'todos') { 
        getTodos()
      } else if (event.target.id === 'users') { 
        getUsers()
      } else {
      return;
    }
});


    







