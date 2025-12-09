const DbUserName = process.env.DB_USERNAME;
const DbPassword = process.env.DB_PASSWORD;

export const connectionStr =
  "mongodb+srv://"+DbUserName+":"+DbPassword+"@cluster0.fn6b8gc.mongodb.net/UserAuth";
  
  
