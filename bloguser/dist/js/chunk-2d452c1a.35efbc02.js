(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d452c1a"],{"0082":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"big1",staticStyle:{width:"100%",height:"1000px"}},[r("img",{staticClass:"img_forfont",attrs:{src:"/img/bg/1.png"}}),r("div",{staticClass:"login_box"},[e._m(0),r("div",{staticClass:"title"},[r("el-button",{attrs:{type:"text"},on:{click:e.goLogin}},[e._v("登录")]),r("span",[e._v("·")]),r("el-button",{attrs:{type:"text"},on:{click:e.goRegister}},[e._v("注册")])],1),e._v(" 注册 "),r("el-form",{staticClass:"login_form",attrs:{action:"register"}},[r("el-form-item",{attrs:{label:"用户账号(可以为任意数字或者字母,在2~12位之间)",prop:"uid"}},[r("el-input",{attrs:{maxlength:"12","prefix-icon":"my-icon-iicon-username"},model:{value:e.user.uid,callback:function(t){e.$set(e.user,"uid",t)},expression:"user.uid"}})],1),r("el-form-item",{attrs:{label:"密码(6~16位之间)",prop:"password"}},[r("el-input",{attrs:{type:"password",maxlength:"16",minlength:"6","prefix-icon":"my-icon-imima"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),r("el-form-item",{attrs:{label:"确认密码",prop:"password"}},[r("el-input",{attrs:{type:"password",maxlength:"16",minlength:"6","prefix-icon":"my-icon-imima"},model:{value:e.checkPassword,callback:function(t){e.checkPassword=t},expression:"checkPassword"}})],1),r("el-form-item",{staticClass:"bnts"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submitRegister}},[e._v("注册")]),r("el-button",{attrs:{type:"info"},on:{click:e.reset}},[e._v("重置")])],1)],1)],1)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"avatar_box"},[r("img",{attrs:{src:"/favicon.ico",alt:""}})])}],n=r("ef68"),i={data:function(){return{user:{uid:"",password:"",username:"",avatar:"https://oss.aliyuncs.com/aliyun_id_photo_bucket/default_handsome.jpg"},checkPassword:"",sending:!1,second:60,codeText:"获取验证码"}},methods:{reset:function(){this.user.uid="",this.checkPassword="",this.user.password=""},submitRegister:function(){var e=this;return this.user.uid.length<2?(this.$message.error("用户名长度过短"),!1):this.user.password!==this.checkPassword?(this.$message.error("两次密码不同请重新输入"),!1):this.user.password.length<6?(this.$message.error("密码长度过短"),!1):(this.user.username=this.user.uid,void n["a"].registerUser(this.user).then((function(t){e.$message.success(t.message),e.$router.push({path:"login"})})).catch((function(t){e.$message.error("注册失败，用户名可能已经存")})))},goLogin:function(){this.$router.push({path:"/user/login"})},goRegister:function(){this.$router.push({path:"/user/register"})}}},a=i,c=(r("4a2d"),r("2877")),u=Object(c["a"])(a,s,o,!1,null,"1775052b",null);t["default"]=u.exports},"1bab":function(e,t,r){"use strict";r("d3b7");var s=r("a78e"),o=r.n(s),n=axios.create({baseURL:"http://47.112.150.204:8888",timeout:5e3});n.interceptors.request.use((function(e){var t=o.a.get("blog-token");return t&&(e.headers["token"]=o.a.get("blog-token")),e})),n.interceptors.response.use((function(e){var t=e.data;return t.code,2e4!==t.code?Promise.reject("error"):e.data}),(function(e){return console.log("err"+e),Promise.reject(e)})),t["a"]=n},"4a2d":function(e,t,r){"use strict";var s=r("debe"),o=r.n(s);o.a},a78e:function(e,t,r){var s,o;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */(function(n){var i=!1;if(s=n,o="function"===typeof s?s.call(t,r,t,e):s,void 0===o||(e.exports=o),i=!0,e.exports=n(),i=!0,!i){var a=window.Cookies,c=window.Cookies=n();c.noConflict=function(){return window.Cookies=a,c}}})((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var s in r)t[s]=r[s]}return t}function t(r){function s(t,o,n){var i;if("undefined"!==typeof document){if(arguments.length>1){if(n=e({path:"/"},s.defaults,n),"number"===typeof n.expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*n.expires),n.expires=a}n.expires=n.expires?n.expires.toUTCString():"";try{i=JSON.stringify(o),/^[\{\[]/.test(i)&&(o=i)}catch(h){}o=r.write?r.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape);var c="";for(var u in n)n[u]&&(c+="; "+u,!0!==n[u]&&(c+="="+n[u]));return document.cookie=t+"="+o+c}t||(i={});for(var l=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,p=0;p<l.length;p++){var f=l[p].split("="),g=f.slice(1).join("=");this.json||'"'!==g.charAt(0)||(g=g.slice(1,-1));try{var m=f[0].replace(d,decodeURIComponent);if(g=r.read?r.read(g,m):r(g,m)||g.replace(d,decodeURIComponent),this.json)try{g=JSON.parse(g)}catch(h){}if(t===m){i=g;break}t||(i[m]=g)}catch(h){}}return i}}return s.set=s,s.get=function(e){return s.call(s,e)},s.getJSON=function(){return s.apply({json:!0},[].slice.call(arguments))},s.defaults={},s.remove=function(t,r){s(t,"",e(r,{expires:-1}))},s.withConverter=t,s}return t((function(){}))}))},b041:function(e,t,r){"use strict";var s=r("00ee"),o=r("f5df");e.exports=s?{}.toString:function(){return"[object "+o(this)+"]"}},d3b7:function(e,t,r){var s=r("00ee"),o=r("6eeb"),n=r("b041");s||o(Object.prototype,"toString",n,{unsafe:!0})},debe:function(e,t,r){},ef68:function(e,t,r){"use strict";var s=r("1bab");t["a"]={getMyBlog:function(){return Object(s["a"])({url:"/blog/user/myBlog",method:"get"})},updateUserInfo:function(e){return Object(s["a"])({url:"/blog/user/edit",method:"put",data:e})},getLoginUserInfo:function(e){return Object(s["a"])({url:"/blog/user/getUserInfo/"+e,method:"get"})},registerUser:function(e){return Object(s["a"])({url:"/blog/user/register",data:e,method:"post"})},loginUser:function(e){return Object(s["a"])({url:"/blog/user/login",data:e,method:"Post"})}}}}]);
//# sourceMappingURL=chunk-2d452c1a.35efbc02.js.map