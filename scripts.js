function startSite() {
  const name = document.getElementById('userName').value;
  if (name.trim() !== '') {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    document.getElementById('personalMessage').innerText = `¡Hola ${name}, nos encanta que estés acá! 💖`;
  }
}
