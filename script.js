

var church = {
 name: "Churchill",
 year: 1940,
 BCE: false,
};

var ghandi = {
 name: "Ghandi",
 year: 1942,
 BCE: false,
};

var demo = {
 name: "Demosthenes",
 year: 342,
 BCE: true,
};

var speechArray = ["their finest hour", "quite india", "the third philippic"];


console.log (ghandi.year - church.year);

document.getElementById('BtnDonate').addEventListener('click', function(){
  console.log ("There are " + speechArray.length + " speeches on the page.");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  console.log("This speech was written by " + church.name + " in " + church.year + ". It is " + church.BCE + " that this year is B.C.E.");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  console.log ("This speech was written by " + ghandi.name + " in " + ghandi.year + ". It is " + ghandi.BCE + " that this year is B.C.E.");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  console.log ("This speech was written by " + demo.name + " in " + demo.year + ". It is " + demo.BCE + " that this year is B.C.E.");
});
