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



    mostrarCompletadasPendiente(completadas){
        let contador = 0;
        let estado;
        this.lista.forEach(tarea => {
            const {descripcion , completado} = tarea

            if(completado){
                estado = 'Completadas'
            }else{
                estado = 'Incompleto'
            }

            if(completadas){
                if(completado){
                   contador++
                   console.log(`${contador}. ${descripcion} ${completado} :: ${estado} `)
                }
            }else{
                if(!completado){
                    contador++
                    console.log(`${contador}. ${descripcion} ${completado} :: ${estado} `)
                }
            }

        })
    
    }

    completarChecked(id){
     this.lista.forEach(tarea => {
            if(!id.includes(tarea.id)){
                tarea.completado = null
            }else{
                tarea.completado = new Date().toDateString()
            }
        })
     
     
    }


    async eliminarTarea(id){
        this.lista = this.lista.filter(p => p.id !== id)

    }
}


const tareas = new Tareas()

module.exports = tareas