let mision = document.getElementById("mision")
mision.textContent = "Nuestra mision como empresa es brindar soporte y desarrollo de software a todos"


let email = document.getElementById("email")
email.textContent = "bemjagarzon@gmail.com"


let nosotros = document.getElementById("us")
nosotros.textContent = "Nosotros"


let h3 = document.querySelectorAll("h3")
for (let i = 0; i < h3.length; i++) {
    h3[i].classList.add("textColor")
    
}

document.querySelector("div h1").classList.remove("text-light")
document.querySelector("div h1").classList.add("h1Titulo")

let face = document.querySelector(".face").classList.add("ocultar")

let newTitle = document.getElementById("contenedorParrafos")
let tituloH3 = document.createElement("h3");
let p = document.createElement("p");
tituloH3.classList.add("textColor")
tituloH3.textContent = "seguridad"
p.textContent = "una modalidad de seguridad protocolar de acuerdo a las normas IRAM 7000"
newTitle.appendChild(tituloH3)
newTitle.appendChild(p)


