import { exec } from 'child_process';

export function execPromise<T>(cmd: string, parseJson: boolean = true): Promise<T> {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout) => {
            if (error) {
                reject(error);
            }
            resolve(parseJson ? JSON.parse(stdout) : stdout);
        });
    });
}