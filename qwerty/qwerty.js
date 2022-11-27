window.qwerty = {
  field : ({titulo, input}) => {
    const field = document.createElement('div');
    const labelContainer = document.createElement('div');
    const labelElement = document.createElement('label');
    labelContainer.appendChild(labelElement);
    field.appendChild(labelContainer);
    labelElement.textContent = titulo + ' : '; 
    field.appendChild(input);
    return field;
  },
  form : (children) => {
    const form =  document.createElement("form");
    for(const child of children){
      form.appendChild(child);
    }
    return form;
  },
  actions : (children) => {
    const actions =  document.createElement("div");
    actions.classList.add('actions')
    for(const child of children){
      actions.appendChild(child);
    }
    return actions;
  },
  button : ({text, onClick = () => {}}) => {  const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.textContent = "Enviar";
    button.addEventListener("click", onClick)
    return button;
  },
  input : ({type = 'text', name}) => {
    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    return  input;
  }
}