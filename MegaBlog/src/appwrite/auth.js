import conf from '../conf/conf'

import {Client , Account, ID} from "appwrite"



export class AuthService {

    client = new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }
   
    async createAccount ({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique() , email, password, name);
            if (userAccount) {
                // call another mathod
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite service :: createAccount :: " , error);
        }
    }

    async login({email, password}){
        try {
           return  await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
           console.log("Appwrite service :: login :: " , error);
        }
    }
    async logout(){
        try {
            // !ekhane return add korte lagte pare.
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: " , error);
        }
    }

    async getCurrentUser(){
        try {
          return  await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: " , error);
        }
        return null;
    }
    


}

const authService = new AuthService();

export default authService












