

let ls = [
    {
        nombre: "cristhian",
        edad: 21
    },
    {
        nombre: "Naty",
        edad: 22
    },
    {
        nombre: "Alan",
        edad: 22
    },{
        nombre: "Ariana",
        edad: 21
    },{
        nombre: "Dilan",
        edad: 20
    },{
        nombre: "Ingrith",
        edad: 22
    }
]

// localStorage.setItem("list", JSON.stringify(ls))
ls = JSON.parse(localStorage.getItem("list"))
// console.log(localStorage.getItem("list"))
ls.forEach( elementos => {
    let elemento = document.getElementById("elementos")
    let div = document.createElement("div")

    div.innerHTML = elementos.nombre + " "+  elementos.edad
    elemento.appendChild(div)
})