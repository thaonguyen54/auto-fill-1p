import { ResourceType } from "../enum";
import type { User } from "../../global.type"
import type { IObserver, IPublisher } from "./type";

class UserPublisher implements IPublisher {
    private observers: Map<ResourceType, IObserver[]>;
    private static instance: UserPublisher;

    constructor() {
        this.observers = new Map();
    }

    public static getInstance(): UserPublisher {
        if (!UserPublisher.instance) {
            UserPublisher.instance = new UserPublisher();
        }
        return UserPublisher.instance;
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
            observer.update(type, data)
        );
    }

    setUser(user: User): void {
        this.notify(ResourceType.USER, user);
    }
}

export default UserPublisher.getInstance();