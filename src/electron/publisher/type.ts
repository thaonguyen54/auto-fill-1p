
export interface IObserver {
    update(data: any): void;
}

export interface IPublisher {
    subcribe(observer: IObserver): void;
    unsubcribe(observer: IObserver): void;
    notify(data: any): void;
}

