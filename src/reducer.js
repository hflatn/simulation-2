const initialState = {

    username: '',
    password: '',
    wrong: '',
    nameupdatestring: '',
    descriptionupdatestring: '',

    addressString: '',
    cityString: '',
    stateString: '',
    zipString: '',

    imgUrl: null,

    loanAmountString: '',
    monthlyMortgageString: '',

    desiredRentString: ''
};

const LOGIN = "LOGIN";
const PASSWORD = "PASSWORD"
const WRONG = "WRONG"
const NAMEUPDATE = "NAMEUPDATE"
const DESCRIPTIONUPDATE = "DESCRIPTIONUPDATE"

const ADDRESSUPDATE = "ADDRESSUPDATE"
const CITYUPDATE = "CITYUDPATE"
const STATEUDPATE = "STATEUPDATE"
const ZIPUPDATE = "ZIPUPDATE"

const IMG = "IMG"

const LOANAMOUNT = "LOANAMOUNT"
const MONTHLYMORTGAGE = "MONTHLYMORTGAGE"

const DESIREDRENT = "DESIREDRENT"

export default function manager(state = initialState, action) {
    let { payload } = action;
    switch (action.type) {

        case NAMEUPDATE:
            return Object.assign({}, state, {
                nameupdatestring: payload
            })

        case DESCRIPTIONUPDATE:
            return Object.assign({}, state, {
                descriptionupdatestring: payload
            })

        case ADDRESSUPDATE:
            return Object.assign({}, state, {
                addressString: payload
            })

        case CITYUPDATE:
            return Object.assign({}, state, {
                cityString: payload
            })

        case STATEUDPATE:
            return Object.assign({}, state, {
                stateString: payload
            })

        case ZIPUPDATE:
            return Object.assign({}, state, {
                zipString: payload
            })

        case IMG:
            return Object.assign({}, state, {
                imgUrl: payload
            })

        case MONTHLYMORTGAGE:
            return Object.assign({}, state, {
                monthlyMortgageString: payload
            })

        case LOANAMOUNT:
            return Object.assign({}, state, {
                loanAmountString: payload
            })

        case DESIREDRENT:
            return Object.assign({}, state, {
                desiredRentString: payload
            })
    }

}

export function logging() {
    return { type: LOGIN }

}

export function passy() {
    return { type: PASSWORD }
}

export function updatewrong() {
    return { type: WRONG }
}

export function nameupdate(nameupdatestring) {
    return {
        type: NAMEUPDATE,
        payload: nameupdatestring

    }
}

export function descriptionupdate(descriptionupdatestring) {
    return {
        type: DESCRIPTIONUPDATE,
        payload: descriptionupdatestring
    }
}

export function addressupdate(addressString) {
    return {
        type: ADDRESSUPDATE,
        payload: addressString

    }
}

export function cityupdate(cityString) {
    return {
        type: CITYUPDATE,
        payload: cityString

    }
}

export function stateupdate(stateString) {
    return {
        type: STATEUDPATE,
        payload: stateString
    }
}

export function zipupdate(zipString) {
    return {
        type: ZIPUPDATE,
        payload: zipString

    }
}

export function img(imgUrl) {
    return {
        type: IMG,
        payload: imgUrl
    }
}

export function loanamount(loanAmountString) {
    return {
        type: LOANAMOUNT,
        payload: loanAmountString
    }
}

export function monthlymortgage(monthlyMortgageString) {
    return {
        type: MONTHLYMORTGAGE,
        payload: monthlyMortgageString
    }
}

export function desiredrent(desiredRentString) {
    return {
        type: DESIREDRENT,
        payload: desiredRentString
    }
}