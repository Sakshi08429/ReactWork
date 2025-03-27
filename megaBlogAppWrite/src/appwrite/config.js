import confg from "../confg/confg";
import {Client,ID,Databases,Storage,Query} from "appwrite"

export class Service{
    client=new Client();
    databases;
    bucket;


    constructor(){
        this.client
        .setEndpoint(confg.appwriteUrl)
        .setProject(confg.appwriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
try{
    return this.databases.createDocument(
        confg.appwriteDatabaseId,
        confg.appwriteCollectionId,
        slug,
        {
            title,
            content,
            featuredImage,
            status,userId

        }
       )
}
catch(error){
    console.log("Appwrite service :: error :: ",error)
}
    }

    async updatePost(slug,{title,content,featuredImage,status,userId}){
     try{
return this.databases.updateDocument(
    confg.appwriteDatabaseId,
    confg.appwriteCollectionId,
    slug,{
        title,
        content,
        featuredImage,
        status,
        userId

    }
)
     }
     catch(error){
        console.log("Appwrite service :: error :: ",error)
    }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                confg.appwriteDatabaseId,
                confg.appwriteCollectionId,
                slug
            );return true;
        }
        catch(error){
            console.log("Appwrite service :: error :: ",error)
            return false;
        }

    }

    async getPost(slug){
        try{
            return await this.databases.getPost(
                confg.appwriteDatabaseId,
                confg.appwriteCollectionId,
                slug,
            )
        }
        catch(error){
            console.log("Appwrite service :: error :: ",error)
            return false;
        }

    }

    //query
    
    async getPosts(queries=[Query.equal("status","active")]){

    try{
        return await this.databases.listDocuments(
            confg.appwriteDatabaseId,
            confg.appwriteCollectionId,
            queries,
            100,
            0,
        )
    }
    catch(error){
        console.log("Appwrite service :: error :: ",error)
        return false;
    }

}


//file upload method
async uploadFile(file){
    try{
        return await this.bucket.createFile(
            confg.appwriteBucketId,
            Id.unique(),
            file
        )
    }
    catch(error){
console.log("error:: ",error);
return false;
    }
}
   

async deleteFile(fileId){
    try{
await this.bucket.deleteFile(
    confg.appwriteBucketId,
    fileId,
)
return true;
    }
    catch(error){
        console.log("error:: ",error);
        return false;
            }

}


async getFilePreview(fileId){
    try{
        return await this.bucket.getFilePreview(
            confg.appwriteBucketId,
            fileId,
        )
        return true;
    }
    catch(error){
        console.log("error:: ",error);
        return false;
            }
}
  
}
const service=new Service()
export default service;