const initialState = {

    username: '',
    password: '',
    wrong: '',
    nameupdatestring: '',
    descriptionupdatestring: ''
    
    
};

const LOGIN = "LOGIN";
const PASSWORD = "PASSWORD"
const WRONG = "WRONG"
const NAMEUPDATE = "NAMEUPDATE"
const DESCRIPTIONUPDATE = "DESCRIPTIONUPDATE"

export default function manager( state = initialState, action) {
    let { payload } = action;
    switch(action.type) {
        case LOGIN:
            return {username: state.username}

        case PASSWORD:
            return {password: state.password}

        case WRONG:
            return {wrong: state.wrong}

        case NAMEUPDATE:
            return Object.assign({}, state, {
                nameupdatestring: action.payload })

        case DESCRIPTIONUPDATE:
        return Object.assign({}, state, {
            descriptionupdatestring: action.payload })
    }
}

export function logging() {
   return { type:LOGIN }

}

export function passy() {
    return { type:PASSWORD }
}

export function updatewrong() {
    return {type: WRONG }
}

export function nameupdate(propertyname) {
    return {
        type: NAMEUPDATE,
        payload: propertyname
        
    }
}

export function descriptionupdate(propertydescription) {
    return {type: DESCRIPTIONUPDATE,
        payload: propertydescription
    }
}

