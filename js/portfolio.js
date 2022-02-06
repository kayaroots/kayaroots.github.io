const GITHUB_URL = "https://api.github.com/users/kayaroots";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;  
    const name = document.getElementById("myName");
    name.innerText = data.name; 
  });
