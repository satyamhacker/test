import React from 'react'

const Fetch_items_api=async ()=> {

   // console.log('test')
  
    try {
        // Make a GET request using fetch
        const response = await fetch('http://localhost:3000/fetchitems');
    
        // Check if the request was successful (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
       console.log("calling fetching api")
        // Parse the JSON response
        const data = await response.json();
        return data;
    
      } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error.message);
      }


}

export default Fetch_items_api
