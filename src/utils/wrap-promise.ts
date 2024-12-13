type Suspender<T> = {
    read: () => T;
};

function wrapPromise<T>(promise: Promise<T>): Suspender<T> {
    let status: "pending" | "success" | "error" = "pending";
    let response: T | any;

    const suspender = promise.then(
        (res) => {
            status = "success";
            response = res;
        },
        (err) => {
            status = "error";
            response = err;
        }
    );

    const handler: Record<string, () => T> = {
        pending: () => {
            throw suspender;
        },
        error: () => {
            throw response;
        },
        default: () => response,
    };

    const read = (): T => {
        const result = handler[status] ? handler[status]() : handler.default();
        return result;
    };

    return { read };
}

export default wrapPromise;