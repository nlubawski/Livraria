const url = "http://livros.letscode.dev.netuno.org:25390/services/livro";
const aluno = {
  uid: "918bd08a-c43c-4eaa-942d-29b41a6f88a4",
};
const headers = {
  "Content-Type": "application/json",
};

window.API = {
  cadastrarLivro: async ({ tiragem, titulo, autor, descricao }) => {
    try {
      await fetch(`${url}`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          aluno,
          tiragem,
          titulo,
          autor,
          descricao,
        }),
      });
    } catch (error) {
      console.error("Erro ao cadastrar livro", error);
    }
  },

  obterLivros: async () => {
    try {
      const promise = await fetch(`${url}/lista`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          text: "",
          aluno,
        }),
      });
      if (!promise) {
        return [];
      }
      return promise.json();
    } catch (error) {
      console.error("Erro ao listar livros", error);
    }
  },

  // deletarLivro: () => {},

  // editarLivro: () => {},
};
