const statusLabels = {
  vendida: 'VENDIDA',
  reservado: 'RESERVADO'
};

const render = (list, containerId) => {
  const container = document.getElementById(containerId);
  list.forEach(skin => {
    const card = document.createElement('div');
    card.className = 'card';
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
      </div>
    `;
    container.appendChild(card);
  });
};

fetch('data/skins.yaml')
  .then(res => res.text())
  .then(yamlText => {
    const data = jsyaml.load(yamlText);
    // Carrega logo
    const logoEl = document.getElementById('logo');
    if (data.logo) logoEl.src = data.logo;
    // Renderiza skins
    render(data.m4, 'm4');
    render(data.awp, 'awp');
  })
  .catch(err => console.error('Erro ao carregar YAML:', err));

