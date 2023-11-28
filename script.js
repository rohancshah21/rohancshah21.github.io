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
