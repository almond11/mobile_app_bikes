(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i),o=(a(14),a(2)),s=a(3),l=a(5),u=a(4),h=a(6),m=a(1),d=(a(15),function(e){var t=e.opacity,a=e.imgSrc;return r.a.createElement("img",{id:"background-image",style:Number(t)>=0?{opacity:t}:{},src:"/images/".concat(a),alt:""})}),p=(a(16),function(e){var t=e.weather;return r.a.createElement("div",{className:"weather-icon-container"},r.a.createElement("img",{className:"weather-icon",src:"https://openweathermap.org/img/w/".concat(t.icon,".png"),alt:t.description}))}),g=(a(17),function(e){return Math.round(e-273)}),b=function(e){return Math.round(9*(e-273)/5+32)},f=function(e){var t=e.type,a=e.isCelcius,n=e.switchUnit;return r.a.createElement("div",{className:"temperature-unit".concat(a===("F"!==t)?"-active":""),onClick:function(){return n(t)}},r.a.createElement("span",{className:"superscript"},"o"),t)},v=function(e){var t=e.isCelcius,a=e.switchUnit;return r.a.createElement("div",{className:"temperature-switch"},r.a.createElement(f,{isCelcius:t,type:"C",switchUnit:a}),r.a.createElement(f,{isCelcius:t,type:"F",switchUnit:a}))},E=function(e){var t=e.value;return r.a.createElement("div",{className:"temperature-value"},t)},w=function(e){function t(){var e;Object(o.a)(this,t),e=Object(l.a)(this,Object(u.a)(t).call(this));var a=window.localStorage.getItem("unit-type");return e.state={isCelcius:"F"!==a},e.switchUnit=e.switchUnit.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"switchUnit",value:function(e){window.localStorage.setItem("unit-type",e),this.setState({isCelcius:"F"!==e})}},{key:"render",value:function(){var e=this.state.isCelcius?g(this.props.temp):b(this.props.temp);return r.a.createElement("div",{className:"temperature-container",onClick:this.toggle},r.a.createElement(E,{value:e}),r.a.createElement(v,{isCelcius:this.state.isCelcius,switchUnit:this.switchUnit}))}}]),t}(n.Component),y=(a(18),function(e){var t=e.message;return r.a.createElement("div",{id:"search-error"},r.a.createElement("i",{className:"fas fa-exclamation-triangle"})," ",t)}),j=function(){return r.a.createElement("i",{id:"search-spinner",className:"fas fa-spinner"})},O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={search:"",error:null,loading:!1},a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.onSubmit=a.onSubmit.bind(Object(m.a)(Object(m.a)(a))),a.setLoading=a.setLoading.bind(Object(m.a)(Object(m.a)(a))),a.handleSearchError=a.handleSearchError.bind(Object(m.a)(Object(m.a)(a))),a.getWeather=a.getWeather.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"setLoading",value:function(e){var t={loading:!!e};this.state.error&&(t.error=null),this.setState(t)}},{key:"handleChange",value:function(e){var t={search:1!==e.target.value.length?e.target.value:e.target.value.toUpperCase()};this.state.error&&(t.error=null),this.setState(t)}},{key:"handleSearchError",value:function(e){console.log(e),this.setState({error:e.message,loading:!1})}},{key:"getWeather",value:function(e){var t,a=this;this.setLoading(!0),(t=e,fetch("".concat("https://m-michelini-weather-widget-api.glitch.me/api/","?search=").concat(t)).then(function(e){return e.json()}).then(function(e){if(200===e.cod)return e;throw new Error(e.errorMsg||"Something went wrong.")})).then(function(e){return a.setLoading(!1),e}).then(this.props.onFound).catch(this.handleSearchError)}},{key:"handleGeolocation",value:function(){var e=this;if(navigator&&navigator.geolocation)return navigator.geolocation.getCurrentPosition(function(t){var a=t.coords,n=a.latitude,r=a.longitude;e.getWeather("[".concat(n,",").concat(r,"]"))},function(t){e.handleSearchError({message:"Geolocation permission denied."})});this.handleSearchError({message:"Geolocation unavailable."})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.transitioning||this.state.loading||(""===this.state.search?this.handleGeolocation():this.getWeather(this.state.search))}},{key:"render",value:function(){return r.a.createElement("div",{className:"search-container".concat(this.props.transitioning?" transitioning":"")},r.a.createElement("form",{onSubmit:this.onSubmit,className:"search-form"},r.a.createElement("input",{className:"search-bar",type:"text",value:this.state.search,placeholder:"Location",onChange:this.handleChange}),r.a.createElement("button",{className:"search-button",onClick:this.onSubmit},r.a.createElement("i",{className:"fas fa-map-marker-alt fa-2x"}))),this.state.error?r.a.createElement(y,{message:this.state.error}):null,this.state.loading?r.a.createElement(j,null):null)}}]),t}(n.Component),k=(a(19),function(e){var t=e.onClick;return r.a.createElement("i",{className:"weather-search-button fas fa-redo",onClick:t})}),C=function(e){var t=e.city,a=e.country;return r.a.createElement("div",{className:"weather-location"},t,", ",a)},N=function(e){var t=e.description;return r.a.createElement("div",{className:"weather-description"},t[0].toUpperCase()+t.substring(1))},S=function(e){var t=e.city,a=e.country,n=e.weather,i=e.temp,c=e.reset,o=e.transitioning;return n?r.a.createElement("div",{className:"weather-panel".concat(o?" transitioning":"")},r.a.createElement(C,{city:t,country:a}),r.a.createElement(N,{description:n.description}),r.a.createElement("div",{style:{display:"flex",alignItems:"center",width:300}},r.a.createElement(p,{weather:n}),r.a.createElement(w,{temp:i})),r.a.createElement(k,{onClick:c})):r.a.createElement("div",null)},W=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={city:null,country:null,temp:null,weather:null,transitioning:!1},e.setWeatherData=e.setWeatherData.bind(Object(m.a)(Object(m.a)(e))),e.clearWeatherData=e.clearWeatherData.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"setWeatherData",value:function(e){var t=this;this.setState({transitioning:!0}),setTimeout(function(){t.setState({city:e.name,country:e.sys.country,temp:e.main.temp,weather:e.weather[0],transitioning:!1})},400)}},{key:"clearWeatherData",value:function(){var e=this;this.setState({transitioning:!0}),setTimeout(function(){e.setState({city:null,country:null,temp:null,weather:null,transitioning:!1})},400)}},{key:"render",value:function(){return this.state.weather?r.a.createElement(S,{city:this.state.city,country:this.state.country,temp:this.state.temp,celcius:this.state.celcius,weather:this.state.weather,transitioning:this.state.transitioning,reset:this.clearWeatherData,toggleTemp:this.toggleTemp}):r.a.createElement(O,{onFound:this.setWeatherData,transitioning:this.state.transitioning})}}]),t}(n.Component),A=(a(20),function(e){var t=e.close;return r.a.createElement("div",{id:"about-container"},r.a.createElement("div",{id:"about-opaque-background",onClick:t}),r.a.createElement("section",{id:"about-panel"},r.a.createElement("i",{onClick:t,id:"about-close",className:"fa fa-times-circle"}),r.a.createElement("h3",{id:"about-title"},"Description"),r.a.createElement("p",null,"A weather application that gets the weather at a given location, or the users current location if permission is given. The app was built with Node.js and Express on the backend, and React.js on the client side. All data and icons related to weather are from ",r.a.createElement("a",{href:"https://openweathermap.org",target:"_blank",rel:"noopener noreferrer"},"openweathemap.org"),". For any other developer info, you can head over to my ",r.a.createElement("a",{href:"https://github.com/M-Michelini/react-weather-widget",target:"_blank",rel:"noopener noreferrer"},"github"),"."),r.a.createElement("h3",{id:"about-usage"},"Usage"),r.a.createElement("p",null,"Getting the weather is simple! You can search in 3 possible formats, If the input is;"),r.a.createElement("ul",null,r.a.createElement("li",null,"empty, your location is used."),r.a.createElement("li",null,"inside square brackets, it will be parsed as 2 comma seperated decimal degree values, representing the latitude and longitude respectively."),r.a.createElement("li",null,"of any other format, it will be parsed as the locations name."))))}),U=(a(21),function(e){var t=e.openAboutPanel;return r.a.createElement("div",{id:"footer"},r.a.createElement("a",{className:"footer-link",href:"https://github.com/M-Michelini/react-weather-widget",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("div",{className:"footer-link",onClick:t},r.a.createElement("i",{className:"fas fa-info-circle"})))}),P=(a(22),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={about:!1},e.openAboutPanel=e.openAboutPanel.bind(Object(m.a)(Object(m.a)(e))),e.closeAboutPanel=e.closeAboutPanel.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"openAboutPanel",value:function(){this.setState({about:!0})}},{key:"closeAboutPanel",value:function(){this.setState({about:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(d,{imgSrc:"weather-background.jpg",opacity:.2}),r.a.createElement("div",{className:"app"},r.a.createElement("h1",{className:"app-header"},"Weather Widget"),r.a.createElement(W,null),r.a.createElement(U,{openAboutPanel:this.openAboutPanel})),this.state.about?r.a.createElement(A,{close:this.closeAboutPanel}):null)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.3b675852.chunk.js.map