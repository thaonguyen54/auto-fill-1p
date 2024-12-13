import { ResourceType } from "../enum";
import type { User } from "../../global.type"
import type { IObserver, IPublisher } from "./type";

class UserPublisher implements IPublisher {
    private observers: IObserver[];
    private static instance: UserPublisher;

    constructor() {
        this.observers = [];
    }

    public static getInstance(): UserPublisher {
        if (!UserPublisher.instance) {
            UserPublisher.instance = new UserPublisher();
        }
        return UserPublisher.instance;
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

    setUser(user: User | null): void {
        this.notify(ResourceType.USER, user);
    }
}

export default UserPublisher.getInstance();