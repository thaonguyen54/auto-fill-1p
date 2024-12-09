import { IObserver } from "./observer";

export interface IPublisher {
    subcribe(observer: IObserver): void;
    unsubcribe(observer: IObserver): void;
    notify(data: any): void;
}