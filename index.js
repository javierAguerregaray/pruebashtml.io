const listado = document.getElementById ("listado");





function simpson() {fetch("https://apisimpsons.fly.dev/api/personajes?limit=900&page=1")
.then(res => res.json())
.then (datoslistos => pantalla(datoslistos.docs))

}

function pantalla(arr) {
   for (let i = 0; i < arr.length; i++) {
      const tarjeta = document.createElement("div");
      tarjeta.innerHTML =
      arr[i].nombre
   
   
   }
}
simpson()
pantalla()
/*.then (datoslistos => console.log (datoslistos.results))
const tarhtml = document.getElementById ("tarjetas")

function pantalla(arr) {
   for (let i = 0; i < arr.length; i++) {
    const tarjeta = document.createElement("div");
    tarjeta.innerHTML =
    arr[i].name
    + " "+
    arr[i].species
    + " "+
    arr[i].type
    ;
    tarhtml.appendChild(tarjeta);
   }
}




pantalla()

`
    <img src="${arr[i].image}" alt="${arr[i].name}" width="200">
    
    
    `*/