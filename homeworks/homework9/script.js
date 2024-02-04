async function getUserData(id) {
  const url = "htttp://example.com";
  const data = { id: id };
  try {
    const response = await fetch(url, {
      method: "GET",
      body: JSON.stringify(data),
    });
    const json = await response.json();
    const res = await Promise.all(json);
    return res;
  } catch (error) {
    const resError = await Promise.reject(error);
    return resError;
  }
}

async function saveUserData(user) {
  const url = "htttp://example.com/users";
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: "application/json",
    });
    const json = await response.json();
    const res = await Promise.all(json);
    console.log("User data saved successfully");
  } catch (error) {
    const resError = await Promise.reject(error);
    console.log(error);
  }
}

function changeColor(nameElement, delay) {
    let element = document.getElementById(nameElement);
    setTimeout(() => element.style.color = "blue", delay);
    
}

changeColor('myElement', 4000);
