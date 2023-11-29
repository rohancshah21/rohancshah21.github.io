document.addEventListener('DOMContentLoaded', (event) => {
  showHome();
});


function showContent(contentId) {
  const contents = document.querySelectorAll('.content');
  contents.forEach(content => {
    content.style.display = 'none';
  });

  const targetContent = document.getElementById(contentId);
  if (targetContent) {
    targetContent.style.display = 'block';
  }
}

function showHome() {
  showContent('home');
}

function showAboutMe() {
  showContent('more-abt-me');
}

function showExperiences() {
  showContent('stuff-ive-done');
}

function showProjects(){
  showContent('projects');
}

function showContact() {
  showContent('connect');
}

// Get the modals
var modal1 = document.getElementById("modal-exchange");
var modal2 = document.getElementById("hedged");
var modal3 = document.getElementById("trading-bot");
var modal4 = document.getElementById("3110");
var modal5 = document.getElementById("hurst");

// Get the buttons that open the modals
var btn1 = document.getElementById("openModal");
var btn2 = document.getElementById("openModal2");
var btn3 = document.getElementById("openModal3");
var btn4 = document.getElementById("openModal4");
var btn5 = document.getElementById("openModal5");

// Get the <span> elements that close the modals
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];

// Open the modals
btn1.onclick = function() { modal1.style.display = "block"; }
btn2.onclick = function() { modal2.style.display = "block"; }
btn3.onclick = function() { modal3.style.display = "block"; }
btn4.onclick = function() { modal4.style.display = "block"; }
btn5.onclick = function() { modal5.style.display = "block"; }

// Close the modals
span1.onclick = function() { modal1.style.display = "none"; }
span2.onclick = function() { modal2.style.display = "none"; }
span3.onclick = function() { modal3.style.display = "none"; }
span4.onclick = function() { modal4.style.display = "none"; }
span5.onclick = function() { modal5.style.display = "none"; }

// Close the modals when clicking outside of them
window.onclick = function(event) {
  if (event.target === modal1) { modal1.style.display = "none"; }
  if (event.target === modal2) { modal2.style.display = "none"; }
  if (event.target === modal3) { modal3.style.display = "none"; }
  if (event.target === modal4) { modal4.style.display = "none"; }
  if (event.target === modal5) { modal5.style.display = "none"; }
}

