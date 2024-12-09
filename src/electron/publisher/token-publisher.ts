import { IObserver } from "./observer";
import { IPublisher } from "./publisher";

class TokenPublisher implements IPublisher {
    private token: string = '';
    private observers: IObserver[] = [];

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

const tokenPublisher = new TokenPublisher();
export default tokenPublisher;