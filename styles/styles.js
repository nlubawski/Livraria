(() => {
  const style = document.createElement('style');
  style.innerHTML = `
    body {
      font-family: 'Comic Neue', cursive;
      font-size: 1.5rem;
    }
    form {
      width: 50%;
      margin-top: calc(10vh + 10%);
      margin-left: 25%;
      background: #e3e3e3;
      border-radius: 20px;
      text-align: center;
    }
    input{
      border-radius: 5px;
      border: none;
    }
    button{
      width: 50%;
      border: none;
      padding: 0.25rem;
      background: lightgreen;
      border-radius: 5px;
      margin: 1rem;
    }
  `
  document.body.appendChild(style);
})();