const profileCard = document.querySelector('div');

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const url = document.querySelector('input').value;

  const xhr = new XMLHttpRequest(); // xmlHttpRequest is a js objet that allows us to send requests to servers asynchronously and recieve responses.

  //set the request method and url in open() method
  xhr.open('GET', url);

  //set teh request header
  xhr.setRequestHeader('Content-Type', 'application/json');

  //handle the response
  xhr.onreadystatechange = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const data = JSON.parse(xhr.responseText);
      profileCard.innerHTML = `<div class='cardContainer'>
            <img src=${data.avatar_url} alt='profie' width='100%'/>
                <p>Name : ${data.name}</p>
                <p>Profession : ${data.bio}</p>
                <p>Total public repos : ${data.public_repos}</p>
                <p>Country of origin : ${data.location}</p>
            </div>`;
    } else {
      profileCard.innerText =
        'Failed loading the profile url, please check it again and try';
    }
  };

  xhr.send();
});
