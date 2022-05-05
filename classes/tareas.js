class Tareas{
    constructor(){
        this.lista = []
    }

    agregarTarea(tarea){
        this.lista = [...this.lista, tarea]
        console.log(this.lista)
    }
}


const tareas = new Tareas()

module.exports = tareas