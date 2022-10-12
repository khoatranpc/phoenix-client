export const CHANGE_LANG = 'CHANGE_LANG';
export const handleLang = (payload: string) => {
    return {
        type: CHANGE_LANG,
        payload
    }
}