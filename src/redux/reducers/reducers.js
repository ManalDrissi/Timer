export default timeReducer = (state=0,action) => {
    switch(action.type){
        case "ADD_SECONDS": return setSec(++state);
            break;
        default:break;
    }
};
