let nome = document.querySelector("#inome")
let cpf = document.querySelector("#icpf")
let cep = document.querySelector("#icep")
let logradouro = document.querySelector("#ilogradouro")
let bairro = document.querySelector("#ibairro")
const bttcad = document.querySelector("#bttcadastrou")
const fechacadatro = document.querySelector("#fechaform")
const cmapoformu = document.querySelector("#secformu")
const bttgomarca = document.querySelectorAll(".butao")
let bancodados = []


bttgomarca.forEach(teste =>{

    teste.addEventListener('click', ()=>{
        console.log("oi")

    })
});


if (localStorage.getItem("pedro")){
    bancodados = JSON.parse(localStorage.getItem("pedro"))
}




fechacadatro.addEventListener('click', (evento)=>{

    evento.preventDefault()

     cmapoformu.classList.add("fechar")

});

bttcad.addEventListener('click', (evento)=>{
    evento.preventDefault()

    if (nome.value == ""){
        alert("campo vazio")
    }
    else if (cpf.value == ""){
        alert("campo vazio")
    }
    else if(cep.value == ""){
        alert("campo vazio")
    }
    else if(logradouro.value == ""){
        alert("campo vazio")
    }
    else if(bairro.value == ""){
        alert("campo vazio")
    }
    else{
        alert("cadastrado")
        let registro = {
            nome: nome.value,
            cpf: cpf.value,
            cep: cep.value,
            logradouro: logradouro.value,
            bairro: bairro.value
        }
        bancodados[bancodados.length] = registro
        localStorage.setItem("pedro", JSON.stringify(bancodados))
        cmapoformu.classList.add("fechar")
        localStorage.setItem('logado', true)

    }
})



console.log(bancodados)

