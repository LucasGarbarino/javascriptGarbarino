let cant = 0

const tareas = []
class Tarea {
    constructor (titulo, texto) {
        this.titulo = titulo
        this.texto = texto
    }
}


function getTareas() {
    const tareasLocal = JSON.parse(localStorage.getItem("tareasLocal"))
    if (tareasLocal) {
        tareasLocal.forEach(tarea => {
            tareas.push(tarea) 
        })
            
        printTareas()
    }
    
}

const toDoList = document.querySelector('.todo_list')
// const tituloLista = document.querySelector('.titulo-lista')
const mensaje = document.querySelector('.mensaje')
const botonAgregar = document.getElementById("boton")
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) }

getTareas()

botonAgregar.addEventListener('click', ()=> {
        
    
    let titulo = document.querySelector('#titulo').value.toUpperCase()
    let texto = document.querySelector('#texto').value

    if (titulo != ''){
        cant++
        tareas.push(new Tarea(titulo, texto))
        // tituloLista.textContent = 'Lista de tareas'
        printTareas()

        if (cant == 2 ){
            mensaje.textContent = 'Tranca';
        }else if (cant == 3 ){
            mensaje.textContent = 'Bueno, vamo en esa';
        }else if(cant == 4){
            mensaje.textContent = 'Tamo?';
        }else if(cant > 4){
            mensaje.textContent = 'Tomatelo con soda, che';
        }
    
        document.querySelector('#titulo').value = ''
        document.querySelector('#texto').value = ''

    } else {
        swal('error', '#79001a')
    }
})

function printTareas() {

    // debugger
    guardarLocal('tareasLocal', JSON.stringify(tareas))
    toDoList.innerHTML = ''
    for (let tarea of tareas) {
        titulo = tarea.titulo
        texto = tarea.texto
        numero = tareas.indexOf(tarea)
        crearTarea(titulo, texto, numero);

    }

}

function crearTarea(titulo, texto, numero) {

    let nuevaTarea = document.createElement('li')
    nuevaTarea.classList.add('tarea')

    let tituloTarea =  document.createElement('h4')
    tituloTarea.classList.add('titulo-tarea')
    tituloTarea.innerText = titulo
    tituloTarea.setAttribute('id', titulo)

    let textoTarea = document.createElement('p')
    textoTarea.innerText = texto
    
    let check = document.createElement('button')
    check.classList.add('check')
    check.innerText = 'check'

    let trash = document.createElement('i')
    trash.classList.add('fa-solid', 'fa-trash-can')

    nuevaTarea.setAttribute('id', numero)

    nuevaTarea.appendChild(tituloTarea)
    nuevaTarea.appendChild(textoTarea)
    nuevaTarea.appendChild(check)
    nuevaTarea.appendChild(trash)

    toDoList.appendChild(nuevaTarea)

    trash.addEventListener('click', eliminarTarea, false);
    check.addEventListener('click', checkTarea, false)

}

function checkTarea(e) {
    id = e.target.parentNode.id
    checked = document.getElementById(id)
    checked.classList.add('titulo-tarea__check')
    swal('success', '#dee8f5')
    cant--

    if(cant == 1){
        mensaje.textContent = 'Ya casi'; 
    }else if(cant == 0){
        mensaje.textContent = 'Listo!';
        // mensaje.textContent = '';
    }
    

}
function eliminarTarea(e) {

    // debugger

    tareaNro = e.target.parentNode.id

    if (tareaNro == 0) {
        tareas.shift()
    } else {
        tareas.splice(tareaNro, 1)
    }
    
    cant--
    
    if(cant == 1){
        mensaje.textContent = 'Ya casi'; 
    }if (cant == 0){
        mensaje.textContent = 'Listo!';
        // mensaje.textContent = '';
    }

    printTareas()
    
}

const swal = (icono, color)=> {
    Swal.fire({
        icon: icono,
        showConfirmButton: false,
        iconColor: color,
        timer: 800,
        background: 'none',
        backdrop: 'rgba(0,0,123,0.4)'
    })
}