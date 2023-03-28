const mongoose = require('mongoose')
mongoose.set('strictQuery', false );
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')  
        //console.log('\x1b[41m%s\x1b[37m', e, '\x1b[0m') 
    }) 