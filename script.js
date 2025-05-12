fetch('data/skins.yaml')
  .then(res => res.text())
  .then(yamlText => {
    const data = jsyaml.load(yamlText);

    const render = (list, containerId) => {
      const container = document.getElementById(containerId);
      list.forEach(skin => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
          <img src="${skin.imagem}" alt="${skin.nome}">
          <p>${skin.nome} (${skin.estado})</p>
          <span>R$ ${skin.preco}</span><br>
          <small>${skin.data}</small>
        `;
        container.appendChild(div);
      });
    };

    render(data.m4, 'm4');
    render(data.awp, 'awp');
  });

