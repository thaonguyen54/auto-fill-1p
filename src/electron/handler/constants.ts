import path from 'path';
export const COMMAND = path.resolve(__dirname, '/auto-fill-1p/src/exe/op.exe');

export const CHANNELS = {
    HOME: 'home',
    SYSTEM_INFO: 'system-info',
    SEND_MESSAGE: 'send-message',
    AUTH: {
        LOGIN: 'login',
        SIGN_UP: 'sign-up',
        LOGOUT: 'logout',
    },
    VAULT: {
        CREATE: 'create',
        DELETE: 'delete',
        UPDATE: 'update',
        GET_ALL: 'get-all',
        GET_ONE: 'get-one',
    },
    USER: {
        GET: 'get',
    },
    VAULT_UI: {
        CREATE: 'create-vault',
    }
}