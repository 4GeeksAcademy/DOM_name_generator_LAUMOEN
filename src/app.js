import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  let pronoun = ['the', 'our', 'my', 'your'];
  let adj = ['small', 'big'];
  let noun = ['object', 'pet', 'car'];
  let domain = ['.com', '.es', '.net', '.co', '.us',];
  
  let first = Math.floor(Math.random() * pronoun.length);
  let what = Math.floor(Math.random() * adj.length);
  let who = Math.floor(Math.random() * noun.length);
  let last = Math.floor(Math.random() * domain.length);

  document.querySelector("#arrays").innerHTML = pronoun[first] + adj[what] + noun[who] + domain[last];

   for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          console.log(pronoun[i] + adj[j] + noun[k] + domain[l]);
        }
      }
    }
  }

};