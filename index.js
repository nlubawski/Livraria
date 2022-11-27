(async () => {
  window.addEventListener("load", async () => {
    const main = document.createElement("main");
    document.body.appendChild(main);
    const titulo = document.createElement("h1");
    titulo.textContent = "Nossa Livraria!";
    main.appendChild(titulo);

    const home = document.createElement("section");
    home.classList.add("home");
    const cadastrar = document.createElement("div");
    cadastrar.classList.add("cadastrar");
    home.appendChild(cadastrar);
    const botaoCadastrar = document.createElement("button");
    botaoCadastrar.textContent = "Cadastrar";
    cadastrar.addEventListener("click", (event) => cadastrarLivro(event));
    cadastrar.appendChild(botaoCadastrar);

    const buscar = document.createElement("div");
    buscar.classList.add("buscar");
    home.appendChild(buscar);
    const inputBuscar = document.createElement("input");
    const botaoBuscar = document.createElement("button");
    botaoBuscar.textContent = "Buscar";
    buscar.appendChild(inputBuscar);
    buscar.appendChild(botaoBuscar);
    main.appendChild(home);

    const livros = await API.obterLivros();

    const newTable = document.createElement("table");
    const headerTable = newTable.createTHead();
    const tableBody = newTable.createTBody();
    home.appendChild(newTable);

    const titlesTable = ["Tiragem", "Título", "Autor", "Descricao"];

    function insertTitlesTable(headerTable, titlesTable) {
      for (let i = 0; i < titlesTable.length; i++) {
        const headerCell = document.createElement("th");
        headerTable.appendChild(headerCell);
        headerCell.textContent = titlesTable[i];
      }
    }

    insertTitlesTable(headerTable, titlesTable);
    insertContentTable(livros);

    function insertContentTable(livros) {
      livros.forEach((livro) => {
        const rowTable = tableBody.insertRow();

        const livroChaves = Object.keys(livro);
        livroChaves.forEach((item) => {
          if (item !== "uid") {
            const headerCell = document.createElement("td");

            rowTable.appendChild(headerCell);
            headerCell.textContent = livro[item];
          }
        });
        rowTable.classList.add(`${livro.uid}`);
        createIcon("delete", rowTable);
        createIcon("draw", rowTable);
      });
    }

    function createIcon(icon, rowTable) {
      const cell = document.createElement("td");
      const iconGoogle = document.createElement("span");

      if (icon == "delete") {
        iconGoogle.addEventListener("click", deleteCategory);
      } else {
        iconGoogle.addEventListener("click", editCategory);
      }
      iconGoogle.textContent = icon;
      iconGoogle.setAttribute("class", "material-symbols-outlined");

      cell.appendChild(iconGoogle);
      rowTable.appendChild(cell);
    }

    function deleteCategory(event) {
      API.deletarLivro(event.path[2].classList[0]);
    }

    function cadastrarLivro(event) {
      document.querySelector(".home").classList.add("hide");
      document.querySelector(".forms").classList.remove("hide");
      const forms = document.querySelector('form')
      forms.appendChild(
              qwerty.button({
          text: "Enviar",
          funcao: (event) => cadastrarApi(event),
        }),   )
      document.querySelector("h1").textContent = "Cadastrar"
   
    }

    (function createLinkApiGoogle() {
      const newlink = document.createElement("link");
      newlink.setAttribute("rel", "stylesheet");
      newlink.setAttribute(
        "href",
        "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      );
      document.head.appendChild(newlink);
    })();

    const forms = document.createElement("section");
    forms.classList.add("forms");
    forms.classList.add("hide");
    main.appendChild(forms);
    const inputs = {
      titulo: qwerty.input({
        name: "titulo",
      }),
      autor: qwerty.input({
        name: "autor",
      }),
      descricao: qwerty.input({
        name: "descricao",
      }),
      tiragem: qwerty.input({
        name: "tiragem",
      }),
    };
    forms.appendChild(
      qwerty.form([
        qwerty.field({
          titulo: "Título",
          input: inputs.titulo,
        }),
        qwerty.field({
          titulo: "Autor",
          input: inputs.autor,
        }),
        qwerty.field({
          titulo: "Descrição",
          input: inputs.descricao,
        }),
        qwerty.field({
          titulo: "Tiragem",
          input: inputs.tiragem,
        }),
      ])
    );
  });

  function cadastrarApi(event) {
    event.preventDefault();
    const titulo = document.querySelectorAll("input")[1].value;
    const autor = document.querySelectorAll("input")[2].value;
    const descricao = document.querySelectorAll("input")[3].value;
    const tiragem = parseInt(document.querySelectorAll("input")[4].value);
    const livro = { tiragem, titulo, autor, descricao };
    API.cadastrarLivro(livro);
    window.location.reload(true);
  }

  async function editCategory(event) {
    event.preventDefault();
    const uid = event.path[2].classList[0]; 
    const forms = document.querySelector('form')
    forms.appendChild(
              qwerty.button({
          text: "Atualizar",
          funcao: (event) => editarApi(event,uid),
        }),   )
    document.querySelector("h1").textContent = "Atualizar"
    const livros = await API.obterLivros();
    const livro = livros.filter(item => {
      if(item.uid === uid){
        return item;
      }
    })

    document.querySelector('.home').classList.add('hide');
    document.querySelector('.forms').classList.remove('hide');
    document.querySelectorAll("input")[1].value = livro[0].titulo;
    document.querySelectorAll("input")[2].value = livro[0].autor;
    document.querySelectorAll("input")[3].value = livro[0].descricao;
    document.querySelectorAll("input")[4].value = livro[0].tiragem;

    document.querySelector
    
  }

  async function editarApi(event,uid){
    event.preventDefault();
    const titulo = document.querySelectorAll("input")[1].value;
    const autor = document.querySelectorAll("input")[2].value;
    const descricao = document.querySelectorAll("input")[3].value;
    const tiragem = parseInt(document.querySelectorAll("input")[4].value);
    const livro = { uid, tiragem, titulo, autor, descricao };
    await API.editarLivro(livro);
    window.location.reload(true);
  }


})();
