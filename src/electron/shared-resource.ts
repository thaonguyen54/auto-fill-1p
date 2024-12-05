import { TokenProvider } from "./provider/token-provider";

export class SharedResources {
    protected static tokenProvider: TokenProvider;

    protected static getTokenProviderInstance() {
        if (!SharedResources.tokenProvider) {
            SharedResources.tokenProvider = new TokenProvider();
        }

        return SharedResources.tokenProvider;
    }
}

