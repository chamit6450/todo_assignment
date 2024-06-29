// Define the initial state of the reducer, with an empty array for user data
const Initial_State = {
    User_data: []
}

export const todoreducers = (state = Initial_State, action) => {
    switch (action.type) {
        case "ADD_DATA":
            // Return a new state object with the updated user data array
            // by spreading the current state and adding the new data to the array
            return {
                ...state,
                User_data: [...state.User_data, action.payload]
            }

        case "RMV_DATA":
            // Filter out the data element at the index specified in the action payload
            const dltdata = state.User_data.filter((ele, k) => k !== action.payload)

            // Return a new state object with the updated user data array
            return {
                ...state,
                User_data: dltdata
            }

        case "UPDATE_DATA":
            // Map over the user data array and update the element at the index specified in the action
            const updatedata = state.User_data.map((ele, k) => k == action.d ? action.payload : ele)

            // Return a new state object with the updated user data array
            return {
                ...state,
                User_data: updatedata
            }

        // Default case: return the current state if no matching action type is found
        default:
            return state
    }
}