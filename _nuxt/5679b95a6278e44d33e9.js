(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{145:function(t,a,e){var i=e(152);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(23).default)("28d1b500",i,!0,{})},147:function(t,a,e){"use strict";e(27);var i=e(150),s={components:{draggable:e.n(i).a},data:function(){return{menu:!1,name:"",blocks:["Стены","Сантехника","Пол","Фурнитура"],jobs:[{id:12,price:300,quantity:1,name:"Штукатурные работы"},{id:15,quantity:2,price:1e3,name:"Покраска"},{id:26,quantity:10,price:500,name:"Уборка"}]}},methods:{add:function(){this.blocks.push(this.name),this.menu=!1,this.name=""},remove:function(t){this.jobs.splice(1,t)}}},l=e(3),r=Object(l.a)(s,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"estimate"},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"pa-4",attrs:{sm8:""}},[e("div",{},[t._v("\n        Описание и краткая инструкция\n      ")]),t._v("\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    ")]),t._v(" "),e("v-flex",{staticClass:"pa-4",attrs:{sm4:""}},[e("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":100,"offset-y":""},model:{value:t.menu,callback:function(a){t.menu=a},expression:"menu"}},[e("v-btn",{attrs:{slot:"activator",block:""},slot:"activator"},[e("v-icon",[t._v("add")]),t._v(" Добавить категорию работ\n    ")],1),t._v(" "),e("v-card",[e("v-card-actions",[e("v-text-field",{attrs:{label:"Название категории"},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}}),t._v(" "),e("v-btn",{attrs:{color:"primary",flat:""},on:{click:t.add}},[t._v("Добавить")])],1)],1)],1)],1)],1),t._v(" "),e("v-expansion-panel",{attrs:{dark:""}},t._l(t.blocks,function(a,i){return e("v-expansion-panel-content",{key:i,staticStyle:{background:"#647d9b"}},[e("div",{staticStyle:{display:"flex"},attrs:{slot:"header"},slot:"header"},[t._e(),t._v(" "),e("div",{staticStyle:{flex:"1","padding-left":"15px"}},[t._v(t._s(a))]),t._v(" "),e("div",{staticStyle:{"padding-right":"15px"}},[t._v("\n          20 000 тг.\n        ")])],1),t._v(" "),e("v-card",{attrs:{light:""}},[e("table",{staticClass:"v-datatable v-table theme--light"},[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v("Название работ")]),t._v(" "),e("th",[t._v("Ед. изм.")]),t._v(" "),e("th",[t._v("Кол-во")]),t._v(" "),e("th",[t._v("Цена")]),t._v(" "),e("th",[t._v("Бюджет")]),t._v(" "),e("th",{attrs:{width:"30px"}},[e("v-btn",{attrs:{small:"",flat:""},on:{click:function(a){t.jobs.push({})}}},[e("v-icon",[t._v("add")]),t._v(" Добавить\n              ")],1)],1)])]),t._v(" "),e("draggable",{attrs:{element:"tbody",options:{animation:300,disabled:!1,handle:".sortHandle"}},model:{value:t.images,callback:function(a){t.images=a},expression:"images"}},t._l(t.jobs,function(a,i){return e("tr",{key:a.id},[e("td",[t._v(t._s(i+1))]),t._v(" "),e("td",[e("v-combobox",{attrs:{items:["Покраска"]},model:{value:a.name,callback:function(e){t.$set(a,"name",e)},expression:"job.name"}})],1),t._v(" "),e("td",[e("v-select",{staticStyle:{width:"80px"},attrs:{items:["м. кв.","мм"],value:"м. кв."}})],1),t._v(" "),e("td",[e("v-text-field",{staticStyle:{width:"50px"},attrs:{type:"number"},model:{value:a.quantity,callback:function(e){t.$set(a,"quantity",e)},expression:"job.quantity"}})],1),t._v(" "),e("td",[e("v-text-field",{staticStyle:{width:"60px"},attrs:{type:"number"},model:{value:a.price,callback:function(e){t.$set(a,"price",e)},expression:"job.price"}})],1),t._v(" "),e("td",[t._v(t._s((a.quantity*a.price).toFixed(2))+" тнг")]),t._v(" "),e("td",[e("v-btn",{attrs:{icon:""},on:{click:function(a){t.remove(i)}}},[e("v-icon",[t._v("delete")])],1),t._v(" "),e("v-btn",{staticClass:"sortHandle",staticStyle:{cursor:"move"},attrs:{icon:""}},[e("v-icon",[t._v("drag_handle")])],1)],1)])}))],1)])],1)}))],1)},[],!1,null,null,null);r.options.__file="estimate.vue";a.a=r.exports},151:function(t,a,e){"use strict";var i=e(145);e.n(i).a},152:function(t,a,e){(t.exports=e(22)(!1)).push([t.i,"\n.reply{background:#f2f2f2\n}",""])},154:function(t,a,e){"use strict";var i=e(168),s=(e(169),e(170),{components:{quillEditor:i.quillEditor},props:["confirmation"]}),l=(e(151),e(3)),r=Object(l.a)(s,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("card",{attrs:{title:"Согласование условий"}},[e("v-card-text",[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),t._v(" "),e("div",{staticClass:"chat mt-2"},[t._l(4,function(a){return[e("v-card",{key:a,staticClass:"d-flex message mt-3 mb-3",class:{"ml-5":2===a,"mr-5":2!==a},attrs:{flat:""}},[e("v-avatar",{staticClass:"mr-2 mt-4",staticStyle:{float:"left"},attrs:{size:50}},[e("img",{attrs:{src:"/avatar.jpg",alt:"avatar"}})]),t._v(" "),e("v-card-text",2===a?[e("div",{staticClass:"grey--text"},[e("b",[t._v("Вы")]),t._v(", 10.10.2018 10:00")]),t._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit\n          ")]:[e("div",{staticClass:"grey--text"},[e("b",[t._v("Андрей Викторович")]),t._v(", 10.10.2018 10:00")]),t._v("\n            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")])],1),t._v(" "),e("v-divider")]})],2)]),t._v(" "),e("v-card-text",{staticClass:"reply pa-3"},[e("quill-editor",{staticStyle:{background:"#fff",border:"1px solid #ccc","min-height":"60px","margin-bottom":"20px"},attrs:{options:{placeholder:"Введите ваше сообщение",theme:"bubble",modules:{toolbar:[["bold","italic"],["link","blockquote"],[{list:"ordered"},{list:"bullet"}]]}}}}),t._v(" "),e("div",{staticClass:"d-flex"},[e("v-spacer"),t._v(" "),e("v-spacer"),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{staticClass:"ma-0 ml-5"},[t._v("Отправить")])],1),t._v(" "),t.confirmation?e("div",{staticClass:"d-flex mt-5 mb-3",staticStyle:{"flex-wrap":"wrap"}},[e("v-btn",{staticClass:"ma-0 mr-2",attrs:{depressed:""}},[t._v("Отклонить")]),t._v(" "),e("v-btn",{staticClass:"ma-0 mr-2",attrs:{depressed:""}},[t._v("Вызвать администратора")]),t._v(" "),e("v-spacer"),t._v(" "),e("div",{staticClass:"ml-5"},[e("v-btn",{staticClass:"ma-0 btn-grad",attrs:{block:"",large:"",dark:""}},[t._v("Принять и начать работать")]),t._v(" "),e("v-checkbox",{attrs:{label:"Принять офферту"}})],1)],1):t._e()],1)],1)},[],!1,null,null,null);r.options.__file="chat.vue";a.a=r.exports},172:function(t,a,e){var i=e(213);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(23).default)("65f2e248",i,!0,{})},212:function(t,a,e){"use strict";var i=e(172);e.n(i).a},213:function(t,a,e){(t.exports=e(22)(!1)).push([t.i,"\n.author{min-width:300px\n}\n.author .subheading{padding-top:15px;border-bottom:1px solid #ccc\n}\n.v-rating .v-icon{padding-left:0\n}\n.v-rating{min-width:182px;height:22px\n}",""])},225:function(t,a,e){"use strict";e.r(a);var i=e(154),s=e(147),l={components:{chat:i.a,estimate:s.a},asyncData:function(t){return{download:t.query.download}}},r=(e(212),e(3)),n=Object(r.a)(l,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"designers"}},[e("v-card",[e("v-container",{attrs:{"grid-list-xl":"","pa-0":""}},[e("v-card-actions",{staticClass:"pt-4 pb-2 pl-0 pr-0",staticStyle:{"line-height":"35px","flex-wrap":"wrap"}},[e("div",{},[e("h2",{staticClass:"subheading"},[t._v("г. Астана")]),t._v(" "),e("h1",{staticClass:"headline"},[t._v("ЖК LightHouse")]),t._v(" "),e("div",[e("v-tooltip",{attrs:{bottom:""}},[e("v-btn",{staticClass:"pl-0",staticStyle:{"text-transform":"none"},attrs:{slot:"activator",flat:"",small:""},slot:"activator"},[e("v-icon",{attrs:{left:"",color:"secondary"}},[t._v("domain")]),t._v("\n                IIIкв. 2018\n              ")],1),t._v("\n              Сдача квартир\n            ")],1),t._v(" "),e("v-btn",{attrs:{flat:"",small:""}},[e("v-icon",{attrs:{left:"",color:"secondary"}},[t._v("location_city")]),t._v("\n              231\n            ")],1)],1)]),t._v(" "),e("v-spacer"),t._v(" "),e("div",{staticClass:"author"},[e("nuxt-link",{staticClass:"grey--text mt-2 d-flex",attrs:{to:"/"}},[e("v-avatar",{staticClass:"mr-3",staticStyle:{float:"left"},attrs:{size:100}},[e("img",{attrs:{src:"/avatar.jpg",alt:"avatar"}})]),t._v(" "),e("div",{},[e("div",{staticClass:"subheading"},[t._v("\n                Имя Фамилия\n              ")]),t._v(" "),e("v-rating",{attrs:{value:4,small:"","background-color":"grey"}}),t._v("\n              Заказано работ: "),e("b",[t._v("19")])],1)],1)],1)],1),t._v(" "),e("v-card-actions",{staticClass:"px-0"},[e("v-tooltip",{attrs:{bottom:""}},[e("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[e("v-icon",{attrs:{color:"secondary"}},[t._v("keyboard_arrow_left")])],1),t._v("\n          Назад\n        ")],1),t._v(" "),e("v-btn",{attrs:{flat:"",to:"/"}},[t._v("\n          Документация\n        ")]),t._v(" "),e("v-btn",{attrs:{flat:"",to:"/"}},[t._v("\n          Смета\n        ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-tooltip",{attrs:{bottom:""}},[e("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[e("v-icon",{attrs:{color:"secondary"}},[t._v("favorite_border")])],1),t._v("\n          В избранное\n        ")],1)],1)],1)],1),t._v(" "),e("v-container",{attrs:{"grid-list-md":"","pa-0":""}},[e("h1",{staticClass:"display-3 mt-4 mb-0 text-sm-center"},[t._v("Начало проекта")]),t._v(" "),e("v-card",{staticClass:"mt-4 mb-5"},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{lg6:"",sm12:""}},[e("v-img",{staticClass:"grey lighten-2",attrs:{src:"/apartment.jpg","lazy-src":"https://picsum.photos/10/6?image=15","aspect-ratio":"1"}},[e("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)],1)],1),t._v(" "),e("v-flex",{staticClass:"pl-4",attrs:{lg6:"",sm12:""}},[e("v-card-actions",{staticClass:"pt-4 pl-3"},[e("nuxt-link",{staticClass:"grey--text mr-2",attrs:{to:"/"}},[e("v-avatar",{staticClass:"mr-3",staticStyle:{float:"left"},attrs:{size:50}},[e("img",{attrs:{src:"/avatar.jpg",alt:"avatar"}})]),t._v("\n              Имя Фамилия\n              "),e("v-rating",{attrs:{value:4,small:"","background-color":"grey"}})],1),t._v(" "),e("v-spacer"),t._v(" "),e("div",{staticClass:"grey--text mr-2 text-xs-right"},[t._v("\n              Подано:"),e("br"),t._v("20.09.2018\n            ")])],1),t._v(" "),e("v-card-title",{attrs:{"primary-title":""}},[e("h1",{staticClass:"headline"},[t._v('Концепция от студии ООО "Вектор"')]),t._v(" "),e("div",{staticClass:"grey--text"},[t._v("Стиль: неоклассицизм")])]),t._v(" "),e("v-card-text",[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),t._v(" "),e("div",{staticStyle:{margin:"0 -10px"}},[e("v-btn",{staticClass:"pl-0",staticStyle:{"text-transform":"none"},attrs:{flat:"",small:""}},[e("v-icon",{attrs:{left:"",color:"primary"}},[t._v("domain")]),t._v("\n                г. Астана\n              ")],1),t._v(" "),e("v-btn",{attrs:{flat:"",small:""}},[e("v-icon",{attrs:{left:"",color:"primary"}},[t._v("card_membership")]),t._v("\n                ЖК LightHouse\n              ")],1),t._v(" "),e("v-btn",{staticStyle:{"text-transform":"none"},attrs:{flat:"",small:""}},[e("v-icon",{attrs:{left:"",color:"primary"}},[t._v("date_range")]),t._v("\n                IIIкв. 2018\n              ")],1)],1)])],1)],1),t._v(" "),e("v-layout",{attrs:{row:"",wrap:""}},[t._l(3,function(t){return e("v-flex",{key:t,attrs:{xs4:"","d-flex":""}},[e("v-card",{staticClass:"d-flex",attrs:{flat:"",tile:""}},[e("v-img",{attrs:{src:"/plan2.png"}},[e("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)],1)],1)],1)}),t._v(" "),t.download?e("v-flex",{staticStyle:{height:"110px"},attrs:{"d-flex":"",xs4:""}},[e("v-card",{staticClass:"d-flex",staticStyle:{"text-align":"center","font-size":"20px"},attrs:{flat:"",tile:""}},[e("div",{staticStyle:{"align-items":"center",display:"inline-flex","justify-content":"center"}},[e("v-icon",{staticClass:"pr-4"},[t._v("cloud_download")]),t._v(" Скачать документацию")],1)])],1):t._e()],2)],1),t._v(" "),t.download?t._e():e("card",{attrs:{title:"Смета"}},[e("estimate")],1),t._v(" "),e("chat",{staticClass:"mb-5",attrs:{confirmation:!0}})],1)],1)},[],!1,null,null,null);n.options.__file="new.vue";a.default=n.exports}}]);