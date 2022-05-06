const inquirer = require('inquirer')


const preguntas = [
    {
        type:'list',
        name:'opcion',
        message : 'Eliga una opcion',
        choices  : [
            {
                value: '1',
                name: `${ '1.' } Crear tarea`
            },
            {
                value: '2',
                name: `${ '2.'} Listar tareas`
            },
            {
                value: '3',
                name: `${ '3.'} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${ '4.' } Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5.' } Completar tarea(s)`
            },
            {
                value: '6',
                name: `${ '6.' } Borrar tarea`
            },
            {
                value: '0',
                name: `${ '0.' } Salir`
            },
        ]
    }
]

const menuInquire = async() => {
    console.log('============================')
    console.log('Seleccione una tarea a realizar')
    console.log('============================')

    const {opcion}  = await inquirer.prompt(preguntas)
    
    return opcion
}

const pause = async() => {
    const questionPause = [
        {
            type:'input',
            name: 'pause',
            message: 'Press ENTER to continue' 
        }
    ]

    await inquirer.prompt(questionPause)
}


const createTarea = async() => {
    const question = [
        {
            type : 'input',
            name : 'description',
            message : '¿Que tarea desea crear?',
            validate(value){
                if(!value){
                    throw 'La descripcion no puede ir vacia'
                }
                return true
            }

        }
    ]

    const {description} = await inquirer.prompt(question)
    return description
}

const menuEliminar = async(tareas)=>{
    
   
    const choices = tareas.map((tarea, i)=> {
        const idx = `${i+1}`
        return {
            value : tarea.id,
            name : `${idx}. ${tarea.descripcion}`
        }
    })

    choices.unshift({
        value:'0',
        name:'0. Salir'
    })


    const question = [
        {
            type :'list',
            name : 'id',
            message : '¿Que tarea desea eliminar?',
            choices

        }
    ]

    const {id} = await inquirer.prompt(question)
    return id
}


const confirmar = async() =>{
   
    const pregunta = [
        {
            type:'confirm',
            name : 'ok',
            message : 'Esta seguro de eliminar la tarea?'
        }
    ]


    const {ok} = await inquirer.prompt(pregunta)
    return ok
}



const mostrarListadoCheck = async(tareas) => {
    const choices = tareas.map((tarea, i)=> {
        const idx = `${i+1}`
        return {
            value : tarea.id,
            name : `${idx}. ${tarea.descripcion}`,
            checked : (tarea.completado) ? true : false
        }
    })

    const preguntas = [
        {
            type : 'checkbox',
            name : 'id',
            message : 'Marcar (completado/pendiente)',
            choices 

        }
    ]
    const {id} =  await inquirer.prompt(preguntas)

    return id
}

module.exports = {
    menuInquire,
    pause,
    createTarea,
    menuEliminar,
    confirmar,
    mostrarListadoCheck
}