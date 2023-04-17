export const updateJson = (json) => {
    return {
        type: 'SET_LAYOUT',
        payload: json
    }
}


export const getJson = () => {
    return {
        type: 'GET_LAYOUT'
    }
}