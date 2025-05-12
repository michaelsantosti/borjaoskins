const statusLabels = {
  vendida: 'VENDIDA',
  reservado: 'RESERVADO'
};

const render = (list, containerId) => {
  const container = document.getElementById(containerId);
  list.forEach(skin => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <div class="img-wrapper">
        <img src="${skin.imagem}" alt="${skin.nome}">
        ${skin.status ? `<div class="status-badge ${skin.status}">${statusLabels[skin.status]}</div>` : ''}
      </div>
      <p>${skin.nome} (${skin.estado})</p>
      <span>R$ ${skin.preco}</span><br>
      <small>${skin.data}</small><br>
      ${skin.steam_url ? `<a class="steam-link" href="${skin.steam_url}">Ver na Steam</a>` : ''}
    `;
    container.appendChild(div);
  });
};

fetch('data/skins.yaml')
  .then(res => res.text())
  .then(yamlText => {
    const data = jsyaml.load(yamlText);
    render(data.m4, 'm4');
    render(data.awp, 'awp');
  });

