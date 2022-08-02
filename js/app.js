let cant = 0

function nuevaTarea() {
    // debugger
    let continuar = true
    while(continuar) {
        let tarea = prompt('¿Qué vamos a hacer hoy?')
        if (tarea == '') {
            alert('No te hagas el loco')
        } else if(tarea != null) {
            cant = cant + 1
            console.log(tarea)
            if(cant==2) {
                console.warn('Ahí va queriendo')
            } if(cant == 4) {
                console.warn('Bueno, vamo en esa')
            } else if(cant == 6){
                console.warn('Epa! Tomatelo con soda, no?')
            }
        }
        continuar = confirm('¿Agregar nueva tarea?')
    } 
    if(continuar == false && cant <= 2) {
        console.warn('Ponele un poco de onda, che')
    }
}
    
    