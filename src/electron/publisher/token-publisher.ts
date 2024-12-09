import type { IObserver, IPublisher } from "./type";

class TokenPublisher implements IPublisher {
    private token: string = '';
    private observers: IObserver[] = [];

    private static instance: TokenPublisher;

    public static getInstance(): TokenPublisher {
        if (!TokenPublisher.instance) {
            TokenPublisher.instance = new TokenPublisher();
        }
        return TokenPublisher.instance;
    }

    subcribe(observer: IObserver): void {
        this.observers.push(observer);
    }

    unsubcribe(observer: IObserver): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data: any): void {
        this.observers.forEach(observer => observer.update(data));
    }

    setToken(token: string): void {
        this.token = token;
        this.notify(this.token);
    }

    getToken(): string {
        return this.token;
    }
}

export default TokenPublisher.getInstance();