// import logic.js in index.js
//1 //1 Import db.js file (line 5)
const db= require('./db')

//1 Get all contactss from the database (mongodb)
const getContacts =()=>{
    return db.Contact.find().then(
        (result)=>{ //all contact details
            if(result){
                return{
                    statusCode:200,
                    contacts:result  //object ayett set chyth
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'No data found'  // object ayett set chyth
                }
            }

        }
    )
}

//2 view an employee from the database(mongodb)
const viewContact =(id)=>{
    return db.Contact.findOne({id}).then(// findOne?
    //The findOne() method is typically used in database queries to retrieve a single document
    // that matches the specified criteria. It is commonly used in MongoDB, a popular NoSQL database,
    // although similar methods exist in other database systems as well.
        (result)=>{ //all contact details
            if(result){
                return{
                    statusCode:200,
                    contact:result  //object ayett set chyth
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'No data found'  // object ayett set chyth
                }
            }

        }
    )
}

// 3 to add a contact
const addContact=(id,username,Email,address,phone)=>
{
    return db.Contact.findOne({id}).then((result)=>
    {
        if(result)
        {
            return{
                statusCode:401,
                message:'Contact already exist'
            }
        }
        const contactData=new db.Contact({id,username,Email,address,phone})
        contactData.save()
        return{
            statusCode:200,
            message:'Contact details added'

        }
    })
}

//4 delete a contact

const delContact =(id)=>{
    return db.Contact.deleteOne({id}).then(
        (result)=>{
            if(result){
                
                    return{
                    statusCode:200,
                    message:'Contact deleted successfully' 
                }           
            }
            else{
                return{
                    statusCode:404,
                    message:'data not found'
                }
            }
 }
)
}


// 5 update the contact details
const updateContact=(id,username,Email,address,phone)=>{
    return db.Contact.findOne({id}).then((response)=>{// response = old employee details 
        if(response){
            // assign the new employee details in to the db
            response.id=id;
            response.username=username;
            response.Email=Email;
            response.address=address;
            response.phone=phone;
            response.save();
            return{
                statusCode:200,
                message:'Contact updated successfully'
            }
    
        }
        else{
            return{
                statusCode:404,
                message:'No such Contact exists'
            }
        }
    })
 }

module.exports={
    getContacts,
    viewContact,
    addContact,
    delContact,
    updateContact
}