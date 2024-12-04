import { Handler } from ".";

export class MessageHandler extends Handler {
    channel: string;

    constructor(channel: string) {
        super();
        this.channel = channel;
    }

    handle = (message: string) => {
        if (this.channel === 'send-message') {
            return this.handleSend(message);
        } else {
            return this.handleReceive(message);
        }
    }

    handleSend = (message: string) => {
        console.log("Sending >>>>", message);
        return message;
    }

    handleReceive = (message: string) => {
        console.log("Received >>>>", message);
        return
    }
}