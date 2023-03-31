import { useState } from './useState.js';

const usersArr = [
  { name: 'John', age: 25, occupation: 'gardener' },
  { name: 'Lenny', age: 51, occupation: 'programmer' },
  { name: 'Andrew', age: 43, occupation: 'teacher' },
  { name: 'Peter', age: 81, occupation: 'teacher' },
  { name: 'Anna', age: 43, occupation: 'teacher' },
  { name: 'Albert', age: 76, occupation: 'programmer' },
  { name: 'Adam', age: 47, occupation: 'teacher' },
  { name: 'Robert', age: 72, occupation: 'driver' },
];

let [count, setCount] = useState(0);

const [users, setUsers] = useState(usersArr);

/********************DOM Selectors********************/
const body = document.querySelector('body');
const h1 = document.createElement('h1');
const button = document.createElement('button');
const ul = document.createElement('ul');

function renderCount(count) {
  h1.innerText = `Count is: ${count}`;
  body.prepend(h1);
}

function renderButton() {
  button.innerText = 'Increment Count';
  body.append(button);
}

function renderUsers(users) {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  users.map((user) => {
    // console.log(
    //   `This is ${user.name} the ${user.occupation} and is ${user.age} years old!`
    // );

    const li = document.createElement('li');

    li.innerText = user.name;
    ul.appendChild(li);
  });
  body.append(ul);
}
/*******************Event Listeners*******************/

button.addEventListener('click', () => {
  console.log('you clicked me! :)');
  setCount((count += 1), renderCount);
  setUsers(
    [
      { name: 'John', age: 25, occupation: 'gardener' },
      { name: 'Lenny', age: 51, occupation: 'programmer' },
    ],
    renderUsers
  );
});

function render() {
  renderCount(count);
  renderButton();
  renderUsers(users);
}

render();
