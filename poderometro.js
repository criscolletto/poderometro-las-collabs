const people = [
  { name: "Catarina Diniz", value: 0.69, potionValue: 0.89 },
  { name: "Cris Colletto", value: 0.37, potionValue: 0.77 },
  { name: "Gabi Alario (Collabinha)", value: 0.72, potionValue: 0.92 },
  { name: "Pat Spinelli", value: 0.55, potionValue: 0.95 },
  { name: "Caroline Collier", value: 0.67, potionValue: 0.87 },
  { name: "Juliana Zuccas", value: 0.78, potionValue: 0.98 },
  { name: "Maheve Fadigas", value: 0.68, potionValue: 0.88 },
  { name: "Patricia Moura", value: 0.73, potionValue: 0.93 },
  { name: "Priscila Palacios", value: 0.75, potionValue: 0.95 },
  { name: "Roerta Whately (Beta)", value: 0.50, potionValue: 0.75 },
  { name: "Tatiana Parente", value: 1.00, potionValue: 1.00 },
  { name: "Valeska Assumpção", value: 0.42, potionValue: 0.67 },
  { name: "Carol Papa", value: 0.48, potionValue: 0.73 },
  { name: "Fernanda Luchesi", value: 0.79, potionValue: 0.99 },
  { name: "Flavia Terpins", value: 0.74, potionValue: 0.94 },
  { name: "Maria Cristina Kika Ricciardi", value: 1.00, potionValue: 1.00 },
  { name: "Mariana Pellarin", value: 0.40, potionValue: 0.65 },
  { name: "Marienne Coutinho", value: 0.67, potionValue: 0.87 },
  { name: "Melissa Cavagnoli", value: 1.00, potionValue: 1.00 },
  { name: "Paula Bortoluzzo", value: 0.77, potionValue: 0.97 },
  { name: "Raquel Correa", value: 1.00, potionValue: 1.00 },
  { name: "Roberta Pilla", value: 1.00, potionValue: 1.00 },
  { name: "Tatiana Dall Aqua", value: 0.68, potionValue: 0.88 },
  { name: "Tatiana Ortolani", value: 0.69, potionValue: 0.89 },
  { name: "Ana Carolina Wjuniski", value: 0.17, potionValue: 0.37 },
  { name: "Ana Paula Grassman", value: 0.73, potionValue: 0.93 },
  { name: "Ana Paula Rezende", value: 0.35, potionValue: 0.75 },
  { name: "Andrea Mendonça", value: 0.77, potionValue: 0.97 },
  { name: "Carolina Estrela", value: 0.67, potionValue: 0.87 },
  { name: "Daiane Rauen", value: 0.14, potionValue: 0.34 },
  { name: "Daniela Freitas", value: 0.77, potionValue: 0.97 },
  { name: "Deborah Quintela", value: 0.18, potionValue: 0.38 },
  { name: "Ellen Palacio", value: 0.64, potionValue: 0.84 },
  { name: "Fernanda Flores", value: 0.46, potionValue: 0.71 },
  { name: "Fernanda Morato", value: 0.18, potionValue: 0.38 },
  { name: "Juliana Forster", value: 0.56, potionValue: 0.96 },
  { name: "Maria Fernanda Cunha", value: 0.45, potionValue: 0.70 },
  { name: "Maria Rafaela Porto", value: 0.79, potionValue: 0.99 },
  { name: "Maria Zanforlin", value: 0.65, potionValue: 0.85 },
  { name: "Marina Maluf", value: 0.76, potionValue: 0.96 },
  { name: "Meybe Weissman", value: 0.61, potionValue: 0.81 },
  { name: "Paula Vilalba", value: 0.46, potionValue: 0.71 },
  { name: "Rachel Lembi", value: 0.31, potionValue: 0.71 },
  { name: "Roberta Galli", value: 0.37, potionValue: 0.77 },
  { name: "Rogeria Larsen", value: 1.00, potionValue: 1.00 },
  { name: "Viviane Barbosa", value: 0.43, potionValue: 0.68 },
  { name: "Gabriella (Gables)", value: 0.67, potionValue: 0.87 },
  { name: "Laura Nobre", value: 0.48, potionValue: 0.88 },
  { name: "Mari Strang", value: 0.60, potionValue: 0.80 },
  { name: "Paula Maluf", value: 0.47, potionValue: 0.87 },
  { name: "Paula Melo", value: 0.72, potionValue: 0.92 },
  { name: "Paula Tremante", value: 0.43, potionValue: 0.68 },
  { name: "Renata Paes Mendonça", value: 0.71, potionValue: 0.91 },
  { name: "Rubia Werneck", value: 0.76, potionValue: 0.96 },
  { name: "Taissa Buesco", value: 0.65, potionValue: 0.85 },
  { name: "Alessandra Batista (Sandy)", value: 0.06, potionValue: 0.26 },
  { name: "Ana Carolina Guedes (Lolly)", value: 0.55, potionValue: 0.95 },
  { name: "Camille Luz", value: 0.61, potionValue: 0.81 },
  { name: "Carolina Ranieri", value: 0.55, potionValue: 0.95 },
  { name: "Daniela Aoun", value: 0.31, potionValue: 0.71 },
  { name: "Gabriela Paina", value: 0.74, potionValue: 0.94 },
  { name: "Marcela Simões", value: 1.00, potionValue: 1.00 },
  { name: "Patty Jordão", value: 0.64, potionValue: 0.84 },
  { name: "Renata Betinelli", value: 0.39, potionValue: 0.79 },
  { name: "Sarah Dalgas Frisch", value: 0.55, potionValue: 0.95 },
  { name: "Vivian Cunha (Vick)", value: 0.80, potionValue: 1.00 },
  { name: "Daniela Barone", value: 0.64, potionValue: 0.84 },
  { name: "Felipe de Moura", value: 0.68, potionValue: 0.88 },
  { name: "Fernanda Mendes", value: 0.60, potionValue: 0.80 },
  { name: "Flavia Cury", value: 0.44, potionValue: 0.84 },
  { name: "Geyza Silva", value: 0.24, potionValue: 0.44 },
  { name: "Hannah Bomtempo", value: 0.70, potionValue: 0.90 },
  { name: "Ana Carolina Dutra", value: 0.76, potionValue: 0.96 },
  { name: "Camilla Barretto", value: 0.37, potionValue: 0.77 },
  { name: "Carla Almeida (Cacau)", value: 0.64, potionValue: 0.84 },
  { name: "Fernanda Mammana", value: 0.54, potionValue: 0.94 },
  { name: "Juliana Brandão", value: 0.31, potionValue: 0.71 },
  { name: "Maria Cecilia Castanho", value: 0.53, potionValue: 0.93 },
  { name: "Patricia Lozano", value: 0.76, potionValue: 0.96 },
  { name: "Stella Mancini", value: 0.63, potionValue: 0.83 },
  { name: "Tania Skaf", value: 0.75, potionValue: 0.95 },
  { name: "Isabel Foz", value: 0.66, potionValue: 0.86 },
  { name: "Stephanie Smith", value: 0.57, potionValue: 0.97 },
  { name: "Tanise Dutra", value: 0.77, potionValue: 0.97 },
  { name: "Adriana Arruda", value: 0.45, potionValue: 0.85 },
  { name: "Adriane Galisteu", value: 1.00, potionValue: 1.00 },
  { name: "Ana Nasser", value: 0.48, potionValue: 0.88 },
  { name: "Arietta", value: 0.54, potionValue: 0.94 },
  { name: "Beatriz Lopes (Bia)", value: 0.41, potionValue: 0.81 },
  { name: "Bianca Barki", value: 0.67, potionValue: 0.87 },
  { name: "Camila Borestein", value: 0.74, potionValue: 0.94 },
  { name: "Camila Gouveia", value: 0.70, potionValue: 0.90 },
  { name: "Camila Bauducco", value: 0.61, potionValue: 0.81 },
  { name: "Carol Pahin", value: 0.07, potionValue: 0.27 },
  { name: "Carolina Pizzinatto", value: 0.32, potionValue: 0.72 },
  { name: "Cecilia Feder", value: 0.48, potionValue: 0.73 },
  { name: "Clarissa Chaui", value: 0.49, potionValue: 0.74 },
  { name: "Debora Ortiz", value: 0.73, potionValue: 0.93 },
  { name: "Evelyn", value: 0.13, potionValue: 0.33 },
  { name: "Fabiana Cardoso (Cumadi)", value: 0.42, potionValue: 0.67 },
  { name: "Gabi", value: 0.44, potionValue: 0.69 },
  { name: "Heloisa", value: 0.66, potionValue: 0.86 },
  { name: "Juliana Leo Raduan", value: 0.44, potionValue: 0.69 },
  { name: "Juliana Macea", value: 0.46, potionValue: 0.71 },
  { name: "Karina Krikor Kou", value: 0.49, potionValue: 0.89 },
  { name: "Keika/ Karina Gianezella", value: 0.50, potionValue: 0.75 },
  { name: "Kika", value: 1.00, potionValue: 1.00 },
  { name: "Lais Siqueira", value: 0.77, potionValue: 0.97 },
  { name: "Liv B", value: 1.00, potionValue: 1.00 },
  { name: "Lilian", value: 0.40, potionValue: 0.65 },
  { name: "Livia Colluci", value: 0.53, potionValue: 0.93 },
  { name: "Luciana Arruda", value: 0.63, potionValue: 0.83 },
  { name: "Lucas Andreas", value: 0.54, potionValue: 0.94 },
  { name: "Luisa Granatto Peixinho", value: 0.34, potionValue: 0.74 },
  { name: "Maria Fernanda Araujo", value: 0.72, potionValue: 0.92 },
  { name: "Henrique Wagner Nogueira", value: 0.77, potionValue: 0.97 },
  { name: "Marcela Pepe", value: 0.79, potionValue: 0.99 },
  { name: "Marcela Rocha", value: 0.78, potionValue: 0.98 },
  { name: "Marcelo Macedo", value: 0.35, potionValue: 0.75 },
  { name: "Mari", value: 1.00, potionValue: 1.00 },
  { name: "Mariana Arruda", value: 0.72, potionValue: 0.92 },
  { name: "Mirella Duarte", value: 0.62, potionValue: 0.82 },
  { name: "Marta Spinelli", value: 0.58, potionValue: 0.98 },
  { name: "Mayra Fregonesi", value: 0.73, potionValue: 0.93 },
  { name: "Nara Botelho", value: 0.76, potionValue: 0.96 },
  { name: "Patricia Gaiotto", value: 0.44, potionValue: 0.84 },
  { name: "Renata Muzzi", value: 0.56, potionValue: 0.96 },
  { name: "Silene Paladino", value: 0.41, potionValue: 0.81 },
  { name: "Thiaga", value: 1.00, potionValue: 1.00 },
  { name: "Vanessa (Caldas) Scuro", value: 0.51, potionValue: 0.91 },
  { name: "Vanessa Salem", value: 0.73, potionValue: 0.93 },
  { name: "Vivian Tempel", value: 0.64, potionValue: 0.84 },
  { name: "Xalana", value: 0.58, potionValue: 0.98 },
  { name: "Gloria Almeida", value: 1.00, potionValue: 1.00 },
  { name: "Regina Fava", value: 1.00, potionValue: 1.00 },
  { name: "Desconhecida", value: 0.60, potionValue: 0.80 }
];

let selectedPerson = null;
const screens = [...document.querySelectorAll('.screen')];
const homeSearch = document.getElementById('home-search');
const homeSearchBtn = document.getElementById('home-search-btn');
const resultsSearch = document.getElementById('results-search');
const resultsList = document.getElementById('results-list');
const resultsCount = document.getElementById('results-count');
const clearSearch = document.getElementById('clear-search');

function normalize(text = '') {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle('active', screen.id === id));
  const current = document.getElementById(id);
  if (current) current.scrollTop = 0;
}

function goHome() {
  selectedPerson = null;
  homeSearch.value = '';
  resultsSearch.value = '';
  showScreen('screen-home');
}

function search(query) {
  const q = normalize(query);
  if (!q) return people.slice().sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
  return people
    .filter(person => normalize(person.name).includes(q))
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
}

function renderResults(query) {
  const matches = search(query);
  resultsList.innerHTML = '';

  if (!matches.length) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = 'Nenhum nome encontrado.<br>Tente outra busca.';
    resultsList.appendChild(empty);
  } else {
    matches.forEach(person => {
      const button = document.createElement('button');
      button.className = 'result-row';
      button.innerHTML = `<span>${person.name}</span><span class="chev">›</span>`;
      button.addEventListener('click', () => openTest(person));
      resultsList.appendChild(button);
    });
  }

  resultsCount.textContent = `${matches.length} ${matches.length === 1 ? 'RESULTADO' : 'RESULTADOS'}`;
}

function openResults(query) {
  const cleanQuery = query.trim();
  resultsSearch.value = cleanQuery;
  renderResults(cleanQuery);
  showScreen('screen-results');
}

function openTest(person) {
  selectedPerson = person;
  document.getElementById('test-name').textContent = person.name;
  showScreen('screen-test');
}

function startPowerTest(usePotion = false) {
  if (!selectedPerson) return;
  showScreen('screen-thinking');
  window.setTimeout(() => revealPower(usePotion), 3000);
}

function revealPower(usePotion = false) {
  if (!selectedPerson) return;

  const sourceValue = usePotion ? selectedPerson.potionValue : selectedPerson.value;
  const pct = Math.round(sourceValue * 100);
  document.getElementById('final-name').textContent = selectedPerson.name;
  document.getElementById('result-eyebrow').textContent = usePotion ? 'SEU PODER APÓS A POÇÃO' : 'SEU PODER É ÚNICO';
  document.getElementById('power-value').textContent = `${pct}%`;

  const orb = document.getElementById('power-orb');
  orb.classList.remove('high', 'mid', 'low', 'reveal-pulse');
  orb.classList.add(pct > 60 ? 'high' : pct >= 40 ? 'mid' : 'low');
  void orb.offsetWidth;
  orb.classList.add('reveal-pulse');

  showScreen('screen-result');
}

homeSearchBtn.addEventListener('click', () => openResults(homeSearch.value));
homeSearch.addEventListener('keydown', event => {
  if (event.key === 'Enter') openResults(event.currentTarget.value);
});
resultsSearch.addEventListener('input', event => renderResults(event.currentTarget.value));
clearSearch.addEventListener('click', () => {
  resultsSearch.value = '';
  renderResults('');
  resultsSearch.focus();
});

document.querySelectorAll('.go-home').forEach(button => button.addEventListener('click', goHome));
document.getElementById('power-test-btn').addEventListener('click', () => startPowerTest(false));
document.getElementById('potion-test-btn').addEventListener('click', () => startPowerTest(true));
document.getElementById('result-potion-btn').addEventListener('click', () => startPowerTest(true));
document.getElementById('restart-btn').addEventListener('click', goHome);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
