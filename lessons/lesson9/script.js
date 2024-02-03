function delayedMessage(message, delay) {
  setTimeout(() => console.log(message), delay);
}
delayedMessage("message 1", 2000);
delayedMessage("message 2", 1000);
delayedMessage("message 3", 3000);
console.log("конец программы");

const tasks = [
  { name: "task1", time: 2000 },
  { name: "task2", time: 1000 },
  { name: "task3", time: 4000 },
  { name: "task4", time: 15000 },
  { name: "task5", time: 3000 },
];
function delayedTask(tasks) {
  for (let i = 0; i < tasks.length; i++) {
    setTimeout(() => console.log(tasks[i].name), tasks[i].time);
  }
}

delayedTask(tasks);

function loadData(url) {
  const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log(xhr.response);
    } else {
      console.log(xhr.status, xhr.statusText);
    }
  };
} 
loadData('https://api.github.com/users/octocat');

async function testFetch(url) {
    let response = await fetch(url);
    if (response.ok) {
        console.log('ok');
    } else {
        console.log('wrong');
    }
}
testFetch('https://api.github.com/users/octocat');


fetch('https://api.github.com/users/octocat')
    .then((response) => 
    response.json()
    )
    .then((data) => listUser(data));
const userList = document.querySelector('.userList');
function listUser(data) {
    const userArr = [];
    // for (let i = 0; i < data.length; i++) {
    //     userArr.push(data[i].login);
    // }
    userArr.push(data.name);
    console.log(userArr);
}

