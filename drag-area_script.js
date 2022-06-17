//selecting all requires elements
const dropArea = document.querySelector(".drag-areaCapa"),
dragText = dropArea.querySelector("h1"),
button = dropArea.querySelector(".anexar-foto"),
input = dropArea.querySelector("#file");

let file;

button.onclick= () =>{
    input.click(); //if user click on the button then input also clicked
}

input.addEventListener("change", function(){
    file = this.file[0];
    showFile(); //calling function
    dropArea.classList.add("active")
})

//if user Drag File over DragArea
dropArea.addEventListener("dragover", (event) =>{
    event.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent= "Solte aqui para anexar a imagem"
});

//if user leave dragges  File from DragArea
dropArea.addEventListener("dragleave", () =>{
    dropArea.classList.remove("active")
    dragText.textContent= "Se preferir arraste e solte a foto aqui"

});

//if user drop File on DropArea
dropArea.addEventListener("drop", (event) =>{
    event.preventDefault();    
    file = event.dataTransfer.files[0];
    showFile(); //calling funciton
    
});

function showFile(){
    let fileType = file.type;    
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding valid extensions in arrya
    if (validExtensions.includes(fileType)){
        let fileReader = new FileReader(); //creating new FileReader obj
        fileReader.onload = ()=>{
            let fileURL = fileReader.result; //passing user file source in filerURL variable
            let imgTag = `<img  src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src atribute
            dropArea.innerHTML= imgTag;  //add that created img tag inside drope area container
        }
        fileReader.readAsDataURL(file)
    }else{ 
        alert("Isto não é um arquivo de imagem");
        dropArea.classList.remove("active");
        dragText.textContent= "Se preferir arraste e solte a foto aqui";
    }

}