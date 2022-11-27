(() => {
  // for (const files of [
  //   "/api/API",
  //   "/qwerty/qwerty",
  //   "/styles/styles",
  // ]) {
  //   const script = document.createElement("script");
  //   script.setAttribute("src", `${files}.js`);
  //   document.head.appendChild(script);
  // }

  API.cadastrarLivro({
    tiragem: 12,
    titulo: "teste cadastrar domingo",
    autor: "nl",
    descricao: "bbbbb llllllll jjjjjjjj ",
  });
})();
