const container = document.querySelector('.container')
document.querySelector('button').addEventListener('click', gatherData)

let imageNotFound = 'https://www.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg';

let followers;
let profilePhoto;
let personName;

function gatherData(){
    const userName = document.querySelector('#username').value

    const url = `https://api.github.com/users/${userName}`
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = function (){
        console.log('State Code: ', xhr.readyState);
        if (xhr.readyState === 4){
            const data = JSON.parse(this.responseText)
            // console.log(typeof data);
            // console.log(data.followers);
            // console.log(data.avatar_url);
            followers = data.followers
            profilePhoto = data.avatar_url
            personName = data.name
            generateCard()
        }
    }
    xhr.send()
}

function generateCard(){
    container.innerHTML = `
        <h2>Information displayed by the data received from Api request</h2>
        <div class='card'>
            <img src='${profilePhoto ? profilePhoto : imageNotFound}' alt='profile photo'/>
            <h3>${personName ? personName : 'Name not found'}</h3>
            <h3>${followers ? followers : 0} Followers</h3>
        </div>
    `
}
