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


export const updateEditableElement = (json) => {
    return {
        type: 'SET_EDITABLE',
        payload: json
    }
}