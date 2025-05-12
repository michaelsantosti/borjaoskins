# 🎮 Catalogo de Skins para CS2

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Online-green.svg)](https://michaelsantosti.github.io/borjaoskins)

Um site estático bonito, leve e totalmente configurável via YAML para exibir suas skins de CS:GO (ou CS2) com:

- 🔍 **Busca ao vivo** por nome ou estado  
- 🧩 **Categorias dinâmicas** (ocultas quando vazias)  
- 🏷️ **Status** (“VENDIDA”, “RESERVADO”, etc.)  
- 🎨 **Barra de float** com marcador e valor  
- 🔗 **Link “Ver no CS2”** para abrir direto no jogo  
- 🖼️ **Logo, título e header** personalizáveis via YAML  

---

## 🌟 Recursos

- **Zero build step**: só HTML + CSS + JavaScript + YAML  
- **Deploy automático** no GitHub Pages  
- **Cache-busting** para garantir sempre a versão mais nova  
- **Design responsivo** com grid fluido  
- **Totalmente open-source** e fácil de estender  

---

## 🚀 Como usar

1. **Clone o repositório**

```bash
   git clone https://github.com/michaelsantosti/borjaoskins.git
   cd seu-repo
```

2. **Verifique a estrutura de pastas**  
```bash
   .
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── data/
   │   └── skins.yaml
   └── imgs/
       ├── logo.png
       └── …  
```

3. **Edite `data/skins.yaml`**  
   - `title`: título da aba do navegador  
   - `header`: texto principal do cabeçalho  
   - `logo`: caminho para sua imagem de logo  
   - Cada categoria (gloves, knives, ak47, m4, awp, usp, glock, desert, agents, others) é um array de objetos. Exemplo:

```bash
   m4:
     - nome: "M4A1-S Nightmare"
       estado: "Field-Tested"
       preco: 59
       data: "13/05"
       status: "vendida"       # opcional: vendida | reservado
       desgaste: 0.236876      # opcional: float
       imagem: "imgs/m4-nightmare.jpg"
       steam_url: "steam://rungame/…"
```

4. **Teste local**  
   Abra `index.html` no navegador ou use um servidor estático (ex: `npx http-server`).

5. **Deploy no GitHub Pages**  
   1. Adicione o remoto ao seu repo local.  
   2. Faça push para a branch `main`.  
   3. No GitHub, vá em **Settings > Pages**, selecione `main` / `/ (root)` e clique em **Save**.

```bash
   git remote add origin https://github.com/seu-usuario/seu-repo.git
   git push -u origin main
```

---

## 🖌️ Personalização

- **Cores e fontes**: edite `styles.css`.  
- **Cache-busting**: veja meta-tags e versão na URL em `index.html`.  
- **Adicionar novas categorias**: crie uma nova chave no YAML e acrescente um emoji em `categoryInfo` no `script.js`.  

---

## 📁 Estrutura de Diretórios

```bash
/
├── index.html     # carregamento de CSS, JS e YAML
├── styles.css     # estilos (status, float bar, etc)
├── script.js      # parsing YAML, render e filtro de busca
├── data/
│   └── skins.yaml # configuração de title, header, logo e lista de skins
└── imgs/          # todas as imagens (logo e skins)
```

---

## 🤝 Contribuição

1. Faça um **fork** deste repositório  
2. Crie uma **branch** (`feature/nova-funcionalidade`)  
3. **Commit** suas alterações  
4. **Push** na branch  
5. Abra um **Pull Request** 🚀  

---

## 📄 Licença

Este projeto está sob a [MIT License](LICENSE).  
Sinta-se livre para copiar, modificar e compartilhar!

---

> “Not all those who wander are lost.”  
> — J. R. R. Tolkien  

