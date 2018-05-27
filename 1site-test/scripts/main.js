var myImage = document.querySelector('img');
myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/profile.jpg') {
    myImage.setAttribute ('src','images/coffee.jpg');
  } else {
    myImage.setAttribute ('src','images/profile.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserFavPlace() {
  var myFavPlace = prompt('Please name your favorite place in Amsterdam.');
  localStorage.setItem('favorite place', myFavPlace);
  myHeading.textContent = 'Thanks for sharing, I will try to visit ' + myFavPlace;
}

if(!localStorage.getItem('favorite place')) {
  setUserFavPlace();
} else {
  var storedFavPlace = localStorage.getItem('favorite place');
  myHeading.textContent = 'It is worth to visit ' + storedFavPlace + '. Thanks!';
}

myButton.onclick = function() {
  setUserFavPlace();
}
