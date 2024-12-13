import { ResourceType } from "../enum";

export interface IObserver {
    update(type: ResourceType, data: any): void;
}

export interface IPublisher {
    subcribe(observer: IObserver, type: ResourceType): void;
    unsubcribe(observer: IObserver): void;
    notify(type: ResourceType, data: any): void;
}