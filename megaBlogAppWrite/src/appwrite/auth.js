import confg from "../confg/confg.js";
import {Client,Account,ID} from "appwrite"


export class AuthService{
    client =new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(confg.appwriteUrl)
        .setProject(confg.appwriteProjectId);
        this.account=new Account(this.client);
    }

    // appwrite services ka wrapper
    async createAccount({email,password,name}){
     try{
        const userAccount=await this.account.create(ID.unique(),email,password,name)
        if(userAccount){
            //return userAccount;
            //call another method;
            return this.login({email,password});
        }
        else {
            return userAccount;
        }
     }
     catch(error){
       throw error;
     }
    }

    async login(){
try{
    return  await this.account.createEmailSession(email,password);

}
catch(error){
    return error;
}
    }


async getCurrentUser(){
try{
return await this.account.get();
}
catch(error){
console.log("AppWrite service ::getCurrentUser:: error::  "+error);
}
return null;
}

async logout(){
    try{
        await this.account.deleteSessions();
    }
    catch(error){
        console.log("error :: ", error);
    }
}
}
const authService =new AuthService();


//export default AuthService;
export default authService;