function changeBackgroundColor() {
  let newColor = document.body;
  let red = document.querySelector('#red').value;
  let green = document.querySelector('#green').value;
  let blue = document.querySelector('#blue').value;
  let selectedColor = document.querySelector('#historique__color');

  //Historique
  let newBloc = document.createElement("div");
  newBloc.style.width = "100px";
  newBloc.style.height = "50px";
  newBloc.classList.add("border");
  newBloc.classList.add("m-2");
  newBloc.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  let nBloc = selectedColor.appendChild(newBloc);
  selectedColor.appendChild(newBloc);

  //Stocker valeurs des couleurs
  localStorage.setItem('red', red);
  localStorage.setItem('green', green);
  localStorage.setItem('blue', blue);

  //Couleur de fond
  newColor.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

  //Stocker les informations
  localStorage.setItem('Couleur', "rgb(" + red + "," + green + "," + blue + ")");
  localStorage.setItem('Historique', nBloc);

}


document.body.style.backgroundColor = localStorage.getItem('Couleur');
document.querySelector('#red').value = localStorage.getItem('red');
document.querySelector('#green').value = localStorage.getItem('green');
document.querySelector('#blue').value = localStorage.getItem('blue');


localStorage.getItem('Historique');



let person = prompt("Entrer votre prénom: ");
let userName = document.querySelector('#user');
localStorage.setItem('Prenom', person);

userName.innerHTML = localStorage.getItem('Prenom');
