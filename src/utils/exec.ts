import { exec } from 'child_process';

export function execPromise<T>(cmd: string, parseJson: boolean = true, nonResultOutput = false): Promise<T> {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout) => {
            if (error) {
                reject(error);
            } else {
                if(nonResultOutput){
                    resolve(stdout as any);
                }
                resolve(parseJson ? JSON.parse(stdout) : stdout);
            }
        });
    });
}