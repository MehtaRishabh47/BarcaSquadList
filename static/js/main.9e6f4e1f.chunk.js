(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,function(e,n,a){e.exports=a(16)},,,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),i=a.n(t),r=a(2),o=a.n(r),s=(a(12),a(3)),l=a(4),c=a(6),m=a(5),u=[{id:1,name:"Lionel Messi",username:"Bret",position:"Right-Winger"},{id:2,name:"Luis Suarez",username:"Antonette",position:"Center-Forword"},{id:3,name:"Jordi Alba",username:"Samantha",position:"Left-Back"},{id:4,name:"Pique",username:"Karianne",position:"Center-Back"},{id:5,name:"Rakitic",username:"Kamren",position:"Central Midfield"},{id:6,name:"Nelson Semedo",username:"Leopoldo_Corkery",position:"Right-back"},{id:7,name:"Antoine Griezmen",username:"Elwyn.Skiles",position:"Left-Winger"},{id:8,name:"Ousmane Dembele",username:"Maxime_Nienow",position:"Right Winger/LeftWinger"},{id:9,name:"Arthur Melo",username:"Delphine",position:"Central Midfield"},{id:10,name:"Frankie de Jong",username:"Moriah.Stanton",position:"Central Midfield"},{id:11,name:"Marc-Andr\xe9 ter Stegen",username:"Moriah.Stanton",position:"GoalKeeper"},{id:12,name:"Arturo Vidal",username:"Moriah.Stanton",position:"Central Midfield"},{id:13,name:"Ansu Fati",username:"Moriah.Stanton",position:"Left-winger"},{id:14,name:"Sergio Busquets",username:"Moriah.Stanton",position:"Defensive Midfield"},{id:15,name:"Samuel Umtiti",username:"Moriah.Stanton",position:"Center-Back"},{id:16,name:"Clemnet Lenglet",username:"Moriah.Stanton",position:"Center-Back"},{id:17,name:"Samuel Umtiti",username:"Moriah.Stanton",position:"Center-Back"}],d=function(e){var n=e.name,a=e.position,t=e.id;return i.a.createElement("div",{className:"tc bg-light-green dib br2 pa2 ma2 grow bw2 shadow-5"},i.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?100x100")}),i.a.createElement("div",null,i.a.createElement("h2",null,n),i.a.createElement("p",null,a)))},h=function(e){var n=e.robots;return i.a.createElement("div",null,n.map((function(e,a){return i.a.createElement(d,{key:a,id:n[a].id,name:n[a].name,position:n[a].position})})))},p=function(e){e.searchfield;var n=e.searchChange;return i.a.createElement("div",{className:"pa2"},i.a.createElement("input",{className:"pa2 ba b--green bg-lightest-blue",name:"searchbar",type:"text",placeholder:"Search Players",onChange:n}))},f=(a(13),function(e){return i.a.createElement("div",{className:"scroll"},e.children)}),g=(a(14),function(e){Object(c.a)(a,e);var n=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:u,searchfield:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,n=this.state.robots.filter((function(n){return n.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return i.a.createElement("div",{className:"tc"},i.a.createElement("h1",{className:"f1"},"FC Barcelona"),i.a.createElement(p,{searchChange:this.onSearchChange}),i.a.createElement(f,null,i.a.createElement(h,{robots:n})))}}]),a}(t.Component));a(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.9e6f4e1f.chunk.js.map