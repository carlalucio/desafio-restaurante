// const defaultURL = 'https://bootcamp-use-desafio.herokuapp.com/products/';

// function getProducts(){
//   axios.get(defaultURL)
//   .then(response => {
//     console.log(response)
//   })
//   .catch(error => console.log(error))

// }

// getProducts();

var modalDelete = document.getElementById("ModalDelete");

function openModal() {
  modalDelete.style.display = "flex";
}

function closeModal() {
  modalDelete.style.display = "none";
}

var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");

function openDragArea() {
  step1.style.display = "none";
  step2.style.display = "flex";
}

function back() {
  step1.style.display = "flex";
  step2.style.display = "none";
}

var empty = document.getElementById("empty");
var showCard = document.getElementById("card");

function deleteProduct() {
  showCard.style.display = "none";
  empty.style.display = "flex";
  modalDelete.style.display = "none";
}
