"use strict";(self.webpackChunknew_react_lending=self.webpackChunknew_react_lending||[]).push([[179],{1278:(e,t,r)=>{r.d(t,{e_:()=>b,Pn:()=>g,u_:()=>E,m4:()=>F,$j:()=>Z,iA:()=>p});var n=r(885),o=r(7294),i=r(6974),a=r(461),c=r(3102),l=r(6501),s=r(7052);var d=r(2734),u=new Map;u.set("date",(function(e){return new Date(e).toLocaleDateString("ru")})).set("dateTime",(function(e){return"".concat(new Date(e).toLocaleDateString("ru"),"  -  ").concat(new Date(e).toLocaleTimeString("ru"))})).set("currency",(function(e){var t;return null===(t=s.Px.get("currencies"))||void 0===t?void 0:t.find((function(t){return t.id===e})).name})).set("paymentSettingType",(function(e){var t;return null===(t=s.Px.get("paymentSettingTypes"))||void 0===t?void 0:t.find((function(t){return t.key===e})).displayName})).set("issueRate",(function(e){var t;return(null===(t=Number(e))||void 0===t?void 0:t.toFixed(2))||"---"})).set("isTrue",(function(e){return e?"Да":"Нет"})).set("content",(function(e){return o.createElement("div",{style:{width:"max-content"}},e)})).set(void 0,(function(e){return e}));const p=function(e){var t=e.headCells,r=e.rows,p=e.changeStyle,y=e.isActive,m=(e.selected,e.handleSelectAllTableRows,e.handleSelectTableRow,e.isRowNotClickable,e.children),f=(0,d.Z)(),g=((0,i.s0)(),(0,o.useState)("asc")),v=(0,n.Z)(g,2),h=(v[0],v[1],(0,o.useState)(t[0].id)),b=(0,n.Z)(h,2),O=(b[0],b[1],(0,o.useState)(t[0].type)),_=(0,n.Z)(O,2),k=(_[0],_[1],(0,o.useState)(0)),S=(0,n.Z)(k,2),P=S[0],E=(S[1],(0,o.useState)(25)),w=(0,n.Z)(E,2),x=w[0],D=(w[1],(0,o.useState)({id:null,open:!1})),j=(0,n.Z)(D,2),T=(j[0],j[1],(0,o.useState)("")),N=(0,n.Z)(T,2),Z=(N[0],N[1],function(e,t){var r,n=null===(r=s.Px.get(t))||void 0===r?void 0:r.find((function(t){return t.key===e})),i=f.chip.error;switch(null==n?void 0:n.value){case"AwaitFinCoreCancel":case"Waiting":case"AwaitForMoneySend":i=f.chip.warning;break;case"Approved":case"Signed":i=f.chip.success;break;default:i=f.chip.error}return o.createElement(a.Z,{label:"".concat((null==n?void 0:n.displayName)||""),sx:i})});return P>0&&Math.max(0,(1+P)*x-r.length),u.set("contractActionStatuses",(function(e){return Z(e,"contractActionStatuses")})).set("paymentOrderStatuses",(function(e){return Z(e,"paymentOrderStatuses")})).set("status",(function(e){return Z(e,"statuses")})).set("isActive",(function(e){var t="";return(+e>0&&y||+e<0&&!y)&&(t="red"),o.createElement("div",{style:{color:t}},e)})),o.createElement(c.Z,{sx:{width:"100%"}},o.createElement(l.Z,{sx:{width:"100%",mb:2,background:p?"#e3f2fd":""}},m,o.createElement(F,null)))};var y=r(9041),m=(0,r(9602).ZP)("div")({position:"fixed",top:0,left:0,zIndex:1301,width:"100%"});const f=function(){return o.createElement(m,null,o.createElement(y.Z,{color:"primary"}))};const g=function(e){return function(t){return o.createElement(o.Suspense,{fallback:o.createElement(f,null)},o.createElement(e,t))}};var v=r(7480),h=r(7720);const b=function(e){var t=e.children,r=t&&t.length?t.length-1:0;return o.createElement(c.Z,{sx:{display:"flex",alignItems:"center",width:"fit-content",border:function(e){return"1px solid ".concat(e.palette.divider)},borderRadius:1,bgcolor:"background.paper",color:"text.secondary",height:"100%",p:1.5,"& hr":{mx:1.5}}},0===r?t:t.map((function(e,t){return o.createElement(o.Fragment,{key:(0,v.x0)(8)},e,r!==t&&o.createElement(h.Z,{orientation:"vertical",variant:"large",flexItem:!0}))})))};var O=r(9151),_=r(8083),k=r(1186);r(1695).Z,O.Z,_.Z,k.Z;r(8942),r(4907);var S=r(1593),P=r.n(S);const E=function(e){var t=e.isOpenModal,r=e.closeModal,n=e.children,i=e.title,a=void 0===i?"Окно можно переносить":i,c=e.width,l=void 0===c?800:c,s=e.height,d=void 0===s?600:s;return o.createElement("div",{className:"modal"},o.createElement(P(),{initWidth:l,initHeight:d,onRequestClose:r,isOpen:t},o.createElement("h3",null,a),o.createElement("br",null),n))};var w=r(7462),x=r(4942),D=r(6489),j=r(2346);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,x.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const Z=function(e){var t=e.newsx;return o.createElement(c.Z,{sx:N({position:"relative"},t)},o.createElement(D.Z,(0,w.Z)({variant:"determinate",sx:{color:function(e){return e.palette.grey["light"===e.palette.mode?100:800]}},size:25,thickness:5},e,{value:100})),o.createElement(D.Z,(0,w.Z)({variant:"indeterminate",disableShrink:!0,sx:(0,x.Z)({color:function(e){return"light"===e.palette.mode?"#1a90ff":"#308fe8"},animationDuration:"550ms",position:"absolute",left:0},"& .".concat(j.Z.circle),{strokeLinecap:"round"}),size:25,thickness:5},e)))};var C=r(3127);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,x.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e){return e.value<0?"super-app negative":"super-app positive"}var A=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),z={type:"number",minWidth:200,cellClassName:L,valueFormatter:function(e){var t=e.value;return A.format(t)}},R=[{field:"id",headerName:"Stock",width:200,hideable:!1},I({field:"price",headerName:"Price"},z),I({field:"stock_of_capital",headerName:"Stock of capital"},z),{field:"number_of_persons_employed",headerName:"Number of persons employed",type:"number",minWidth:250,cellClassName:L},I({field:"total_money_supply",headerName:"Total money supply"},z),{field:"interest_on_capital",headerName:"Interest on capital",type:"number",minWidth:200,cellClassName:L,valueFormatter:function(e){if(!e.value)return"0 %";var t=Number(e.value).toLocaleString();return"".concat(t," %")}},I({field:"market_cap",headerName:"Market Cap"},z)],B=[{id:"Microsoft",price:15421.25,stock_of_capital:5040,number_of_persons_employed:526e3,total_money_supply:15555555555,interest_on_capital:85.36,market_cap:114000415},{id:"Survey Monkey",price:45655.251,stock_of_capital:84892,number_of_persons_employed:8251,total_money_supply:4825,interest_on_capital:14,market_cap:145256.856},{id:"Twitter",price:15414,stock_of_capital:-5e4,number_of_persons_employed:25456,total_money_supply:14525.63,interest_on_capital:16.526,market_cap:147.585},{id:"Adobe Systems",price:52562,stock_of_capital:14525.45,number_of_persons_employed:48551,total_money_supply:14526,interest_on_capital:14,market_cap:74885.9569595},{id:"Baidu",price:475555,stock_of_capital:-5262.25,number_of_persons_employed:14525,total_money_supply:14526.54,interest_on_capital:74,market_cap:26365.45},{id:"Hewlett-Packard",price:478556,stock_of_capital:488552.525,number_of_persons_employed:41250,total_money_supply:1425,interest_on_capital:39,market_cap:4858.58},{id:"Apple",price:14.52,stock_of_capital:74450,number_of_persons_employed:3e4,total_money_supply:4524e3,interest_on_capital:40,market_cap:4455522222},{id:"Oracle",price:30525.66,stock_of_capital:485520,number_of_persons_employed:48520,total_money_supply:14525.62,interest_on_capital:6.125,market_cap:47555},{id:"Lenovo Group",price:12356,stock_of_capital:50,number_of_persons_employed:147,total_money_supply:25623,interest_on_capital:78,market_cap:1455266},{id:"IBM",price:96552,stock_of_capital:4500,number_of_persons_employed:456200,total_money_supply:1262,interest_on_capital:45.25,market_cap:48751},{id:"Slack Tehnologies",price:34543,stock_of_capital:670,number_of_persons_employed:3760,total_money_supply:4e3,interest_on_capital:12.26,market_cap:114e3},{id:"Amazon.com",price:787567,stock_of_capital:576,number_of_persons_employed:3050,total_money_supply:467,interest_on_capital:6,market_cap:6888},{id:"Cisco Systems",price:4546,stock_of_capital:546,number_of_persons_employed:456,total_money_supply:3356,interest_on_capital:65,market_cap:67846},{id:"VINCI SA",price:222,stock_of_capital:5e4,number_of_persons_employed:3e4,total_money_supply:4e3,interest_on_capital:14,market_cap:114e3},{id:"Google",price:123,stock_of_capital:23140,number_of_persons_employed:3240,total_money_supply:43434,interest_on_capital:23,market_cap:345435},{id:"Facebook",price:200,stock_of_capital:540,number_of_persons_employed:4500,total_money_supply:4560,interest_on_capital:20,market_cap:1222}];function F(){return o.createElement(c.Z,{sx:{height:642,width:"100%","& .super-app-theme--cell":{backgroundColor:"#fff",display:"flex",justifyContent:"left"},"& .super-app.negative":{backgroundColor:"#d47483",display:"flex",justifyContent:"left"},"& .super-app.positive":{backgroundColor:"transparent",display:"flex",justifyContent:"left"}}},o.createElement(C._,{rows:B,columns:R,pageSize:10,rowsPerPageOptions:[10]}))}},2042:(e,t,r)=>{r.d(t,{Zn:()=>f,qA:()=>_,Ks:()=>h});var n=r(7294),o=r(1278);r(1964),r(5518);var i=r(885),a=r(4942),c=r(9704),l=r(6974),s=r(3102),d=r(7052),u=r(9602),p=r(2734);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var m=(0,u.ZP)("main",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme;e.open;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t.typography.mainContent)}));const f=function(){var e=(0,p.Z)(),t=(0,c.I0)(),r=(0,n.useState)(!1),o=(0,i.Z)(r,2),a=(o[0],o[1]);return(0,n.useEffect)((function(){t((0,d.rM)()).then((function(){return a(!0)}))}),[]),n.createElement(s.Z,{sx:{display:"flex"}},n.createElement(m,{theme:e},n.createElement(s.Z,{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gap:5,sx:{mt:0}},n.createElement(l.j3,null))))};r(7757);(0,u.ZP)("div")((function(e){return{cursor:"pointer",padding:16,"&:hover":{background:e.theme.palette.primary.light},"& .MuiListItem-root":{padding:0}}}));r(8942);r(4311),r(3207);r(2961);var g=r(4232);var v=r(3991);v.SrG,v.uFQ;v.Ol,v.jv4,v.uMM,v.wFl,v.Z7c,v.RtM,v.dAp;const h=function(e){var t=e.children,r=(0,l.TH)().pathname;return(0,n.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[r]),t||null};var b=r(6914),O=r(594);const _=function(e){var t=e.commonStates,r=e.commonHandlers,i=e.reloadPage,a=void 0===i?null:i,c=e.contractPaymentSchedule,l=void 0===c?null:c,d=e.title,u=void 0===d?"График выплат":d;return(0,n.useEffect)((function(){!0===t.isOpenPaymentSchedule&&(null==a||a())}),[t.isOpenPaymentSchedule]),n.createElement(o.u_,{isOpenModal:t.isOpenPaymentSchedule,closeModal:r.handleIsOpenPaymentSchedule,title:u,width:1e3,height:800},n.createElement(s.Z,{gridColumn:"span 12"},n.createElement("div",{style:{display:"flex",justifyContent:"right",paddingTop:"10px"}},n.createElement(b.Z,{variant:"contained",startIcon:n.createElement(O.Z,null),sx:{maxHeight:"35px"},onClick:r.handleIsOpenPaymentSchedule},"Закрыть")),n.createElement(o.iA,{headCells:g.T0,rows:l||t.contractPaymentSchedule})))}},4907:(e,t,r)=>{r.d(t,{I9:()=>s,Ce:()=>c,hA:()=>l});var n=r(4942),o=r(7052);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return e?null==e?void 0:e.map((function(e){var t,r,n,i;return a(a({},e),{},{paymentSettingText:(null===(t=o.Px.get("paymentSettingTypes"))||void 0===t||null===(r=t.find((function(t){return t.key===e.paymentSettingId})))||void 0===r?void 0:r.displayName)||"",statusText:(null===(n=o.Px.get("depositScheduleStatuses"))||void 0===n||null===(i=n.find((function(t){return t.key===e.status})))||void 0===i?void 0:i.displayName)||""})})):e}function l(e,t){return e&&(null==e?void 0:e.length)>0?e.map((function(e){var r,n,i,c,l,s;return a(a({},e),{},{emitent:(null==t||null===(r=t.list)||void 0===r||null===(n=r.find((function(t){return t.id===e.clientId})))||void 0===n?void 0:n.fullName)||"---",currencyText:(null===(i=o.Px.get("currencies"))||void 0===i||null===(c=i.find((function(t){return t.id===e.currencyId})))||void 0===c?void 0:c.name)||"---",paymentSettingText:(null===(l=o.Px.get("emissionPeriod"))||void 0===l||null===(s=l.find((function(t){return t.key===e.period})))||void 0===s?void 0:s.displayName)||"---"})})):e}function s(e){return e&&(null==e?void 0:e.length)>0?e.map((function(e){var t,r,n;return{id:e.id,contractDate:e.contractDate,contractNumber:e.contractNumber,identityNumber:(null===(t=e.client)||void 0===t?void 0:t.identityNumber)||"---",fullName:(null===(r=e.client)||void 0===r?void 0:r.fullName)||"---",fio:(null===(n=e.client)||void 0===n?void 0:n.fio)||"---",clientId:e.clientId,status:e.status}})):e}},4232:(e,t,r)=>{r.d(t,{RS:()=>d,zH:()=>c,c1:()=>a,Jk:()=>l,zs:()=>s,LB:()=>i,T0:()=>o,X6:()=>n});var n=[{id:"contractDate",type:"date",label:"Дата выпуска"},{id:"isin",label:"ISIN"},{id:"emitent",type:"content",label:"Эмитент"},{id:"nominalCost",label:"Номинальная стоимость"},{id:"currencyText",label:"Валюта"},{id:"paymentSettingText",label:"Периодичность выплаты"},{id:"quantity",label:"Общее кол.облигаций"},{id:"actualQuantity",label:"Кол.размещенных облигаций"},{id:"selledQuantity",label:"Остаток не размещенных облигаций"},{id:"maturityDate",type:"date",label:"Дата погашения"},{id:"status",type:"status",label:"Статус"}],o=[{id:"date",type:"date",label:"Дата платежа"},{id:"paymentSettingText",label:"Действие"},{id:"amount",label:"Сумма"},{id:"statusText",label:"Статус"}],i=[{id:1,displayName:1},{id:2,displayName:2},{id:3,displayName:3},{id:4,displayName:4},{id:5,displayName:5},{id:6,displayName:6},{id:7,displayName:7},{id:8,displayName:8},{id:9,displayName:9},{id:10,displayName:10},{id:11,displayName:11},{id:12,displayName:12},{id:13,displayName:13},{id:14,displayName:14},{id:15,displayName:15},{id:16,displayName:16},{id:17,displayName:17},{id:18,displayName:18},{id:19,displayName:19},{id:20,displayName:20},{id:21,displayName:21},{id:22,displayName:22},{id:23,displayName:23},{id:24,displayName:24},{id:25,displayName:25},{id:26,displayName:26},{id:27,displayName:27},{id:28,displayName:28},{id:29,displayName:29},{id:30,displayName:30}],a=[{id:"true",name:"Да"},{id:"false",name:"Нет"}],c=[{id:"true",name:"Мужской"},{id:"false",name:"Женский"}],l=[{id:"iban",name:"Расчетный счет (IBAN)"},{id:"cashe",name:"Наличными"}],s=[{id:"mobile",name:"Мобильный телефон"},{id:"home",name:"Домашний телефон"},{id:"work",name:"Рабочий телефон"}],d=[{id:"kaspi",name:'AO "Kaspi Bank" (CASPKZKA)'}]},3391:(e,t,r)=>{r.d(t,{d8:()=>a});var n=r(8942),o=r(8721),i=r(7708),a=function(){return function(e){e((0,o.tZ)()),n.Z.post("/api/Agency/list",{}).then((function(t){return e((0,o.P7)(t))}),(function(t){return(0,i.Z)(e,t,"Не удалось загрузить список агентских договоров")}))}}},2961:(e,t,r)=>{r.d(t,{N:()=>l,sf:()=>s,Tm:()=>d});var n=r(8942),o=r(4311),i=r(8721),a=r(3835),c=(r(4907),r(7708)),l=function(){return function(e){e((0,i.tZ)()),e((0,a.q)({type:"info",message:"Подождите, данные подгружаются"})),n.Z.post("/api/BondEmission/list",{}).then((function(t){return e((0,i.bK)(t))}),(function(t){return(0,c.Z)(e,t,"Не удалось загрузить список выпусков облигаций")}))}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(t){if(e)return n.Z.post("/api/BondEmission/card",e).then((function(e){return e}),(function(e){throw(0,c.Z)(t,e,"Эмиссия облигаций не отображается"),new Error}));t((0,o.Xe)())}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return n.Z.post("/api/BondEmissionAction/sign",e).then((function(e){return t((0,a.q)({type:"success",message:"Эмиссия бондов подписана"}))}),(function(e){throw(0,c.Z)(t,e,"Эмиссия бондов не подписана"),new Error}))}}},6702:(e,t,r)=>{r.d(t,{cr:()=>a});var n=r(8942),o=r(8721),i=r(7708);var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){t((0,o.tZ)()),n.Z.post("/api/Client/list",e).then((function(e){return t((0,o.vy)(e))}),(function(e){return(0,i.Z)(t,e,"Ошибка при загрузке списка клиентов")}))}}},3207:(e,t,r)=>{r(7757),r(8942)},7052:(e,t,r)=>{r.d(t,{rM:()=>u,Px:()=>s});var n=r(3935),o=r(8942),i=r(6702),a=r(7708),c=r(3391),l=r(4232),s=new Map;function d(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=t.slice(t.lastIndexOf("/")+1);return s.has(i)?s.get(i):o.Z.post(t,n).then((function(e){var t=Array.isArray(e)?e:e.list||[];s.set(i,t)}),(function(t){return(0,a.Z)(e,t,r)}))}s.set("gender",l.zH).set("payDayList",l.LB).set("translationBank",l.RS).set("capitalization",l.c1).set("translationTypeOfProps",l.Jk).set("translationOfContactTypes",l.zs);var u=function(){return function(e){return Promise.all([(0,n.unstable_batchedUpdates)((function(){e((0,i.cr)()),e((0,c.d8)()),d(e,"/api/client/list","Ошибка при загрузке списка банков",{model:{isBank:!0}}),d(e,"/api/Dictionary/paymentOrderStatuses","Ошибка при загрузке статуса ордеров"),d(e,"/api/Dictionary/paymentOrderTypes","Ошибка при загрузке списка типа ордеров"),d(e,"/api/Dictionary/clientRequisitTypes","Ошибка при загрузке списка реквизитов"),d(e,"/api/Dictionary/contractTypeCodes","Ошибка при загрузке списка типов бондов"),d(e,"/api/Dictionary/contractActionStatuses","Ошибка при загрузке статусов журнала действий"),d(e,"/api/Dictionary/payTypes","Ошибка при загрузке списка видов платежей"),d(e,"/api/Dictionary/emissionPeriod","Ошибка при загрузке списка периодичности выплат"),d(e,"/api/Dictionary/eventCodes","Ошибка при загрузке списка кодов журнала событии"),d(e,"/api/Dictionary/eventStatuses","Ошибка при загрузке списка статусов журнала событии"),d(e,"/api/Dictionary/interestOperations","Ошибка при загрузке списка управление процентами"),d(e,"/api/Dictionary/businessOperationSettings","Ошибка при загрузке списка бизнес операций"),d(e,"/api/Dictionary/contractSettingRates","Ошибка при загрузке процентов контракта"),d(e,"/api/Dictionary/accountPlans","Ошибка при загрузке планов счета"),d(e,"/api/Dictionary/accountSettings","Ошибка при загрузке номеров счета"),d(e,"/api/Dictionary/currencies","Ошибка при загрузке справочника валют"),d(e,"/api/Dictionary/statuses","Ошибка при загрузке справочника статусов"),d(e,"/api/Dictionary/depositScheduleStatuses","Ошибка при загрузке справочника статусов"),d(e,"/api/Dictionary/branches","Ошибка при загрузке справочника филиалов"),d(e,"/api/Dictionary/clientLegalForms","Ошибка при загрузке правовых форм"),d(e,"/api/Dictionary/contractPeriodTypes","Ошибка при загрузке справочника процентных периодов"),d(e,"/api/Dictionary/contractClassTypes","Ошибка при загрузке справочника типов контракта"),d(e,"/api/Dictionary/daysInMonth","Ошибка при загрузке справочника количестао дней в месяце"),d(e,"/api/Dictionary/accountSettingsForRateSettings","Ошибка при загрузке "),d(e,"/api/Dictionary/paymentSettingTypes","Ошибка при загрузке справочника видов оплаты")}))])}}},7708:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(1002),o=r(3835);const i=function(e,t,r){return void 0===t.json&&e((0,o.q)({type:"error",message:"Проблемы с сервером ! ".concat(r)})),t.json().then((function(t){if("object"===(0,n.Z)(t.errors))for(var i in t.errors)e((0,o.q)({type:"error",message:t.errors[i]}));else"string"==typeof t.errors?e((0,o.q)({type:"error",message:t.errors})):e((0,o.q)({type:"error",message:r}))})).catch((function(){return e((0,o.q)({type:"error",message:r}))}))}},3835:(e,t,r)=>{r.d(t,{q:()=>o});var n=r(6075),o=function(e){return{type:n.F,payload:e}}},6075:(e,t,r)=>{r.d(t,{F:()=>n,w:()=>o});var n="ADD_ALERT_TO_LIST",o="REMOVE_FIRST_ALERT_FROM_LIST"},4311:(e,t,r)=>{r.d(t,{Xe:()=>o});var n=r(3677),o=(r(4907),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{type:n.Jx,payload:e}})},3677:(e,t,r)=>{r.d(t,{zK:()=>n,p:()=>o,UB:()=>i,Ek:()=>a,Jx:()=>c,F:()=>l});var n="CONSTRUCTOR_PENDING",o="CREATE_DEPOSIT_CONTRACT",i="SIGN_DEPOSIT_CONTRACT",a="CREATE_BOND_AGREEMENT",c="CREATE_BOND_ISSUE",l="SIGN_BOND_ISSUE"},8721:(e,t,r)=>{r.d(t,{tZ:()=>o,vy:()=>i,bK:()=>a,P7:()=>c});var n=r(7994),o=function(){return{type:n.tw,payload:!0}},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:n.JX,payload:e}},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:n.ke,payload:e}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:n.AU,payload:e}}},7994:(e,t,r)=>{r.d(t,{tw:()=>n,JX:()=>o,aP:()=>i,ke:()=>a,ch:()=>c,AU:()=>l,rq:()=>s});var n="LIST_PENDING",o="GET_CLIENT_LIST_SUCCESS",i="GET_DEPOSIT_AGREEMENT_SUCCESS",a="GET_BOND_ISSUE_LIST",c="GET_BOND_AGREEMENT_LIST",l="GET_AGENCY_AGREEMENT_LIST",s="GET_ORDER_LIST"},8942:(e,t,r)=>{r.d(t,{Z:()=>a});const n={apiUrl:"http://192.168.11.76:5000"};var o=r.n(n),i=function(e){return function(t,r){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=(localStorage.getItem("user"),"".concat(o().apiUrl).concat(t)),a={headers:{"Content-Type":"application/json; charset=utf-8",accept:"*/*","Access-Control-Allow-Origin":"no-cors","Cache-Control":"max-age=31536000"},method:e};return/GET|DELETE/.test(e)&&r&&(a.body=r),/PATCH|POST|PUT/.test(e)&&(a.body=JSON.stringify(r)),fetch(i,a).then((function(e){return 401===e.status&&(localStorage.removeItem("user"),window.location.href="".concat(window.location.origin,"/login")),e.ok?n?e.json():e:Promise.reject(e)}))}};const a={get:i("GET"),patch:i("PATCH"),post:i("POST"),put:i("PUT"),delete:i("DELETE")}},9500:(e,t,r)=>{var n=r(7294),o=r(3935),i=r(9711),a=r(9704),c=r(8603),l=r(9244),s=r(3828),d=r(3894),u=r(6734),p=r(4942);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={isOpen:["clients"],opened:!0},g=new Map;g.set("MENU_OPEN","isOpen").set("SET_MENU","opened");const v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;if(g.has(t.type)){var r=g.get(t.type);return m(m({},e),{},(0,p.Z)({},r,t.payload))}return e};var h=r(7994),b=r(4907);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k={pending:!1,clientList:{},depositAgreementList:{},bondIssueList:{},bondAgreementList:{},agencyAgreementList:{},orderList:{}},S=new Map;S.set(h.tw,"pending").set(h.JX,"clientList").set(h.aP,"depositAgreementList").set(h.ch,"bondAgreementList").set(h.ke,"bondIssueList").set(h.rq,"orderList").set(h.AU,"agencyAgreementList");const P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;if(S.has(t.type)){var r=S.get(t.type);return"agencyAgreementList"===r&&(t.payload=_(_({},t.payload),{},{list:(0,b.I9)(t.payload.list)})),_(_({},e),{},(0,p.Z)({pending:!1},r,t.payload))}return e};var E=r(2982),w=r(6075);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=[],T=new Map;const N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;return T.set(w.F,[].concat((0,E.Z)(e),[D({show:!0},t.payload)])).set(w.w,(0,E.Z)(e.slice(1))),T.has(t.type)?T.get(t.type):e};var Z=r(3677);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I={pending:!1,depositContract:null,signedDepositContract:null,bondAgreement:null,bondIssue:null,signedBondIssue:null},L=new Map;L.set(Z.zK,"pending").set(Z.p,"depositContract").set(Z.Ek,"bondAgreement").set(Z.Jx,"bondIssue").set(Z.UB,"signedDepositContract").set(Z.F,"signedBondIssue");const A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;if(L.has(t.type)){var r=L.get(t.type);return M(M({},e),{},(0,p.Z)({pending:!1},r,t.payload))}return e};const z=(0,s.UY)({customization:v,constructors:A,lists:P,alerts:N});var R={key:"root",storage:u.Z},B=(0,l.OJ)(R,z),F=(0,s.MT)(B,(0,s.md)(d.Z)),W=r(5974),G=r(4810),U=r(6720),H=r(6974),q=r(2042),J=(0,r(1278).Pn)((0,n.lazy)((function(){return Promise.all([r.e(816),r.e(553)]).then(r.bind(r,6553))})));const K=function(){return n.createElement(H.Z5,null,n.createElement(H.AW,{path:"/",element:n.createElement(q.Zn,null)},n.createElement(H.AW,{index:!0,element:n.createElement(J,null)})))};var X=r(4345);const Q={paper:"#fff",primaryLight:"#e3f2fd",primary200:"#90caf9",primaryMain:"#2196f3",primaryDark:"#1e88e5",primary800:"#1565c0",secondaryLight:"#e3f2fd",secondary200:"#b39ddb",secondaryMain:"#673ab7",secondaryDark:"#1565c0",secondary800:"#4527a0",successLight:"#b9f6ca",success200:"#69f0ae",successMain:"#00e676",successDark:"#00c853",errorLight:"#ef9a9a",errorMain:"#f44336",errorDark:"#c62828",orangeLight:"#fbe9e7",orangeMain:"#ffab91",orangeDark:"#d84315",warningLight:"#fff8e1",warningMain:"#ffe57f",warningDark:"#ffc107",grey50:"#fafafa",grey100:"#f5f5f5",grey200:"#eee",grey300:"#e0e0e0",grey500:"#9e9e9e",grey600:"#757575",grey700:"#616161",grey900:"#212121",darkPaper:"#111936",darkBackground:"#1a223f",darkLevel1:"#29314f",darkLevel2:"#212946",darkTextTitle:"#d7dcec",darkTextPrimary:"#bdc8f0",darkTextSecondary:"#8492c4",darkPrimaryLight:"#e3f2fd",darkPrimaryMain:"#2196f3",darkPrimaryDark:"#1e88e5",darkPrimary200:"#90caf9",darkPrimary800:"#1565c0",darkSecondaryLight:"#d1c4e9",darkSecondaryMain:"#7c4dff",darkSecondaryDark:"#651fff",darkSecondary200:"#b39ddb",darkSecondary800:"#6200ea"};function V(e){var t,r;return{fontFamily:null==e||null===(t=e.customization)||void 0===t?void 0:t.fontFamily,h6:{fontWeight:500,color:e.heading,fontSize:"0.75rem"},h5:{fontSize:"0.875rem",color:e.heading,fontWeight:500},h4:{fontSize:"1rem",color:e.heading,fontWeight:600},h3:{fontSize:"1.25rem",color:e.heading,fontWeight:600},h2:{fontSize:"1.5rem",color:e.heading,fontWeight:700},h1:{fontSize:"2.125rem",color:e.heading,fontWeight:700},subtitle1:{fontSize:"0.875rem",fontWeight:500,color:e.textDark},subtitle2:{fontSize:"0.75rem",fontWeight:400,color:e.darkTextSecondary},caption:{fontSize:"0.75rem",color:e.darkTextSecondary,fontWeight:400},body1:{fontSize:"0.875rem",fontWeight:400,lineHeight:"1.334em"},body2:{letterSpacing:"0em",fontWeight:400,lineHeight:"1.5em",color:e.darkTextPrimary},button:{textTransform:"capitalize"},customInput:{marginTop:1,marginBottom:1,"& > label":{top:23,left:0,color:e.grey500,'&[data-shrink="false"]':{top:5}},"& > div > input":{padding:"30.5px 14px 11.5px !important"},"& legend":{display:"none"},"& fieldset":{top:0}},mainContent:{backgroundColor:e.background,width:"100%",minHeight:"calc(100vh - 66px)",flexGrow:1,padding:"20px",marginTop:"0px",marginRight:"10px",borderRadius:"".concat(null==e||null===(r=e.customization)||void 0===r?void 0:r.borderRadius,"px")},menuCaption:{fontSize:"0.875rem",fontWeight:500,color:e.heading,padding:"6px",textTransform:"capitalize",marginTop:"10px"},subMenuCaption:{fontSize:"0.6875rem",fontWeight:500,color:e.darkTextSecondary,textTransform:"capitalize"},commonAvatar:{cursor:"pointer",borderRadius:"8px"},smallAvatar:{width:"22px",height:"22px",fontSize:"1rem"},mediumAvatar:{width:"34px",height:"34px",fontSize:"1.2rem"},largeAvatar:{width:"44px",height:"44px",fontSize:"1.5rem"}}}function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const ee=function(e){var t={colors:Q,heading:Q.grey900,paper:Q.paper,backgroundDefault:Q.paper,background:Q.primaryLight,darkTextPrimary:Q.grey700,darkTextSecondary:Q.grey500,textDark:Q.grey900,menuSelected:Q.secondaryDark,menuSelectedBack:Q.secondaryLight,divider:Q.grey200,customization:e},r=function(e){var t,r,n,o,i,a,c,l,s,d,u,p,y,m,f,g,v,h,b,O,_,k,S,P,E,w,x,D,j,T,N,Z,C;return{mode:null==e||null===(t=e.customization)||void 0===t?void 0:t.navType,common:{black:null===(r=e.colors)||void 0===r?void 0:r.darkPaper},primary:{light:null===(n=e.colors)||void 0===n?void 0:n.primaryLight,main:null===(o=e.colors)||void 0===o?void 0:o.primaryMain,dark:null===(i=e.colors)||void 0===i?void 0:i.primaryDark,200:null===(a=e.colors)||void 0===a?void 0:a.primary200,800:null===(c=e.colors)||void 0===c?void 0:c.primary800},secondary:{light:null===(l=e.colors)||void 0===l?void 0:l.secondaryLight,main:null===(s=e.colors)||void 0===s?void 0:s.secondaryMain,dark:null===(d=e.colors)||void 0===d?void 0:d.secondaryDark,200:null===(u=e.colors)||void 0===u?void 0:u.secondary200,800:null===(p=e.colors)||void 0===p?void 0:p.secondary800},error:{light:null===(y=e.colors)||void 0===y?void 0:y.errorLight,main:null===(m=e.colors)||void 0===m?void 0:m.errorMain,dark:null===(f=e.colors)||void 0===f?void 0:f.errorDark},orange:{light:null===(g=e.colors)||void 0===g?void 0:g.orangeLight,main:null===(v=e.colors)||void 0===v?void 0:v.orangeMain,dark:null===(h=e.colors)||void 0===h?void 0:h.orangeDark},warning:{light:null===(b=e.colors)||void 0===b?void 0:b.warningLight,main:null===(O=e.colors)||void 0===O?void 0:O.warningMain,dark:null===(_=e.colors)||void 0===_?void 0:_.warningDark},success:{light:null===(k=e.colors)||void 0===k?void 0:k.successLight,200:null===(S=e.colors)||void 0===S?void 0:S.success200,main:null===(P=e.colors)||void 0===P?void 0:P.successMain,dark:null===(E=e.colors)||void 0===E?void 0:E.successDark},grey:{50:null===(w=e.colors)||void 0===w?void 0:w.grey50,100:null===(x=e.colors)||void 0===x?void 0:x.grey100,500:e.darkTextSecondary,600:e.heading,700:e.darkTextPrimary,900:e.textDark},dark:{light:null===(D=e.colors)||void 0===D?void 0:D.darkTextPrimary,main:null===(j=e.colors)||void 0===j?void 0:j.darkLevel1,dark:null===(T=e.colors)||void 0===T?void 0:T.darkLevel2,800:null===(N=e.colors)||void 0===N?void 0:N.darkBackground,900:null===(Z=e.colors)||void 0===Z?void 0:Z.darkPaper},text:{primary:e.darkTextPrimary,secondary:e.darkTextSecondary,dark:e.textDark,hint:null===(C=e.colors)||void 0===C?void 0:C.grey100},background:{paper:e.paper,default:e.backgroundDefault}}}(t),n={height:24,padding:"0 6px"},o={direction:"ltr",palette:r,chip:{error:$($({},n),{},{color:r.orange.dark,backgroundColor:r.orange.light}),warning:$($({},n),{},{color:r.warning.dark,backgroundColor:r.warning.light}),success:{color:r.success.dark,backgroundColor:r.success.light,height:28}},mixins:{toolbar:{minHeight:"48px",padding:"8px","@media (min-width: 600px)":{minHeight:"48px"}}},typography:V(t)},i=(0,X.Z)(o);return i.components=function(e){var t,r,n,o,i,a,c,l,s,d,u,p,y,m=null===(t=e.colors)||void 0===t?void 0:t.grey50;return{MuiButton:{styleOverrides:{root:{fontWeight:500,borderRadius:"4px"}}},MuiPaper:{defaultProps:{elevation:0},styleOverrides:{root:{backgroundImage:"none"},rounded:{borderRadius:"".concat(null==e||null===(r=e.customization)||void 0===r?void 0:r.borderRadius,"px")}}},MuiCardHeader:{styleOverrides:{root:{color:null===(n=e.colors)||void 0===n?void 0:n.textDark,padding:"24px"},title:{fontSize:"1.125rem"}}},MuiCardContent:{styleOverrides:{root:{padding:"24px"}}},MuiCardActions:{styleOverrides:{root:{padding:"24px"}}},MuiListItemButton:{styleOverrides:{root:{color:e.darkTextPrimary,paddingTop:"10px",paddingBottom:"10px","&.Mui-selected":{color:e.menuSelected,backgroundColor:e.menuSelectedBack,"&:hover":{backgroundColor:e.menuSelectedBack},"& .MuiListItemIcon-root":{color:e.menuSelected}},"&:hover":{backgroundColor:e.menuSelectedBack,color:e.menuSelected,"& .MuiListItemIcon-root":{color:e.menuSelected}}}}},MuiListItemIcon:{styleOverrides:{root:{color:e.darkTextPrimary,minWidth:"36px"}}},MuiListItemText:{styleOverrides:{primary:{color:e.textDark}}},MuiInputBase:{styleOverrides:{input:{color:e.textDark,"&::placeholder":{color:e.darkTextSecondary,fontSize:"0.875rem"}}}},MuiOutlinedInput:{styleOverrides:{root:{background:m,borderRadius:"".concat(null==e||null===(o=e.customization)||void 0===o?void 0:o.borderRadius,"px"),"& .MuiOutlinedInput-notchedOutline":{borderColor:null===(i=e.colors)||void 0===i?void 0:i.grey400},"&:hover $notchedOutline":{borderColor:null===(a=e.colors)||void 0===a?void 0:a.primaryLight},"&.MuiInputBase-multiline":{padding:1}},input:{fontWeight:500,background:m,padding:"15.5px 14px",borderRadius:"".concat(null==e||null===(c=e.customization)||void 0===c?void 0:c.borderRadius,"px"),"&.MuiInputBase-inputSizeSmall":{padding:"10px 14px","&.MuiInputBase-inputAdornedStart":{paddingLeft:0}}},inputAdornedStart:{paddingLeft:4},notchedOutline:{borderRadius:"".concat(null==e||null===(l=e.customization)||void 0===l?void 0:l.borderRadius,"px")}}},MuiSlider:{styleOverrides:{root:{"&.Mui-disabled":{color:null===(s=e.colors)||void 0===s?void 0:s.grey300}},mark:{backgroundColor:e.paper,width:"4px"},valueLabel:{color:null==e||null===(d=e.colors)||void 0===d?void 0:d.primaryLight}}},MuiDivider:{styleOverrides:{root:{borderColor:e.divider,opacity:1}}},MuiAvatar:{styleOverrides:{root:{color:null===(u=e.colors)||void 0===u?void 0:u.primaryDark,background:null===(p=e.colors)||void 0===p?void 0:p.primary200}}},MuiChip:{styleOverrides:{root:{"&.MuiChip-deletable .MuiChip-deleteIcon":{color:"inherit"}}}},MuiTooltip:{styleOverrides:{tooltip:{color:e.paper,background:null===(y=e.colors)||void 0===y?void 0:y.grey700}}}}}(t),i};const te=function(){var e=(0,a.v9)((function(e){return e.customization}));return n.createElement(G.Z,{injectFirst:!0},n.createElement(W.Z,{theme:ee(e)},n.createElement(U.ZP,null),n.createElement(q.Ks,null,n.createElement(K,null))))};var re=(0,l.p5)(F);F.subscribe((function(){return console.log(F.getState())}));var ne=n.createElement(a.zt,{store:F},n.createElement(c.r,{loading:null,persistor:re},n.createElement(i.VK,null,n.createElement(te,null)))),oe=document.getElementById("app");o.render(ne,oe)}},e=>{e.O(0,[816,591,294,794,612,945,931,697,555,25,593,777,418,642,655,524,220,105,254,809,70,623,617,216,739,394,480,290,162,810,957],(()=>{return t=9500,e(e.s=t);var t}));e.O()}]);
//# sourceMappingURL=main.603e780a.js.map