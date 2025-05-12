const statusLabels = {
  vendida: 'VENDIDA',
  reservado: 'RESERVADO'
};

const categoryInfo = {
  gloves:  { display: 'Gloves',      emoji: '🧤' },
  knives:  { display: 'Knives',      emoji: '🔪' },
  ak47:    { display: 'AK-47',       emoji: '🔫' },
  m4:      { display: 'M4A1 / M4A4', emoji: '🔫' },
  awp:     { display: 'AWP / Scout', emoji: '🎯' },
  usp:     { display: 'USP',         emoji: '⭐' },
  glock:   { display: 'Glock',       emoji: '🔫' },
  desert:  { display: 'Desert',      emoji: '🏜️' },
  agents:  { display: 'Agents',      emoji: '🕵️' },
  others:  { display: 'Others',      emoji: '❓' }
};

function render(list, containerId) {
  const container = document.getElementById(containerId);
  list.forEach(skin => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.name   = skin.nome.toLowerCase();
    card.dataset.estado = skin.estado.toLowerCase();

    // float
    const f = parseFloat(skin.desgaste);
    const floatMarkup = isNaN(f)
      ? ''
      : `
      <div class="float-bar">
        <div class="bar">
          <span class="marker" style="left:${(f*100).toFixed(2)}%"></span>
        </div>
        <small>${f.toFixed(6)}</small>
      </div>`;

    card.innerHTML = `
      <div class="img-wrapper">
        <img src="${skin.imagem}" alt="${skin.nome}">
        ${skin.status ? `<div class="status-badge ${skin.status}">${statusLabels[skin.status]}</div>` : ''}
      </div>
      <div class="info">
        <p>${skin.nome} (${skin.estado})</p>
        <span>R$ ${skin.preco}</span>
        <small>${skin.data}</small>
        ${skin.steam_url ? `<a class="steam-link" href="${skin.steam_url}">Ver na Steam</a>` : ''}
        ${floatMarkup}
      </div>
    `;
    container.appendChild(card);
  });
}

function filterCards() {
  const term = document.getElementById('search').value.trim().toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    const match = card.dataset.name.includes(term) || card.dataset.estado.includes(term);
    card.style.display = match ? '' : 'none';
  });
}

fetch('data/skins.yaml')
  .then(res => res.text())
  .then(yamlText => {
    const data = jsyaml.load(yamlText);

    // título da aba
    if (data.title) document.title = data.title;

    // logo do header
    const logoEl = document.getElementById('logo');
    if (data.logo) {
      logoEl.src = data.logo;
      logoEl.alt = data.header || 'Logo';
    }

    // texto do header
    const headerEl = document.querySelector('header h1');
    if (data.header) headerEl.textContent = data.header;

    // monta seções (só as não-vazias)
    const sections = document.getElementById('sections');
    Object.keys(data).forEach(key => {
      if (['logo','title','header'].includes(key)) return;
      const items = data[key];
      if (!Array.isArray(items) || items.length === 0) return;
      const info = categoryInfo[key] || { display: key, emoji: '' };
      const section = document.createElement('section');
      section.className = 'section';
      section.innerHTML = `
        <h2>${info.emoji} ${info.display}</h2>
        <div id="${key}" class="grid"></div>
      `;
      sections.appendChild(section);
      render(items, key);
    });

    // ativa pesquisa
    document.getElementById('search').addEventListener('input', filterCards);
  })
  .catch(err => console.error('Erro ao carregar YAML:', err));

