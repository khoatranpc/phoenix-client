export const CHANGETHEME = 'CHANGETHEME';
export const ChangeTheme = (payload: string) => {
    return {
        type: CHANGETHEME,
        payload
    }
}