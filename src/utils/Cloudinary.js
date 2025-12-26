import fs from "fs"
import { v2 as cloudinary } from 'cloudinary';



// Configuration
    cloudinary.config({ 
        cloud_name:process.env.CLOUDINARY_COULD_NAME, 
        api_key:process.env.CLOUDINARY_APY_KEY, 
        api_secret:process.env.CLOUDINARY_API_SECRET   // Click 'View API Keys' above to copy your API secret
    });
    
    const uploadOnCloudinary = async (LocalFilePath) => {
       try {
        if(!LocalFilePath) return null;
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(LocalFilePath,{
            resource_type:"auto",            
        })
        //file has been uploaded successfull
        console.log("fill upload on cloudinary");
        
       } catch (error) {
        fs.unlinkSync(LocalFilePath) //remove the locally tempeary save file as the opreation  got faild
        return null;
       }        
    }