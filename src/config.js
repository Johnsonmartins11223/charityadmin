import {Client ,Account, Databases, ID} from 'appwrite'
const projectID = import.meta.env.VITE_PROJECTID
export const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(projectID)

    export const account = new Account(client);
    export const databases = new Databases(client);
    export const  DatabaseId = import.meta.env.VITE_DATABASEID
    export const collectionId = import.meta.env.VITE_COLLECTIONID
    export const id = ID.unique()
    