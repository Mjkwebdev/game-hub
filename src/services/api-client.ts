import axios from "axios";
export default axios.create({
    baseURL:"https://api.rawg.io/api",
   params:{
     key:"53a15b0190db4ac29c9635e9546b0247",
   }
})