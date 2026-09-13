const people = [
  { name: "Cris Colletto", value: 0.82 },
  { name: "Gabi Alario (Collabinha)", value: 0.26 },
  { name: "Pat Spinelli", value: 0.86 },
  { name: "Beta Whately", value: 0.59 },
  { name: "Caroline Collier", value: 0.35 },
  { name: "Juliana Zuccas", value: 0.48 },
  { name: "Maheve Fadigas", value: 0.52 },
  { name: "Patricia Moura", value: 0.87 },
  { name: "Priscila Palacios", value: 0.96 },
  { name: "Tatiana Parente", value: 0.56 },
  { name: "Valeska Assumpção", value: 0.25 },
  { name: "Carol Papa", value: 0.14 },
  { name: "Fernanda Luchesi", value: 0.16 }
];

let selectedPerson = null;
const screens = [...document.querySelectorAll('.screen')];
const navSearch = document.getElementById('nav-search');
const navAbout = document.getElementById('nav-about');
const homeSearch = document.getElementById('home-search');
const resultsSearch = document.getElementById('results-search');
const resultsList = document.getElementById('results-list');
const resultsCount = document.getElementById('results-count');
const clearSearch = document.getElementById('clear-search');

function normalize(text='') {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function showScreen(id) {
  screens.forEach(s => s.classList.toggle('active', s.id === id));
  navSearch.classList.toggle('active', id !== 'screen-about');
  navAbout.classList.toggle('active', id === 'screen-about');
  window.scrollTo(0,0);
}

function search(query) {
  const q = normalize(query);
  if (!q) return people.slice().sort((a,b)=>a.name.localeCompare(b.name,'pt-BR'));
  return people.filter(p => normalize(p.name).includes(q)).sort((a,b)=>a.name.localeCompare(b.name,'pt-BR'));
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
      const btn = document.createElement('button');
      btn.className = 'result-row';
      btn.innerHTML = `<span>${person.name}</span><span class="chev">›</span>`;
      btn.addEventListener('click', () => openTest(person));
      resultsList.appendChild(btn);
    });
  }
  resultsCount.textContent = `${matches.length} ${matches.length === 1 ? 'RESULTADO' : 'RESULTADOS'}`;
}

function openResults(query) {
  homeSearch.blur();
  resultsSearch.value = query;
  renderResults(query);
  showScreen('screen-results');
  setTimeout(() => resultsSearch.focus(), 180);
}

function openTest(person) {
  selectedPerson = person;
  document.getElementById('test-name').textContent = person.name;
  showScreen('screen-test');
}

function revealPower() {
  if (!selectedPerson) return;
  const pct = Math.round(selectedPerson.value * 100);
  document.getElementById('final-name').textContent = selectedPerson.name;
  document.getElementById('power-value').textContent = `${pct}%`;
  const orb = document.getElementById('power-orb');
  orb.classList.remove('high','mid','low','reveal-pulse');
  // Acima de 60% = verde; 40% a 60% = laranja; abaixo de 40% = vermelho.
  orb.classList.add(pct > 60 ? 'high' : pct >= 40 ? 'mid' : 'low');
  void orb.offsetWidth;
  orb.classList.add('reveal-pulse');
  showScreen('screen-result');
}

function restart() {
  selectedPerson = null;
  homeSearch.value = '';
  resultsSearch.value = '';
  showScreen('screen-home');
  setTimeout(() => homeSearch.focus(), 180);
}

homeSearch.addEventListener('input', e => {
  if (e.target.value.trim().length > 0) openResults(e.target.value);
});
homeSearch.addEventListener('keydown', e => {
  if (e.key === 'Enter') openResults(e.target.value);
});
resultsSearch.addEventListener('input', e => renderResults(e.target.value));
clearSearch.addEventListener('click', () => { resultsSearch.value=''; renderResults(''); resultsSearch.focus(); });

document.querySelectorAll('.back-home').forEach(b => b.addEventListener('click', () => showScreen('screen-home')));
document.querySelectorAll('.back-results').forEach(b => b.addEventListener('click', () => showScreen('screen-results')));
document.querySelectorAll('.back-test').forEach(b => b.addEventListener('click', () => showScreen('screen-test')));
document.getElementById('power-test-btn').addEventListener('click', revealPower);
document.getElementById('restart-btn').addEventListener('click', restart);
navSearch.addEventListener('click', () => showScreen('screen-home'));
navAbout.addEventListener('click', () => showScreen('screen-about'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(()=>{}));
}
