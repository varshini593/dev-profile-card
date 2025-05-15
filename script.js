function generateCard() {
  const name = document.getElementById("name").value;
  const bio = document.getElementById("bio").value;
  const skills = document.getElementById("skills").value.split(',');

  const card = `
    <div class="card">
      <h2>${name}</h2>
      <p>${bio}</p>
      <h4>Skills:</h4>
      <ul>
        ${skills.map(skill => <li>${skill.trim()}</li>).join('')}
      </ul>
    </div>
  `;

  document.getElementById("card-container").innerHTML = card;
}