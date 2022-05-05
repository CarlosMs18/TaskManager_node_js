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

module.exports = {
    menuInquire,
    pause,
    createTarea
}