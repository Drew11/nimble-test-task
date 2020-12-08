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
                const  secondsAfterCloseTab =(moment().unix() - item.startingTime);

                const hours = Math.floor(secondsAfterCloseTab/60/60);
                const minutes = Math.floor(secondsAfterCloseTab/60);
                const seconds = secondsAfterCloseTab - ( (hours * 60 * 60) + (minutes*60) );


                console.log(hours, minutes, seconds, item.seconds);
            
                // let
                //     minutes = item.minutes + (secondsAfterCloseTab/60),
                //     hours = item.hours + (secondsAfterCloseTab/60/60),
                //     seconds = item.seconds + (secondsAfterCloseTab - );


                return {...item,
                    seconds: item.seconds + seconds,
                    minutes: item.minutes + minutes,
                    hours: item.hours + hours
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