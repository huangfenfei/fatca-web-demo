import { Configuration, LogLevel } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: '5bdf7fff-b541-45b7-aa20-e7f04564451a',
    authority: 'https://login.microsoftonline.com/4f45f357-03ef-4490-93ac-8b72d35f9f40',
    redirectUri: 'http://localhost:3000/inquiry' || '',
    postLogoutRedirectUri: 'http://localhost:3000/login' || '',
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info("Info", message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
      logLevel: LogLevel.Verbose,
      piiLoggingEnabled: false,
    },
  },
};
export const loginRequest = {
  scopes: ['User.Read'],
};
export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
};