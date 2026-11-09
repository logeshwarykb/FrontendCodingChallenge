const initialState={
    objects: []
}
const ObjectReducer =(state = initialState,action)=>{
    switch(action.type){
        case 'FETCH_OBJECTS':
            return {
                ...state,
                objects : action.payload
            }
        case 'ADD_OBJECT' :
            return{
                ...state,
                objects : [...state.objects, action.payload]
            }
        case 'DELETE_OBJECT' :
            return{
                ...state,
                objects : [...state.objects.filter(o=> o.id !== action.payload)]
            }

        default:
            return state
    }

}

export default ObjectReducer
