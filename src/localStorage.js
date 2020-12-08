import moment from 'moment';

export const loadState = () => {
    try {
        const serializedSate = localStorage.getItem('state');
        if(serializedSate === null) {
            return undefined
        }

        const state = JSON.parse(serializedSate);


        return state

    } catch (e) {
        return undefined
    }
};

export const saveState = (state) => {
    try {
        const serializedSate = JSON.stringify(state);
        localStorage.setItem('state', serializedSate)

    } catch (e) {
        //
    }
};