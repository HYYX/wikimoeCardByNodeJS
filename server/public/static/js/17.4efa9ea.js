webpackJsonp([17],{O6aW:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},"RP7/":function(e,t,a){"use strict";function o(e){a("v/Qc")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("r4Fr"),s=a("oAV5"),i={data:function(){return{captchaSrc:"/api/captcha?time="+(new Date).getTime(),sending:!1,codeShow:!1,form:{email:"",password:"",code:"",nickName:"",captcha:""}}},mounted:function(){this.$route.query.adr&&(this.form.email=atob(this.$route.query.adr))},methods:{captchaUpdata:function(){this.captchaSrc="/api/captcha?time="+(new Date).getTime()},openEmailDialog:function(){if(!Object(s.d)(this.form.email))return this.$message.error("邮箱格式有误！"),!1;this.captchaSrc="/api/captcha?time="+(new Date).getTime(),this.codeShow=!0},sendEmailCode:function(){var e=this;if(""==this.form.captcha)return this.$message.error("请输入图形验证码！"),!1;this.sending=!0;var t={email:this.form.email,captcha:this.form.captcha,type:"reg"};r.a.sendmail(t).then(function(t){console.log(t),e.captchaUpdata(),0==t.data.code?e.$message.error(t.data.msg):1==t.data.code&&(e.$message({message:t.data.msg,type:"success"}),e.codeShow=!1),setTimeout(function(){e.sending=!1},500)})},onSubmit:function(){var e=this;if(!Object(s.d)(this.form.email))return this.$message.error("邮箱格式有误！"),!1;if(!Object(s.g)(this.form.password))return this.$message.error("密码必须为4-8位纯数字！"),!1;if(!Object(s.f)(this.form.nickName))return this.$message.error("昵称只能允许为2-8位中英日数字与下划线！"),!1;if(""==this.form.code)return this.$message.error("请输入邮箱验证码！"),!1;var t={email:this.form.email,password:this.form.password,nickName:this.form.nickName,emailCode:this.form.code};r.a.reg(t).then(function(t){if(console.log(t),0==t.data.code)e.$message.error(t.data.msg);else if(1==t.data.code){var a=t.data;sessionStorage.setItem("token",a.token),e.$alert("恭喜您，注册成功！","提示",{confirmButtonText:"确定",showClose:!1,callback:function(t){e.$router.push({path:"/"})}})}})},backIndex:function(){this.$router.push({path:"/"})},emailToLowerCase:function(){this.form.email=this.form.email.toLowerCase()}}},c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"common_body"},[a("h5",{staticClass:"common_title"},[e._v("注册账号")]),e._v(" "),a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"邮箱地址"}},[a("el-input",{attrs:{placeholder:"请输入邮箱地址"},on:{input:e.emailToLowerCase},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{"show-password":"",placeholder:"请输入4-8位纯数字"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"昵称"}},[a("el-input",{attrs:{placeholder:"昵称格式为2-8位中英日数字下划线"},model:{value:e.form.nickName,callback:function(t){e.$set(e.form,"nickName",t)},expression:"form.nickName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱验证"}},[a("el-input",{attrs:{placeholder:"请输入邮箱验证码"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}},[a("el-button",{attrs:{slot:"append"},on:{click:e.openEmailDialog},slot:"append"},[e._v("发送验证码")])],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("注册抽卡")]),e._v(" "),a("el-button",{on:{click:e.backIndex}},[e._v("返回首页")])],1)],1),e._v(" "),a("el-dialog",{staticClass:"reg_code_dialog",attrs:{title:"请输入验证码",visible:e.codeShow,width:"100%"},on:{"update:visible":function(t){e.codeShow=t}}},[a("el-input",{attrs:{placeholder:"请输入验证码"},model:{value:e.form.captcha,callback:function(t){e.$set(e.form,"captcha",t)},expression:"form.captcha"}},[a("template",{slot:"append"},[a("img",{staticClass:"reg_code_img",attrs:{src:e.captchaSrc},on:{click:e.captchaUpdata}})])],2),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.codeShow=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",disabled:e.sending},on:{click:e.sendEmailCode}},[e._v("发送")])],1)],1)],1)},n=[],l={render:c,staticRenderFns:n},m=l,d=a("VU/8"),f=o,p=d(i,m,!1,f,"data-v-1c03b1e6",null);t.default=p.exports},"v/Qc":function(e,t,a){var o=a("O6aW");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("13a922f8",o,!0,{})}});