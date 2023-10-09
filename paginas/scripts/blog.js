let comentario = document.querySelector("#icoment")
const gravarcoment = document.getElementById("gravar-coment")

gravarcoment.addEventListener('click', (evento)=>{
    evento.preventDefault()
    let coment = comentario.value
   
    console.log(coment)
    if(coment == ""){
        alert("campo vazio")
    }
    else{
        alert("comentario enviado")
    }
    console.log("clicou")
     

});
