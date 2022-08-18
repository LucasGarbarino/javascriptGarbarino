let cant = 0

const tareas = []

class Tarea {
    constructor (titulo, texto, cant) {
            this.titulo = titulo
            this.texto = texto
            this.numero = cant
        }
}


const botonAgregar = document.getElementById("boton")
const tituloLista = document.querySelector('.titulo-lista')
const mensaje = document.querySelector('.mensaje')


botonAgregar.addEventListener('click', ()=> {
    
    // debugger
    
    let toDoList = document.querySelector('.todo_list')
    let titulo = document.querySelector('#titulo').value.toUpperCase()
    let texto = document.querySelector('#texto').value

    if (titulo == '') {
        
        alert('dale, agregá una tarea')

    } else {

        tituloLista.textContent = 'Lista de tareas'

        let nuevaTarea = document.createElement('li')
        nuevaTarea.classList.add('tarea')

        let tituloTarea =  document.createElement('h4')
        let textoTarea = document.createElement('p')
        let check = document.createElement('button')

        tituloTarea.innerText = titulo
        tituloTarea.classList.add('titulo-tarea')
        textoTarea.innerText = texto
        check.innerText = 'check'
        check.classList.add('check')

        nuevaTarea.appendChild(tituloTarea)
        nuevaTarea.appendChild(textoTarea)
        nuevaTarea.appendChild(check)

        toDoList.appendChild(nuevaTarea)

        check.addEventListener('click', eliminarTarea, false);

        cant++
    }
    tareas.push(new Tarea(titulo, texto, cant))
    
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
    e.currentTarget.parentNode.remove()

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