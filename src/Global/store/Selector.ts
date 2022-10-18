import useStore from ".";

export const SelectorRole = () => {
    const [state] = useStore();
    return state.User.role
}