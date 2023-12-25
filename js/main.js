var myh1 = document.getElementById("myh1");
var number = 0;
function incNumber() {
  number += 1;
  myh1.innerHTML = number;
  if (number == 3923) {
    clearInterval(x);
  }
}

var x = setInterval(incNumber, 0.5);

var myh2 = document.getElementById("myh2");
var num = 0;
function incNum() {
  num += 1;
  myh2.innerHTML = number;
  if (num == 131) {
    clearInterval(y);
  }
}

var y = setInterval(incNum, 1);

var myh3 = document.getElementById("myh3");
var numm = 0;
function incNumb() {
  numm += 1;
  myh3.innerHTML = numm;
  if (numm == 962) {
    clearInterval(z);
  }
}

var z = setInterval(incNumb, 1);

var myh4 = document.getElementById("myh4");
var nummb = 0;
function incNumbe() {
  nummb += 1;
  myh4.innerHTML = nummb;
  if (nummb == 5949) {
    clearInterval(z);
  }
}

var z = setInterval(incNumbe, 1);
