
const parrafo = document.querySelector("p");
const boton = document.querySelector("button");

let contador = 0;

boton.addEventListener("click", () => {
    console.log("click");
    contador++;
    parrafo.textContent = contador; 
});

//condiones para prestamo

//let prestamo;

//if (edad>=21){
//    prestamo = 'proceda';
//}   else {
//    prestamo = 'no proceda';
//}



// operador ternario

//condicion para acceder a prestamo ? expre si es true : expre si es false
let edad = 25;

let prestamo = edad >= 21 ? 'proceda' : 'no proceda';

console.log(prestamo);

//

let antiguedad = 5;

let solicitud = antiguedad >= 5 ? 'proceda' : 'no proceda'

console.log(solicitud);

//tipos de prestamos


(async () => {

    const { value: fruit } = await Swal.fire({
      title: 'El motivo de tu prestamo',
      input: 'select',
      inputOptions: {
        'motivos': {
          arreglos: 'arreglos en la casa',
          viajes: 'vacaciones',
          deudas: 'pago de deudas',
          auto: 'cambiar el auto'
        },
      },
      inputPlaceholder: 'Selecciona un motivo',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === 'motive') {
            resolve()
          } else {
            resolve('You need to select a motive :)')
          }
        })
      }
    })
    
    if (fruit) {
      Swal.fire(`You selected: ${fruit}`)
    }
    
    })()