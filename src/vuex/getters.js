export default{
	getUser:(state)=>{
		return state.current.Username;
	},
	getToken:(state)=>{
		return state.current.UserToken;
	},
	getId:(state)=>{
		return state.current.UserId;
	},
	loadingShow:(state)=>{
		return state.loading;
	},
}