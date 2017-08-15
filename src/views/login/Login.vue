<template>
  <div id="login_box">
    <!--登陆表单-->
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left"  class="demo-ruleForm login-container">
        <div class="by_logo"><span></span></div>
      <div class="form_el">

        <el-form-item prop="email" label='E-mail'>
          <el-input type="email" v-model="ruleForm2.email" auto-complete="off" placeholder="用户名/邮箱账号"></el-input>
        </el-form-item>
        
        <el-form-item v-if="register===true" prop='name' label='名称' >
            <el-input type="text" auto-complete="off" placeholder="名称"
             v-model='ruleForm2.name' ></el-input>
        </el-form-item>  
        
        <el-form-item label="语言" v-if="register===true" prop="locale">
          <el-radio-group v-model="ruleForm2.locale">
            <el-radio v-for="option in selects" :label="option.locale">{{option.value}}</el-radio>
          </el-radio-group>
        </el-form-item>  

        <el-form-item prop="password" label='密码'>
          <a href="javascript:;" style="float:right;color:#0086a3" v-if="register==false">忘记密码?</a>
          <el-input type="password" v-model="ruleForm2.password" @keyup.native.enter="Logins('data',true)" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        
        <el-form-item v-if="register===true" prop='password_confirmation' label='确认密码' >
            <el-input type="password" auto-complete="off" placeholder="确认密码"
             v-model='ruleForm2.password_confirmation'></el-input>
        </el-form-item>

          <el-checkbox v-model="remumber" :clicked=remumber class="remember" v-if="register==false">保持登陆</el-checkbox>
        <el-form-item style="width:100%;margin-top:24px;">
          <div class="login_btn" v-if="register===false">
              <el-button type="primary" style="width:100%;" @click.native.prevent="Logins('data',true)" :loading="logining">登录</el-button>
              <el-button type="primary" style="width:100%;" @click="register=true">注册</el-button>
          </div>
          <div class="register_btn" v-if="register===true">
              <el-button type="primary" style="width:100%;" @click.native.prevent='Registers' :loading="logining">确认</el-button>
              <el-button type="primary" style="width:100%;" @click="register=false">返回登录</el-button>
          </div>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
  import { requestLogin,requestRegister } from '../../api/http';
  export default {
    data() {
       var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if(!(/^[a-zA-Z0-9_-]{6,16}$/.test(value))){
                callback(new Error('密码至少6位,由大小写字母和数字,-,_组成'));
              }else{
                if(this.register===true){
                  if (this.ruleForm2.password_confirmation !== ''){
                     this.$refs.ruleForm2.validateField('password_confirmation');
                  }
                }
          callback();
          }
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        logining: false,
        register:false,
        remumber: this.$store.getters.getRemum,
        selects:[
          {
            value:'英文',
            locale:'en'
          },
          {
            value:'中文',
            locale:'zh-CN'
          }
        ],
        ruleForm2: {
          email: '',
          locale:'',
          name:'',
          password: '',
          password_confirmation:''
        },
        rules2: {
          email:[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入名称', trigger: 'blur'},
            { min:3,max:10,message:'长度3到10个字'}
          ],
          locale: [
             { required: true, message: '请选择语言', trigger: 'change' }
          ],
          password: [
            {required: true, validator: validatePass, trigger: 'blur'},
          ],
          password_confirmation: [
            {required: true, validator: validatePass2, trigger: 'blur'}
          ],
        },
      };
    },
    mounted(){
      if(this.register==false){
          this.ruleForm2.password='',
          this.ruleForm2.password_confirmation='',
          this.ruleForm2.locale='',
          this.ruleForm2.name=''
      }
    },
    methods: {
      Logins() {
        this.$refs.ruleForm2.validate((valid) => {
            if (valid) {
              this.logining = true;
              let params=this.ruleForm2;
              requestLogin(params).then(res => {
                this.logining = false;
                let token=res.data.token;
                var id=res.data.id;
                this.$store.dispatch('logins',{email:params.email,token:token,id:id});
              }).catch(error=>{
                  this.$message({
                    message:'账号或密码错误',
                    type: 'error'
                  });
              });
            } else {
              console.log('error submit!');
              return false;
            }
        });
      },
      Registers() {
        this.$refs.ruleForm2.validate((valid) => {
            if (valid) {
                this.logining = true;
                let params=this.ruleForm2;
                requestRegister(params).then(res=>{
                  this.logining = false;
                  let token=res.meta.token;
                  var id=res.data.id;
                    if(res.status_code!==400){
                      this.$confirm('注册成功,是否跳转会员中心?','提示',{
                        confirmButtonText:'确定',
                        cancelButtonText: '取消',
                        type: 'success'
                      }).then(()=>{
                          this.$store.dispatch('logins',{email:params.email,token:token,id:id});
                      }).catch(()=>{
                        this.register=false;
                        this.ruleForm2.password='';
                      }) 
                    }else{
                      this.$message({
                          message:'邮箱被占用!',
                          type: 'error'
                        });
                      return false;
                    }   
                }).catch(error=>{
                    this.$message({
                      message:'注册失败!',
                      type: 'error'
                    });
                })
            }
        })
      }
    },
  }

</script>

<style lang="scss" scoped>
@import '../../styles/login';
@import '../../styles/media_login';

</style>