import { ResourceType } from "../enum";
import type { IObserver, IPublisher } from "./type";

class TokenPublisher implements IPublisher {
    private observers:  IObserver[];
    private static instance: TokenPublisher;

    constructor() {
        this.observers = [];
    }

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
        // this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(type: ResourceType, data: any): void {
        this.observers.forEach(observer => observer.update(type, data));
    }

    setToken(token: string | null): void {
        this.notify(ResourceType.TOKEN, token);
    }
}

export default TokenPublisher.getInstance();