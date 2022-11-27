(() => {
  const style = document.createElement('style');
  style.innerHTML = `
    * {
      font-family: 'Comic Neue', cursive;
      font-size: 1.5rem;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .hide{
      display: none
    }
    main{
      margin-top:15vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction: column;
    }
    h1{
      margin:10vh;
    }
    td{
      margin-left:1rem;
    }
    .material-symbols-outlined{
      font-size:2rem;
      margin-left:1rem;
    }
    form {
      border-radius: 20px;
      text-align: center;
    }

    input{
      border-radius: 10px;
    }
    button{
      width: 50%;
      border: none;
      padding: 0.25rem;
      background: lightgreen;
      border-radius: 5px;
      margin: 1rem;
    }
    .buscar{
      display: flex;
      margin-bottom: 2rem;
    }
    .cadastrar{
      display: flex;
      justify-content: center
    }

  `
  document.body.appendChild(style);
})();