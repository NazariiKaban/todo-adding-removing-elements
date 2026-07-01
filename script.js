'use strict'

const app = document.querySelector('.todo-app');
const list = document.querySelector('.todo-app__list');
const form = document.querySelector('.todo-app__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // const item = document.createElement('li');
  // item.textContent = form.elements.todo.value;

  // list.append(item);
  // list.prepend(item);

  list.insertAdjacentHTML('beforeend', `
    <li>
      ${form.elements.todo.value}
      <button onclick="this.parentElement.remove()">x</button>
    </li>
    `)

  form.reset();
})