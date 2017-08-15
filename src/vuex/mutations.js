import {
    LOGINS,
    SHOWLOADING,
    HIDELOADING
} from './types'
import { MessageBox } from 'element-ui';
import {router} from '../main'
import getters from './getters'
const state = {
    current:{
        UserId:localStorage.getItem('currentUser_id'),
    	Username:localStorage.getItem('currentUser_name'),
    	UserToken:localStorage.getItem('currentUser_token')
    },
    loading:false
}

const mutations={
	[LOGINS](state,oData){
        localStorage.setItem('currentUser_id',oData.id); 
		localStorage.setItem('currentUser_name',oData.email); 
		localStorage.setItem('currentUser_token',oData.token); 
        router.push('/main')
	},
    [SHOWLOADING](state){
        state.loading=true
    },
    [HIDELOADING](state){
        state.loading=false
    }
}

export default{
	state,
	mutations,
	getters
}