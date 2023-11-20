
//asincrona
//callbacks, promesas, async - await

//nfn
/*
const conexionBDD = (datosConexión) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexión ? resolve("conexión exitosa") : reject("conexión Error")
        })
    })
}

//then toma la respuesta (datosConexión)

conexionBDD(true)
    .then(((r)=>{console.log(r +"\n------");}))
    .catch((e=>console.log(e)))

conexionBDD(false)
    .then(((r)=>{console.log(r);}))
    .catch((e=>console.log(e)))

*/

/*const obtenerDatos = fetch("https://jsonplaceholder.typicode.com/users")

obtenerDatos
    .then(peticion => peticion.json())
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log("Error"))*/

//_______ API ________
//  XMLHTTPRequest
//  Fetch
//  Axios
//  React Query

/*fetch("https://jsonplaceholder.typicode.com/users")
    .then(peticion => peticion.json())
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))

const conectarAPI = async() => {
    try{
        const respuesta = (await fetch("https://jsonplaceholder.typicode.com/users")).json()
        console.log(respuesta)
    }catch(error){
        console.log(error)
    }
}

conectarAPI()*/


const conexionBDD = (datosConexión) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexión ? resolve("conexión exitosa") : reject("conexión Error")
        })
    })
}

const conexionBDDDos = async() => {
    try{
        const r = await conexionBDD(true)
        console.log(r)
    }catch (error){
        console.log(error)
    }
}

conexionBDDDos()

