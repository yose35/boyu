import * as types from "./types"
export default{
	logins:({commit},oData)=>{
   		commit('LOGINS',oData);
	},
	showLoding:({commit})=>{
		commit('SHOWLOADING')
	},
	hideLoading:({commit})=>{
		commit('HIDELOADING')
	},
}