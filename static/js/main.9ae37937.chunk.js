(this["webpackJsonpreact-template-2020"]=this["webpackJsonpreact-template-2020"]||[]).push([[11],{13:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return u})),a.d(t,"h",(function(){return o})),a.d(t,"i",(function(){return i})),a.d(t,"f",(function(){return s})),a.d(t,"g",(function(){return m}));var n={};a.r(n),a.d(n,"globalShowLoading",(function(){return f})),a.d(n,"globalHideLoading",(function(){return p}));var r={};a.r(r),a.d(r,"requestDataDefault",(function(){return h})),a.d(r,"getDataDefaultSuccess",(function(){return E})),a.d(r,"getDataDefaultFailure",(function(){return v}));var c={};a.r(c),a.d(c,"sendRequestContact",(function(){return b})),a.d(c,"sendRequestContactSuccess",(function(){return g})),a.d(c,"sendRequestContactFailure",(function(){return _}));var l={};a.r(l),a.d(l,"requestHomeData",(function(){return O})),a.d(l,"getHomeDataSuccess",(function(){return j})),a.d(l,"getHomeDataFailure",(function(){return N}));var u={};a.r(u),a.d(u,"requestData",(function(){return y})),a.d(u,"getDataSuccess",(function(){return w})),a.d(u,"getDataFailure",(function(){return x}));var o={};a.r(o),a.d(o,"requestProductData",(function(){return C})),a.d(o,"getProductDataSuccess",(function(){return D})),a.d(o,"getProductDataFailure",(function(){return L}));var i={};a.r(i),a.d(i,"requestProductDetailData",(function(){return S})),a.d(i,"getProductDetailDataSuccess",(function(){return k})),a.d(i,"getProductDetailDataFailure",(function(){return T}));var s={};a.r(s),a.d(s,"requestNewsData",(function(){return A})),a.d(s,"getNewsDataSuccess",(function(){return P})),a.d(s,"getNewsDataFailure",(function(){return U}));var m={};a.r(m),a.d(m,"requestNewsDetailData",(function(){return I})),a.d(m,"getNewsDetailDataSuccess",(function(){return R})),a.d(m,"getNewsDetailDataFailure",(function(){return F}));var d=a(2),f=function(){return{type:d.k}},p=function(){return{type:d.j}},h=function(){return{type:d.h}},E=function(e){return{type:d.i,data:e}},v=function(e){return{type:d.g,error:e}},b=function(e){return{type:d.e,params:e}},g=function(e){return{type:d.f,data:e}},_=function(e){return{type:d.d,error:e}},O=function(){return{type:d.m}},j=function(e){return{type:d.n,data:e}},N=function(e){return{type:d.l,error:e}},y=function(){return{type:d.b}},w=function(e){return{type:d.c,data:e}},x=function(e){return{type:d.a,error:e}},C=function(e){return{type:d.v,params:e}},D=function(e){return{type:d.w,data:e}},L=function(e){return{type:d.u,error:e}},S=function(e){return{type:d.y,id:e}},k=function(e){return{type:d.z,data:e}},T=function(e){return{type:d.x,error:e}},A=function(e){return{type:d.p,params:e}},P=function(e){return{type:d.q,data:e}},U=function(e){return{type:d.o,error:e}},I=function(e){return{type:d.s,id:e}},R=function(e){return{type:d.t,data:e}},F=function(e){return{type:d.r,error:e}}},2:function(e,t,a){"use strict";a.d(t,"k",(function(){return n})),a.d(t,"j",(function(){return r})),a.d(t,"h",(function(){return c})),a.d(t,"i",(function(){return l})),a.d(t,"g",(function(){return u})),a.d(t,"m",(function(){return o})),a.d(t,"n",(function(){return i})),a.d(t,"l",(function(){return s})),a.d(t,"e",(function(){return m})),a.d(t,"f",(function(){return d})),a.d(t,"d",(function(){return f})),a.d(t,"b",(function(){return p})),a.d(t,"c",(function(){return h})),a.d(t,"a",(function(){return E})),a.d(t,"v",(function(){return v})),a.d(t,"w",(function(){return b})),a.d(t,"u",(function(){return g})),a.d(t,"y",(function(){return _})),a.d(t,"z",(function(){return O})),a.d(t,"x",(function(){return j})),a.d(t,"p",(function(){return N})),a.d(t,"q",(function(){return y})),a.d(t,"o",(function(){return w})),a.d(t,"s",(function(){return x})),a.d(t,"t",(function(){return C})),a.d(t,"r",(function(){return D}));var n="SHOW_LOADING",r="HIDE_LOADING",c="DEFAULT_CALL_REQUEST",l="DEFAULT_CALL_SUCCESS",u="DEFAULT_CALL_FAILURE",o="HOME_CALL_REQUEST",i="HOME_CALL_SUCCESS",s="HOME_CALL_FAILURE",m="CONTACT_SEND_REQUEST",d="CONTACT_SEND_SUCCESS",f="CONTACT_SEND_FAILURE",p="API_CALL_REQUEST",h="API_CALL_SUCCESS",E="API_CALL_FAILURE",v="PRODUCT_CALL_REQUEST",b="PRODUCT_CALL_SUCCESS",g="PRODUCT_CALL_FAILURE",_="PRODUCT_DETAIL_CALL_REQUEST",O="PRODUCT_DETAIL_CALL_SUCCESS",j="PRODUCT_DETAIL_CALL_FAILURE",N="NEWS_CALL_REQUEST",y="NEWS_CALL_SUCCESS",w="NEWS_CALL_FAILURE",x="NEWS_DETAIL_CALL_REQUEST",C="NEWS_DETAIL_CALL_SUCCESS",D="NEWS_DETAIL_CALL_FAILURE"},26:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(10),c=a(12),l=a(11),u=a(0),o=a.n(u),i=a(24),s=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=null;return this.props.status&&(e=o.a.createElement("div",null,o.a.createElement("div",{id:"preloder",className:"loaderpage"},o.a.createElement("div",{className:"loader"}," ")))),e}}]),a}(u.Component);t.default=Object(i.b)((function(e){return{status:e.showLoading.status}}),null)(s)},27:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(10),c=a(12),l=a(11),u=a(0),o=a.n(u),i=a(14),s=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("section",{className:"blog-details spad"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12 col-md-12"},o.a.createElement("div",{className:"blog__details__text"},o.a.createElement("div",{id:"notfound"},o.a.createElement("div",{className:"notfound"},o.a.createElement("div",{className:"notfound-404"},o.a.createElement("h1",null,"404"),o.a.createElement("h2",null,"Trang b\u1ea1n y\xeau c\u1ea7u kh\xf4ng t\xecm th\u1ea5y :(")),o.a.createElement(i.b,{to:"/"},"Tr\u1edf v\u1ec1 trang ch\u1ee7"))))))))}}]),a}(u.Component),m=a(59),d=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentWillMount",value:function(){m("/js/main.js")}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(s,null))}}]),a}(u.Component);t.default=d},31:function(e,t,a){"use strict";var n=a(9),r=a(10),c=a(12),l=a(11),u=a(0),o=a.n(u),i=a(14),s=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).showItem=function(){return e.props.data?o.a.createElement(i.b,{to:"/product/"+e.props.data.name_url+"-cg"+e.props.data.id},e.props.data.name):void 0},e}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("li",null,this.showItem())}}]),a}(u.Component);t.a=s},35:function(e,t,a){"use strict";var n={parseJsonArrayToUrl:function(e){return new URLSearchParams(e).toString()},splitIdCategory:function(e){var t=e.split("-"),a=t[t.length-1].split("cg");return parseInt(a[1])},splitIdDetail:function(e){var t=e.split("-");return parseInt(t[t.length-1])}};t.a=n},63:function(e,t,a){e.exports=a(92)},73:function(e,t,a){var n={"./404":[27],"./404/":[27],"./404/index":[27],"./404/index.js":[27],"./Contact":[39,0,5,7],"./Contact/":[39,0,5,7],"./Contact/index":[39,0,5,7],"./Contact/index.js":[39,0,5,7],"./GlobalLoading":[26],"./GlobalLoading/":[26],"./GlobalLoading/index":[26],"./GlobalLoading/index.js":[26],"./Home":[38,0,1,4],"./Home/":[38,0,1,4],"./Home/index":[38,0,1,4],"./Home/index.js":[38,0,1,4],"./Introdution":[41,0,6],"./Introdution/":[41,0,6],"./Introdution/index":[41,0,6],"./Introdution/index.js":[41,0,6],"./News":[37,0,3],"./News/":[37,0,3],"./News/detail":[62,0,9],"./News/detail.js":[62,0,9],"./News/index":[37,0,3],"./News/index.js":[37,0,3],"./Product":[40,0,1,2],"./Product/":[40,0,1,2],"./Product/category":[60,0,1,8],"./Product/category.js":[60,0,1,8],"./Product/detail":[61,0,1,10],"./Product/detail.js":[61,0,1,10],"./Product/index":[40,0,1,2],"./Product/index.js":[40,0,1,2]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=73,e.exports=r},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),u=a(23),o=a(24),i=a(9),s=a(10),m=a(12),d=a(11),f=a(15),p=a(14),h=a(33),E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClick=function(){console.log(n.state),n.props.history.push({pathname:"/product/?txtSearch="+n.state.txtSearch,state:{results:n.state.txtSearch}})},n.isChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(h.a)({},t,a))},n.state={txtSearch:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{action:"#"},r.a.createElement("input",{type:"text",name:"txtSearch",onChange:function(t){return e.isChange(t)},placeholder:"Nh\u1eadp s\u1ea3n ph\u1ea9m c\u1ea7n t\xecm?",defaultValue:this.state.txtSearch}),r.a.createElement("button",{type:"button",onClick:function(){return e.handleClick()},className:"site-btn"},"T\xecm Ki\u1ebfm")))}}]),a}(n.Component),v=Object(f.f)(E),b=a(31),g=a(36),_=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).showCategory=function(){return e.props.data.categoryProduct.map((function(e,t){return r.a.createElement(b.a,{data:e,key:t})}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(g.a,null,(function(t){var a=t.toggle,n=t.setCollapsibleElement;return r.a.createElement("div",{className:"hero__categories"},r.a.createElement("div",{className:"hero__categories__all",onClick:a},r.a.createElement("i",{className:"fa fa-bars"}),r.a.createElement("span",null,"Danh m\u1ee5c s\u1ea3n ph\u1ea9m")),r.a.createElement("ul",{ref:n},e.showCategory()))}))),r.a.createElement("div",{className:"col-lg-9"},r.a.createElement("div",{className:"hero__search"},r.a.createElement("div",{className:"hero__search__form"},r.a.createElement(v,null)),r.a.createElement("div",{className:"hero__search__phone"},r.a.createElement("div",{className:"hero__search__phone__icon"},r.a.createElement("i",{className:"fa fa-phone"})),r.a.createElement("div",{className:"hero__search__phone__text"},r.a.createElement("h5",null,"0888.38.17.57"),r.a.createElement("span",null,"support 24/7 time")))),r.a.createElement("div",{className:"hero__item set-bg","data-setbg":this.props.data.banner},r.a.createElement("div",{className:"hero__text"},r.a.createElement("span",null,"Tr\xe1i c\xe2y t\u01b0\u01a1i ngon"),r.a.createElement("h2",null,"Th\u1ef1c ph\u1ea9m s\u1ea1ch ",r.a.createElement("br",null),"100% t\u1ef1 nhi\xean"),r.a.createElement("p",null,"Mi\u1ec5n ph\xed v\u1eadn chuy\u1ec3n v\xe0 nh\u1eadn h\xe0ng"),r.a.createElement(p.b,{to:"/Product",className:"primary-btn"},"Mua ngay"))))))))}}]),a}(n.Component),O=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).showCategory=function(){return e.props.data.categoryProduct.map((function(e,t){return r.a.createElement(b.a,{data:e,key:t})}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("section",{className:"hero hero-normal"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(g.a,{collapsed:!0},(function(t){var a=t.toggle,n=t.setCollapsibleElement;return r.a.createElement("div",{className:"hero__categories"},r.a.createElement("div",{className:"hero__categories__all",onClick:a},r.a.createElement("i",{className:"fa fa-bars"}),r.a.createElement("span",null,"Danh m\u1ee5c s\u1ea3n ph\u1ea9m")),r.a.createElement("ul",{ref:n},e.showCategory()))}))),r.a.createElement("div",{className:"col-lg-9"},r.a.createElement("div",{className:"hero__search"},r.a.createElement("div",{className:"hero__search__form"},r.a.createElement(v,null)),r.a.createElement("div",{className:"hero__search__phone"},r.a.createElement("div",{className:"hero__search__phone__icon"},r.a.createElement("i",{className:"fa fa-phone"})),r.a.createElement("div",{className:"hero__search__phone__text"},r.a.createElement("h5",null,"0888.38.17.57"),r.a.createElement("span",null,"support 24/7 time")))))))))}}]),a}(n.Component),j=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).changeHeader=function(){var t=e.props,a=t.location,n=t.defaultData;return"/"===a.pathname?r.a.createElement(_,{data:n}):r.a.createElement(O,{data:n})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.changeHeader())}}]),a}(n.Component),N=Object(f.f)(j),y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"humberger__menu__overlay"}),r.a.createElement("div",{className:"humberger__menu__wrapper"},r.a.createElement("div",{className:"humberger__menu__logo"},r.a.createElement(p.c,{to:"/",activeClassName:"active",exact:!0},r.a.createElement("img",{src:this.props.defaultData.logo,alt:"Logo"}))),r.a.createElement("div",{className:"humberger__menu__widget"}),r.a.createElement("nav",{className:"humberger__menu__nav mobile-menu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.c,{to:"/",activeClassName:"active",exact:!0},"Trang ch\u1ee7")),r.a.createElement("li",null,r.a.createElement(p.c,{to:"/introdution",activeClassName:"active"},"Gi\u1edbi thi\u1ec7u")),r.a.createElement("li",null,r.a.createElement(p.c,{to:"/product",activeClassName:"active"},"S\u1ea3n ph\u1ea9m")),r.a.createElement("li",null,r.a.createElement(p.c,{to:"/news",activeClassName:"active"},"Tin t\u1ee9c")),r.a.createElement("li",null,r.a.createElement(p.c,{to:"/contact",activeClassName:"active"},"Li\xean h\u1ec7")))),r.a.createElement("div",{id:"mobile-menu-wrap"}),r.a.createElement("div",{className:"header__top__right__social"},r.a.createElement("a",{href:"!#"},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{href:"!#"},r.a.createElement("i",{className:"fa fa-google"}))),r.a.createElement("div",{className:"humberger__menu__contact"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",{className:"fa fa-envelope"})," minh.quyen784@gmail.com")))),r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__top"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-md-6"},r.a.createElement("div",{className:"header__top__left"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",{className:"fa fa-envelope"})," minh.quyen784@gmail.com")))),r.a.createElement("div",{className:"col-lg-6 col-md-6"},r.a.createElement("div",{className:"header__top__right"},r.a.createElement("div",{className:"header__top__right__social"},r.a.createElement("a",{href:"!#"},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{href:"!#"},r.a.createElement("i",{className:"fa fa-google"})))))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement("div",{className:"header__logo"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{src:this.props.defaultData.logo,alt:"Logo"})))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("nav",{className:"header__menu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.c,{to:"/",activeClassName:"active",exact:!0},"Trang ch\u1ee7")),r.a.createElement("li",null,r.a.createElement(p.c,{to:"/introdution",activeClassName:"active"},"Gi\u1edbi thi\u1ec7u")),r.a.createElement("li",null,r.a.createElement(p.c,{to:"/product",activeClassName:"active"},"S\u1ea3n ph\u1ea9m")),r.a.createElement("li",null,r.a.createElement(p.c,{to:"/news",activeClassName:"active"},"Tin t\u1ee9c")),r.a.createElement("li",null,r.a.createElement(p.c,{to:"/contact",activeClassName:"active"},"Li\xean h\u1ec7")))))),r.a.createElement("div",{className:"humberger__open"},r.a.createElement("i",{className:"fa fa-bars"})))))}}]),a}(n.Component),w=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer spad"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},r.a.createElement("div",{className:"footer__about"},r.a.createElement("div",{className:"footer__about__logo"},r.a.createElement(p.a,null,r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{src:this.props.defaultData.logo,alt:"Logo"})))),r.a.createElement("ul",null,r.a.createElement("li",null,"Address: Tr\u1ea7n Xu\xe2n So\u1ea1n, Qu\u1eadn 7, TP.HCM"),r.a.createElement("li",null,"Phone: 0888.37.17.57"),r.a.createElement("li",null,"Email: minh.quyen784@gmail.com")))),r.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 offset-lg-1"},r.a.createElement("div",{className:"footer__widget"},r.a.createElement("h6",null,"Th\xf4ng tin th\xeam"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/introduction"},"V\u1ec1 ch\xfang th\xf4i")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/contact"},"Li\xean h\u1ec7"))))),r.a.createElement("div",{className:"col-lg-4 col-md-12"},r.a.createElement("div",{className:"footer__widget"},r.a.createElement("h6",null,"\u0110\u0103ng K\xfd Nh\u1eadn Email"),r.a.createElement("p",null,"\u0110\u0103ng k\xfd \u0111\u1ec3 nh\u1eadn nh\u1eefng th\xf4ng b\xe1o m\u1edbi nh\u1ea5t."),r.a.createElement("form",{action:"#"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Nh\u1eadp email"}),r.a.createElement("button",{type:"submit",className:"site-btn"},"\u0110\u0103ng k\xfd")),r.a.createElement("div",{className:"footer__widget__social"},r.a.createElement("a",{href:"https://facebook.com/tieu.ma.bu.91",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{href:"https://google.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-google"})))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"footer__copyright"},r.a.createElement("div",{className:"footer__copyright__text"},r.a.createElement("p",null,"\xa9 B\u1ea3n quy\u1ec1n thu\u1ed9c v\u1ec1 ",r.a.createElement("b",null,"Quy\u1ec1n Nguy\u1ec5n"))))))))}}]),a}(n.Component),x=a(57),C=a(27),D=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"preloder",className:"loaderpage"},r.a.createElement("div",{className:"loader"}," "))}}]),a}(n.Component),L=function(e){return r.a.lazy((function(){var t,n=(t=e).charAt(0).toUpperCase()+t.substring(1);return Promise.all([a(73)("./"+n),new Promise((function(e){return setTimeout(e,300)}))]).then((function(e){return Object(x.a)(e,1)[0]})).catch((function(e){return Promise.resolve().then(a.bind(null,27))}))}))},S=function(){return r.a.createElement(D,null)},k=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/:controller/:slug-cg:id",exact:!1,component:function(e){var t=e.match.params.controller+"/category",a=L(t);return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(S,null)},r.a.createElement(a,e))}}),r.a.createElement(f.a,{path:"/:controller/:slug-:id",exact:!1,component:function(e){var t=e.match.params.controller+"/detail",a=L(t);return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(S,null)},r.a.createElement(a,e))}}),r.a.createElement(f.a,{path:"/:controller",exact:!1,component:function(e){var t=e.match.params.controller+"/index",a=L(t);return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(S,null)},r.a.createElement(a,e))}}),r.a.createElement(f.a,{exact:!0,path:"/",component:function(e){var t=L("Home");return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(S,null)},r.a.createElement(t,e))}}),r.a.createElement(f.a,{path:"*",component:C.default}))}}]),a}(n.Component),T=a(13),A=a(26),P=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"preloder"},r.a.createElement("div",{className:"loader"}," "))}}]),a}(n.Component),U=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).renderApp=function(){return!1===e.props.fetching&&null!=e.props.data?r.a.createElement("div",null,r.a.createElement(y,{defaultData:e.props.data}),r.a.createElement(N,{defaultData:e.props.data}),r.a.createElement(k,null),r.a.createElement(w,{defaultData:e.props.data})):r.a.createElement(P,null)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPost()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A.default,null),this.renderApp())}}]),a}(n.Component),I=Object(o.b)((function(e){return{fetching:e.payloadDataDefault.fetching,data:e.payloadDataDefault.data,error:e.payloadDataDefault.error}}),(function(e){return{fetchPost:function(){return e(T.b.requestDataDefault())}}}))(U),R=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(r.a.Component),F=Object(f.f)(R);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(4),q=a(2),G={status:!1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.k:return Object(H.a)(Object(H.a)({},e),{},{status:!0});case q.j:return Object(H.a)(Object(H.a)({},e),{},{status:!1});default:return e}},W={fetching:!1,data:null,error:null},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.h:return Object(H.a)(Object(H.a)({},e),{},{fetching:!0,error:null});case q.i:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1,data:t.data});case q.g:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1,data:null,error:t.error});default:return e}},J={fetching:!1,params:null,data:null,error:null},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.e:return Object(H.a)(Object(H.a)({},e),{},{fetching:!0,params:t.params,error:null});case q.f:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1,data:t.data});case q.d:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1,data:null,error:t.error});default:return e}},z={fetching:!1,data:null,error:null},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.m:return Object(H.a)(Object(H.a)({},e),{},{fetching:!0,error:null});case q.n:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1,data:t.data});case q.l:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1,data:null,error:t.error});default:return e}},B={fetching:!1,data:null,error:null},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.b:return Object(H.a)(Object(H.a)({},e),{},{fetching:!0,error:null});case q.c:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1,data:t.data});case q.a:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1,data:null,error:t.error});default:return e}},$={fetching:!1,data:null,params:{},error:null},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.v:return Object(H.a)(Object(H.a)({},e),{},{fetching:!0,error:null,params:t.params});case q.w:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1,data:t.data});case q.u:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1,data:null,error:t.error});default:return e}},Z={fetching:!1,id:null,data:null,error:null},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.y:return Object(H.a)(Object(H.a)({},e),{},{fetching:!0,id:t.id,error:null});case q.z:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1,data:t.data});case q.x:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1,data:null,error:t.error});default:return e}},te={fetching:!1,data:null,params:{},error:null},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.p:return Object(H.a)(Object(H.a)({},e),{},{fetching:!0,error:null,params:t.params});case q.q:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1,data:t.data});case q.o:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1,data:null,error:t.error});default:return e}},ne={fetching:!1,id:null,data:null,error:null},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.s:return Object(H.a)(Object(H.a)({},e),{},{fetching:!0,id:t.id,error:null});case q.t:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1,data:t.data});case q.r:return Object(H.a)(Object(H.a)({},e),{},{fetching:!1,data:null,error:t.error});default:return e}},ce=Object(u.c)({showLoading:Q,payloadDataDefault:M,payloadContact:X,payloadHomeData:V,payloadData:K,payloadProduct:Y,payloadProductDetail:ee,payloadNews:ae,payloadNewsDetail:re}),le=a(58),ue=a(56),oe=a(6),ie=a.n(oe),se=a(3),me=a(16),de=a.n(me);function fe(){return de()({method:"GET",url:"/default"})}var pe=ie.a.mark(Ee),he=ie.a.mark(ve);function Ee(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.h)(q.h,ve);case 2:case"end":return e.stop()}}),pe)}function ve(){var e,t;return ie.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(se.e)(T.c.globalShowLoading());case 3:return a.next=5,Object(se.b)(fe);case 5:return e=a.sent,t=e.data,a.next=9,Object(se.e)(T.b.getDataDefaultSuccess(t));case 9:return a.next=11,Object(se.c)(1e3);case 11:return a.next=13,Object(se.e)(T.c.globalHideLoading());case 13:a.next=23;break;case 15:return a.prev=15,a.t0=a.catch(0),a.next=19,Object(se.e)(T.b.getDataDefaultFailure(a.t0));case 19:return a.next=21,Object(se.c)(1e3);case 21:return a.next=23,Object(se.e)(T.c.globalHideLoading());case 23:case"end":return a.stop()}}),he,null,[[0,15]])}function be(e){return de()({method:"post",url:"contact/",headers:{"Content-Type":"application/json"},data:JSON.stringify(e)})}var ge=ie.a.mark(Oe),_e=ie.a.mark(je);function Oe(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.g)(q.e,je);case 2:case"end":return e.stop()}}),ge)}function je(){var e,t,a;return ie.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(se.e)(T.c.globalShowLoading());case 3:return n.next=5,Object(se.f)((function(e){return e.payloadContact.params}));case 5:return e=n.sent,n.next=8,Object(se.b)(be,e);case 8:return t=n.sent,a=t.data,n.next=12,Object(se.e)(T.a.sendRequestContactSuccess(a));case 12:return n.next=14,Object(se.c)(1e3);case 14:return n.next=16,Object(se.e)(T.c.globalHideLoading());case 16:n.next=26;break;case 18:return n.prev=18,n.t0=n.catch(0),n.next=22,Object(se.e)(T.a.sendRequestContactFailure(n.t0));case 22:return n.next=24,Object(se.c)(1e3);case 24:return n.next=26,Object(se.e)(T.c.globalHideLoading());case 26:case"end":return n.stop()}}),_e,null,[[0,18]])}function Ne(){return de()({method:"GET",url:"home/"})}var ye=ie.a.mark(xe),we=ie.a.mark(Ce);function xe(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.g)(q.m,Ce);case 2:case"end":return e.stop()}}),ye)}function Ce(){var e,t;return ie.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(se.b)(Ne);case 3:return e=a.sent,t=e.data,a.next=7,Object(se.e)(T.d.getHomeDataSuccess(t));case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(0),a.next=13,Object(se.e)(T.d.getHomeDataFailure(a.t0));case 13:case"end":return a.stop()}}),we,null,[[0,9]])}function De(){return de()({method:"GET",url:"/introduction"})}var Le=ie.a.mark(ke),Se=ie.a.mark(Te);function ke(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.g)(q.b,Te);case 2:case"end":return e.stop()}}),Le)}function Te(){var e,t;return ie.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(se.b)(De);case 3:return e=a.sent,t=e.data,a.next=7,Object(se.e)(T.e.getDataSuccess(t));case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(0),a.next=13,Object(se.e)(T.e.getDataFailure(a.t0));case 13:case"end":return a.stop()}}),Se,null,[[0,9]])}var Ae=a(35);function Pe(e){var t=Ae.a.parseJsonArrayToUrl(e),a=""!==t?"/product/?"+t:"/product";return de()({method:"GET",url:a})}var Ue=ie.a.mark(Re),Ie=ie.a.mark(Fe);function Re(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.h)(q.v,Fe);case 2:case"end":return e.stop()}}),Ue)}function Fe(){var e,t,a;return ie.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(se.f)((function(e){return e.payloadProduct.params}));case 3:return e=n.sent,n.next=6,Object(se.b)(Pe,e);case 6:return t=n.sent,a=t.data,n.next=10,Object(se.e)(T.h.getProductDataSuccess(a));case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(0),n.next=16,Object(se.e)(T.h.getProductDataFailure(n.t0));case 16:case"end":return n.stop()}}),Ie,null,[[0,12]])}function He(e){return de()({method:"GET",url:"/product-detail/"+e})}var qe=ie.a.mark(Qe),Ge=ie.a.mark(We);function Qe(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.h)(q.y,We);case 2:case"end":return e.stop()}}),qe)}function We(){var e,t,a;return ie.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(se.f)((function(e){return e.payloadProductDetail.id}));case 3:return e=n.sent,n.next=6,Object(se.b)(He,e);case 6:return t=n.sent,a=t.data,n.next=10,Object(se.e)(T.i.getProductDetailDataSuccess(a));case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(0),n.next=16,Object(se.e)(T.i.getProductDetailDataFailure(n.t0));case 16:case"end":return n.stop()}}),Ge,null,[[0,12]])}function Me(e){var t=Ae.a.parseJsonArrayToUrl(e),a=""!==t?"/news/?"+t:"/news";return de()({method:"GET",url:a})}var Je=ie.a.mark(ze),Xe=ie.a.mark(Ve);function ze(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.h)(q.p,Ve);case 2:case"end":return e.stop()}}),Je)}function Ve(){var e,t,a;return ie.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(se.f)((function(e){return e.payloadNews.params}));case 3:return e=n.sent,n.next=6,Object(se.b)(Me,e);case 6:return t=n.sent,a=t.data,n.next=10,Object(se.e)(T.f.getNewsDataSuccess(a));case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(0),n.next=16,Object(se.e)(T.f.getNewsDataFailure(n.t0));case 16:case"end":return n.stop()}}),Xe,null,[[0,12]])}function Be(e){return de()({method:"GET",url:"/news-detail/"+e})}var Ke=ie.a.mark(Ye),$e=ie.a.mark(Ze);function Ye(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.h)(q.s,Ze);case 2:case"end":return e.stop()}}),Ke)}function Ze(){var e,t,a;return ie.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(se.f)((function(e){return e.payloadNewsDetail.id}));case 3:return e=n.sent,n.next=6,Object(se.b)(Be,e);case 6:return t=n.sent,a=t.data,n.next=10,Object(se.e)(T.g.getNewsDetailDataSuccess(a));case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(0),n.next=16,Object(se.e)(T.g.getNewsDetailDataFailure(n.t0));case 16:case"end":return n.stop()}}),$e,null,[[0,12]])}var et=ie.a.mark(tt);function tt(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.a)([Object(se.d)(Ee),Object(se.d)(Oe),Object(se.d)(xe),Object(se.d)(ke),Object(se.d)(Re),Object(se.d)(Qe),Object(se.d)(ze),Object(se.d)(Ye)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),et)}var at=Object(le.a)(),nt=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),rt=Object(u.e)(ce,Object(u.d)(Object(u.a)(at,Object(ue.createLogger)()),nt));at.run(tt);var ct=r.a.createElement(o.a,{store:rt},r.a.createElement(p.a,null,r.a.createElement(F,null,r.a.createElement(I,null))));l.a.render(ct,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,12,13]]]);
//# sourceMappingURL=main.9ae37937.chunk.js.map