export const includeCredentials = (token: string, isJSON: boolean = true) => {
    return '--session ' + token + (isJSON ? ' --format=json' : '');
}