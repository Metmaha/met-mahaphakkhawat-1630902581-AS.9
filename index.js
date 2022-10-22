const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/getname', (req, res) => {
    res.send('met mahaphakkhawat')
  })
  app.get('/getprofile', (req, res) => {
    let data = {
        name: 'met mahaphakkhawat',
        age: 20,
        apocalypse: 'do the best in every time',
        detail: 'engineer student at Bangkok university.filmmaker.modeling.graphic design.',
    }
    res.send(data)
  })
  app.get('/getabout', (req, res) => {
    let data = {
    name: 'met mahaphakkhawat',
    age: 20,
    email: '123@gmail.com',
    address: '23 street abc THAILAND',
    }
    res.send(data)
  })
  app.get('/getproject', (req, res) => {
    let data = {
    project_name: 'ชอบอยู่คนเดียว - INK WARUNTORN [Official MV]',
    project_description:'2022song',
    project_link: 'https://www.youtube.com/watch?v=xLD3giyGs5Q&list=RDxLD3giyGs5Q&start_radio=1',
    }
    res.send(data)
  })
  app.get('/getcontact', (req, res) => {
    let data = {
    address: '23 street abc THAILAND',
    email: '123@gmail.com',
    phone_number: '1231212120',
    }
    res.send('data')
  })


app.listen(3000, () => {
  console.log('start server at port 3000.')
})