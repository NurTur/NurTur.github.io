(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{127:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(22),i=n.n(l),o=n(62),c=n(61),m=n(56),A=n(12),p=(n(69),n(66)),s=n.n(p);n(127);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var h=[{title:"Какие кредиты я могу оплатить?",text:"Все виды займов оформленные в АО «Банк Фридом Финанс Казахстан» или в ТОО «Микрофинансовая организация ФРИДОМ ФИНАНС Кредит», включая потребительские кредиты, ипотечные кредиты, предоставленные на товар в магазине, включая товар в рассрочку. "},{title:"Я внес сумму больше чем ежемесячный платеж. Что произойдет с моими деньгами?",text:"Деньги останутся на вашем текущем счете до следующего планового платежа по графику."},{title:"При оплате не приходит код подтверждения. Что делать?",text:"Проверьте Ваше подключение к сети и попробуйте повторить платеж через некоторое время. Если снова появится ошибка, обратитесь в банк, выпустивший вашу карту или к оператору сотовой связи. Если у вас есть другая карта, используйте ее. В случае дополнительных вопросов можете обратиться в call-центр по номеру 595."},{title:"Как получить чек/квитанцию платежа?",text:"Сразу после оплаты вы можете сохранить ее нажав на кнопку 'Скачать квитанцию.'"},{title:"Как быстро пройдет платеж? ",text:"Все ежемесячные оплаты принятые после 22:00 будут погашаться следующим днем. Досрочное и частично досрочное погашение принимается до 16:00. Чтобы не выйти на просрочку, необходимо вносить оплату в соответствии с расписанием платежей."},{title:"Есть ли комиссии при оплате? ",text:"Комиссия взымается только в случае если Ваш договор предусматривает комиссию за досрочное погашение. "},{title:"Как частично досрочно погасить кредит?",text:"Вы можете частично досрочно погасить на вкладке “Досрочное погашение”.  Выберите нужный договор, заполните поле с суммой."}],w=[{title:"Ежемесячный платеж",value:0},{title:"Досрочное погашение",value:1}],y=[{name:"",field:"сhoosed_item",type:"checkbox"},{name:"Информация о договоре",field:"id"},{name:"Остаток задолженности",field:"borrower_full_name",type:"currency"},{name:"Ежемесячный платеж",field:"borrower_iin",type:"currency"},{name:"Штрафы,пени",field:"fines_payment",tooltipText:"Сумма штрафов и пени всегда включена в сумму общего платежа",type:"fines"},{name:"К оплате",field:"input_item",tooltipText:"Поле доступно для редактирования. Не забудьте внести сумму с учетом штрафов или пени, в случае их наличия",type:"input"},{name:"Оплатить до",field:"status"}],b=[{name:"",field:"сhoosed_item",type:"checkbox"},{name:"Информация о договоре",field:"id"},{name:"Остаток задолженности",field:"borrower_full_name",type:"currency"},{name:"Штрафы,пени",field:"fines_payment",tooltipText:"Сумма штрафов и пени всегда включена в сумму общего платежа",type:"fines"},{name:"Сумма для частично досрочного погашения",field:"borrower_full_name",type:"currency"},{name:"К оплате",field:"input_item",tooltipText:"Поле доступно для редактирования. Не забудьте внести сумму с учетом штрафов или пени, в случае их наличия",type:"input"},{name:"Переплата по займу",field:"borrower_full_name",type:"currency"}];t.default=function(e){var t=new Intl.NumberFormat("ru",{}),n=d(r.a.useState(0),2),l=n[0],p=n[1],g=d(Object(a.useState)([{id:"№ 135 от 12.12.2020 Ипотека",borrower_full_name:"100000",borrower_iin:"10000",fines_payment:"1000",input_item:t.format("11000"),"сhoosed_item":!1},{id:"№ 135 от 12.12.2020 Товарный кредит",borrower_full_name:"120000",borrower_iin:"50000",fines_payment:"3000",input_item:t.format("53000"),"сhoosed_item":!1},{id:"№ 135 от 12.12.2020 Ипотека",borrower_full_name:"140000",borrower_iin:"10000",fines_payment:"2000",input_item:t.format("120000"),"сhoosed_item":!1}]),2),x=g[0],v=g[1];function D(e){for(var t="",n=String(e),a=0;a<n.length;a++)["0","1","2","3","4","5","6","7","8","9"].indexOf(n[a])>=0&&(t+=n[a]);return t}var M=function(e,n,a){var r=D(a),l=[];if(x.length>0){for(var i=0;i<x.length;i++)e!==i?l.push(x[i]):l.push(u(u({},x[i]),{},f({},n,r?t.format(r):a)));var o=0;if(l.length>0)for(var c=0;c<l.length;c++){var m=Number(D(l[c].input_item));console.log(m),l[c].сhoosed_item&&m&&(o+=m)}console.log(e,n,a),p(o),v(l)}},E=window.innerWidth<600;return r.a.createElement(o.a,null,r.a.createElement("div",{className:"home"},!E&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container",style:{marginTop:"40px"}},r.a.createElement("h3",null,"Информация о заемщике"),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",maxWidth:"700px"}},r.a.createElement(c.a,{label:"Имя",text:"Оспанов Дамир Маратович"}),r.a.createElement(c.a,{label:"ИИН",text:"9601233212233"}))),r.a.createElement("div",{className:"container",style:{marginTop:"80px"}},r.a.createElement(m.h,{tabTitles:w},r.a.createElement(m.g,{tableTitle:y,tableData:x,page:0,handleTableChange:M}),r.a.createElement(m.g,{tableTitle:b,tableData:x,page:0,handleTableChange:M})))," ",r.a.createElement("div",{className:"container",style:{marginTop:"80px",display:"flex",justifyContent:"space-between"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("h2",null,"Итого к оплате: ",t.format(l)," ₸"),r.a.createElement("p",{style:{maxWidth:"430px",color:"#737373",fontSize:"14px"}},r.a.createElement("span",{style:{color:"red"}},"*")," Оплаты принятые после"," ",r.a.createElement("strong",null,"16:00")," в рабочие дни, а также оплаты в"," ",r.a.createElement("strong",null,"выходные/праздничные")," дни будут погашаться следующим днем"," ")),r.a.createElement("div",{style:{width:"300px"}},r.a.createElement(m.b,{className:"success",label:"Перейти к оплате",onClick:function(){return A.a.push("/result")},disabled:l<=0}),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginTop:"23px"}},r.a.createElement(m.i,{message:"При оплате картами других банков может взиматься комиссия"},r.a.createElement("span",{className:"tooltip-svg"},r.a.createElement(i.a,{src:s.a}))),r.a.createElement("span",{style:{color:"red",marginRight:"5px"}},"*"),r.a.createElement("p",{style:{maxWidth:"430px",color:"#737373",fontSize:"14px"}},"При оплате картами других банков может взиматься комиссия"))))),E&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container",style:{marginBottom:"50px",marginTop:"36px",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("h3",null,"Информация о заемщике"),r.a.createElement(c.a,{label:"Имя",text:"Оспанов Дамир Маратович"}),r.a.createElement(c.a,{label:"ИИН",text:"9601233212233"}))),r.a.createElement("div",{className:"container"},r.a.createElement(m.h,{tabTitles:w},r.a.createElement(m.c,{tableTitle:y,tableData:x,page:0,handleTableChange:M}),r.a.createElement(m.c,{tableTitle:b,tableData:x,page:0,handleTableChange:M}))),r.a.createElement("div",{className:"container",style:{marginTop:"50px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"50px"}},r.a.createElement("h2",null,"Итого к оплате: ",t.format(l)," ₸"),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginTop:"15px",marginBottom:"46px"}},r.a.createElement("span",{style:{color:"red",marginRight:"5px"}},"*"),r.a.createElement("p",{style:{maxWidth:"430px",color:"#737373",fontSize:"14px"}},"Оплаты принятые после ",r.a.createElement("strong",null,"19:00")," в рабочие дни, в"," ",r.a.createElement("strong",null,"выходные и праздничные")," дни будут погашаться следующим днем"," ")),r.a.createElement(m.b,{className:"success",label:"Перейти к оплате",onClick:function(){return A.a.push("/result")},disabled:l<=0}),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginTop:"22px"}},r.a.createElement("span",{style:{color:"red",marginRight:"5px"}},"*"),r.a.createElement("p",{style:{maxWidth:"430px",color:"#737373",fontSize:"14px"}},"При оплате картами других банков может взиматься комиссия")))),r.a.createElement("div",{className:"container",style:{marginTop:"72px"}},r.a.createElement(m.a,{faqItems:h}))))}},69:function(e,t){e.exports='<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 515 83" enable-background="new 0 0 515 83" xml:space="preserve"><image id="image0" width="515" height="83" x="0" y="0" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgMAAABTCAMAAAA1FPS7AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAwFBMVEX////c3Ny5ubmWlpaE hIRzc3N7e3uwsLDl5eX/YGD/gID39/f29vb/7+/u7u6NjY3/v7//ICD/kJD/EBCHhYVmZGR8enr0 9PTIyMidm5v/39//j4//UFD/n59QTk7T09NbWVmoqKjCwsLKysr/r6//z8+9vLynpqaRkJCysbHt 7e29vb2GhYX/f3//cHDp6ene3t5xb2+opqaSkJDIx8fLy8ucm5udnJx7enqysrKnp6d8fHyop6eS kZGVlZVwb28PQ79nAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+UG FwU6EhgI180AAA21SURBVHja7Zx/f9u2EYcZO07SNmvXRSCodAWwdjPJ0htI01NsNV3f/7sacHcA DhQlK9mnc5ri+4ctWiB+HB4CBxDnqioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq KioqKioqKgp6dnH5/OrqxeXLV09dk6Kn0bPLq6jLZysJvvjyqatY9Jvqq5dXmV6+PkjiGPjTU1ez 6LfT199cLfTN11mCP3/7ly++/PKNg2AjouqnrvbvSbLZbp66Dqf01QECDoJsJHj73V/fvPnie8dA raLEU9f7dyO9Fc5eRj51PU4oTAQv/vbDjxfPw3SQp/n7t2/+4X/X6praVRg4V617Xrpef8oIPKNe f/4TXF7QZeYYvn3z/Xffvq0KAx+hQd18yt0PCisCh8CzH7+O15c8zdt/VtW/vE9YGPhgiU/fUK+u Yp+7IeD56+rHtYEgaMmAlZXUg8a/WeLdWn6LbBr6Xtqg7FJSMswmJZJ098hzC/eO8JuV7a7HobH4 mZcTMub1kpB5uJY2LyGVzponQ+vwU0wleavZRUg9OotZrWMRoZIxbV6XEVtrh9BsZqJY/tIaPlO6 b+RJ5ChPmDYpeAPfXIAv8CrODRdnMGBV1xvvH454gfVQilUYvEjR+89d9Cfhq5Yu2nghrB86g1xu Fu6eWB8hetcGytKxbFcxTHsL5TO3FesHOSgVMpqhGTSUWaFYAeHuGj5vY/NkdOo26i6map0hoP6u 3i43awxSSCWCoe6gYrVN5tjiDR0l6LD+WBVfpxGNBg0T2JLbVMMW78diIAcRrSTwrk5ptKlv5i00 oVmYlusyWw+8eF39+2plMjjKgFG7oenAPoEBwRkQ6p0eB6F6qFnXehn8fgeXNdiwVe9G3XnDj+5v GzW5nw3cPY6DEYlbLNYI72Jpda/HB+ybWon7oel9QdKXoYz70fuMO40Zewbq2M+MgVlxBrSq3Z07 YsCY2Lwa2uBhEPANNEUHBiT23gMWIYKZfH5GDNZVAQqbzN5qtMYaA0LtLZC09802vjuFGYahn6hw elxs6A3qhH7Ue+Xxsw9qCgzcqclbqXVW8mVqMO0cTMv1c8bAD1UVVgbPz2NgxO68jQwMwiQGqKGu VZFO31L41akRWtR6C773fzFK8rvCb63SUwDF4mNctTdYdg8Ve08WZ+l8We+x2iMwQBWoOQNW1ZyB O8jOEgP4LHa+ApoIgkrZ6A4RA62gTvZFDOxB09RjYLkRhokRclphgP40qwf/q4Fk5E6Y5FW0KtYE yqQ+oeFh5ysAlp5xaFHwBElTs9IWyhC4SOuCq6uzGAg53wQGrLgWiYEuWn08YGADdWxpLOWpg3l2 btQFA9xkDMQOkJh4G2wIeduMgYoygj43aAg3bDMGRNdxBgYoMzDAmucIHbHa+pABq65pXHYmt8Kk DAM6d9AmZBwekhUGqPITPQrw4BADYmIM3KOdhAAyCHsZKrBFQ0oYEWKnd5jpowxkCHwIA/AbGZhF tcJAF+lMDNRQq1MMxBtSh/pi5zTS5jZkv3MGWurzVjWQXZsYGITNGGihzJwB/N3CcCSp4TkDmy6U 6IZEeo559XLji3UGhjiZsmSCBquO1bAxOJBcw5ehKvTbuInLG25AKw1kX2rkKgPPGQPJGXD6+aMY sK6osxmoGAN26NvpgIGp9mIdqsywVfGZkE3vZrjTDPiMa+pz6Y3mjDNEBtywVWUM7OBpX2NAwnM5 0FyRMTC4B5/+4hyDjL8lA3ogh2iAmbmN9e9vjQhjGWfAOx5bc5+q6Cj1oPq2rDHgPIK+VtuQmxv0 wIbmBAP8heHy6iMYEF11LgNIODLgPWHjHIklA+hEtskhUtGvdube4E2nGLCUMfX54J5lIarEgBu2 cgY2MDqtMYD134RZljEA7kz4i3MxU3WXDPhlhkCnOffSce0gVxhQ/uWMqjVnwPe/H8vWGBgNZbuh qbJGG7bH5wI2+D+/uGAe4stqRY8x0At7NgMmMeBm0L08PhcwuWJt8NA36p19ZC5wT+VeprnAfW+2 7nNkwA9bOQOTSb2+YACmdnQpcgZa1hVWTYa/GsgYcA+ld9WPzAU7Km5tLvgFnRFiwDtBviJrDPgV gDfcDj3pgc21xxh4dnVEq2dJHmHAj6xnM4D3AgM9ZnseA86vBiOP4KmdZoBySgxocKojA+JdtWBA 1UcZ8B7MHdY0Y8BCNWMXuPXZfIQBqt0RBqQgX++QAdfYsCmAHksNy40VBiBb9AnNuQzw4f/ih59P TwWPrQvmibcBzHtH941LBiRjgL45XBdgaUPqIygW1mrO024PGQg+NRmmDeum6APSIgyvB5gzOQMa bb22LvCo9jPmnzGw6VKJra/NxNgd47pg6yf3ZIDVtSHtLlAbDGcg9h0wgHfBl8YQqBNaOjxt8InW Iy6D5gQDaSDYp13DI1vFx/YHwFN3lWCYoxrFhs6cAVzTIQO0CKwXDOhwd6o37REZGZvTkw23WF4+ MPY4bbB9QdtUkQEjaPhJDOywCoEB1jyPrZlM2AtNDAjahaT1gsUFYshQ0tah312k3rXH1oYVDgQ0 ivepm2NDIgMV7DgLpLqJ9BEJHWJSs/Ipn3UGUr+7R/8/J72B1X3CeRhqaLlVuE/DGXA3zI3fvrte MDA2tBgGBlxujW7c+LaVnAF399To3ojFOOBu2njHWPW6mY2aRp/SiH7YmlC/ODuLa8h4HvlagRig BUZiQLdCgf+0c+vIhprX13Hndxd2mTgDtBLk+zW7NHI7P1302ploonrr3ruocpUBDf6CFWrWzS1s /OG6oN2kzWdioIod65xAl3z2KWQzMUvX6nYM5U9kmCMMvI5nSF68WD9DcoKBevCb1fdsRypnQMJL gqmpFgwIt8irIgPV3uVinDuh6owBuVMh94wBeeNdawtFjzv/2Q0hN/6gxkOWzj0umGby14cM2AUD rWLq8uZ5jXG5wceBVOIQXFHDZgPIAnxegMjVcXSkrTJQ7QEyfPVxP6Kx4H3BTbY2zBio7K/BSpoe Q7Q0mRPLf6hYaYf66fAs2U/VWYIhc9T2VBqpV79f/m2Ed1zLN1rH7q6kTDf5t2TgU60mPZLxqph5 NTLg7+feQndONgdV0GN86Yh1PFqd8MYv3XGOYnKZ30WXj/QQ6PXjZ0rXFZymp1e25//RWmOAa04r tM9Pj54tX9cfjAHLdu0/R716eem8geeXF+cT8AdjQOrpcx4GPlafGwOSzdPuY968NrixRVzOF3nq KpBG/b/n8UjzxuGTPxtaVFRUVFRUVFRUVFT0f1AeoxKjZ0LgSx4xwyJp1uJcjgUjhWS8VPwz7duP Qyw2vaC1VZVH/GQp08eDNNVa3E3RcfGYFxYCFN4HzvAKUMS9NrxOkT7pBF29OPi7DVFGLjUWopav i68N5AaZqZletMpYMZte6Iw8+gbqOsboniwqyF1SLD0/p1x0UizmxQox2HEP3UAMjIoYSNE8GEIU In1SnMt1zsBWTYMe4FR+q8zOFSKWDFg8ief6DoN24AxJiD0ZFGdAhKMNe1/uFt6h7hv3cU4MhDTK F3ZTGDhf+LpamsnH1UAndd58xICYiIE4LOA1i/Rhb18ZA3TwwPp33CJE5SwYoKM89HXnMdTh/zr4 cwSJgR4jL+iG3b0McTsPrpQ8KmiHX7SFgfO1FvMSGWgFHl8UxlBYhGDHGXfLcyyMgTt26kaF2IOc ATqzMcYDfh3MBTgQuLEjMeDjnOCUXTrIMqXM8qggOrtWGPgAHca8bOIJRmuu0cBCPFAEID/S2p5g gKejkMMlA/RUa37Q12VVQ5ylqrvEwDzlp22r7FwTVnHuwtnUa163ojMUYl7QFWuGFiM9McLxvgoM VJPxx+XeaxZCVB8wYOq63mz9g5izAmNCxoAZZnVPd+cMaD/Hz8omBrSPc3qEgUFRVJBGn7Yw8AHC mBdTh6P8zpcPJxgbZ9fIgIZoHkkDL4v04Qwox8Cv4NZxBvz5Q18GZyD69wcM+GPAflhKDHjv4xEG WFTQXmBhhYGzRXPBBk9cO+mNH/Y9A96ukYGqNrfOrhpDiFikz8FcYCcImuFhEG5p17aLdYGd1ucC H1Lth4zIQOu9y0cYyKKCjNnFMaroDMUz6tGHsz76wjHQ4mItMKAVxvTAwLvzCY/5AwNEfnEGoPuX /oAOgdULBvxJ4PdVZMA5JdVjDFg4js9jUMpc8AE6jHmBYCHnWoHtEwO4DIDrFsNHjjPQh2iTSuMf eNhQTInuG8XSYOAPZCUN7lAgA/NNrCYF6/j9wLAusAdRQbjcKAx8gFjMS4//dpOi2wT9v5DIgGzC dRbpc8jAjJFx+M94PAr4/xvqlT0i36cCtxlmRMxnBf/EiRigGYQovMWUMviZLbgsPCqIalUY+ACx mJdGicZa3M/rVIhtjwxU8XrkkT7ZuqCF/0bkU++V6Jve906zUbSltNwr3vnQIl9sr4cNefVxOCIG QpwTxqOpuRlg4SKF/zird4uooHEbopYKA2eL3hd0vn8a/GdYfvzuyParDGDCm1GEGT2uCyAvDL/Z UzSPVeoX+PaQAQwtoqCZTlZrDIT/QYTjfB3DayyEIO2rRVSQoACiwsBHy+ozwle8zon0oVAYeSJR DJo5NwRH8vCelZvkedUvKioqKioqKioqKioqKioqKioqKioqKioqKvrc9V/caoDXgpFiiwAAACV0 RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNi0yM1QwNTo1ODoxOCswMzowMOnDk6YAAAAldEVYdGRhdGU6 bW9kaWZ5ADIwMjEtMDYtMjNUMDU6NTg6MTgrMDM6MDCYnisaAAAAAElFTkSuQmCC"></image></svg>'}}]);
//# sourceMappingURL=5.js.map