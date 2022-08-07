// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const maximo = document.querySelector('#maximo');
const minimo = document.querySelector('#minimo');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const yearMax = new Date().getFullYear(); // Año actual
const yearMin = yearMax - 10;

// Generar el objeto con la busqueda

const datosBusqueda = {
    marca: '',
    year:'',
    maximo:'',
    minimo:'',
    puertas:'',
    color:'',
    transmision:''

}


// Eventos

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos();

    // Llena las opciones de años
    llenarSelects();
})

// Event para los select de búsqueda
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;
    }
)

year.addEventListener('change', e =>{
    datosBusqueda.year = e.target.value;
    }
)

maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value;
    }
)

minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value
    }
)

transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value;
    }
)

color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda)
    }
)


// Funciones

function mostrarAutos(){
        autos.forEach(auto => {
            const autoHTML = document.createElement('p');
            const {marca, modelo, year, puertas, transmision, precio, color} = auto;
            autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}`;

        // Insertando en el HTML
            resultado.appendChild(autoHTML);
        })
}


function llenarSelects(){
    for( let i = yearMax; i >= yearMin; i--){
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);// Agrega las opciones de año al select
    }
}
