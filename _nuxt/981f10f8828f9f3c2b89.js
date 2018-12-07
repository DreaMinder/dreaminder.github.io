(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{144:function(t,a,s){var e=s(149);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,s(23).default)("52a34782",e,!0,{})},145:function(t,a,s){var e=s(152);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,s(23).default)("28d1b500",e,!0,{})},148:function(t,a,s){"use strict";var e=s(144);s.n(e).a},149:function(t,a,s){(t.exports=s(22)(!1)).push([t.i,"\n.diagram[data-v-65920508]{overflow-x:scroll;background:#fff;will-change:transform\n}\n.diagram table[data-v-65920508]{border-collapse:collapse;will-change:transform\n}\n.diagram td[data-v-65920508]{padding:4px 3px;font-size:13px;border-bottom:1px solid #ccc;min-width:20px;text-align:center\n}\ntd.week[data-v-65920508]{border-left:1px solid #ebebeb;text-align:left;padding-left:5px\n}\ntd.holiday[data-v-65920508]{background:#ebebeb\n}\ntd.job[data-v-65920508]{background:#219196\n}\ntd.today[data-v-65920508]{background:#666!important;color:#fff;border-bottom:1px solid #666\n}\n.category td[data-v-65920508]{background:#647d9b;color:#fff;font-size:14px;padding:5px;text-align:left\n}\ntd.name[data-v-65920508]{min-width:200px\n}\ntd.descr[data-v-65920508]{padding:5px;text-align:left\n}\ntd.date[data-v-65920508]{min-width:100px\n}\ntd.done[data-v-65920508]{background:#9adcbb\n}\ntd.done[data-v-65920508],td.progress[data-v-65920508]{white-space:nowrap;color:#000\n}\ntd.progress[data-v-65920508]{background:#fff7ae\n}\ntd.waiting[data-v-65920508]{background:#ebebeb;white-space:nowrap;color:#000\n}",""])},151:function(t,a,s){"use strict";var e=s(145);s.n(e).a},152:function(t,a,s){(t.exports=s(22)(!1)).push([t.i,"\n.reply{background:#f2f2f2\n}",""])},153:function(t,a,s){"use strict";var e=s(156),i={props:["data"],computed:{jobs:function(){return this.data.sort(function(t,a){return a.startDate-t.finishDate}).map(function(t){var a=e.DateTime.fromMillis(t.startDate),s=e.DateTime.fromMillis(t.finishDate),i=e.DateTime.local();return t.startISO=a.toISO(),t.finishISO=s.toISO(),s=s.plus({days:1}),t.interval=e.Interval.fromDateTimes(a,s),t.days=t.interval.count("days"),t.status=null,i<a&&(t.status="waiting"),i>s&&(t.status="done"),t.interval.contains(i)&&(t.status="progress"),t})},interval:function(){var t=Math.min.apply(Math,this.data.map(function(t){return t.startDate})),a=e.DateTime.fromMillis(t).startOf("week").plus({days:1}),s=Math.max.apply(Math,this.data.map(function(t){return t.finishDate})),i=e.DateTime.fromMillis(s).endOf("week").plus({days:1}),r=e.Interval.fromDateTimes(a,i);return r},weeks:function(){return this.interval.splitBy({weeks:1}).map(function(t){return t.start.plus({days:1}).toISO()})},days:function(){return this.interval.splitBy({days:1}).map(function(t){return t.start.toISO()})}},methods:{isHoliday:function(t){var a=e.DateTime.fromISO(t).weekday;if(1===a||7===a)return!0},isJob:function(t,a){var s=e.DateTime.fromISO(t);return a.interval.contains(s)},isToday:function(t){var a=e.DateTime.fromISO(t);return e.DateTime.local().hasSame(a,"day")}},data:function(){return{statuses:{progress:"В процессе",done:"Завершено",waiting:"Ожидает"}}}},r=(s(148),s(3)),n=Object(r.a)(i,function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.data&&t.data.length>0?s("div",{staticClass:"diagram"},[s("table",[s("thead",[s("tr",[s("td",{attrs:{colspan:"5"}}),t._v(" "),t._l(t.weeks,function(a,e){return s("td",{key:a,staticClass:"week",attrs:{colspan:"7"}},[s("div",[t._v(t._s(e+1)+" неделя")]),t._v(" "),s("small",[t._v(t._s(t._f("luxon:locale")(a,"d m yyyy")))])])})],2),t._v(" "),s("tr",[s("td",{attrs:{colspan:"5"}}),t._v(" "),t._l(t.days,function(a){return s("td",{key:a,class:{today:t.isToday(a),holiday:t.isHoliday(a)}},[t._v("\n          "+t._s(t._f("luxon:format")(a,"d"))+"\n        ")])})],2)]),t._v(" "),[t._m(0),t._v(" "),s("tbody",t._l(t.jobs,function(a,e){return s("tr",{key:e},[s("td",{staticClass:"descr"},[t._v("1."+t._s(e+1)+".")]),t._v(" "),s("td",{staticClass:"descr name"},[t._v(t._s(a.name))]),t._v(" "),s("td",{staticClass:"descr date"},[t._v(t._s(t._f("luxon:locale")(a.startISO,"d m yyyy")))]),t._v(" "),s("td",{staticClass:"descr date"},[t._v(t._s(t._f("luxon:locale")(a.finishISO,"d m yyyy")))]),t._v(" "),s("td",{staticClass:"descr",class:a.status},[t._v("\n            "+t._s(a.days)+"\n            "),s("v-tooltip",{attrs:{bottom:""}},[s("v-icon",{attrs:{slot:"activator",small:""},slot:"activator"},[t._v("contact_support")]),t._v(" "),s("span",[t._v(t._s(t.statuses[a.status]))])],1)],1),t._v(" "),t._l(t.days,function(e,i){return s("td",{key:i,class:{job:t.isJob(e,a),holiday:t.isHoliday(e),today:t.isToday(e)},attrs:{title:a.name}})})],2)}))]],2)]):t._e()},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tbody",[s("tr",{staticClass:"category"},[s("td",[t._v("1.")]),t._v(" "),s("td",[t._v("Внутренний ремонт")]),t._v(" "),s("td",[t._v("начало")]),t._v(" "),s("td",[t._v("конец")]),t._v(" "),s("td",[t._v("дней")])])])}],!1,null,"65920508",null);n.options.__file="diagram.vue";a.a=n.exports},154:function(t,a,s){"use strict";var e=s(168),i=(s(169),s(170),{components:{quillEditor:e.quillEditor},props:["confirmation"]}),r=(s(151),s(3)),n=Object(r.a)(i,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("card",{attrs:{title:"Согласование условий"}},[s("v-card-text",[s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),t._v(" "),s("div",{staticClass:"chat mt-2"},[t._l(4,function(a){return[s("v-card",{key:a,staticClass:"d-flex message mt-3 mb-3",class:{"ml-5":2===a,"mr-5":2!==a},attrs:{flat:""}},[s("v-avatar",{staticClass:"mr-2 mt-4",staticStyle:{float:"left"},attrs:{size:50}},[s("img",{attrs:{src:"/avatar.jpg",alt:"avatar"}})]),t._v(" "),s("v-card-text",2===a?[s("div",{staticClass:"grey--text"},[s("b",[t._v("Вы")]),t._v(", 10.10.2018 10:00")]),t._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit\n          ")]:[s("div",{staticClass:"grey--text"},[s("b",[t._v("Андрей Викторович")]),t._v(", 10.10.2018 10:00")]),t._v("\n            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")])],1),t._v(" "),s("v-divider")]})],2)]),t._v(" "),s("v-card-text",{staticClass:"reply pa-3"},[s("quill-editor",{staticStyle:{background:"#fff",border:"1px solid #ccc","min-height":"60px","margin-bottom":"20px"},attrs:{options:{placeholder:"Введите ваше сообщение",theme:"bubble",modules:{toolbar:[["bold","italic"],["link","blockquote"],[{list:"ordered"},{list:"bullet"}]]}}}}),t._v(" "),s("div",{staticClass:"d-flex"},[s("v-spacer"),t._v(" "),s("v-spacer"),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{staticClass:"ma-0 ml-5"},[t._v("Отправить")])],1),t._v(" "),t.confirmation?s("div",{staticClass:"d-flex mt-5 mb-3",staticStyle:{"flex-wrap":"wrap"}},[s("v-btn",{staticClass:"ma-0 mr-2",attrs:{depressed:""}},[t._v("Отклонить")]),t._v(" "),s("v-btn",{staticClass:"ma-0 mr-2",attrs:{depressed:""}},[t._v("Вызвать администратора")]),t._v(" "),s("v-spacer"),t._v(" "),s("div",{staticClass:"ml-5"},[s("v-btn",{staticClass:"ma-0 btn-grad",attrs:{block:"",large:"",dark:""}},[t._v("Принять и начать работать")]),t._v(" "),s("v-checkbox",{attrs:{label:"Принять офферту"}})],1)],1):t._e()],1)],1)},[],!1,null,null,null);n.options.__file="chat.vue";a.a=n.exports},171:function(t,a,s){var e=s(211);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,s(23).default)("1fc2427e",e,!0,{})},210:function(t,a,s){"use strict";var e=s(171);s.n(e).a},211:function(t,a,s){(t.exports=s(22)(!1)).push([t.i,"\n.author{min-width:300px\n}\n.author .subheading{padding-top:15px;border-bottom:1px solid #ccc\n}\n.v-rating .v-icon{padding-left:0\n}\n.v-rating{min-width:182px;height:22px\n}\n.money td{padding:0 10px!important;font-size:17px!important\n}",""])},226:function(t,a,s){"use strict";s.r(a);var e=s(154),i=s(153),r={components:{chat:e.a,diagram:i.a},data:function(){return{headers:[{text:"№",value:"title",sortable:!1},{text:"Работы",value:"note",sortable:!1},{text:"Дата",value:"price",sortable:!1},{text:"Цена",align:"left",value:"price",sortable:!1},{text:"Статус",value:"quantity",sortable:!1}]}}},n=(s(210),s(3)),l=Object(n.a)(r,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"designers"}},[s("v-card",[s("v-container",{attrs:{"grid-list-xl":"","pa-0":""}},[s("v-card-actions",{staticClass:"pt-4 pb-2 pl-0 pr-0",staticStyle:{"line-height":"35px","flex-wrap":"wrap"}},[s("div",{},[s("h2",{staticClass:"subheading"},[t._v("г. Астана")]),t._v(" "),s("h1",{staticClass:"headline"},[t._v("ЖК LightHouse")]),t._v(" "),s("div",[s("v-tooltip",{attrs:{bottom:""}},[s("v-btn",{staticClass:"pl-0",staticStyle:{"text-transform":"none"},attrs:{slot:"activator",flat:"",small:""},slot:"activator"},[s("v-icon",{attrs:{left:"",color:"secondary"}},[t._v("domain")]),t._v("\n                IIIкв. 2018\n              ")],1),t._v("\n              Сдача квартир\n            ")],1),t._v(" "),s("v-btn",{attrs:{flat:"",small:""}},[s("v-icon",{attrs:{left:"",color:"secondary"}},[t._v("location_city")]),t._v("\n              231\n            ")],1)],1)]),t._v(" "),s("v-spacer"),t._v(" "),s("div",{staticClass:"author"},[s("nuxt-link",{staticClass:"grey--text mt-2 d-flex",attrs:{to:"/"}},[s("v-avatar",{staticClass:"mr-3",staticStyle:{float:"left"},attrs:{size:100}},[s("img",{attrs:{src:"/avatar.jpg",alt:"avatar"}})]),t._v(" "),s("div",{},[s("div",{staticClass:"subheading"},[t._v("\n                Имя Фамилия\n              ")]),t._v(" "),s("v-rating",{attrs:{value:4,small:"","background-color":"grey"}}),t._v("\n              Заказано работ: "),s("b",[t._v("19")])],1)],1)],1)],1),t._v(" "),s("v-card-actions",{staticClass:"px-0",staticStyle:{"flex-wrap":"wrap"}},[s("v-btn",{attrs:{flat:"",to:"/"}},[t._v("\n          Бюджет\n        ")]),t._v(" "),s("v-btn",{attrs:{flat:"",to:"/"}},[t._v("\n          Чат\n        ")]),t._v(" "),s("v-btn",{attrs:{flat:"",to:"/"}},[t._v("\n          ЖК\n        ")]),t._v(" "),s("v-btn",{attrs:{flat:"",to:"/"}},[t._v("\n          Офферта\n        ")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-btn",{staticClass:"btn-grad",attrs:{large:"",dark:"",to:"/"}},[t._v("\n          Заключить договор\n        ")])],1)],1)],1),t._v(" "),s("v-container",{attrs:{"grid-list-md":"","pa-0":""}},[s("card",{attrs:{title:"Бюджеты и выплаты"}},[s("v-card-text",{staticClass:"pa-4",staticStyle:{"font-size":"19px"}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{lg4:"",sm12:""}},[s("v-data-table",{attrs:{items:[{icon:"event",label:"На счету"},{icon:"event",label:"Сумма контракта"},{icon:"event",label:"Всего выплачено"},{icon:"event",label:"Следующий платеж"},{icon:"event",label:"Зарезервировано"}],"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(a){return s("tr",{staticClass:"money"},[s("td",[s("v-icon",[t._v(t._s(a.item.icon))])],1),t._v(" "),s("td",[t._v(t._s(a.item.label)+":")]),t._v(" "),s("td",[s("b",[t._v("5.000 тнг")])])])}}])})],1),t._v(" "),s("v-flex",{attrs:{lg8:"",sm12:""}},[s("v-data-table",{attrs:{items:[{},{},{},{},{},{},{},{},{}],headers:t.headers,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(a){return[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("Штукатурные работы")]),t._v(" "),s("td",[t._v("10.08.2018")]),t._v(" "),s("td",[t._v("10.000 тнг")]),t._v(" "),s("td",{staticClass:"green text-sm-center"},[t._v("Оплачено")])]}}])})],1)],1)],1),t._v(" "),s("v-card-text",{staticClass:" pa-3"},[s("div",{staticClass:"d-flex mb-3",staticStyle:{"flex-wrap":"wrap"}},[s("div",{staticClass:"ml-2"},[s("v-btn",{staticClass:"ma-0 btn-grad",attrs:{block:"",large:"",dark:""}},[t._v("Зарезервировать")])],1),t._v(" "),s("div",{staticClass:"pl-3"},[s("span",{staticStyle:{color:"red"}},[t._v("Внимание!")]),t._v(" "),s("small",{staticStyle:{width:"220px",display:"block"}},[t._v("\n              Средства резервируются на нашем сайте и переводятся бригадиру только после выполнения работ.\n            ")])]),t._v(" "),s("v-spacer"),s("v-spacer"),t._v(" "),s("v-btn",{staticClass:"ma-0 mr-2",attrs:{depressed:"",large:""}},[t._v("Пополнить")])],1)])],1),t._v(" "),s("card",{attrs:{title:"График работ"}},[s("diagram")],1),t._v(" "),s("chat",{staticClass:"mt-5"}),t._v(" "),s("v-card",{staticClass:"mt-5 mb-5"},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{lg6:"",sm12:""}},[s("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image=15","lazy-src":"https://picsum.photos/10/6?image=15","aspect-ratio":"1"}},[s("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[s("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)],1)],1),t._v(" "),s("v-flex",{staticClass:"pl-4",attrs:{lg6:"",sm12:""}},[s("v-card-actions",{staticClass:"pt-4 pl-3"},[s("nuxt-link",{staticClass:"grey--text mr-2",attrs:{to:"/"}},[s("v-avatar",{staticClass:"mr-3",staticStyle:{float:"left"},attrs:{size:50}},[s("img",{attrs:{src:"/avatar.jpg",alt:"avatar"}})]),t._v("\n              Имя Фамилия\n              "),s("v-rating",{attrs:{value:4,small:"","background-color":"grey"}})],1),t._v(" "),s("v-spacer"),t._v(" "),s("div",{staticClass:"grey--text mr-2 text-xs-right"},[t._v("\n              Подано:"),s("br"),t._v("20.09.2018\n            ")])],1),t._v(" "),s("v-card-title",{attrs:{"primary-title":""}},[s("h1",{staticClass:"headline"},[t._v('Концепция от студии ООО "Вектор"')]),t._v(" "),s("div",{staticClass:"grey--text"},[t._v("Стиль: неоклассицизм")])]),t._v(" "),s("v-card-text",[s("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),t._v(" "),s("div",{staticStyle:{margin:"0 -10px"}},[s("v-btn",{staticClass:"pl-0",staticStyle:{"text-transform":"none"},attrs:{flat:"",small:""}},[s("v-icon",{attrs:{left:"",color:"primary"}},[t._v("domain")]),t._v("\n                г. Астана\n              ")],1),t._v(" "),s("v-btn",{attrs:{flat:"",small:""}},[s("v-icon",{attrs:{left:"",color:"primary"}},[t._v("card_membership")]),t._v("\n                ЖК LightHouse\n              ")],1),t._v(" "),s("v-btn",{staticStyle:{"text-transform":"none"},attrs:{flat:"",small:""}},[s("v-icon",{attrs:{left:"",color:"primary"}},[t._v("date_range")]),t._v("\n                IIIкв. 2018\n              ")],1)],1)])],1)],1),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[t._l(9,function(t){return s("v-flex",{key:t,attrs:{lg2:"",sm4:"","d-flex":""}},[s("v-card",{staticClass:"d-flex",attrs:{flat:"",tile:""}},[s("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/800/800?image="+(5*t+10),"lazy-src":"https://picsum.photos/10/6?image="+(5*t+10),"aspect-ratio":"1"}},[s("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[s("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)],1)],1)],1)}),t._v(" "),s("v-flex",{attrs:{"d-flex":""}},[s("v-card",{staticClass:"d-flex",staticStyle:{"text-align":"center","font-size":"20px"},attrs:{flat:"",tile:""}},[s("div",{staticStyle:{"align-items":"center",display:"inline-flex","justify-content":"center"}},[s("v-icon",{staticClass:"pr-4"},[t._v("cloud_download")]),t._v(" Скачать документацию")],1)])],1)],2)],1)],1)],1)},[],!1,null,null,null);l.options.__file="feed.vue";a.default=l.exports}}]);