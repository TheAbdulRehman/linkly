const pool=require('./db')

const getAllUsersQuery: string=`SELECT * FROM users`
const creatUser: string=`SELECT * FROM users`



const getAllUsers=async ()=>{
   try{
   const users =  await pool.query(getAllUsersQuery);
   return users.rows;

   } catch(error:any){
    console.error("Can not get users", error.message)
   }
}


module.exports={getAllUsers}