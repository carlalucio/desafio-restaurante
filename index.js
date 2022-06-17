var defaultURL = "https://bootcamp-use-desafio.herokuapp.com/products/";

getProducts(defaultURL);

function getProducts(url){
    return axios({
        method: "GET",
        url,
        mode: 'cors',
        data: {

        },
      }).then((response) => {
        createCards(response.data.results);        
      });
}





var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });

  
function createCards(data) {
  const div = document.getElementsByClassName('card');
  div.innerHTML = "";
    for (let product of data) {
    const d = document.createElement("div");
    d.setAttribute('class', 'product');
    d.append(createTag('img', `${product.img()}`))
    d.append(createTag('product_title', `${product.name()}`));
    d.append(createTag('size', `${product.size()}`));
    d.append(createTag('description', `${product.description()}`));
    d.append(createTag('price', `${product.value()}`));
    div.append(d);
  }
}
}

function filterSelection(){
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", defaultURL, false);
  xhttp.send();
  document.getElementsByClassName("btn").innerHTML = xhttp.responseText;
}

