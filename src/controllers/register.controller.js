import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";

const userRegister = asyncHandler(async (req, res) => {
  // get user details from frontend
  // validation - not empty
  //check if user already exists: username , email
  //check for images, check avatar
  // create user object - create entry in db
  //remove password and refresh toten feild from response
  //chect for user creation
  // return response
  const { username, fullName, email, password } = req.body;

  console.log("check feild", email, username, fullName, password);

  if (
    [username, fullName, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all field are required ");
  }

  const existedUser = User.findOne({
    $or: [{ email }, { username }],
  });

  if(existedUser){
    throw new ApiError(409, "email or username is already existed")
  }
  
});

export { userRegister };
