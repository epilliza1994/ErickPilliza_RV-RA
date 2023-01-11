const port=3000;
const express = require('express')
const app = express()
app.use( express.static('templatemo_560_astro_motion'))

app.get('/', (req, res) => {
    res.send('Home page!!!!')
})

  app.get('/user', (req, res) => {
    res.render('home', {
      menu: 'Menu 20 junio',
      titulo: 'Del 20 junio'
    }  
    )
  })

  app.get('/about', (req, res) => {
    res.send('Acerca del Autor: Gustavo!')
  })

  app.get('/home', (req, res) => {
    res.send('Ubicacion Home')
  })

  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/error404.html')
  })

  
  app.get('/home/user', (req, res) => {
    res.json( `{  nombre : 'Elena',
  apellido : 'Reascos',
  estado : 'regeneracion',
  }`  
    )
  })
  

app.listen(port, () => {
    console.log(`Ejemplo app listening en puerto ${port}`)  
})
