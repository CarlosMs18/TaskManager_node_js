class Tareas{
    constructor(){
        this.lista = []
    }
    cargarTareasRecuperadas(tareasRec){
       tareasRec.forEach(tarea => {
           this.lista.push(tarea)
       })
    }
    agregarTarea(tarea){
        this.lista = [...this.lista, tarea]
        console.log(this.lista)
    }

    mostrarTareas(){
        let estado;
        this.lista.forEach((tarea, i)=>{
            const idx = `${i+1}`
            const {descripcion, completado} = tarea
            if(completado){
                estado = 'Completado'
            }else{
                estado = 'Pendiente'
            }

            console.log(`${idx}. ${descripcion} ${completado} :: ${estado}`)
        })
    }
}


const tareas = new Tareas()

module.exports = tareas