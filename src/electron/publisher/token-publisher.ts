import { ResourceType } from "../enum";
import type { IObserver, IPublisher } from "./type";

class TokenPublisher implements IPublisher {
    private observers: Map<ResourceType, IObserver[]>;
    private static instance: TokenPublisher;

    constructor() {
        this.observers = new Map();
    }

    public static getInstance(): TokenPublisher {
        if (!TokenPublisher.instance) {
            TokenPublisher.instance = new TokenPublisher();
        }

        return TokenPublisher.instance;
    }

    subcribe(observer: IObserver, type: ResourceType): void {
        if (!this.observers.has(type)) {
            this.observers.set(type, []);
        }

        this.observers.get(type)?.push(observer);
    }

    unsubcribe(observer: IObserver): void {
        // this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(type: ResourceType, data: any): void {
        this.observers.get(type)?.forEach(observer =>
            observer.update(type, data )
        );
    }

    setToken(token: string): void {
        this.notify(ResourceType.TOKEN, token);
    }
}

export default TokenPublisher.getInstance();