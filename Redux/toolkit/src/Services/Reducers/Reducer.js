import { Add_To_Cart } from '../Constants'
const Initialstate = {
    cartdata: [],
}

const cartitems = (state = Initialstate, action) => {
    switch (action.type) {
        case Add_To_Cart:
            return {
                ...state,
                cartdata: action.data
            }
        default:
            return state
    }
}
export default cartitems