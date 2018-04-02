const initialState = {

    username: '',
    password: '',
    wrong: ''

    
    
};
const LOGIN = "LOGIN";
const PASSWORD = "PASSWORD"
const WRONG = "WRONG"
const PROPERTYNAME = "PROPERTYNAME"
const PROPERTYDESCRIPTION = "PROPERTYDESCRIPTION"

export default function manager( state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            return {username: state.username}

        case PASSWORD:
            return {password: state.password}

        case WRONG:
            return {wrong: state.wrong}

        case PROPERTYNAME:
            return {propertyname: state.propertyname}

        case PROPERTYDESCRIPTION:
            return {propdescription: state. propdescription}
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

export function propname() {
    return {type: PROPERTYNAME}
}

export function propdescription() {
    return {type: PROPERTYDESCRIPTION}
}

