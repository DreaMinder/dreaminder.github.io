(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{144:function(t,a,e){var s=e(150);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e(23).default)("2082d03f",s,!0,{})},145:function(t,a,e){var s=e(152);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e(23).default)("a01d5c92",s,!0,{})},146:function(t,a,e){var s=e(155);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e(23).default)("28d1b500",s,!0,{})},149:function(t,a,e){"use strict";var s=e(144);e.n(s).a},150:function(t,a,e){(t.exports=e(22)(!1)).push([t.i,"\ntable .v-menu{width:100px\n}",""])},151:function(t,a,e){"use strict";var s=e(145);e.n(s).a},152:function(t,a,e){(t.exports=e(22)(!1)).push([t.i,"\n.v-tooltip[data-v-2f18ba0f]{position:static\n}\n.diagram[data-v-2f18ba0f]{overflow-x:scroll;background:#fff;will-change:transform\n}\n.diagram table[data-v-2f18ba0f]{border-collapse:collapse;will-change:transform\n}\n.diagram td[data-v-2f18ba0f]{padding:4px 3px;font-size:13px;border-top:1px solid #ccc;min-width:20px;text-align:center\n}\ntd.week[data-v-2f18ba0f]{border-left:1px solid #ebebeb;text-align:left;padding-left:5px\n}\ntd.holiday[data-v-2f18ba0f]{background:#ebebeb\n}\ntd.job[data-v-2f18ba0f]{background:#219196\n}\ntd.today[data-v-2f18ba0f]{background:#666!important;color:#fff;border-bottom:1px solid #666\n}\n.category td[data-v-2f18ba0f]{background:#647d9b;color:#fff;font-size:14px;padding:5px;text-align:left\n}\ntd.name[data-v-2f18ba0f]{min-width:200px;position:-webkit-sticky;position:sticky;left:0;background:hsla(0,0%,100%,.8)\n}\ntd.descr[data-v-2f18ba0f]{padding:5px;text-align:left\n}\ntd.date[data-v-2f18ba0f]{min-width:86px\n}\ntd.spacer[data-v-2f18ba0f]{background:#fff\n}\ntd.done[data-v-2f18ba0f]{background:#9adcbb\n}\ntd.done[data-v-2f18ba0f],td.progress[data-v-2f18ba0f]{white-space:nowrap;color:#000\n}\ntd.progress[data-v-2f18ba0f]{background:#fff7ae\n}\ntd.waiting[data-v-2f18ba0f]{background:#d0d0d0;white-space:nowrap;color:#000\n}\ntd.check-btn[data-v-2f18ba0f]{padding:0\n}\ntd.check-btn .v-btn[data-v-2f18ba0f]{margin:0\n}\ntd.check-btn .v-icon[data-v-2f18ba0f]{color:green\n}",""])},154:function(t,a,e){"use strict";var s=e(146);e.n(s).a},155:function(t,a,e){(t.exports=e(22)(!1)).push([t.i,"\n.reply{background:#f2f2f2\n}",""])},156:function(t,a,e){"use strict";e(40);var s=e(4),i=e.n(s),n=(e(41),e(82),{props:["value","label"],data:function(){return{date:this.value&&this.value.split("T")[0],menu:!1}},methods:{update:function(){this.$emit("input",this.date)},clear:function(){this.$emit("input",null)}},computed:{formated:function(){return this.date?new Date(this.date).toLocaleDateString():""}},watch:{value:function(t){this.date=t}}}),r=(e(149),e(3)),l=Object(r.a)(n,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-menu",{attrs:{lazy:"","close-on-content-click":!0,transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"240px"},model:{value:t.menu,callback:function(a){t.menu=a},expression:"menu"}},[e("v-text-field",{attrs:{slot:"activator",label:t.label,readonly:""},on:{keyup:function(a){return"button"in a||!t._k(a.keyCode,"backspace",void 0,a.key,void 0)?t.clear(a):null}},slot:"activator",model:{value:t.formated,callback:function(a){t.formated=a},expression:"formated"}}),t._v(" "),e("v-date-picker",{attrs:{"first-day-of-week":"1","no-title":"",scrollable:"",actions:"",locale:"ru-RU"},on:{input:t.update},model:{value:t.date,callback:function(a){t.date=a},expression:"date"}})],1)},[],!1,null,null,null);l.options.__file="calendar.vue";var o,c=l.exports,d=e(159),v={props:["data"],components:{calendar:c},computed:{jobs:function(){return this.localData.map(function(t){return t.tasks=t.tasks.map(function(t){var a=d.DateTime.fromMillis(t.startDate),e=d.DateTime.fromMillis(t.finishDate),s=d.DateTime.local();return t.startISO=a.toISO(),t.finishISO=e.toISO(),e=e.plus({days:1}),t.interval=d.Interval.fromDateTimes(a,e),t.days=t.interval.count("days"),t.status=null,s<a&&(t.status="waiting"),s>e&&(t.status="done"),t.interval.contains(s)&&(t.status="progress"),t.done&&(t.status="done"),t}),t})},flatData:function(){var t=[];return this.localData.forEach(function(a){a.tasks.forEach(function(a){t.push(a)})}),t},total:function(){var t=Math.min.apply(Math,this.flatData.map(function(t){return t.startDate})),a=d.DateTime.fromMillis(t).startOf("week").plus({days:1}),e=Math.max.apply(Math,this.flatData.map(function(t){return t.finishDate})),s=d.DateTime.fromMillis(e).endOf("week").plus({days:1}),i=d.Interval.fromDateTimes(a,s);t=d.DateTime.fromMillis(t),e=d.DateTime.fromMillis(e);var n=d.Interval.fromDateTimes(t,e).splitBy({days:1}).length;return{interval:i,minDate:t.toISO(),maxDate:e.toISO(),days:n}},weeks:function(){return this.total.interval.splitBy({weeks:1}).map(function(t){return t.start.toISO()})},days:function(){return this.total.interval.splitBy({days:1}).map(function(t){return t.start.toISO()})}},mounted:function(){this.scrollToday()},methods:{isHoliday:function(t){var a=d.DateTime.fromISO(t).weekday;if(1===a||7===a)return!0},isJob:function(t,a){var e=d.DateTime.fromISO(t),s=d.DateTime.local();return!!a.interval.contains(e)&&(a.done?"job done":a.interval.contains(s)&&e>s?"job progress":e<s?"job done":"job waiting")},isToday:function(t){var a=d.DateTime.fromISO(t).minus({days:1});return d.DateTime.local().hasSame(a,"day")},scrollToday:function(){var t=this;this.$nextTick(function(){if(t.$el.querySelector){var a=t.$el.querySelector(".today");a&&(t.$refs.diagram.scrollLeft=a.offsetLeft-700)}})},save:(o=i()(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.editable=!1,console.log(this.jobs),alert("API save request");case 3:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})},data:function(){return{statuses:{progress:"В процессе",done:"Завершено",waiting:"Ожидает"},editable:!1,localData:this.data}},watch:{jobs:function(t){console.log(t)}}},u=(e(151),Object(r.a)(v,function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.editable?e("div",{staticClass:"estimate"},[e("v-expansion-panel",{attrs:{dark:""}},t._l(t.jobs,function(a,s){return e("v-expansion-panel-content",{key:s,staticStyle:{background:"#647d9b"}},[e("div",{staticStyle:{display:"flex"},attrs:{slot:"header"},slot:"header"},[e("div",{staticStyle:{flex:"1","padding-left":"15px"}},[t._v(t._s(s+1)+". "+t._s(a.title))])]),t._v(" "),e("v-card",{attrs:{light:""}},[e("table",{staticClass:"v-datatable v-table theme--light"},[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v("Название работ")]),t._v(" "),e("th",[t._v("Начало")]),t._v(" "),e("th",[t._v("Конец")]),t._v(" "),e("th",[t._v("Дней")])])]),t._v(" "),e("tbody",t._l(a.tasks,function(a,i){return e("tr",{key:a.id},[e("td",[t._v(t._s(s+1)+"."+t._s(i+1))]),t._v(" "),e("td",[t._v(t._s(a.name))]),t._v(" "),e("td",[e("calendar",{model:{value:a.startISO,callback:function(e){t.$set(a,"startISO",e)},expression:"job.startISO"}})],1),t._v(" "),e("td",[e("calendar",{model:{value:a.finishISO,callback:function(e){t.$set(a,"finishISO",e)},expression:"job.finishISO"}})],1),t._v(" "),e("td",[e("v-text-field",{staticStyle:{width:"60px"},attrs:{type:"number"},model:{value:a.days,callback:function(e){t.$set(a,"days",e)},expression:"job.days"}})],1)])}))])])],1)})),t._v(" "),e("v-btn",{on:{click:t.save}},[t._v("\n    Сохранить сроки\n  ")])],1):e("div",{ref:"diagram",staticClass:"diagram"},[t.data&&t.data.length>0?e("table",[e("thead",[e("tr",[e("td",{attrs:{colspan:"6"}}),t._v(" "),t._l(t.weeks,function(a,s){return e("td",{key:a,staticClass:"week",attrs:{colspan:"7"}},[e("div",[t._v(t._s(s+1)+" неделя")]),t._v(" "),e("small",[t._v(t._s(t._f("luxon:locale")(a,"d m yyyy")))])])})],2),t._v(" "),e("tr",[e("td",{attrs:{colspan:"6"}}),t._v(" "),t._l(t.days,function(a){return e("td",{key:a,class:{today:t.isToday(a),holiday:t.isHoliday(a)}},[t._v("\n          "+t._s(t._f("luxon:format")(a,"d"))+"\n        ")])})],2)]),t._v(" "),t._l(t.jobs,function(a,s){return e("tbody",{key:a.id},[e("tr",{staticClass:"category"},[e("td"),t._v(" "),e("td",[t._v(t._s(s+1)+".")]),t._v(" "),e("td",[t._v(t._s(a.title))]),t._v(" "),e("td",[t._v("начало")]),t._v(" "),e("td",[t._v("конец")]),t._v(" "),e("td",[t._v("дней")]),t._v(" "),e("td",{staticClass:"spacer",attrs:{colspan:t.days.length}})]),t._v(" "),t._l(a.tasks,function(a,i){return e("tr",{key:i},[e("td",{staticClass:"check-btn"},[a.done?e("v-icon",{attrs:{small:""}},[t._v("check_circle")]):e("v-tooltip",{attrs:{bottom:""}},[e("v-btn",{attrs:{slot:"activator",small:"",icon:""},on:{click:function(t){a.done=!0}},slot:"activator"},[e("v-icon",{attrs:{small:"",color:"grey"}},[t._v("autorenew")])],1),t._v(" "),e("span",[t._v("Пометить как выполненное")])],1)],1),t._v(" "),e("td",{staticClass:"descr"},[t._v(t._s(s+1)+"."+t._s(i+1)+".")]),t._v(" "),e("td",{staticClass:"descr name"},[t._v(t._s(a.name))]),t._v(" "),e("td",{staticClass:"descr date"},[t._v(t._s(t._f("luxon:locale")(a.startISO,"d m yyyy")))]),t._v(" "),e("td",{staticClass:"descr date"},[t._v(t._s(t._f("luxon:locale")(a.finishISO,"d m yyyy")))]),t._v(" "),e("td",{staticClass:"descr",class:a.status},[t._v("\n          "+t._s(a.days)+"\n          "),e("v-tooltip",{attrs:{bottom:""}},[e("v-icon",{attrs:{slot:"activator",small:""},slot:"activator"},[t._v("contact_support")]),t._v(" "),e("span",[t._v(t._s(t.statuses[a.status]))])],1)],1),t._v(" "),t._l(t.days,function(s,i){return e("td",{key:i,class:[t.isJob(s,a),{holiday:t.isHoliday(s),today:t.isToday(s)}],attrs:{title:a.name}})})],2)})],2)}),t._v(" "),e("tbody",{staticClass:"total"},[e("tr",{staticClass:"category"},[e("td"),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Всего")]),t._v(" "),e("td",[t._v(t._s(t._f("luxon:locale")(t.total.minDate,"d m yyyy")))]),t._v(" "),e("td",[t._v(t._s(t._f("luxon:locale")(t.total.maxDate,"d m yyyy")))]),t._v(" "),e("td",[t._v(t._s(t.total.days))]),t._v(" "),e("td",{staticClass:"spacer",attrs:{colspan:t.days.length}},[e("v-btn",{staticStyle:{margin:"0"},attrs:{flat:""},on:{click:function(a){t.editable=!0}}},[t._v("\n            Изменить сроки\n          ")])],1)])])],2):t._e()])},[],!1,null,"2f18ba0f",null));u.options.__file="diagram.vue";a.a=u.exports},157:function(t,a,e){"use strict";var s=e(171),i=(e(172),e(173),{components:{quillEditor:s.quillEditor},props:["confirmation"]}),n=(e(154),e(3)),r=Object(n.a)(i,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("card",{attrs:{title:"Согласование условий"}},[e("v-card-text",[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),t._v(" "),e("div",{staticClass:"chat mt-2"},[t._l(4,function(a){return[e("v-card",{key:a,staticClass:"d-flex message mt-3 mb-3",class:{"ml-5":2===a,"mr-5":2!==a},attrs:{flat:""}},[e("v-avatar",{staticClass:"mr-2 mt-4",staticStyle:{float:"left"},attrs:{size:50}},[e("img",{attrs:{src:"/avatar.jpg",alt:"avatar"}})]),t._v(" "),e("v-card-text",2===a?[e("div",{staticClass:"grey--text"},[e("b",[t._v("Вы")]),t._v(", 10.10.2018 10:00")]),t._v("\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit\n          ")]:[e("div",{staticClass:"grey--text"},[e("b",[t._v("Андрей Викторович")]),t._v(", 10.10.2018 10:00")]),t._v("\n            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n          ")])],1),t._v(" "),e("v-divider")]})],2)]),t._v(" "),e("v-card-text",{staticClass:"reply pa-3"},[e("quill-editor",{staticStyle:{background:"#fff",border:"1px solid #ccc","min-height":"60px","margin-bottom":"20px"},attrs:{options:{placeholder:"Введите ваше сообщение",theme:"bubble",modules:{toolbar:[["bold","italic"],["link","blockquote"],[{list:"ordered"},{list:"bullet"}]]}}}}),t._v(" "),e("div",{staticClass:"d-flex"},[e("v-spacer"),t._v(" "),e("v-spacer"),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{staticClass:"ma-0 ml-5"},[t._v("Отправить")])],1),t._v(" "),t.confirmation?e("div",{staticClass:"d-flex mt-5 mb-3",staticStyle:{"flex-wrap":"wrap"}},[e("v-btn",{staticClass:"ma-0 mr-2",attrs:{depressed:""}},[t._v("Отклонить")]),t._v(" "),e("v-btn",{staticClass:"ma-0 mr-2",attrs:{depressed:""}},[t._v("Вызвать администратора")]),t._v(" "),e("v-spacer"),t._v(" "),e("div",{staticClass:"ml-5"},[e("v-btn",{staticClass:"ma-0 btn-grad",attrs:{block:"",large:"",dark:""}},[t._v("Принять и начать работать")]),t._v(" "),e("v-checkbox",{attrs:{label:"Принять офферту"}})],1)],1):t._e()],1)],1)},[],!1,null,null,null);r.options.__file="chat.vue";a.a=r.exports},177:function(t,a,e){var s=e(220);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e(23).default)("d09bdc7c",s,!0,{})},219:function(t,a,e){"use strict";var s=e(177);e.n(s).a},220:function(t,a,e){(t.exports=e(22)(!1)).push([t.i,"\n.author{min-width:300px\n}\n.author .subheading{padding-top:15px;border-bottom:1px solid #ccc\n}\n.v-rating .v-icon{padding-left:0\n}\n.v-rating{min-width:182px;height:22px\n}",""])},238:function(t,a,e){"use strict";e.r(a);var s=e(157),i={components:{diagram:e(156).a,chat:s.a},asyncData:function(t){return{ready:t.query.ready}}},n=(e(219),e(3)),r=Object(n.a)(i,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"designers"}},[e("v-card",[e("v-container",{attrs:{"grid-list-xl":"","pa-0":""}},[e("v-card-actions",{staticClass:"pt-4 pb-2 pl-0 pr-0",staticStyle:{"line-height":"35px","flex-wrap":"wrap"}},[e("div",{staticStyle:{"flex-wrap":"wrap"}},[e("h2",{staticClass:"subheading"},[t._v("г. Астана")]),t._v(" "),e("h1",{staticClass:"headline"},[t._v("ЖК LightHouse")]),t._v(" "),e("div",[e("v-tooltip",{attrs:{bottom:""}},[e("v-btn",{staticClass:"pl-0",staticStyle:{"text-transform":"none"},attrs:{slot:"activator",flat:"",small:""},slot:"activator"},[e("v-icon",{attrs:{left:"",color:"secondary"}},[t._v("domain")]),t._v("\n                IIIкв. 2018\n              ")],1),t._v("\n              Сдача квартир\n            ")],1),t._v(" "),e("v-btn",{attrs:{flat:"",small:""}},[e("v-icon",{attrs:{left:"",color:"secondary"}},[t._v("location_city")]),t._v("\n              231\n            ")],1)],1)]),t._v(" "),e("v-spacer"),t._v(" "),e("div",{staticClass:"author"},[e("nuxt-link",{staticClass:"grey--text mt-2 d-flex",attrs:{to:"/"}},[e("v-avatar",{staticClass:"mr-3",staticStyle:{float:"left"},attrs:{size:100}},[e("img",{attrs:{src:"/avatar.jpg",alt:"avatar"}})]),t._v(" "),e("div",{},[e("div",{staticClass:"subheading"},[t._v("\n                Имя Фамилия\n              ")]),t._v(" "),e("v-rating",{attrs:{value:4,small:"","background-color":"grey"}}),t._v("\n              Заказано работ: "),e("b",[t._v("19")])],1)],1)],1)],1),t._v(" "),e("v-card-actions",{staticClass:"px-0"},[e("v-btn",{attrs:{flat:"",to:"/"}},[t._v("\n          Бюджет\n        ")]),t._v(" "),e("v-btn",{attrs:{flat:"",to:"/"}},[t._v("\n          Чат\n        ")]),t._v(" "),e("v-btn",{attrs:{flat:"",to:"/"}},[t._v("\n          ЖК\n        ")]),t._v(" "),e("v-btn",{attrs:{flat:"",to:"/"}},[t._v("\n          Офферта\n        ")])],1)],1)],1),t._v(" "),e("v-container",{attrs:{"grid-list-md":"","pa-0":""}},[t.ready?e("div",{staticClass:"text-sm-center pt-5 headline"},[e("p",[t._v("Почти все готово!")]),t._v(" "),e("p",[t._v("Осталось только согласовать график работ и выплат.")])]):t._e(),t._v(" "),t.ready?e("card",{attrs:{title:"График работ"}},[e("diagram")],1):e("v-card",{staticClass:"mt-5"},[e("v-toolbar",{staticClass:"custom-heading",attrs:{flat:"",dark:""}},[e("v-toolbar-title",[t._v("Бюджеты и выплаты")])],1),t._v(" "),e("v-card-text",{staticClass:"pa-5",staticStyle:{"font-size":"20px"}},[e("div",{staticClass:"pa-3 text-sm-center"},[e("v-icon",[t._v("event")]),t._v(" Сумма контракта: "),e("b",[t._v("50.000тнг")])],1),t._v(" "),e("v-tooltip",{attrs:{bottom:""}},[e("div",{staticClass:"pa-3 text-sm-center",attrs:{slot:"activator"},slot:"activator"},[e("v-icon",[t._v("security")]),t._v(" Зарезервировано: "),e("b",{staticStyle:{color:"green"}},[t._v("50.000тнг")])],1),t._v("\n          Необходимая сумма зарезервирована на нашем сервисе\n        ")])],1),t._v(" "),e("v-card-text",{staticClass:" pa-3"},[e("div",{staticClass:"d-flex mb-3",staticStyle:{"flex-wrap":"wrap"}},[e("v-spacer"),e("v-spacer"),t._v(" "),e("v-btn",{staticClass:"ma-0 mr-2",attrs:{depressed:"",large:""}},[t._v("Вызвать арбитра")]),t._v(" "),e("div",{staticClass:"ml-2"},[e("v-btn",{staticClass:"ma-0 btn-grad",attrs:{block:"",large:"",dark:""}},[t._v("Завершить")])],1)],1)])],1),t._v(" "),e("chat",{staticClass:"mt-5"}),t._v(" "),e("v-card",{staticClass:"mt-5 mb-5"},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{lg6:"",sm12:""}},[e("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image=15","lazy-src":"https://picsum.photos/10/6?image=15","aspect-ratio":"1"}},[e("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)],1)],1),t._v(" "),e("v-flex",{staticClass:"pl-4",attrs:{lg6:"",sm12:""}},[e("v-card-actions",{staticClass:"pt-4 pl-3"},[e("nuxt-link",{staticClass:"grey--text mr-2",attrs:{to:"/"}},[e("v-avatar",{staticClass:"mr-3",staticStyle:{float:"left"},attrs:{size:50}},[e("img",{attrs:{src:"/avatar.jpg",alt:"avatar"}})]),t._v("\n              Имя Фамилия\n              "),e("v-rating",{attrs:{value:4,small:"","background-color":"grey"}})],1),t._v(" "),e("v-spacer"),t._v(" "),e("div",{staticClass:"grey--text mr-2 text-xs-right"},[t._v("\n              Подано:"),e("br"),t._v("20.09.2018\n            ")])],1),t._v(" "),e("v-card-title",{attrs:{"primary-title":""}},[e("h1",{staticClass:"headline"},[t._v('Концепция от студии ООО "Вектор"')]),t._v(" "),e("div",{staticClass:"grey--text"},[t._v("Стиль: неоклассицизм")])]),t._v(" "),e("v-card-text",[e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),t._v(" "),e("div",{staticStyle:{margin:"0 -10px"}},[e("v-btn",{staticClass:"pl-0",staticStyle:{"text-transform":"none"},attrs:{flat:"",small:""}},[e("v-icon",{attrs:{left:"",color:"primary"}},[t._v("domain")]),t._v("\n                г. Астана\n              ")],1),t._v(" "),e("v-btn",{attrs:{flat:"",small:""}},[e("v-icon",{attrs:{left:"",color:"primary"}},[t._v("card_membership")]),t._v("\n                ЖК LightHouse\n              ")],1),t._v(" "),e("v-btn",{staticStyle:{"text-transform":"none"},attrs:{flat:"",small:""}},[e("v-icon",{attrs:{left:"",color:"primary"}},[t._v("date_range")]),t._v("\n                IIIкв. 2018\n              ")],1)],1)])],1)],1),t._v(" "),e("v-layout",{attrs:{row:"",wrap:""}},[t._l(9,function(t){return e("v-flex",{key:t,attrs:{xs2:"","d-flex":""}},[e("v-card",{staticClass:"d-flex",attrs:{flat:"",tile:""}},[e("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/800/800?image="+(5*t+10),"lazy-src":"https://picsum.photos/10/6?image="+(5*t+10),"aspect-ratio":"1"}},[e("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[e("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)],1)],1)],1)}),t._v(" "),e("v-flex",{attrs:{"d-flex":""}},[e("v-card",{staticClass:"d-flex",staticStyle:{"text-align":"center","font-size":"20px"},attrs:{flat:"",tile:""}},[e("div",{staticStyle:{"align-items":"center",display:"inline-flex","justify-content":"center"}},[e("v-icon",{staticClass:"pr-4"},[t._v("cloud_download")]),t._v(" Скачать документацию")],1)])],1)],2)],1)],1)],1)},[],!1,null,null,null);r.options.__file="personal.vue";a.default=r.exports}}]);