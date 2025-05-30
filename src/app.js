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
  
  console.log("arrays");
};