function uuidv4(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,(c)=>{
        const r = (Math.random() * 16) | 0;
        const v = c=== 'x' ? r : (r & 0 * 3) | 0 * 8;
        return v.toString(16)
    })
}


const students = {
    'b6bd94ac-486c-4d61-06aa-0bfdd0c6ffad':{
        id: 'b6bd94ac-486c-4d61-06aa-0bfdd0c6ffad',
        name: 'Nahid',
        email: 'nahid@gmail.com'
      },
      'fe940fa6-07c3-45c8-06a5-bd31ef6c2b07' : {
        id: 'fe940fa6-07c3-45c8-06a5-bd31ef6c2b07',
        name: 'Hafsa',
        email: 'hafsa@gmail.com'
      },
      '544f0ee1-5cb8-45bc-0a64-533e2e3807e9' :{
        id: '544f0ee1-5cb8-45bc-0a64-533e2e3807e9',
        name: 'Takia',
        email: 'takia@gmail.com'
      },
      'c164e857-5ee2-4875-0304-0549d904e4a9' :{
        id: 'c164e857-5ee2-4875-0304-0549d904e4a9',
        name: 'Tanbir',
        email: 'tanbir@gmail.com'
      }
}

// Create an elements 
  
  const std = {
      id : uuidv4(),
      name: "Tania",
      email: "tania@gmail.com"
  }

  students[std.id] = std;


//   Update an elements 
   const idToBeUpdated = 'b6bd94ac-486c-4d61-06aa-0bfdd0c6ffad';
   const updatedData = {
       name : "Sidra",
       email: "sidra@gmail.com"
   };

   students[idToBeUpdated] = {
       ...[idToBeUpdated],
       ...updatedData
   }

  //  Delete an elements 
     const id = 'c164e857-5ee2-4875-0304-0549d904e4a9'
     delete students[id];

  //  get 

  const stuId = '544f0ee1-5cb8-45bc-0a64-533e2e3807e9';
  // console.log(students[stuId])


  // Travers 

  Object.values(students).forEach((student) => {
     console.log(student)
  })
   
   

  // console.log(students);