//Reducer
//Redux Store and Initial State
//Way to Change State

const initialState ={
    todos: [],
    id: 0
}

function rootReducer(state=initialState, action){
    switch (action.type){
        case 'ADD_TODO':
            //add a todo
            var newState = {...state};
            newState.id++
            return{
                ...newState,
                todos: [...newState.todos, {task: action.task, id: newState.id}]
            };
        case 'REMOVE_TODO':
            //remove todo
            let todos = state.todos.filter(val => val.id !== +action.id);
            return {...state, todos};
        default:
            return state
    }
}

const store = Redux.createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

$(document).ready(function(){
    $("ul").on("click", "button", function(e){
        store.dispatch({
            type: "REMOVE_TODO",
            id: $(e.target).attr("id")
        });
        $(e.target)
         .parent()
         .remove();
    })

    $("form").on("submit", function(event){
        event.preventDefault();
        let newTask = $("#task").val()
        store.dispatch({
            type: "ADD_TODO",
            task: newTask
        });
        let currentState = store.getState();
        let $newLi = $("<li>", {
            text: newTask
        });
        let $newButton = $("<button>", {
            text: "X",
            id: currentState.id
        })
        $newLi.append($newButton);
        $("#todos").append($newLi)
        $("form").trigger("reset");
    })
});