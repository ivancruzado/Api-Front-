const types = {
    authLogin:'auth-login',
    authLogout:'auth-logout'
}



const iniSate = {
    user:{id:1,name:'ivan'},

}


const reducer = (state,action) =>{
    switch(action.type){
        case types.authLogout:
            return{
                ...state,
                user:null
            }
            case types.authLogin:
            return{
                ...state,
                user:action.user
            }
        default:
            return state;
    }


}

export{iniSate,types}
export default reducer;