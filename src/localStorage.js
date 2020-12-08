import moment from 'moment';

export const loadState = () => {
    try {
        const serializedSate = window.localStorage.getItem('state');
        if(serializedSate === null) {
            return undefined
        }

        const state = JSON.parse(serializedSate);

        const updatedStateToCurrentTime = state.map(item=>{
            if(item.active){
                return {...item,
                    seconds: item.seconds +  (moment().unix() - item.startingTime),
                }
            }
            return item;
        });

        return updatedStateToCurrentTime

    } catch (e) {
        return undefined
    }
};

export const saveState = (state) => {
    try {
        const serializedSate = JSON.stringify(state);
        window.localStorage.setItem('state', serializedSate)

    } catch (e) {
        //
    }
};