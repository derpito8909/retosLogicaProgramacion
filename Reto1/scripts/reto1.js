/*  Consegir los nombre digitados en una input de texto y guardarlos en un arreglo y mostralos en pantalla. Si el nombre a digitar ya esta en el arreglo no se guarda y tampoco se muestra */

const buttonText = document.getElementById("btnText");
const nameArray = [];

buttonText.addEventListener("click", validateNameDuplicated);

/*  verifica que  el nombre digitado no este previamente en el arreglo de nombre, de lo contrario lo muestra en la pantalla y borrar la caja de texto para agregar uno nuevo  */
function validateNameDuplicated() {
  const nameText = document.getElementById("idName");
  if (!nameArray.includes(nameText.value)) {
    nameArray.push(nameText.value);
    showName(nameArray);
  }
  nameText.value = "";
  //verifica que si ya se digitaron 3 nombres ya no se pueden agregar mas
  if (nameArray.length >= 3) {
    buttonText.removeEventListener("click", validateNameDuplicated);
  }
}

/**
 * muestra los nombres digitados y guardados en el arreglo en una lista en la pantalla
 * @param {Array} nameElement
 */
function showName(nameElement) {
  deleteList();
  nameElement.forEach((name) => {
    const element = document.createElement("li");
    const item = document.createTextNode(name);
    element.appendChild(item);
    document.getElementById("nameList").appendChild(element);
  });
}
/**
 * Elimina la lista de nombres de la pantalla para poder mostar los nombres guardados actualmente
 */
function deleteList() {
  const list = document.getElementById("nameList");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
