(this["webpackJsonpfinished-app"]=this["webpackJsonpfinished-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(5),l=n.n(i),r=(n(11),n(12),n(13),n(0));var o=function(e){return Object(r.jsx)("div",{className:"header",children:e.title})};n(15);var s=function(e){return Object(r.jsx)("div",{className:"footer",children:e.title})},j=n(4),u=n.n(j),d=n(6),b=n(2);n(17),n(18);var h=function(e){return Object(r.jsx)("div",{className:"places",children:Object(r.jsx)("body",{children:e.places.map((function(e){return Object(r.jsx)("div",{id:e.PlaceId,children:Object(r.jsx)("p",{children:Object(r.jsxs)("b",{children:[e.IataCode," ",e.Name]})})})}))})})};n(19);var p=function(e){return Object(r.jsx)("div",{className:"quotes",children:Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:Object(r.jsx)("b",{children:"Price (Low - High)"})}),Object(r.jsx)("th",{children:Object(r.jsx)("b",{children:"Departure Date"})}),Object(r.jsx)("th",{children:Object(r.jsx)("b",{children:"Return Date"})})]})}),Object(r.jsx)("tbody",{children:e.quotes.map((function(e){return Object(r.jsxs)("tr",{id:e.QuoteId,children:[Object(r.jsx)("td",{children:e.MinPrice}),Object(r.jsx)("td",{children:e.OutboundLeg.DepartureDate}),Object(r.jsx)("td",{children:e.InboundLeg.DepartureDate})]})}))})]})})};var O=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),l=Object(b.a)(i,2),o=l[0],s=l[1],j=Object(c.useState)(""),O=Object(b.a)(j,2),x=O[0],v=O[1],m=Object(c.useState)(""),D=Object(b.a)(m,2),g=D[0],I=D[1],P=Object(c.useState)(!1),S=Object(b.a)(P,2),f=S[0],R=S[1],F=Object(c.useState)(!1),y=Object(b.a)(F,2),B=y[0],K=y[1];return Object(r.jsxs)("div",{className:"airportinfo",children:[Object(r.jsxs)("form",{onSubmit:function(e){function t(){return(t=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"x-rapidapi-key":"".concat("69c091ba7fmsh67e60d42aa8577ap1f22acjsndc49db220d2e"),"x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",useQueryString:!0}},e.next=3,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/"+document.getElementById("currencyInput").value+"/en-US/"+document.getElementById("fromInput").value+"/"+document.getElementById("toInput").value+"/"+document.getElementById("dateInput").value+"/"+document.getElementById("dateInputReturn").value,t);case 3:return n=e.sent,e.next=6,n.json();case 6:n=e.sent,console.log(n.Places),n.Places&&n.Quotes?(a(n.Places),s(n.Quotes),R(!0),K(!0)):(R(!0),K(!1));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}(),v(""),I("")},children:[Object(r.jsxs)("div",{id:"airportForm",className:"airportForm",children:[Object(r.jsx)("label",{htmlFor:"toInput",children:"Origin: "}),Object(r.jsx)("input",{id:"toInput",value:g,placeholder:"IATA code",onChange:function(e){return I(e.target.value)},required:!0}),Object(r.jsx)("label",{htmlFor:"fromInput",children:"Destination:"}),Object(r.jsx)("input",{id:"fromInput",value:x,placeholder:"IATA code",onChange:function(e){return v(e.target.value)},required:!0}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"dateInput",children:"Departure date:"}),Object(r.jsx)("input",{id:"dateInput",name:"dateInput",placeholder:"YYYY-MM",required:!0}),Object(r.jsx)("label",{htmlFor:"dateInputReturn",children:"Return date:"}),Object(r.jsx)("input",{id:"dateInputReturn",name:"dateInputReturn",placeholder:"YYYY-MM"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{children:"YYYY-MM or YYYY-MM or anytime"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"dateInput",children:"Currency:"}),Object(r.jsxs)("select",{id:"currencyInput",name:"currencyInput",children:[Object(r.jsx)("option",{value:"USD",selected:"selected",children:"USD"}),Object(r.jsx)("option",{value:"EUR",children:"Euro"}),Object(r.jsx)("option",{value:"GBP",children:"United Kingdom Pounds"}),Object(r.jsx)("option",{value:"DZD",children:"Algeria Dinars"}),Object(r.jsx)("option",{value:"ARP",children:"Argentina Pesos"}),Object(r.jsx)("option",{value:"AUD",children:"Australia Dollars"}),Object(r.jsx)("option",{value:"ATS",children:"Austria Schillings"}),Object(r.jsx)("option",{value:"BSD",children:"Bahamas Dollars"}),Object(r.jsx)("option",{value:"BBD",children:"Barbados Dollars"}),Object(r.jsx)("option",{value:"BEF",children:"Belgium Francs"}),Object(r.jsx)("option",{value:"BMD",children:"Bermuda Dollars"}),Object(r.jsx)("option",{value:"BRR",children:"Brazil Real"}),Object(r.jsx)("option",{value:"BGL",children:"Bulgaria Lev"}),Object(r.jsx)("option",{value:"CAD",children:"Canada Dollars"}),Object(r.jsx)("option",{value:"CLP",children:"Chile Pesos"}),Object(r.jsx)("option",{value:"CNY",children:"China Yuan Renmimbi"}),Object(r.jsx)("option",{value:"CYP",children:"Cyprus Pounds"}),Object(r.jsx)("option",{value:"CSK",children:"Czech Republic Koruna"}),Object(r.jsx)("option",{value:"DKK",children:"Denmark Kroner"}),Object(r.jsx)("option",{value:"NLG",children:"Dutch Guilders"}),Object(r.jsx)("option",{value:"XCD",children:"Eastern Caribbean Dollars"}),Object(r.jsx)("option",{value:"EGP",children:"Egypt Pounds"}),Object(r.jsx)("option",{value:"FJD",children:"Fiji Dollars"}),Object(r.jsx)("option",{value:"FIM",children:"Finland Markka"}),Object(r.jsx)("option",{value:"FRF",children:"France Francs"}),Object(r.jsx)("option",{value:"DEM",children:"Germany Deutsche Marks"}),Object(r.jsx)("option",{value:"XAU",children:"Gold Ounces"}),Object(r.jsx)("option",{value:"GRD",children:"Greece Drachmas"}),Object(r.jsx)("option",{value:"HKD",children:"Hong Kong Dollars"}),Object(r.jsx)("option",{value:"HUF",children:"Hungary Forint"}),Object(r.jsx)("option",{value:"ISK",children:"Iceland Krona"}),Object(r.jsx)("option",{value:"INR",children:"India Rupees"}),Object(r.jsx)("option",{value:"IDR",children:"Indonesia Rupiah"}),Object(r.jsx)("option",{value:"IEP",children:"Ireland Punt"}),Object(r.jsx)("option",{value:"ILS",children:"Israel New Shekels"}),Object(r.jsx)("option",{value:"ITL",children:"Italy Lira"}),Object(r.jsx)("option",{value:"JMD",children:"Jamaica Dollars"}),Object(r.jsx)("option",{value:"JPY",children:"Japan Yen"}),Object(r.jsx)("option",{value:"JOD",children:"Jordan Dinar"}),Object(r.jsx)("option",{value:"KRW",children:"Korea (South) Won"}),Object(r.jsx)("option",{value:"LBP",children:"Lebanon Pounds"}),Object(r.jsx)("option",{value:"LUF",children:"Luxembourg Francs"}),Object(r.jsx)("option",{value:"MYR",children:"Malaysia Ringgit"}),Object(r.jsx)("option",{value:"MXP",children:"Mexico Pesos"}),Object(r.jsx)("option",{value:"NLG",children:"Netherlands Guilders"}),Object(r.jsx)("option",{value:"NZD",children:"New Zealand Dollars"}),Object(r.jsx)("option",{value:"NOK",children:"Norway Kroner"}),Object(r.jsx)("option",{value:"PKR",children:"Pakistan Rupees"}),Object(r.jsx)("option",{value:"XPD",children:"Palladium Ounces"}),Object(r.jsx)("option",{value:"PHP",children:"Philippines Pesos"}),Object(r.jsx)("option",{value:"XPT",children:"Platinum Ounces"}),Object(r.jsx)("option",{value:"PLZ",children:"Poland Zloty"}),Object(r.jsx)("option",{value:"PTE",children:"Portugal Escudo"}),Object(r.jsx)("option",{value:"ROL",children:"Romania Leu"}),Object(r.jsx)("option",{value:"RUR",children:"Russia Rubles"}),Object(r.jsx)("option",{value:"SAR",children:"Saudi Arabia Riyal"}),Object(r.jsx)("option",{value:"XAG",children:"Silver Ounces"}),Object(r.jsx)("option",{value:"SGD",children:"Singapore Dollars"}),Object(r.jsx)("option",{value:"SKK",children:"Slovakia Koruna"}),Object(r.jsx)("option",{value:"ZAR",children:"South Africa Rand"}),Object(r.jsx)("option",{value:"KRW",children:"South Korea Won"}),Object(r.jsx)("option",{value:"ESP",children:"Spain Pesetas"}),Object(r.jsx)("option",{value:"XDR",children:"Special Drawing Right (IMF)"}),Object(r.jsx)("option",{value:"SDD",children:"Sudan Dinar"}),Object(r.jsx)("option",{value:"SEK",children:"Sweden Krona"}),Object(r.jsx)("option",{value:"CHF",children:"Switzerland Francs"}),Object(r.jsx)("option",{value:"TWD",children:"Taiwan Dollars"}),Object(r.jsx)("option",{value:"THB",children:"Thailand Baht"}),Object(r.jsx)("option",{value:"TTD",children:"Trinidad and Tobago Dollars"}),Object(r.jsx)("option",{value:"TRL",children:"Turkey Lira"}),Object(r.jsx)("option",{value:"VEB",children:"Venezuela Bolivar"}),Object(r.jsx)("option",{value:"ZMK",children:"Zambia Kwacha"}),Object(r.jsx)("option",{value:"EUR",children:"Euro"}),Object(r.jsx)("option",{value:"XCD",children:"Eastern Caribbean Dollars"}),Object(r.jsx)("option",{value:"XDR",children:"Special Drawing Right (IMF)"}),Object(r.jsx)("option",{value:"XAG",children:"Silver Ounces"}),Object(r.jsx)("option",{value:"XAU",children:"Gold Ounces"}),Object(r.jsx)("option",{value:"XPD",children:"Palladium Ounces"}),Object(r.jsx)("option",{value:"XPT",children:"Platinum Ounces"})]})]}),Object(r.jsx)("button",{className:"search",children:"Submit"})]}),f?Object(r.jsx)(h,{places:n}):Object(r.jsx)(r.Fragment,{}),B?Object(r.jsx)(p,{quotes:o}):Object(r.jsx)(r.Fragment,{})]})};var x=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(o,{title:"Flight Scan"}),Object(r.jsx)(O,{}),Object(r.jsx)(s,{title:"2020"})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),i(e),l(e)}))};l.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),v()}],[[20,1,2]]]);
//# sourceMappingURL=main.2f4a3abb.chunk.js.map