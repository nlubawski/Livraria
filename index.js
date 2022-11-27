(async() => {
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

window.addEventListener("load", () => {
    const main = document.createElement("main");

    document.body.appendChild(main);

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
  
    
    main.appendChild(
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
        text: "Entrar",
        onClick: () => ()=>{}
      })
    ])
    );
  });








})();
