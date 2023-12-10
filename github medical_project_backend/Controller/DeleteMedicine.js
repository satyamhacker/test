// const sequelize  = require('../Models/Sequelize');
// const addItems = require("../Models/Add_items");



// const deletemedicine = async(req, res)=>{

//   const {MedicineName, MedicineStock} = req.body;

//   console.log(MedicineName, MedicineStock)
 
//   try {
//     const delete_medicine_request = await addItems.destroy({
//       where: {
//         MedicineName:MedicineName,// Specify the condition to identify the record you want to delete
//         MedicineTotalStock:MedicineStock
//       }
//     });

//     res.status(201).json("medicine deleted successfull");

   
//   } catch (error) {
//     console.error('Error deleting item:', error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }

// }


// module.exports = {
//     deletemedicine
// };