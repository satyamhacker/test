// const sequelize = require('../Models/Sequelize');
// const addItems = require('../Models/Add_items');




// const updateMedicineLocation = async (req, res)=>{

//     const{ MedicineNameLocationToUpdate, MedicineStock, Medicine_location_to_update }= req.body;

//    // console.log('test',Medicine_location_to_update );

//     try {
//         const fetchAllItems = await addItems.findOne({
//             where: {
//                 MedicineName: MedicineNameLocationToUpdate,
//                 MedicineTotalStock: MedicineStock
//             }
//         });
    
//         if (fetchAllItems) {
//             // Item found, update its location
//             fetchAllItems.MedicineLocationInShop = Medicine_location_to_update; // Set the new location here
    
//             // Save the changes to the database
//             await fetchAllItems.save();
    
//             console.log('Medicine location updated successfully.');
    
//             res.status(201).json(fetchAllItems);
//         } else {
//             console.log('Medicine not found in the database.');
//             res.status(404).json({ error: 'Medicine not found' });
//         }
//     } catch (error) {
//         console.error("Error updating medicine location:", error);
//         // Handle the error and respond with an error status code
//         res.status(500).json({ error: "Internal Server Error" });
//     }

// }







// module.exports  = {
//     updateMedicineLocation
// }