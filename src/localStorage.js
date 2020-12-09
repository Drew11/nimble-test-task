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

                let hours = Math.floor(secondsAfterCloseTab/60/60);
                let minutes = Math.floor(secondsAfterCloseTab/60) ;
                let seconds = secondsAfterCloseTab - ( (hours * 60 * 60) + (minutes*60) );

                if(minutes + item.minutes > 59) {
                    hours += 1;
                    minutes = item.minutes  + minutes - 60;
                }

                if(seconds + item.seconds > 59) {
                    minutes += 1;
                    seconds =  item.seconds + seconds - 60;
                }
                console.log(hours, minutes, seconds, item.startingTime);

                return {...item,
                    seconds,
                    minutes,
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