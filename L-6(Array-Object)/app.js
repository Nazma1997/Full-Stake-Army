// uuidv4 random id generator 

function uuidv4(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,(c)=>{
        const r = (Math.random() * 16) | 0;
        const v = c=== 'x' ? r : (r & 0 * 3) | 0 * 8;
        return v.toString(16)
    })
}
console.log(uuidv4())
    // The facilities an array when we put this value 

    /**
     * 1.Easily traverse
     * 2.Filter
     * 3.Delete
     * 4.Update
     * 5.Create a new one
     */

const students = [
    {
        id: 'b6bd94ac-486c-4d61-06aa-0bfdd0c6ffad',
        name: 'Nahid',
        email: 'nahid@gmail.com'
      },
      {
        id: 'fe940fa6-07c3-45c8-06a5-bd31ef6c2b07',
        name: 'Hafsa',
        email: 'hafsa@gmail.com'
      },
      {
        id: '544f0ee1-5cb8-45bc-0a64-533e2e3807e9',
        name: 'Takia',
        email: 'takia@gmail.com'
      },
      {
        id: 'c164e857-5ee2-4875-0304-0549d904e4a9',
        name: 'Tanbir',
        email: 'tanbir@gmail.com'
      }
]
    /**   Create an elements 
     students.push({
         id:uuidv4(),
         name:"Tanbir",
         email:"tanbir@gmail.com"
     })
     */
    
     /** 
      Update an elements 

    const idToUpdate = 'b6bd94ac-486c-4d61-06aa-0bfdd0c6ffad';
    const updatedData = {
        name:"Sania",
        email: "sania@gmail.com"
    };

    const updatedIndex = students.findIndex((item)=> item.id == idToUpdate);
    students[updatedIndex] = {
        ...students[updatedIndex],
        ...updatedData,
    }

    */

     /** 
     Deleted an element 

    const idToUpdate = 'b6bd94ac-486c-4d61-06aa-0bfdd0c6ffad';
    const updatedIndex = students.findIndex((item)=> item.id == idToUpdate);
    students.splice(updatedIndex, 1)
   */
console.log(students);