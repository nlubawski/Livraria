(async () => {
  // for (const files of [
  //   "/api/API",
  //   "/qwerty/qwerty",
  //   "/styles/styles",
  // ]) {
  //   const script = document.createElement("script");
  //   script.setAttribute("src", `${files}.js`);
  //   document.head.appendChild(script);
  // }

  // API.cadastrarLivro({
  //   tiragem: 12,
  //   titulo: "teste cadastrar domingo",
  //   autor: "nl",
  //   descricao: "bbbbb llllllll jjjjjjjj ",
  // });

  // await API.deletarLivro("ca78f8ad-76c5-4753-89e0-71c1e1ca6788")

  // const livros = await API.obterLivros();
  // console.log("livros", livros)

  //  await API.editarLivro({uid:"46315188-70ca-4d60-9206-b9e168507830",
  //  tiragem:89, titulo:"99", autor:"LLLL", descricao: "LLLLL KKKKKK JJJJJJJ" })

  window.addEventListener("load", async () => {
    const main = document.createElement("main");
    document.body.appendChild(main);
    const titulo = document.createElement("h1");
    titulo.textContent = "Nossa Livraria!";
    main.appendChild(titulo);

    const home = document.createElement("section");
    home.classList.add("home");
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
    function editCategory(event) {
      const uid = event.path[2].classList[0];
      API.editarLivro();
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
    forms.classList.add("hide")
    main.appendChild(forms)
    const inputs = {
      titulo: qwerty.input({
        name: "titulo"
      }),
      autor: qwerty.input({
        name: "autor"
      }),
      descricao: qwerty.input({
        name: "descricao"
      }),
      tiragem: qwerty.input({
        name: "tiragem"
      }),
    }
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
        input: inputs.tiragem ,
      }),
      qwerty.button({
        text: "Cadastrar",
        onClick: () => ()=>{}
      })
    ])
    );
  });
})();
