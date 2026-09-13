const people = [
  { name: "Cris Colletto", value: 0.82, potionValue: 1.00 },
  { name: "Gabi Alario (Collabinha)", value: 0.26, potionValue: 0.51 },
  { name: "Pat Spinelli", value: 0.86, potionValue: 0.90 },
  { name: "Beta Whately", value: 0.59, potionValue: 0.66 },
  { name: "Caroline Collier", value: 0.35, potionValue: 0.55 },
  { name: "Juliana Zuccas", value: 0.48, potionValue: 0.68 },
  { name: "Maheve Fadigas", value: 0.52, potionValue: 0.72 },
  { name: "Patricia Moura", value: 0.87, potionValue: 1.00 },
  { name: "Priscila Palacios", value: 0.96, potionValue: 1.00 },
  { name: "Tatiana Parente", value: 0.56, potionValue: 0.89 },
  { name: "Valeska Assumpção", value: 0.25, potionValue: 0.55 },
  { name: "Carol Papa", value: 0.14, potionValue: 0.35 },
  { name: "Fernanda Luchesi", value: 0.16, potionValue: 0.28 }
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
document.getElementById('power-test-btn').addEventListener('click', () => revealPower(false));
document.getElementById('potion-test-btn').addEventListener('click', () => revealPower(true));
document.getElementById('result-potion-btn').addEventListener('click', () => revealPower(true));
document.getElementById('restart-btn').addEventListener('click', goHome);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
