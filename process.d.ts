declare namespace NodeJS {
    export interface ProcessEnv {
        AZURE_AD_CLIENT_ID: string;
        AZURE_AD_AUTHORITY: string;
        AZURE_AD_REDIRECT_URI: string;
        AZURE_AD_POST_LOGOUT_REDIRECT_URI: string;
    }
}