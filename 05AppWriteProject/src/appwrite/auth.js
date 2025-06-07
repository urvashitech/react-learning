import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client()
    account;
    constructor(){
        this.client.setProject('appwriteProjectID');
        this.account = new Account (this.client)
    }
    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique() , email , password,name)
            if (userAccount) {
                return this.login({email,password})
            } else {
                return userAccount
            }
        } catch (error) {
            console.log("Appwrite service error :: createAccount:: " , error )
        }
    }
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
            
        } catch (error) {
            console.log("Appwrite service error :: login:: " , error )
        }
    }
    async getCurrentSession(){
        try {
            return await this.account.get() 
        } catch (error) {
            console.log("Appwrite service error :: getCurrentSession:: " , error )
        }
        return null ; 
    }
    async logout(){
        try {
            return await this.account.deleteSession();
            
        } catch (error) {
            console.log("Appwrite service error :: logout::" , error )
        }
    }

}

const authService = new AuthService();

export default authService