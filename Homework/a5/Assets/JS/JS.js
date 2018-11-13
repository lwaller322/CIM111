alert("Hello, this site is for people who cannot boil water.");



var areYouSure = prompt("Do you know how to boil water?");
if (areYouSure =="yes")
{
    alert("Go Away!");
}


else
{
  alert("You may enter.");
}

if (areYouSure =="yes"){

for (var i = 0; i < 1000; i++) {
  console.log("Seriously get out!" + i);
}
}



function showContent() {
  document.getElementById("display").innerHTML ="How to Boil Water";
}

function showContent1() {
  document.getElementById("display").innerHTML ="Step 1: Fill pot with water";
}

function showContent2() {
  document.getElementById("display").innerHTML ="Step 2: Place pot filled with water onto stovetop";
}

function showContent3() {
  document.getElementById("display").innerHTML ="Step 3: Heat stovetop on 'high' setting";
}

function showContent4() {
  document.getElementById("display").innerHTML ="Step 4: Wait for water to begin to bubble and steam consistently";
}
function showContent5() {
  document.getElementById("display").innerHTML ="Step 5: Turn off stovetop and carefully remove the pot from the stovetop";
}
function showContent6() {
  document.getElementById("display").innerHTML ="Congratulations! You have successfully boiled water!";
}

function mouseBoil(x)  {
    x.style.height = "256px";
    x.style.width = "256px";
}
function mouseTwo(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}

$(document).ready(function(){
    $("button").click(function(){
        $("p").html("Good job you clicked it!");
    });
});
