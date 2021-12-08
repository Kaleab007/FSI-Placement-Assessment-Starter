// HINT: You can delete this console.log after you no longer need it!
console.log("JavaScript code has loaded!");

let yourName = "Kaleab Abateneh"; // HINT: Replace this with your own name!

let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle

document.getElementById("credit").textContent = `Created by ${yourName}`;

document.getElementById("add-gb").addEventListener("click", function () {
  gb++;
  document.getElementById("qty-gb").textContent = gb;
  document.getElementById("qty-total").textContent = gb + cc + sugar;
});

document.getElementById("minus-gb").addEventListener("click", function () {
  if (gb > 0) {
    gb--;
    document.getElementById("qty-gb").textContent = gb;
    document.getElementById("qty-total").textContent = gb + cc + sugar;
    
  }
});

document.getElementById("add-cc").addEventListener("click", function () {
  cc++;
  document.getElementById("qty-cc").textContent = cc;
  document.getElementById("qty-total").textContent = gb + cc + sugar;
});

document.getElementById("minus-cc").addEventListener("click", function () {
  if (cc > 0) {
    cc--;
    document.getElementById("qty-cc").textContent = cc;
    document.getElementById("qty-total").textContent = gb + cc + sugar;
  }
  
});

document.getElementById("add-sugar").addEventListener("click", function () {
  sugar++;
  document.getElementById("qty-sugar").textContent = sugar;
  document.getElementById("qty-total").textContent = gb + cc + sugar;
});

document.getElementById("minus-sugar").addEventListener("click", function () {
  if (sugar > 0) {
    sugar--;
    document.getElementById("qty-sugar").textContent = sugar;
    document.getElementById("qty-total").textContent = gb + cc + sugar;
  }
  
});
