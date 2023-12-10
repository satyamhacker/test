import React, { useEffect, useState } from 'react';
import Fetch_items_api from '../api/Fetch_items_api';

function Show_items() {
  const [dataFetched, setDataFetched] = useState(false);
  const [items, setItems] = useState([]);

  // Uncomment the code below if you want to fetch items
  useEffect(() => {
    const Fetch_medical_items = async () => {
     
        const Fetch_items_response = await Fetch_items_api();
        setItems(Fetch_items_response,"fetch item")
       
        setDataFetched(true);
    };

     
    Fetch_medical_items();
  }, []);
   

  return <>{/* Your component JSX goes here */}</>;
}

export default Show_items;
