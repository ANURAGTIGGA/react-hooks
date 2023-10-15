export default function reducer(state, action) {
    const {type} = action;

    switch(type) {
        case 'increment': {
            const newcount = state.count+1;
            const error = newcount > 5 ? 'Maximum reached' : null;
            return {
                ...state,
                count: error ? state.count : newcount,
                error: error
            }
        }
        case 'decrement': {
            const newcount = state.count-1;
            const error = newcount < 0 ? 'Minimum reached' : null;
            return {
                ...state,
                count: error ? state.count : newcount,
                error: error
            }
        }
        default:
            return state;
    }
}