var triangleTracker = function(sideA, sideB, sideC) {
  function (triangleTracker) {
  var sideA=parseInt(document.getElementById("sideA").value;
  var sideB=parseInt(document.getElementById("sideB").value;
  var sideC=parseInt(document.getElementById("sideC").value;

  if (sideA==0 || sideB==0 || sideC==0) {
alert  ("This is not a triangle")

  }
  else if (sideA==sideB==sideC) {
  alert("This is an equilateral triangle")
  }

  else if (sideA==sideB!=sideC ||sideA==sideC!=sideB ||sideB==sideC!=sideA) {
  alert("This is an isoceles triangle")
  }
  else if (sideA!=sideB!=sideC) {
  alert("This is a scalene triangle")
  }

  }
