webpackJsonp([1],{128:function(t,e,s){"use strict";var a=s(4),n=s(181),r=s(172),i=s.n(r);a.default.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Hello",component:i.a}]})},129:function(t,e){},130:function(t,e){},133:function(t,e,s){function a(t){s(163)}var n=s(2)(s(154),s(177),a,null,null);t.exports=n.exports},154:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(171),n=s.n(a),r=s(174),i=s.n(r),o=s(173),c=s.n(o),l=s(170),u=s.n(l);e.default={name:"app",components:{"app-header":n.a,"app-weather":i.a,"test-weather":c.a,"fiveday-weather":u.a},data:function(){return{playground:{theme:"default"},themeName:""}},mounted:function(){this.themeCheerUp()},methods:{themeEndlessRiver:function(){this.themeName="endless_river",console.log("endless_river")},themeVirgin:function(){return this.themeName="virgin"},themeCheerUp:function(){return this.themeName="cheer_up"},setTheme:function(t){this.playground.theme=t}}}},155:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(3),n=s.n(a);e.default={data:function(){return{apiKey:"63c8e72d24ad6d199e187b8f9ce98851",userLat:"",userLon:"",fiveDays:[]}},mounted:function(){this.getLocation()},computed:{weatherClass:function(){var t=this.weatherID;return t>=200&&t<=232?"thunderstorm":t>=300&&t<=321?"drizzle":t>=500&&t<=531?"rain":t>=701&&t<=781?"snow":800==t?"clear":t>=801&&t<=804?"clouds":t>=900&&t<=906?"extreme":void 0},dateNow:function(){return this.$moment().format("dddd, MMMM D")},fiveDayInfo:function(){var t=this;return _.chain(this.fiveDays).groupBy(function(e){return t.$moment(e.dt_txt).format("dddd MMMM D YYYY").toLocaleUpperCase()}).map(function(t,e){return{date:e,info:t}}).value()}},methods:{convertDate:function(t){return this.$moment.unix(t).format("ddddMMMMD")},convertDateTwo:function(t){return this.$moment(t).format("ddddMMMMDYYYY")},convertHour:function(t){return this.$moment(t).format("hh:mm a")},convertDateThree:function(t){return this.$moment(t).format("dddd, MMMM D YYYY")},getWeather:function(){var t=this;n.a.get("https://api.openweathermap.org/data/2.5/forecast?lat="+this.userLat+"&lon="+this.userLon+"&units=metric&appid="+this.apiKey).then(function(e){t.fiveDays=e.data.list})},getLocation:function(){if(!navigator.geolocation)return"Geolocation is not supported by this browser.";navigator.geolocation.getCurrentPosition(this.showPosition)},showPosition:function(t){this.userLat=t.coords.latitude,this.userLon=t.coords.longitude,this.getWeather(),console.log("Latitude: "+t.coords.latitude+" | Longitude: "+t.coords.longitude)}}}},156:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msg:"Weather App"}}}},157:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},158:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(3),n=s.n(a);e.default={data:function(){return{apiKey:"63c8e72d24ad6d199e187b8f9ce98851",userLat:"",userLon:"",userLocation:"",userCountry:"",userPlace:"",locTemp:"",weather:"",weatherID:"",weatherDate:[]}},mounted:function(){this.getLocation()},computed:{weatherClass:function(){var t=this.weatherID;return t>=200&&t<=232?"thunderstorm":t>=300&&t<=321?"drizzle":t>=500&&t<=531?"rain":t>=701&&t<=781?"snow":800==t?"clear":t>=801&&t<=804?"clouds":t>=900&&t<=906?"extreme":void 0},dateNow:function(){return this.$moment().format("dddd, MMMM D")},wDate:function(){for(var t=this.weatherDate,e=[];t.length;)console.log(t.splice(0,8)),e=t.splice(0,8);return e.dt_txt}},methods:{convertDate:function(t){var e=this.$moment();return console.log(e),this.$moment.unix(t).calendar()},getWeather:function(){var t=this;n.a.get("https://api.openweathermap.org/data/2.5/forecast/daily?lat="+this.userLat+"&lon="+this.userLon+"&units=metric&appid="+this.apiKey).then(function(e){t.userPlace=e.data.city.name,t.userCountry=e.data.city.country,t.weather=e.data.list[0].weather[0].description,t.weatherDate=e.data.list,console.log(t.weatherDate)})},getLocation:function(){if(!navigator.geolocation)return"Geolocation is not supported by this browser.";navigator.geolocation.getCurrentPosition(this.showPosition)},showPosition:function(t){this.userLat=t.coords.latitude,this.userLon=t.coords.longitude,this.getWeather(),console.log("Latitude: "+t.coords.latitude+" | Longitude: "+t.coords.longitude)}}}},159:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(3),n=s.n(a);e.default={data:function(){return{apiKey:"63c8e72d24ad6d199e187b8f9ce98851",userLat:"",userLon:"",userLocation:"",userCountry:"",userPlace:"",locTemp:"",weather:"",weatherID:"",weatherDate:[],weatherTomorrow:"",weatherThree:"",weatherFour:"",weatherFive:"",weatherSix:"",weatherSeven:""}},mounted:function(){this.getLocation()},computed:{dateNow:function(){return this.$moment().format("dddd, MMMM D")}},methods:{weatherClass:function(t){return t>=200&&t<=232?"wi-thunderstorm":t>=300&&t<=321?"wi-sleet":t>=500&&t<=531?"wi-rain":t>=701&&t<=781?"wi-snow":800==t?"wi-day-sunny":t>=801&&t<=804?"wi-cloudy":t>=900&&t<=906?"wi-strong-wind":void 0},convertDays:function(t){var e=this.$moment.unix(t).calendar();return e=e.split(/\b/)[0],console.log(e),e},convertDate:function(t){return this.$moment.unix(t).format("MMMM D")},getWeather:function(){var t=this;n.a.get("https://api.openweathermap.org/data/2.5/forecast/daily?lat="+this.userLat+"&lon="+this.userLon+"&units=metric&appid="+this.apiKey).then(function(e){t.userPlace=e.data.city.name,t.userCountry=e.data.city.country,t.weather=e.data.list[0].weather[0].description,t.weatherDate=e.data.list,t.weatherID=e.data.list[0].weather[0].id,t.locTemp=e.data.list[0].temp.max,t.weatherTomorrow=e.data.list[1],t.weatherThree=e.data.list[2],t.weatherFour=e.data.list[3],t.weatherFive=e.data.list[4],t.weatherSix=e.data.list[5],t.weatherSeven=e.data.list[6],console.log(e.data)})},getLocation:function(){if(!navigator.geolocation)return"Geolocation is not supported by this browser.";navigator.geolocation.getCurrentPosition(this.showPosition)},showPosition:function(t){this.userLat=t.coords.latitude,this.userLon=t.coords.longitude,this.getWeather(),console.log("Latitude: "+t.coords.latitude+" | Longitude: "+t.coords.longitude)}}}},160:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(4),n=s(133),r=s.n(n),i=s(128),o=s(3),c=s.n(o),l=s(132),u=s.n(l),d=s(130),h=(s.n(d),s(135)),m=s.n(h),v=s(129),f=(s.n(v),s(0)),_=s.n(f),p=s(136),j=s.n(p),w=s(131),C=s.n(w),g=s(134),y=s.n(g);a.default.use(y.a,C.a),a.default.use(j.a,_.a),a.default.use(m.a),a.default.use(u.a,c.a),a.default.material.registerTheme("default",{primary:"purple",accent:"blue",warn:"red"}),a.default.config.productionTip=!1,new a.default({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},161:function(t,e){},162:function(t,e){},163:function(t,e){},164:function(t,e){},165:function(t,e){},166:function(t,e){},168:function(t,e,s){function a(t){return s(n(t))}function n(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var r={"./af":11,"./af.js":11,"./ar":18,"./ar-dz":12,"./ar-dz.js":12,"./ar-kw":13,"./ar-kw.js":13,"./ar-ly":14,"./ar-ly.js":14,"./ar-ma":15,"./ar-ma.js":15,"./ar-sa":16,"./ar-sa.js":16,"./ar-tn":17,"./ar-tn.js":17,"./ar.js":18,"./az":19,"./az.js":19,"./be":20,"./be.js":20,"./bg":21,"./bg.js":21,"./bn":22,"./bn.js":22,"./bo":23,"./bo.js":23,"./br":24,"./br.js":24,"./bs":25,"./bs.js":25,"./ca":26,"./ca.js":26,"./cs":27,"./cs.js":27,"./cv":28,"./cv.js":28,"./cy":29,"./cy.js":29,"./da":30,"./da.js":30,"./de":33,"./de-at":31,"./de-at.js":31,"./de-ch":32,"./de-ch.js":32,"./de.js":33,"./dv":34,"./dv.js":34,"./el":35,"./el.js":35,"./en-au":36,"./en-au.js":36,"./en-ca":37,"./en-ca.js":37,"./en-gb":38,"./en-gb.js":38,"./en-ie":39,"./en-ie.js":39,"./en-nz":40,"./en-nz.js":40,"./eo":41,"./eo.js":41,"./es":43,"./es-do":42,"./es-do.js":42,"./es.js":43,"./et":44,"./et.js":44,"./eu":45,"./eu.js":45,"./fa":46,"./fa.js":46,"./fi":47,"./fi.js":47,"./fo":48,"./fo.js":48,"./fr":51,"./fr-ca":49,"./fr-ca.js":49,"./fr-ch":50,"./fr-ch.js":50,"./fr.js":51,"./fy":52,"./fy.js":52,"./gd":53,"./gd.js":53,"./gl":54,"./gl.js":54,"./gom-latn":55,"./gom-latn.js":55,"./he":56,"./he.js":56,"./hi":57,"./hi.js":57,"./hr":58,"./hr.js":58,"./hu":59,"./hu.js":59,"./hy-am":60,"./hy-am.js":60,"./id":61,"./id.js":61,"./is":62,"./is.js":62,"./it":63,"./it.js":63,"./ja":64,"./ja.js":64,"./jv":65,"./jv.js":65,"./ka":66,"./ka.js":66,"./kk":67,"./kk.js":67,"./km":68,"./km.js":68,"./kn":69,"./kn.js":69,"./ko":70,"./ko.js":70,"./ky":71,"./ky.js":71,"./lb":72,"./lb.js":72,"./lo":73,"./lo.js":73,"./lt":74,"./lt.js":74,"./lv":75,"./lv.js":75,"./me":76,"./me.js":76,"./mi":77,"./mi.js":77,"./mk":78,"./mk.js":78,"./ml":79,"./ml.js":79,"./mr":80,"./mr.js":80,"./ms":82,"./ms-my":81,"./ms-my.js":81,"./ms.js":82,"./my":83,"./my.js":83,"./nb":84,"./nb.js":84,"./ne":85,"./ne.js":85,"./nl":87,"./nl-be":86,"./nl-be.js":86,"./nl.js":87,"./nn":88,"./nn.js":88,"./pa-in":89,"./pa-in.js":89,"./pl":90,"./pl.js":90,"./pt":92,"./pt-br":91,"./pt-br.js":91,"./pt.js":92,"./ro":93,"./ro.js":93,"./ru":94,"./ru.js":94,"./sd":95,"./sd.js":95,"./se":96,"./se.js":96,"./si":97,"./si.js":97,"./sk":98,"./sk.js":98,"./sl":99,"./sl.js":99,"./sq":100,"./sq.js":100,"./sr":102,"./sr-cyrl":101,"./sr-cyrl.js":101,"./sr.js":102,"./ss":103,"./ss.js":103,"./sv":104,"./sv.js":104,"./sw":105,"./sw.js":105,"./ta":106,"./ta.js":106,"./te":107,"./te.js":107,"./tet":108,"./tet.js":108,"./th":109,"./th.js":109,"./tl-ph":110,"./tl-ph.js":110,"./tlh":111,"./tlh.js":111,"./tr":112,"./tr.js":112,"./tzl":113,"./tzl.js":113,"./tzm":115,"./tzm-latn":114,"./tzm-latn.js":114,"./tzm.js":115,"./uk":116,"./uk.js":116,"./ur":117,"./ur.js":117,"./uz":119,"./uz-latn":118,"./uz-latn.js":118,"./uz.js":119,"./vi":120,"./vi.js":120,"./x-pseudo":121,"./x-pseudo.js":121,"./yo":122,"./yo.js":122,"./zh-cn":123,"./zh-cn.js":123,"./zh-hk":124,"./zh-hk.js":124,"./zh-tw":125,"./zh-tw.js":125};a.keys=function(){return Object.keys(r)},a.resolve=n,t.exports=a,a.id=168},170:function(t,e,s){function a(t){s(162)}var n=s(2)(s(155),s(176),a,null,null);t.exports=n.exports},171:function(t,e,s){function a(t){s(166)}var n=s(2)(s(156),s(180),a,"data-v-789cd9c8",null);t.exports=n.exports},172:function(t,e,s){function a(t){s(164)}var n=s(2)(s(157),s(178),a,"data-v-31001b13",null);t.exports=n.exports},173:function(t,e,s){function a(t){s(161)}var n=s(2)(s(158),s(175),a,null,null);t.exports=n.exports},174:function(t,e,s){function a(t){s(165)}var n=s(2)(s(159),s(179),a,null,null);t.exports=n.exports},175:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weather"},[s("md-layout",{attrs:{"md-gutter":""}},[s("md-layout",{attrs:{"md-flex":"100","md-align":"center","md-flex-offset":"0"}},[s("div",{staticClass:"user_weather"},["thunderstorm"===t.weatherClass?s("div",{staticClass:"icon thunder-storm"},[s("div",{staticClass:"cloud"}),t._v(" "),s("div",{staticClass:"lightning"},[s("div",{staticClass:"bolt"}),t._v(" "),s("div",{staticClass:"bolt"})])]):"drizzle"===t.weatherClass?s("div",{staticClass:"icon sun-shower"},[s("div",{staticClass:"cloud"}),t._v(" "),s("div",{staticClass:"sun"},[s("div",{staticClass:"rays"})]),t._v(" "),s("div",{staticClass:"rain"})]):"clouds"===t.weatherClass?s("div",{staticClass:"icon cloudy"},[s("div",{staticClass:"cloud"}),t._v(" "),s("div",{staticClass:"cloud"})]):"snow"===t.weatherClass?s("div",{staticClass:"icon flurries"},[s("div",{staticClass:"cloud"}),t._v(" "),s("div",{staticClass:"snow"},[s("div",{staticClass:"flake"}),t._v(" "),s("div",{staticClass:"flake"})])]):"clear"===t.weatherClass?s("div",{staticClass:"icon sunny"},[s("div",{staticClass:"sun"},[s("div",{staticClass:"rays"})])]):"rain"===t.weatherClass?s("div",{staticClass:"icon rainy"},[s("div",{staticClass:"cloud"}),t._v(" "),s("div",{staticClass:"rain"})]):s("div",[s("h5",{staticClass:"weatherStatusDisabled"},[t._v("Can't Detect "),s("span",{staticClass:"custom_text"},[t._v("Weather Condition "),s("md-icon",{staticClass:"md-warn"},[t._v("cloud_queue")])],1)])]),t._v(" "),s("div",{staticClass:"user_info"},[t.userPlace?s("h3",{staticClass:"user_place"},[t._v(t._s(t.userPlace)+", "+t._s(t.userCountry))]):s("h3",{staticClass:"user_place"},[t._v("Unknown "),s("span",{staticClass:"custom_text"},[t._v("Location")]),s("md-icon",{staticClass:"md-warn"},[t._v("location_on")])],1),t._v(" "),s("h5",{staticClass:"user_date"},[t._v(t._s(t.dateNow))])])])])],1),t._v(" "),s("md-layout",{attrs:{"md-align":"center","md-gutter":""}},[t.locTemp?s("h1",{staticClass:"loc_temp"},[t._v(t._s(t.locTemp))]):s("h3",{staticClass:"loc_temp_disabled"},[t._v("Please turn on your "),s("span",{staticClass:"custom_text"},[t._v("PHONE")]),s("md-icon",{staticClass:"md-warn"},[t._v("stay_current_portrait")]),t._v(" location!")],1),t._v("\n\t\t\t"+t._s(t.weather)+"\n\t\t")]),t._v(" --\x3e\n\n\t\t"),s("ul",t._l(t.weatherDate,function(e){return s("li",[t._v("\n\t\t\t\t"+t._s(t.convertDate(e.dt))+" | "+t._s(t.userPlace)+" | "+t._s(e.weather[0].description)+" | "+t._s(e.weather[0].id)+"\n\t\t\t")])}))],1)},staticRenderFns:[]}},176:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",t._l(t.fiveDayInfo,function(e){return s("li",[t._v("\n\t\t"+t._s(e.date)+"\n\t\t"),s("ul",t._l(e.info,function(e){return s("li",[t._v(" "+t._s(t.convertHour(e.dt_txt))+" | weather: "+t._s(e.weather[0].description))])}))])}))},staticRenderFns:[]}},177:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.themeName,attrs:{id:"app"}},[s("app-weather"),t._v(" "),s("md-speed-dial",{staticClass:"md-fab-bottom-right",attrs:{"md-mode":"scale"}},[s("md-button",{staticClass:"md-fab",attrs:{"md-fab-trigger":""}},[s("md-icon",{attrs:{"md-icon-morph":""}},[t._v("close")]),t._v(" "),s("md-icon",[t._v("color_lens")])],1),t._v(" "),s("md-button",{staticClass:"md-fab md-primary md-mini md-clean",on:{click:t.themeEndlessRiver}},[s("md-icon",[t._v("filter_1")])],1),t._v(" "),s("md-button",{staticClass:"md-fab md-primary md-mini md-clean",on:{click:t.themeVirgin}},[s("md-icon",[t._v("filter_2")])],1),t._v(" "),s("md-button",{staticClass:"md-fab md-primary md-mini md-clean",on:{click:t.themeCheerUp}},[s("md-icon",[t._v("filter_3")])],1)],1)],1)},staticRenderFns:[]}},178:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},179:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weather"},[s("md-layout",{attrs:{"md-gutter":""}},[s("md-layout",{attrs:{"md-flex":"100","md-align":"center","md-flex-offset":"0"}},[s("div",{staticClass:"user_weather"},[t.weatherClass?s("i",{staticClass:"wi",class:t.weatherClass(t.weatherID)}):s("div",[s("h5",{staticClass:"weatherStatusDisabled"},[t._v("Can't Detect "),s("span",{staticClass:"custom_text"},[t._v("Weather Condition "),s("md-icon",{staticClass:"md-warn"},[t._v("cloud_queue")])],1)])]),t._v(" "),s("div",{staticClass:"user_info"},[t.userPlace?s("h3",{staticClass:"user_place"},[t._v(t._s(t.userPlace)+", "+t._s(t.userCountry))]):s("h3",{staticClass:"user_place"},[t._v("Unknown "),s("span",{staticClass:"custom_text"},[t._v("Location")]),s("md-icon",{staticClass:"md-warn"},[t._v("location_on")])],1),t._v(" "),s("h5",{staticClass:"user_date"},[t._v(t._s(t.dateNow))])])])])],1),t._v(" "),s("md-layout",{staticClass:"loc_temp_wrapper",attrs:{"md-align":"center"}},[t.locTemp?s("h1",{staticClass:"loc_temp"},[t._v(t._s(t.locTemp)),s("span",[s("sup",[t._v("℃")])])]):s("h3",{staticClass:"loc_temp_disabled"},[t._v("Please turn on your "),s("span",{staticClass:"custom_text"},[t._v("PHONE")]),s("md-icon",{staticClass:"md-warn"},[t._v("stay_current_portrait")]),t._v(" location!")],1)]),t._v(" "),s("md-layout",{attrs:{"md-align":"end"}},[s("md-layout",{attrs:{"md-flex":"100"}},t._l(t.weatherDate,function(e){return s("div",{staticClass:"user_weather fivedays"},[s("div",{staticClass:"user_info"},[t.userPlace?s("h3",{staticClass:"user_place"},[t._v(t._s(t.convertDays(e.dt)))]):s("h3",{staticClass:"user_place"},[t._v("Unknown "),s("span",{staticClass:"custom_text"},[t._v("Location")]),s("md-icon",{staticClass:"md-warn"},[t._v("location_on")])],1),t._v(" "),s("h5",{staticClass:"user_date"},[t._v(t._s(t.convertDate(e.dt)))])]),t._v(" "),t.weatherClass?s("i",{staticClass:"wi",class:t.weatherClass(e.weather[0].id)}):s("div",[s("h5",{staticClass:"weatherStatusDisabled"},[t._v("Can't Detect "),s("span",{staticClass:"custom_text"},[t._v("Weather Condition "),s("md-icon",{staticClass:"md-warn"},[t._v("cloud_queue")])],1)])])])}))],1)],1)},staticRenderFns:[]}},180:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-layout",{attrs:{"md-flex":"100","md-align":"center","md-flex-offset":"0"}},[s("h1",[t._v(t._s(t.msg))])])},staticRenderFns:[]}}},[160]);
//# sourceMappingURL=app.4ef4560107645cbf08c8.js.map