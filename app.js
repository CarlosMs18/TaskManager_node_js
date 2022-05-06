const Tarea = require('./classes/tarea');
const tareas = require('./classes/tareas');
const {menuInquire, pause, createTarea, menuEliminar, confirmar, mostrarListadoCheck} = require('./helpers/inquire-menu')
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
                tareas.mostrarTareas()
                break;
            
            case '3':
                tareas.mostrarCompletadasPendiente(true)
           
                break;
            case '4':
                tareas.mostrarCompletadasPendiente(false)
              
                break;
            case '5':
                const idTarea = await mostrarListadoCheck(tareas.lista)
                tareas.completarChecked(idTarea)
                break;

            case '6':
                const id = await menuEliminar(tareas.lista)
                if(id !=='0'){
                    const ok = await confirmar()
                   
                    if(ok){
                       
                        await tareas.eliminarTarea(id)
                        
                    }else{
                        break;
                    }
                    
                }
        
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
