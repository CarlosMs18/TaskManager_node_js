const Tarea = require('./classes/tarea');
const tareas = require('./classes/tareas');
const {menuInquire, pause, createTarea} = require('./helpers/inquire-menu')

const main = async() => {
    
    let opcion = '';
    do {
        console.clear()
        opcion  = await menuInquire()

        switch (opcion) {
            case '1':
                const descripcion = await createTarea()
            
                const tarea = new Tarea(descripcion)
                tareas.agregarTarea(tarea)
                break;
        
            default:
                
                break;
        }

        await pause()

    } while (opcion !== '0');
    

}

main()
