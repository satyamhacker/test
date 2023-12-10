import React from 'react'

const  Add_items_api=async(Medicine_data)=> {

  alert('test')

    try {
        const response = await fetch("http://localhost:3000/additems", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },                                                               
          body: JSON.stringify(Medicine_data),                                                                                                                            
        });                                                          
                                                                                                                                         
        if (!response.ok) {
          throw new Error("Failed to post data");
        }
    
        const result = await response.json();
        return result;
      } catch (error) {
        console.log(error);
      }
      
}

export default Add_items_api
