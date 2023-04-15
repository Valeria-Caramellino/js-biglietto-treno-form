let x = document.getElementById("bottone");

let nomeUtente = document.getElementById("nome");
nomeUtente.value = "";

let kmDistanza = document.getElementById("km");
kmDistanza.value = "";

let eta = document.getElementById("eta");
eta.value = "";

var prezzo = kmDistanza * 0.21;
var messaggio = "";
var conto = "";

x.addEventListener("click", function () {
  var prezzo = kmDistanza.value * 0.21;
  var messaggio = "";
  var conto = "";

  if (eta.value < 18) {
    prezzo *= 0.8;
    messaggio = " Bonus < 18 ";
    conto = `${prezzo}`;
  } else if (eta.value > 65) {
    prezzo *= 0.6;
    messaggio = "Bonus over";
    conto = `${prezzo}`;
  } else {
    prezzo;
    messaggio = "Standard";
    conto = `${prezzo}`;
  }

  conto = `${prezzo.toFixed(2)} €`;

  console.log(nomeUtente.value);

  console.log(kmDistanza.value);

  console.log(eta.value);

  document.getElementById("nomePasseggero").innerText = nomeUtente.value;

  document.getElementById("costoPasseggero").innerText = conto;
  document.getElementById("offerta").innerText = messaggio;
});
