import { execSync } from "child_process";
import { Handler } from ".";


export class SystemInfoHandler extends Handler<string> {
    channel: string;
    
    constructor(channel: string){
        super();
        this.channel = channel;
    }
    
    handle = () => {
        const systemInfo = execSync('systeminfo').toString();
        console.log('Electron version >>>', process.versions.electron);
        console.log("Chronium version >>>", process.versions.chrome);
        
        return systemInfo;
    }
}