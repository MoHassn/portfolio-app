(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/logo.e8112cd3.svg"},24:function(e,t,a){e.exports=a(43)},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(15),c=a.n(o),l=(a(29),a(6)),r=a(9),s=a(17),m=a.n(s),u=(a(35),function(){return i.a.createElement("header",null,i.a.createElement(l.Link,{to:"/"},i.a.createElement("img",{className:"logo",src:m.a,alt:"logo",width:"100",height:"100"})),i.a.createElement("nav",null,i.a.createElement("ul",{className:"nav-list"},i.a.createElement("li",null,i.a.createElement(r.NavHashLink,{className:"nav-link",smooth:!0,to:"/#about"},"ABOUT")),i.a.createElement("li",null,i.a.createElement(r.NavHashLink,{className:"nav-link",smooth:!0,to:"/#projects"},"PROJECTS")),i.a.createElement("li",null,i.a.createElement(r.NavHashLink,{className:"nav-link",smooth:!0,to:"/#contact"},"CONTACT")))))}),p=(a(36),function(){return i.a.createElement("section",{id:"about"},i.a.createElement("h1",{className:"main-heading"},"Hi, I am HASSAN"),i.a.createElement("h2",{className:"title"},"FRONT-END WEB DEVELOPER"),i.a.createElement("p",{className:"bio"},"My name is Mohamed Hassan. I am a computer and systems engineering student and front-end web developer. I've been coding for the last three years."))}),d=(a(37),[{name:"Survey form",description:"This is a project description and I will customize it later, thank you!",imgURL:"https://i.imgur.com/2odg6pk.png",codepen:"https://codepen.io/mohamedhassan/full/orKVbd",id:"1"},{name:"Tribute page",description:"This is a project description and I will customize it later, thank you!",imgURL:"https://i.imgur.com/y7fJvSJ.png",codepen:"https://codepen.io/mohamedhassan/full/JQqaqW",id:"2"},{name:"Technical documentation page",description:"This is a project description and I will customize it later, thank you!",imgURL:"https://i.imgur.com/xctsboO.png",codepen:"https://codepen.io/mohamedhassan/full/OKpdNR",id:"3"},{name:"My previous portfolio",description:"This is a project description and I will customize it later, thank you!",imgURL:"https://i.imgur.com/8S4gGOQ.png",codepen:"https://codepen.io/mohamedhassan/full/wVpbLb",id:"4"},{name:"Product landing page",description:"This is a project description and I will customize it later, thank you!",imgURL:"https://i.imgur.com/74oV2Ar.png",codepen:"https://codepen.io/mohamedhassan/full/aebqRv",id:"5"}]),h=function(e){var t=e.name,a=e.imageURL,n=e.id;return i.a.createElement("div",{className:"project"},i.a.createElement(l.Link,{to:"projects/".concat(n),className:"project-link"},i.a.createElement("figure",{className:"project"},i.a.createElement("img",{className:"project-image",src:a,alt:"survey form project sreenshot",width:"300"}),i.a.createElement("figcaption",null,t))))},g=function(){var e=d.length?d.map((function(e){var t=e.name,a=e.imgURL,n=e.id;return i.a.createElement(h,{name:t,imageURL:a,id:n,key:n})})):i.a.createElement("div",null,"sorry, couldn't fetch projects");return i.a.createElement("section",{id:"projects"},i.a.createElement("h2",{className:"projects-heading"},"And these are some of my works"),i.a.createElement("div",{className:"projects-container"},e))},E=(a(38),a(18)),f=a(19),b=a(23),v=a(22),N=a(20),j=(a(41),function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={email:"",subject:"",message:""},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n={email:a.email,subject:a.subject,message:a.message};N.send("gmail","contact_form",n,"user_7L9gh5Svz96faEIUotcRg"),e.resetForm()},e.onSubjectChange=function(t){e.setState({subject:t.target.value})},e.onEmailChange=function(t){e.setState({email:t.target.value})},e.onMessageChange=function(t){e.setState({message:t.target.value})},e}return Object(f.a)(a,[{key:"resetForm",value:function(){this.setState({email:"",subject:"",message:""})}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.subject,n=e.message,o=t.length>0&&a.length>0&&n.length>0;return i.a.createElement("form",{className:"contact-form",id:"contact-form",onSubmit:this.handleSubmit,method:"POST"},i.a.createElement("h3",{className:"form-title"},"Or Send me an Email!"),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"field-label",htmlFor:"email"},"Email:"),i.a.createElement("input",{type:"email",className:"form-control",id:"email",value:this.state.email,onChange:this.onEmailChange,placeholder:"Enter your Email here.."})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"field-label",htmlFor:"subject"},"Subject:"),i.a.createElement("input",{type:"text",className:"form-control",id:"subject",value:this.state.subject,onChange:this.onSubjectChange,placeholder:"You want to talk about?"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"field-label",htmlFor:"message"},"Message:"),i.a.createElement("textarea",{className:"form-control",rows:"5",id:"message",value:this.state.message,onChange:this.onMessageChange,placeholder:"Your message goes here..."})),i.a.createElement("button",{type:"submit",className:"submit-button",disabled:!o},"Submit"))}}]),a}(n.Component)),k=function(){return i.a.createElement("section",{id:"contact"},i.a.createElement("h2",{className:"contact-header"},"Contact me via social media!"),i.a.createElement("ul",{className:"contact-list"},i.a.createElement("li",null,i.a.createElement("a",{className:"contact-link",href:"https://twitter.com/MuhmdHassn",target:"_blank",rel:"noopener noreferrer"},"Twitter")),i.a.createElement("li",null,i.a.createElement("a",{className:"contact-link",href:"https://github.com/MoHassn",target:"_blank",rel:"noopener noreferrer"},"Github"))),i.a.createElement(j,null))},y=a(21),w=(a(42),a(1)),S=[{name:"Survey form",description:"This is a project description and I will customize it later, thank you!",imgURL:"https://i.imgur.com/2odg6pk.png",codepen:"https://codepen.io/mohamedhassan/full/orKVbd",id:"1"},{name:"Tribute page",description:"This is a project description and I will customize it later, thank you!",imgURL:"https://i.imgur.com/y7fJvSJ.png",codepen:"https://codepen.io/mohamedhassan/full/JQqaqW",id:"2"},{name:"Technical documentation page",description:"This is a project description and I will customize it later, thank you!",imgURL:"https://i.imgur.com/xctsboO.png",codepen:"https://codepen.io/mohamedhassan/full/OKpdNR",id:"3"},{name:"My previous portfolio",description:"This is a project description and I will customize it later, thank you!",imgURL:"https://i.imgur.com/8S4gGOQ.png",codepen:"https://codepen.io/mohamedhassan/full/wVpbLb",id:"4"},{name:"Product landing page",description:"This is a project description and I will customize it later, thank you!",imgURL:"https://i.imgur.com/74oV2Ar.png",codepen:"https://codepen.io/mohamedhassan/full/aebqRv",id:"5"}],L=function(){var e=Object(w.m)().id,t=S.filter((function(t){return t.id===e})),a=Object(y.a)(t,1)[0];return i.a.createElement("div",{className:"project-details-container"},i.a.createElement("h2",{className:"project-name"},a.name),i.a.createElement("div",{className:"project-details"},i.a.createElement("div",null,i.a.createElement("img",{className:"project-img",src:a.imgURL,alt:"a screenshot from the project"})),i.a.createElement("div",{className:"description-container"},i.a.createElement("p",{className:"project-description"},a.description),i.a.createElement("a",{className:"codepen-button",href:a.codepen,target:"_blank",rel:"noopener noreferrer"},"Codepen"))))};var R=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(w.d,{path:"/"},i.a.createElement(u,null)),i.a.createElement("main",null,i.a.createElement(w.d,{exact:!0,path:"/"},i.a.createElement(p,null),i.a.createElement(g,null),i.a.createElement(k,null)),i.a.createElement(w.d,{path:"/projects/:id",children:i.a.createElement(L,null)})),i.a.createElement("footer",null,"Made with \u2665."))};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(l.BrowserRouter,null,i.a.createElement(R,null))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.2b814771.chunk.js.map