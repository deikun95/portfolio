(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{130:function(t){t.exports=JSON.parse('[{"id":1,"category":"Frontend","skills":[{"id":0,"title":"Html","percent":97},{"id":1,"title":"Css","percent":98},{"id":2,"title":"JS","percent":99}]},{"id":2,"category":"Backend","skills":[{"id":0,"title":"Node.js","percent":97},{"id":1,"title":"Express.js","percent":98},{"id":2,"title":"Nuxt.js","percent":99}]},{"id":3,"category":"WorkFlow","skills":[{"id":0,"title":"Git","percent":97},{"id":1,"title":"IDE","percent":98},{"id":2,"title":"Slack","percent":99}]}]')},151:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-container"},[e("headline",{attrs:{title:"Панель администрирования"}},[e("user")],1),this._v(" "),e("navigation"),this._v(" "),e("div",{staticClass:"page-content"},[e("div",{staticClass:"container"},[e("router-view")],1)])],1)};n._withStripped=!0;var a=i(121),s=i(119),r=i(120),c=i(81),o=i(118),l={components:{user:s.a,headline:a.a,navigation:r.a,iconedButton:c.a,category:o.a},data:function(){return{categories:[],isShown:!1}},created:function(){localStorage.getItem("token")||this.$router.replace("/login"),this.categories=i(130)}},d=i(6),p=Object(d.a)(l,n,[],!1,null,null,null);p.options.__file="src/admin/components/pages/Main.vue";e.default=p.exports}}]);