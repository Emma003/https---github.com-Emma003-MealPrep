import { Client, Account, Databases } from 'react-native-appwrite';

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('682953df0002bdd14085')
    .setPlatform('com.mobile.mealprep');

export const account = new Account(client)
const databases = new Databases(client)