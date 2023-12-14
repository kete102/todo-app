export default () => {
  const divElement = document.createElement("div");
  divElement.classList.add("Added-with-js");
  const view = `<h1>Hola</h1>`;

  divElement.appendChild(view);
  return divElement;
};
