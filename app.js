const Tarea = require('./classes/tarea');
const tareas = require('./classes/tareas');
const {menuInquire, pause, createTarea} = require('./helpers/inquire-menu')
const {guardarDB, leerDB} = require('./helpers/save_db')

const main = async() => {
    
    
    const tareasRecuperadas = await leerDB()
    if(tareasRecuperadas){
        tareas.cargarTareasRecuperadas(tareasRecuperadas)
       
    }
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
            case '2':
                console.log(tareas.lista)
                break;
            default:
                
                break;
        }
        const {lista} = tareas
        /* console.log(lista) */
        await guardarDB(lista)

        await pause()

    } while (opcion !== '0');
    

}

main()
