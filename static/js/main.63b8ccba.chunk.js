(this.webpackJsonpdeevesoft=this.webpackJsonpdeevesoft||[]).push([[0],{20:function(e,a,t){e.exports=t(39)},25:function(e,a,t){},26:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},27:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(18),i=t.n(o),c=(t(25),t(26),t(27),t(28),t(9)),s=t(10),l=t(11),m=t(13),u=t(12),d=t(19),p=t.n(d),f=(t(38),p.a.initializeApp({apiKey:"AIzaSyAK7Gb1XCpVVzo4c_tsttehf_4v4D0UVQs",authDomain:"deevesoft-assignment.firebaseapp.com",databaseURL:"https://deevesoft-assignment.firebaseio.com",projectId:"deevesoft-assignment",storageBucket:"deevesoft-assignment.appspot.com",messagingSenderId:"593812968059",appId:"1:593812968059:web:f118a8c60a5e483c71c8de",measurementId:"G-TZ48CTPNB6"})),h=t(7),g=t.n(h),v=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).handleInput=function(a){e.setState(Object(c.a)({},a.target.name,!0),(function(){return console.table(e.state)}))},e.tasks=[{name:"Get Leaner",value:"getLeaner"},{name:"Get active again",value:"getActiveAgain"},{name:"Reduce Pain or Injury",value:"getActiveAgain"},{name:"Reduce Pain or Injury",value:"reducePainOrInjury"},{name:"Improve cardio or speed",value:"improveCardioOrSpeed"},{name:"Improve sports performance",value:"improveSportsPerformance"}],e.state={getLeaner:!1,getActiveAgain:!1,reducePainOrInjury:!1,improveCardioOrSpeed:!1,improveSportsPerformance:!1,isLoading:!1},e}return Object(l.a)(t,[{key:"formHandle",value:function(e){var a=this;e.preventDefault(),this.setState({isLoading:!0}),f.firestore().collection("goals").add({getLeaner:this.state.getLeaner,getActiveAgain:this.state.getActiveAgain,reducePainOrInjury:this.state.reducePainOrInjury,improveCardioOrSpeed:this.state.improveCardioOrSpeed,improveSportsPerformance:this.state.improveSportsPerformance,date:(new Date).toString()}).then((function(){a.setState({isLoading:!1},(function(){return alert("Goals are set!!")}))})).catch((function(e){return console.log("Some error occured")}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"mb-5 row justify-content-center"},r.a.createElement("h1",{className:["text-center mt-3 w-25",g.a.green].join(" ")},"Goal")),r.a.createElement("div",{className:"row justify-content-center align-items-center"},r.a.createElement("div",{className:"col-md-5 col-sm-12"},r.a.createElement("div",{className:"left-section"},r.a.createElement("h1",null,"Goals"),r.a.createElement("p",{className:"text-justify text-muted"},"Select your primary goal. What do you want to acheive in the next coming months?"))),r.a.createElement("div",{className:"col-md-7 col-sm-12 bg-light pb-4"},r.a.createElement("div",{className:"right-section mt-5 row justify-content-center"},r.a.createElement("form",{onSubmit:function(a){return e.formHandle(a)}},r.a.createElement("div",{className:"form-check p-3",onChange:function(a){return e.handleInput(a)}},r.a.createElement("input",{className:["form-check-input",g.a.radio].join(" "),type:"radio",name:"getLeaner",id:"getLeaner",value:"getLeaner"}),r.a.createElement("label",{className:"form-check-label",for:"getLeaner"},r.a.createElement("h4",{className:"font-weight-normal"},"Get Leaner"))),r.a.createElement("div",{className:"form-check p-3",onChange:function(a){return e.handleInput(a)}},r.a.createElement("input",{className:["form-check-input",g.a.radio].join(" "),type:"radio",name:"getActiveAgain",id:"getActiveAgain",value:"getActiveAgain"}),r.a.createElement("label",{className:"form-check-label",for:"getActiveAgain"},r.a.createElement("h4",{className:"font-weight-normal"},"Get active again"))),r.a.createElement("div",{className:"form-check p-3",onChange:function(a){return e.handleInput(a)}},r.a.createElement("input",{className:["form-check-input",g.a.radio].join(" "),type:"radio",name:"reducePainOrInjury",id:"reducePainOrInjury",value:"reducePainOrInjury"}),r.a.createElement("label",{className:"form-check-label",for:"reducePainOrInjury"},r.a.createElement("h4",{className:"font-weight-normal"},"Reduce Pain or Injury"))),r.a.createElement("div",{className:"form-check p-3",onChange:function(a){return e.handleInput(a)}},r.a.createElement("input",{className:["form-check-input",g.a.radio].join(" "),type:"radio",name:"improveCardioOrSpeed",id:"improveCardioOrSpeed",value:"improveCardioOrSpeed"}),r.a.createElement("label",{className:"form-check-label",for:"improveCardioOrSpeed"},r.a.createElement("h4",{className:"font-weight-normal"},"Improve cardio or speed"))),r.a.createElement("div",{className:"form-check p-3",onChange:function(a){return e.handleInput(a)}},r.a.createElement("input",{className:["form-check-input",g.a.radio].join(" "),type:"radio",name:"improveSportsPerformance",id:"improveSportsPerformance",value:"improveSportsPerformance"}),r.a.createElement("label",{className:"form-check-label",for:"improveSportsPerformance"},r.a.createElement("h4",{className:"font-weight-normal"},"Improve sports performance"))),r.a.createElement("button",{type:"submit",className:"btn btn-primary mt-4"},this.state.isLoading?r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("h4",null,"Submit")))))))}}]),t}(n.Component),E=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).handleInput=function(a){e.setState(Object(c.a)({},a.target.name,a.target.value))},e.state={email:"",password:"",isLoggedIn:!1,isLoading:!1},e}return Object(l.a)(t,[{key:"formHandle",value:function(e){var a=this;e.preventDefault(),this.setState({isLoading:!0}),f.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((function(e){return a.setState({isLoggedIn:!0})})).catch((function(e){return alert("Invalid credentials")}))}},{key:"render",value:function(){var e=this;return this.state.isLoggedIn?r.a.createElement(v,null):r.a.createElement("div",{className:"container",style:{height:"100vh"}},r.a.createElement("div",{className:"row h-100 justify-content-center align-items-center"},r.a.createElement("form",{style:{border:"0.5px solid gray",padding:"20px"},onSubmit:function(a){return e.formHandle(a)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",onChange:function(a){return e.handleInput(a)},placeholder:"Enter email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",onChange:function(a){return e.handleInput(a)},id:"exampleInputPassword1",placeholder:"Password"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},this.state.isLoading?r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("h5",null,"Submit")))))}}]),t}(n.Component);var b=function(){return r.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports={radio:"Goals_radio__BrMiJ",green:"Goals_green__-L4lc"}}},[[20,1,2]]]);
//# sourceMappingURL=main.63b8ccba.chunk.js.map