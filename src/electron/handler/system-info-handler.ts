import { execSync } from "child_process";
import { SharedResources } from "../shared-resource";

export class SystemInfoHandler extends SharedResources {
    viewSystemInfo() {
        console.log("Token shared: ", SharedResources.tokenProvider.getToken());
        return "Sys info";
    }
}