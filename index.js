const express=require('express')// we imported express here
// express is framework of nodejs
//nodejs allows us to run javascript on server,nodejs is needed for running js
const cors=require('cors')// imported cors 
const logic=require('./services/logic')
const phoneServer=express()
phoneServer.use(cors({// cors?
    origin:'http://localhost:5174' // remove last "/" from this path
}))
//This option specifies the origin (domain, protocol, and port) from which cross-origin requests should be allowed.
// In this case, it's allowing requests from http://localhost:5173.

// http://localhost:8001
// 8001 port set aaki
phoneServer.use(express.json())
phoneServer.listen(8004,()=>{
    console.log('Phone server port listening on port 8004');
})
 
// http://localhost:8004/

phoneServer.get('/',(req,res)=>{
    res.send('Hello World')
})

// This is how we set json data path
// http://localhost:8004/api/get-all-contacts
phoneServer.get('/api/get-all-contacts',(req,res)=>{
    logic.getContacts().then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

// http://localhost:8004/api/view-contact/100    100->id
phoneServer.get('/api/view-contact/:id',(req,res)=>{
    logic.viewContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

// http://localhost:8004/api/add-contact/100    100->id
phoneServer.post('/api/add-contact',(req,res)=>{
    logic.addContact(req.body.id,req.body.username,req.body.Email,req.body.address,req.body.phone).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})
// // http://localhost:8004/api/delete-contact/100    100->id
phoneServer.delete('/api/delete-contact/:id',(req,res)=>{
    logic.delContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
})
})

// http://localhost:8004/api/update-contact/100    100->id
phoneServer.post('/api/update-contact/:contactid',(req,res)=>{
    logic.updateContact(req.body.id,req.body.username,req.body.Email,req.body.address,req.body.phone).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

