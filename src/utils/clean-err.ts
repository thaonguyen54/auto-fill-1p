export const removeErrorPrefix = (errorMessage: string): string => {
    // Matches [ERROR] followed by date/time stamp pattern
    return errorMessage.replace(/\[ERROR\]\s+\d{4}\/\d{2}\/\d{2}\s+\d{2}:\d{2}:\d{2}\s+/, '');
};

