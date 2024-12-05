export class TokenProvider {
    private token: string | null = null;

    setToken(token: string) {
        this.token = token;
    }

    getToken() {
        return this.token;
    }

    clearToken() {
        this.token = null;
    }

}