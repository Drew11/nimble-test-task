
        export default function reducer(state, action) {
            switch (action.type) {
                case 'ADD_TRACKER':
                    return [...state, action.payload];

                case 'REMOVE_TRACKER':
                    return state.filter(item=>item.id!==action.payload.id);

                case 'START_TRACKER':
                    return state.map(item=>{
                        if(item.id === action.payload.id) {
                            return {...item,
                                startingTime: action.payload.startingTime - item.seconds,
                                active: true
                            }
                        }
                        return item;
                    });

                case 'STOP_TRACKER':
                    return state.map(item=>{
                        if(item.id === action.payload.id) {
                            return {...item,
                                startingTime: 0,
                                active: false
                            }
                        }
                        return item;
                    });

                case 'UPDATE_SECOND':
                    return state.map(item=>{

                        if(item.id === action.payload.id) {
                            return {...item,
                                seconds: action.payload.currentSecond - item.startingTime,
                            }
                        }
                        return item;
                    });

                case 'UPDATE_MINUTE':
                    return state.map(item=>{
                        if(item.id === action.payload.id) {
                            return {...item,
                                seconds: 0,
                                minutes: item.minutes + 1,
                                startingTime: item.startingTime + 60
                            }
                        }
                        return item;
                    });

                case 'UPDATE_HOUR':
                    return state.map(item=>{
                        if(item.id === action.payload.id) {
                            return {...item,
                                minutes: 0,
                                hours: item.hours + 1,
                            }
                        }
                        return item;
                    });
        default:
            return state
    }
}