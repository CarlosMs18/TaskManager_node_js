const path = require('path')
const fs = require('fs')

const pathRoute= path.join(__dirname , '../db/data.json')

const guardarDB =async(lista) => {
   

    fs.writeFileSync(pathRoute, JSON.stringify(lista))

}

const leerDB = async() => {
    if(!fs.readFileSync(pathRoute)){
        console.log('No hay archivo para leer')
        return
    }

    const informacion = fs.readFileSync(pathRoute,{encoding:'utf8'})
    const data = JSON.parse(informacion)
    return data

}



module.exports = {
    guardarDB,
    leerDB
}