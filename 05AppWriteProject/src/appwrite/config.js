import { use } from "react";
import conf from "../conf/conf";
import { Client, Account, ID, Query } from "appwrite";

export class Service{
    client = new Client()
    account;
    constructor(){
        this.client.setEndpoint('appwriteUrl')
        this.client.setProject('appwriteProjectID');
        this.databases = new Databases(client);
        this.bucket = new Storage(client);
        
    }
    async createPost({title , slug,content,featuredImage,status,userID}){
            try {
                return await this.databases.createDocument(
                    conf.appwriteDatabaseUD,
                    conf.appwriteCollectionID,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        userID,
                    }
                )
                
            } catch (error) {
            console.log("Appwrite service error :: createPost:: " , error )
        }
        }

    async updatePost( slug , {title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseUD,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
            
        } catch (error) {
            console.log("Appwrite service error :: updatingPost:: " , error )
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseUD,
                conf.appwriteCollectionID,
                slug
            )
            return true
           
        } catch (error) {
            console.log("Appwrite service error :: deletingPost:: " , error )
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseUD,
                conf.appwriteCollectionID,
                slug
            )
            
           
        } catch (error) {
            console.log("Appwrite service error :: getPost:: " , error )
            
        }
    }

    async getPosts(queries = [Query.equal("status" , "active")]){
        try {
            return await this.databases.listDocument(
                conf.appwriteDatabaseUD,
                conf.appwriteCollectionID,
                queries
            )
        } catch (error) {
            console.log("Appwrite service error :: getPosts:: " , error )
            
        }

    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique,
                file
            )
        } catch (error) {
             console.log("Appwrite service error :: uploadPost:: " , error )
        }
    }

    async deleteFile(fileID){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileID
            )
            return true
        } catch (error) {
            console.log("Appwrite service error :: deletePost:: " , error )
            return false
        }
    }
    getFilePriview(fileId){
        return this.bucket.getFilePriview(
            conf.appwriteBucketID,
            fileId,
        )
    }
}

const service = new Service();

export default service;