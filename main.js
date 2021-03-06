const linksSocialMedia = {
  github: 'NandaPL',
  instagram: 'nandap_l',
  facebook: 'fernandapintolopes.lopes',
  twitter: 'nandap_l'
}

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMedia()

/* Consumindo informações de API do GitHub */
function getGitHubProfileInfo() {
  const urlProfile = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(urlProfile)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
      title.textContent = `${data.name} - DoWhile 2021`
    })
}

getGitHubProfileInfo()
