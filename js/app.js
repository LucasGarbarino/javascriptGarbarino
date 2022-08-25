let cant = 0

const tareas = []

class Tarea {
    constructor (titulo, texto) {
        this.titulo = titulo
        this.texto = texto
    }
}

const toDoList = document.querySelector('.todo_list')
const tituloLista = document.querySelector('.titulo-lista')
const mensaje = document.querySelector('.mensaje')
const botonAgregar = document.getElementById("boton")

botonAgregar.addEventListener('click', ()=> {
    
    // debugger
    
    cant++
    let titulo = document.querySelector('#titulo').value.toUpperCase()
    let texto = document.querySelector('#texto').value
    tareas.push(new Tarea(titulo, texto))

    tituloLista.textContent = 'Lista de tareas'

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

})

function eliminarTarea(e) {

    // debugger

    tareaNro = e.target.parentNode.id

    if (tareaNro == 0) {
        tareas.shift()
    } else {
        tareas.splice(tareaNro, 1)
    }
    printTareas()

    cant--

    if(cant == 1){
        mensaje.textContent = 'Ya casi'; 
    }else if(cant == 0){
        tituloLista.textContent = 'Listo!';
        mensaje.textContent = '';
    }else{
        tituloLista.textContent = 'Lista de Tareas';   
    }
    
}

function crearTarea(titulo, texto, numero) {

    let nuevaTarea = document.createElement('li')
    nuevaTarea.classList.add('tarea')

    let tituloTarea =  document.createElement('h4')
    tituloTarea.classList.add('titulo-tarea')
    tituloTarea.innerText = titulo

    let textoTarea = document.createElement('p')
    textoTarea.innerText = texto
    
    let check = document.createElement('button')
    check.classList.add('check')
    check.innerText = 'check'

    nuevaTarea.setAttribute('id', numero)

    nuevaTarea.appendChild(tituloTarea)
    nuevaTarea.appendChild(textoTarea)
    nuevaTarea.appendChild(check)

    toDoList.appendChild(nuevaTarea)

    check.addEventListener('click', eliminarTarea, false);
}

function printTareas() {

    // debugger
    
    toDoList.innerHTML = ''
    for (let tarea of tareas) {
        titulo = tarea.titulo
        texto = tarea.texto
        numero = tareas.indexOf(tarea)
        crearTarea(titulo, texto, numero);
    }

}
