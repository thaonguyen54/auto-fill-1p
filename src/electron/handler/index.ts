
export abstract class Handler<T = any> {
    abstract channel: string;
    
    abstract handle: (...args: any[]) => T;
}