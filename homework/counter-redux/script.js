//Reducer
//Redux Store and Initial State
//Way to Change State

const initialState ={
    count: 0
}

function rootReducer(state=initialState, action){
    switch (action.type){
        case "INCREMENT":
            var newState = {...state}
            newState.count++
            return newState
        case "DECREMENT":
            var newState = {...state}
            newState.count--
            return newState
        default:
            return state
    }
}

const store = Redux.createStore(rootReducer)

$(document).ready(function(){
    let currentState = store.getState();
    $("#counter").text(currentState.count)

    $("#increment").on("click", function(){
        //dispact some action to increment the count
        store.dispatch({
            type: "INCREMENT"
        });
        let currentState = store.getState();
        $("#counter").text(currentState.count)
    })
    $("#decrement").on("click", function(){
        //dispact some action to decrement the count
        store.dispatch({
            type: "DECREMENT"
        });
        let currentState = store.getState();
        $("#counter").text(currentState.count)
    })
});