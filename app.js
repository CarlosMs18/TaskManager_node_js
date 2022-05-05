const {menuInquire, pause} = require('./helpers/inquire-menu')

const main = async() => {
    
    let opcion = '';
    do {
        console.clear()
        opcion  = await menuInquire()

        switch (opcion) {
            case '1':
                console.log('option 1')
                break;
        
            default:
                
                break;
        }

        await pause()

    } while (opcion !== '0');
    

}

main()
