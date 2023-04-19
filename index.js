const listado = document.getElementById ("listado");

function simpson() {fetch("https://apisimpsons.fly.dev/api/personajes?limit=720&page=1")
.then(res => res.json())
.then (datoslistos => pantalla(datoslistos.docs))

}

const parapantalla = document.getElementById ("tarjetas")
function pantalla(arr) {
   for (let i = 0; i < arr.length; i++) {
      const tarjeta = document.createElement("div");
    tarjeta.innerHTML = 
    
    
    `
    <img src="${arr[i].Imagen}" " width="150">
    <p><b><h4>
    "${arr[i].Nombre}"</h4></b>
    </p>
    `
;
  parapantalla.appendChild(tarjeta);      
   }
}
simpson()
pantalla()
