let cant = 0

const tareas = []

class Tarea {
    constructor (titulo, texto, cant) {
        this.titulo = titulo
        this.texto = texto
        this.numero = cant
    }
}


const toDoList = document.querySelector('.todo_list')
const botonAgregar = document.getElementById("boton")
const tituloLista = document.querySelector('.titulo-lista')
const mensaje = document.querySelector('.mensaje')

botonAgregar.addEventListener('click', ()=> {
    
    // debugger
    
    let titulo = document.querySelector('#titulo').value.toUpperCase()
    let texto = document.querySelector('#texto').value

    if (titulo == '') {
        
        alert('dale, agregá una tarea')

    } else {
        tituloLista.textContent = 'Lista de tareas'
        cant++
        tareas.push(new Tarea(titulo, texto, cant))

        tareas.forEach(Tarea => {

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
    
    
            nuevaTarea.appendChild(tituloTarea)
            nuevaTarea.appendChild(textoTarea)
            nuevaTarea.appendChild(check)
    
            toDoList.appendChild(nuevaTarea)
    
            check.addEventListener('click', eliminarTarea, false);
        })
    }
    
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