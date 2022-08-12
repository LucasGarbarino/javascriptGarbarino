let cant = 0
const tareas = []

class Tarea {
    constructor (titulo, descripcion, cant, fecha) {
        this.titulo = titulo
        this.descripcion = descripcion
        this.numero = cant
        this.fecha = fecha
    }
}

function nuevaTarea() {
    // debugger
    let continuar = true
    while(continuar) {
        let titulo = prompt('¿Qué hay que hacer?')
        let descripcion = prompt('Añade una descripción')
        let fecha = new Date()
        if (titulo == '') {
            alert('No te hagas el loco')
        } else if(titulo != null) {
            cant = cant + 1
            console.log(titulo, descripcion)
            if(cant==2) {
                console.warn('Ahí va queriendo')
            } if(cant == 4) {
                console.warn('Bueno, vamo en esa')
            } else if(cant == 6){
                console.warn('Epa! Tomatelo con soda, no?')
            }
        }
        tareas.push(new Tarea(titulo, descripcion, cant, fecha))
        continuar = confirm('¿Agregar nueva tarea?')
    } 
    if(continuar == false && cant <= 2) {
        console.warn('Ponele un poco de onda, che')
    }
}

function queTareas() {
    tareas.forEach(tarea => {
        console.table(tarea)
    })
}

