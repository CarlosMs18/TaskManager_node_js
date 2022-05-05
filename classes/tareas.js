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
}


const tareas = new Tareas()

module.exports = tareas