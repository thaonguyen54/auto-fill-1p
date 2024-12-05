import { SharedResources } from "../shared-resource";

type AuthCredentials = {
    email: string;
    password: string;
    secretKey: string;
}
export class AuthHandler extends SharedResources {
    login(authCredentials: AuthCredentials) {
        const tokenProvider = SharedResources.getTokenProviderInstance();
        const token = "Token after login sucessful"
        console.log("Logging in with credentials: ", authCredentials);
        tokenProvider.setToken(token);
        return token;
    }

    signUp() {
        return "Sign up successful!";
    }
}