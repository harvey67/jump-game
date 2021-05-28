(this["webpackJsonpjump-game"]=this["webpackJsonpjump-game"]||[]).push([[0],{21:function(t,e,i){},35:function(t,e,i){},47:function(t,e,i){"use strict";i.r(e);var n=i(3),s=i.n(n),o=i(29),a=i.n(o),r=(i(35),i(6)),A=(i(21),i(5)),g=i.n(A),h=i(10),c=i(25),d=i(16),l=i(14),u=i(15),B=(i(48),i(37),i(39),{apiKey:"AIzaSyAHN7qi76sqh-ZHSlAGryJEbTvxcsvFJaY",authDomain:"user-database-test-9ee1d.firebaseapp.com",databaseURL:"https://user-database-test-9ee1d.firebaseio.com",projectId:"user-database-test-9ee1d",storageBucket:"user-database-test-9ee1d.appspot.com",messagingSenderId:"425239506606",appId:"1:425239506606:web:decf3cc0780d2d8e9d073f"}),I=new(function(){function t(){Object(l.a)(this,t),u.a.initializeApp(B),this.auth=u.a.auth(),this.db=u.a.firestore,this.u_id=0,this.currentUserID=0,this.currentUsername=""}return Object(d.a)(t,[{key:"checkUsers",value:function(){var t=Object(h.a)(g.a.mark((function t(e){var i,n,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("checking if user is in database..."),i=!0,"jumpGame-users",t.next=5,u.a.database().ref("jumpGame-users").once("value");case 5:for(s in(n=t.sent).val())n.val()[s].username===e&&(console.log("we already have that user"),i=!1);return t.abrupt("return",i);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"getPoints",value:function(){var t=Object(h.a)(g.a.mark((function t(e){var i,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("getting points..."),"jumpGame-users",t.next=4,u.a.database().ref("jumpGame-users").once("value");case 4:i=t.sent,t.t0=g.a.keys(i.val());case 6:if((t.t1=t.t0()).done){t.next=12;break}if(n=t.t1.value,i.val()[n].username!==e){t.next=10;break}return t.abrupt("return",i.val()[n].points);case 10:t.next=6;break;case 12:return t.abrupt("return",0);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"signUpUser",value:function(){var t=Object(h.a)(g.a.mark((function t(e,i){var n,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("signing up user..."),t.next=3,this.checkUsers(e);case 3:if(n=t.sent,s=!1,!0!==n){t.next=11;break}return"jumpGame-users",t.next=9,u.a.database().ref("jumpGame-users").push({username:e,password:i,points:0,highscore:0,items:1});case 9:s=!0,console.log("adding user to the database...");case 11:return console.log("user is signed up"),t.abrupt("return",s);case 13:case"end":return t.stop()}}),t,this)})));return function(e,i){return t.apply(this,arguments)}}()},{key:"loginUser",value:function(){var t=Object(h.a)(g.a.mark((function t(e,i){var n,s,o;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("logging in user..."),"jumpGame-users",t.next=4,u.a.database().ref("jumpGame-users").once("value");case 4:n=t.sent,s=!1,t.t0=g.a.keys(n.val());case 7:if((t.t1=t.t0()).done){t.next=21;break}if(o=t.t1.value,!n.val()[o].username){t.next=19;break}if(e!==n.val()[o].username){t.next=19;break}if(i!==n.val()[o].password){t.next=17;break}return s=!0,console.log("user successfully logged in"),t.abrupt("return",s);case 17:return s="Incorrect password",t.abrupt("return",s);case 19:t.next=7;break;case 21:return s="Account for username "+e+" does not exist. Please create an account.",t.abrupt("return",s);case 23:case"end":return t.stop()}}),t)})));return function(e,i){return t.apply(this,arguments)}}()},{key:"updatePoints",value:function(){var t=Object(h.a)(g.a.mark((function t(e,i){var n,s,o,a,r,A,h;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("updating points..."),n="jumpGame-users",t.next=4,u.a.database().ref(n).once("value");case 4:for(r in s=t.sent,a=o=0,s.val())s.val()[r].username&&(e===s.val()[r].username?(A=parseInt(s.val()[r].points),i+=A,a=o):o++);return h=Object.keys(s.val())[a],t.next=11,u.a.database().ref(n+"/"+h).child("points").set(i);case 11:return console.log("points updated"),t.abrupt("return",i);case 13:case"end":return t.stop()}}),t)})));return function(e,i){return t.apply(this,arguments)}}()}]),t}()),p=i(2),Q=750,C=1500,E=12,m=1,f=0,y=!1;function b(t,e){return Math.floor(Math.random()*e)+t}var v=function t(){Object(l.a)(this,t),this.gameState=0},w=function(){function t(){Object(l.a)(this,t),this.width=70,this.height=70,this.position={x:200,y:375},this.transform={x:200,y:375},this.gravityDeceleration=0,this.jumpBoost=0,this.stop=0,this.rotation=0,this.direction=1,this.x1=0,this.y1=0,this.h1=0,this.k1=0}return Object(d.a)(t,[{key:"draw",value:function(t){t.save();this.rotation+=this.direction,this.direction+=.5,this.direction>1&&(this.direction=1),this.rotation>80&&(this.rotation=80),this.rotation<-50&&(this.rotation=-50);var e=Math.sin(this.rotation*Math.PI/180),i=Math.cos(this.rotation*Math.PI/180),n=40;this.y1=n,this.h1=this.height*Math.cos(this.rotation*Math.PI/180)+this.width*Math.sin(this.rotation*Math.PI/180)-n,this.x1=this.height*Math.cos((90-this.rotation)*Math.PI/180)-n,this.k1=this.width*Math.cos(this.rotation*Math.PI/180)+this.height*Math.sin(this.rotation*Math.PI/180)-n,this.rotation<0&&(this.y1=this.width*Math.cos((90-this.rotation)*Math.PI/180)+n,this.h1=this.height*Math.cos(this.rotation*Math.PI/180)-this.width*Math.sin(this.rotation*Math.PI/180)-60,this.x1=-40,this.k1=this.width*Math.cos(this.rotation*Math.PI/180)-this.height*Math.sin(this.rotation*Math.PI/180)-60),this.position.x=this.transform.x-this.x1-50,this.position.y=this.transform.y+this.y1,t.transform(i,e,-e,i,this.transform.x-this.width*i/2,this.transform.y);var s=document.getElementById("spriteID");t.drawImage(s,0,0,this.width,this.height),t.restore()}},{key:"update",value:function(t){this.gravityDeceleration+=.2,this.transform.y+=this.gravityDeceleration}},{key:"jump",value:function(){this.gravityDeceleration=-6,this.direction=-7}}]),t}(),x=function(){function t(){Object(l.a)(this,t),this.tops=[0,10,20,30,40],this.heights=[10,10,10,10,10],this.speed=10,this.positionX=1200,this.window=200,this.correct=1}return Object(d.a)(t,[{key:"create",value:function(){this.tops[0]=0,this.tops[1]=b(37.5,150),this.tops[2]=this.tops[1]+this.window,this.tops[3]=this.tops[2]+b(75,112.5),this.tops[4]=this.tops[3]+this.window,this.correct=1+2*(b(1,2)-1),this.answerCorrect=m*b(2,9),this.answerIncorrect=m*b(2,9)+b(1,m-1)}},{key:"draw",value:function(t){for(var e=0;e<this.tops.length;e++)t.fillStyle="rgb(100, 100, 100)",1!==e&&3!==e||(t.fillStyle="white",y&&(t.fillStyle="red")),e===this.correct&&y&&(t.fillStyle="green"),e+1<this.tops.length?t.fillRect(this.positionX,this.tops[e],40,this.tops[e+1]-this.tops[e]):t.fillRect(this.positionX,this.tops[e],40,Q-this.tops[e]),1!==e&&3!==e||(t.fillStyle="blue",t.font="30px Verdana",e===this.correct?t.fillText(this.answerCorrect,this.positionX,this.tops[e]+this.window/2):t.fillText(this.answerIncorrect,this.positionX,this.tops[e]+this.window/2))}},{key:"update",value:function(t){this.positionX-=E,this.positionX+40<0&&(this.positionX=C,this.create()),f+=E,document.getElementById("scoreID").innerHTML="Score: "+f}}]),t}(),j=function(){var t=Object(n.useState)(""),e=Object(c.a)(t,2),i=e[0],s=e[1],o=Object(n.useState)(""),a=Object(c.a)(o,2),r=a[0],A=a[1];function d(t){return l.apply(this,arguments)}function l(){return(l=Object(h.a)(g.a.mark((function t(e){var i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return document.getElementsByClassName("signIn")[0].style.display="block",document.getElementsByClassName("signUp")[0].style.display="none",document.getElementById("usernameID").innerHTML="Welcome "+e,t.next=5,I.getPoints(e);case 5:i=t.sent,document.getElementById("pointsID").innerHTML="You have "+i+" points";case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(){return(u=Object(h.a)(g.a.mark((function t(e,i,n,s){var o;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i.transform.y>Q&&(i.transform.y=Q,e.gameState=-1),o=!0,i.position.x+i.k1>n.positionX&&i.position.x<n.positionX+40&&(o=!1,i.position.y>n.tops[n.correct]&&i.position.y+i.h1<n.tops[n.correct]+n.window&&(o=!0)),!1!==o){t.next=12;break}return e.gameState=-1,y=!0,n.draw(s),i.draw(s),t.next=10,B();case 10:t.next=12;break;case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(){return j.apply(this,arguments)}function j(){return(j=Object(h.a)(g.a.mark((function t(){var e;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=sessionStorage.getItem("savedUsername"))){t.next=4;break}return t.next=4,I.updatePoints(e,f);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return k.apply(this,arguments)}function k(){return(k=Object(h.a)(g.a.mark((function t(){var e,i,n,s,o,a,r,A;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(console.log("game has begun, speed is "+E),document.getElementById("gameScreen").width=C,document.getElementById("gameScreen").height=Q,document.getElementById("speedID").innerHTML="Speed: "+E,(e=new v).gameState=1,i=document.getElementsByClassName("speedBtn"),n=0;n<i.length;n++)i[n].disabled=!0;s=new w,document.addEventListener("keydown",(function(t){switch(t.key){case" ":s.jump()}})),(o=document.getElementById("gameScreen")).addEventListener("click",(function(){s.jump()})),a=o.getContext("2d"),s.draw(a),r=3;case 15:if(!(r>0)){t.next=25;break}return a.clearRect(0,0,C,Q),a.font="60px Verdana",a.fillText("Multiples of "+m,450,375),a.fillText(r,600,475),t.next=22,new Promise((function(t){setTimeout((function(){t(2)}),1e3)}));case 22:r--,t.next=15;break;case 25:(A=new x).create(),requestAnimationFrame((function(t){U(t,a,e,s,A)}));case 28:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){m=b(2,10)}Object(n.useEffect)((function(){var t=sessionStorage.getItem("savedUsername");t?d(t):(document.getElementsByClassName("signIn")[0].style.display="none",document.getElementsByClassName("signUp")[0].style.display="block")}));var D=0;function U(t,e,i,n,s){if(1===i.gameState){var o=t-D;D=t,e.clearRect(0,0,C,Q),e.font="60px Verdana",e.fillText("Multiples of "+m,450,375),s.update(o),s.draw(e),n.update(o),n.draw(e),requestAnimationFrame((function(t){U(t,e,i,n,s)})),function(t,e,i,n){u.apply(this,arguments)}(i,n,s,e)}else{console.log("game over"),document.getElementById("resetBtn").style.display="block";for(var a=document.getElementsByClassName("speedBtn"),r=0;r<a.length;r++)a[r].disabled=!1}}function F(){return(F=Object(h.a)(g.a.mark((function t(){var e,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=sessionStorage.getItem("savedUsername"),t.next=3,I.getPoints(e);case 3:i=t.sent,document.getElementById("pointsID").innerHTML="You have "+i+" points",f=0,console.log("reset"),document.getElementById("resetBtn").style.display="none",y=!1,S(),O();case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(t){document.getElementById("formMsgID").innerHTML=t,document.getElementById("formSubmitMsg").innerHTML=t,M()}function M(){"block"===document.getElementById("loginFormID").style.display?(document.getElementById("loginFormID").style.display="none",document.getElementById("openLoginBtnID").style.display="block",document.getElementById("openSignUpBtnID").style.display="block"):(document.getElementById("loginFormID").style.display="block",document.getElementById("openLoginBtnID").style.display="none",document.getElementById("openSignUpBtnID").style.display="none")}function K(){return(K=Object(h.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(i.length>=4&&i.length<=50)){t.next=20;break}if(!(r.length>=4&&r.length<=50)){t.next=16;break}if("Login"!==document.getElementById("formMsgID").innerHTML){t.next=7;break}console.log("logging in user"),N(i,r),t.next=12;break;case 7:return console.log("creating in user"),t.next=10,I.signUpUser(i,r);case 10:!1===t.sent?alert("A username with that email already exists. Please use a different email"):N(i,r);case 12:console.log("'"+i+"'"),console.log("'"+r+"'"),t.next=18;break;case 16:alert("Password must be between 4 and 50 characters long"),A("");case 18:t.next=21;break;case 20:alert("Username must be between 4 and 50 characters long");case 21:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(t,e){return R.apply(this,arguments)}function R(){return(R=Object(h.a)(g.a.mark((function t(e,i){var n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.loginUser(e,i);case 2:if(!0!==(n=t.sent)){t.next=10;break}return sessionStorage.setItem("savedUsername",e),M(),t.next=8,d(e);case 8:t.next=12;break;case 10:A(""),alert(n);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(p.jsxs)("div",{className:"Flappy",children:[Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"signUp",children:[Object(p.jsx)("button",{id:"openLoginBtnID",type:"submit",className:"btn btn-primary",onClick:function(){return L("Login")},children:"Login"}),Object(p.jsx)("button",{id:"openSignUpBtnID",type:"submit",className:"btn btn-success",onClick:function(){return L("Create User")},children:"Create Account"}),Object(p.jsxs)("form",{id:"loginFormID",style:{display:"none"},onSubmit:function(){return K.apply(this,arguments)},children:[Object(p.jsx)("h4",{id:"formMsgID",children:"Login"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Username"}),Object(p.jsx)("input",{type:"text",required:!0,value:i,onChange:function(t){return s(t.target.value)},className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter Username"})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:"Password"}),Object(p.jsx)("input",{type:"password",required:!0,value:r,onChange:function(t){return A(t.target.value)},className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})]}),Object(p.jsx)("button",{id:"formSubmitMsg",type:"submit",className:"btn btn-primary",children:"Login"}),Object(p.jsx)("button",{className:"btn btn-secondary",onClick:M,children:"Hide"})]})]}),Object(p.jsx)("h4",{id:"scoreID",style:{display:"inline"},children:"Score: 0"}),Object(p.jsx)("br",{}),Object(p.jsx)("canvas",{id:"gameScreen",height:"800",width:"800"}),Object(p.jsx)("br",{}),Object(p.jsx)("table",{children:Object(p.jsx)("tbody",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsxs)("div",{className:"signIn",style:{display:"none"},children:[Object(p.jsx)("h4",{id:"usernameID",children:" "}),Object(p.jsx)("p",{id:"pointsID",children:" "}),Object(p.jsx)("button",{className:"btn btn-secondary",onClick:function(){sessionStorage.clear(),s(""),A(""),document.getElementsByClassName("signIn")[0].style.display="none",document.getElementsByClassName("signUp")[0].style.display="block"},children:"Logout"})]})}),Object(p.jsxs)("td",{children:[Object(p.jsx)("button",{id:"resetBtn",className:"btn btn-light",onClick:function(){return F.apply(this,arguments)},children:"Play Again?"}),Object(p.jsx)("p",{id:"testID"}),Object(p.jsx)("button",{className:"speedBtn btn btn-light",onClick:function(){--E<0&&(E=0),document.getElementById("speedID").innerHTML="Speed: "+E},style:{display:"inline"},children:"-"}),Object(p.jsx)("p",{id:"speedID",style:{display:"inline"},children:"Speed:"}),Object(p.jsx)("button",{className:"speedBtn btn btn-light",onClick:function(){++E>20&&(E=20),document.getElementById("speedID").innerHTML="Speed: "+E},style:{display:"inline"},children:"+"})]})]})})}),Object(p.jsx)("img",{id:"spriteID",alt:"potter",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAegAAAHeCAYAAABQc5i8AAAACXBIWXMAABYlAAAWJQFJUiTwAAAmVUlEQVR4Xu3db4hm13kY8B2vJFuKHWxiR45Uu1WR7I3bSEQ42wRKKakoBUmuv7n0w5iRSoipCKaBEPLHmIQIf0ihFCUkhe2y88GQb4FIpYH9UGpKEsleIhGMbImosS3Zbm3HcSJLljSanCvNyit5dt/n3vfce8+f38DLrjTnnvM8v+fM+8x9Z96zJ074IECAAAECBIoT2CkuIgERKF/gsPwQi47Q807R5RFcKQJvKiUQcRAgQIAAAQLfF9Cg7QYCBAgQIFCggAZdYFGERIAAAQIENGh7gAABAgQIFCigQRdYFCERIECAAAEN2h4gQIAAAQIFCmjQBRZFSAQIECBAQIO2BwgQIECAQIECGnSBRRESAQIECBBwoo89ULOAE71qrl6+2D2P5bM0U0EC7qALKoZQCBAgQIDARQEN2l4gQIAAAQIFCmjQBRZFSAQIECBAQIO2BwgQIECAQIECGnSBRRESAQIECBDQoO0BAgQIECBQoIAGXWBRhESAAAECBDRoe4AAAQIECBQooEEXWBQhESBAgAABJ/DYAyUKOCGsxKrUHdOwp9yQ1F3DIqO/947bv5UCe0em4P7uzPkLb7s4lw2bSdU0BAgQINClQK7mPOC99VJBDbrL/SRpAt0JeLWwu5LXn7AGXX8NZUCAAAECDQpo0A0WVUoECBAgUL+ABl1/DWVAgAABAg0KaNANFlVKBAgQIFC/gAZdfw1lQIAAAQINCmjQDRZVSgQIECBQv4AGXX8NZUCAAAECDQpc1WBOUiJAgMBxAtET6rxn2v45kU4I+05ieO1Ur8uRnL7lxmFfbdwzDz/x9GhVd9CjyVxAgAABAh0IbGzORwYbm/NUKw16qpzrCBAgQIDAjAIa9Iy4piZAgAABAlMFNOipcq4jQIAAAQIzCmjQM+KamgABAgQITBXQoKfKuY4AAQIECMwooEHPiGtqAgQIECAwVUCDnirnOgIECBAgMKOABj0jrqkJECBAgMBUASeJTZVz3RSB6ElOU+Z2DQECBJoScAfdVDklQ4AAAQKtCGjQrVRSHgQIECDQlIAG3VQ5JUOAAAECrQho0K1UUh4ECBAg0JSABt1UOSVDgAABAq0IaNCtVFIeBAgQINCUgAbdVDklQ4AAAQKtCGjQrVRSHgQIECDQlIAG3VQ5JUOAAAECrQg4SayVSq6bhxPC1vWftPrh//1a6Lqdf/Tu0LiGBkX3805DOUulQAF30AUWRUgECBAgQECDtgcIECBAgECBAhp0gUUREgECBAgQ0KDtAQIECBAgUKCABl1gUYREgAABAgQ0aHuAAAECBAgUKKBBF1gUIREgQIAAAQ3aHiBAgAABAgUKaNAFFkVIBAgQINCVwMFRtt+6NGsniXW1B2ZLNnqiUvSEptkC7WHi6AlhuS0On3wo65Q7N9+ZdT6TERgE7r3j9u+kP962SeP0LTduGvLK5x9+4unQuDPnL0SfJ1+bzx10iNYgAgQIEGhEYGNzLiVPDbqUSoiDAAECBAhcIqBB2w4ECBAgQKBAAQ26wKIIiQABAgQIaND2AAECBAgQKFBAgy6wKEIiQIAAAQIatD1AgAABAgQKFNCgCyyKkAgQIECAgAZtDxAgQIAAgQIFnCRWYFGEVLZA9MSs6ElY0fmyq7z0udCUa8UXXTfqHEp23KDoyXijT5AaF4bRrQq4g261svIiQIAAgaoFNOiqyyd4AgQIEGhVQINutbLyIkCAAIGqBTToqssneAIECBBoVUCDbrWy8iJAgACBqgU06KrLJ3gCBAgQaFVAg261svIiQIAAgaoFNOiqyyd4AgQIEGhVQINutbLyIkCAAIGqBZwkVnX5igk+eqJSMQEvEUj0JKzssQRPCMu+7koTRp1nOHHMCWEr1byXZd1B91JpeRIgQIBAVQIadFXlEiwBAgQI9CKgQfdSaXkSIECAQFUCGnRV5RIsAQIECPQioEH3Uml5EiBAgEBVAhp0VeUSLAECBAj0IqBB91JpeRIgQIBAVQIadFXlEiwBAgQI9CLgoJJeKi1PAgQIEFha4OIhTl+ZsrAGPUXNNQQCAh/9jT8IjFpvyLlPfCTr4qXnmzXZVyeLnqDnxLEZ8N845b133P7X6f+9fdNSp2+5cdOQVz7/8BNPh8adOX9htvp6iTtUAoMIECBAoHCBjc258Ph/IDwNuraKiZcAAQIEuhDQoLsosyQJECBAoDYBDbq2iomXAAECBLoQ0KC7KLMkCRAgQKA2AQ26toqJlwABAgS6ENCguyizJAkQIECgNgENuraKiZdAPoGv55vKTAQI5BbQoHOLmo/AqwKR5jccdPE3M4C9tGHOF9Pnn0uP/zHD2t/dMOf3Zljz+aN8Ljf14PzsDOuaksCsAk4Sm5XX5DUJ7O7uhsINnph1/f7+fvSEoeiJVKH40qCrgwOzrrtivtdG8k31Hb5p+tFNY1Mem4b4PIFFBNxBL8JsEQLNC7xQQYZvqSBGIRJ4TUCDthkIEMghcE2OSWaeQ4OeGdj0eQU06LyeZiNAoFyB6Ev/5WYgsq4ENOiuyi1ZAl0LRH8noGskyZcjoEGXUwuRECBAgAABP4O2BwgQIECAQMkC7qBLro7YCBAgQKBbAQ2629JLnAABAgRKFtCgS66O2AgQqF0g62EwtWOIf5yAk8TGeRndsMC5T3wklF3wJLHQXAZVLeC3wrco36MPPvD5dPmPbzHFxUuHb4K++F//y3/PMFVZU7iDLqseoiFQq4A7xVort17cOZrzEP3wjdL710tjvpU16PlszUygJwENuqdqy3URAQ16EWaLECBQgIBvIgooghDiAhp03MpIAgTqFtCg665fd9Fr0N2VXMIECBAgUIOABl1DlcRIoHyBGn6juYYYy6+0CBcT0KAXo7YQgaYFamh+NcTY9CaR3DgBDXqcl9EECBAgkEfgq3mmaXcWDbrd2sqMAAECJQt8r+TgSojNSWIlVKH+GKIvHWb9LdrDJx+qX04GBOoRyPr1e+upm76ZM/Vf+Pg9oen+9KE/Do0rYZA76BKqIAYCBJYQyNpglgi48TV+pPH8tk5Pg96a0AQECFQioEFXUihhviqgQdsJBAgQIECgQAENusCiCIkAAQIECGjQ9gCBeQRenmfaYmet4eXjGmIstsACW15Ag17e3Ip9CPTWDHrLt49dLMtVBTToVfkt3rBAbw2rhnyjbwdseFtKrSYBDbqmaomVQLkCNTQ/z3fl7h+RHSNgw9oWBOYRqKFhzZO5WQl0JHB4eDjb17qTxDraSFItVmC2L/AFMx6Tw5ixC6bQ3FJZf+ywt7f32ST0wU1KZ8+e3TRk1c//3C/+fGj9nwuNOnHisYd+5+VHH3zguTR8uOG9Jj3euL9fSv/vT267675/EZzytWEa9Fgx4wkQOE6gt99a73EXbGzOPaIc5XztFXIf+uztU2y8xD1FzTUENgtkvXvZvNzqI15cPQIBEChX4LopoWnQU9RcQ2CzQG93lC9sJll9xMHqEQigV4FJzwcadK/bRd5zC9TQDIafjeX6qOGfDqwhxlz1ME9ZAhp0WfUQTecCNTTonHe9k56AFt4jXoZfGNxyrwlM+pGXO2g7iMA8ApO+IOcJ5bKz5ryDXjj0ScvV8E3TpMRc1KaABt1mXWW1vkBvDbqGt07VcJe//s4VwRwCk74+NOg5SmFOAidO1HC3lrNhTXoCWnij5Mx34dAtV7nApK8PDbryqgu/WIEfKjay7wf2jowx/nDGueaa6q1zTWxeAhsEJvVaB5XYV0sKRL+LDL08vHPznVljP3zyodB85z7xkci4z6RBF3/GezJywcJjDlIej6Q1fzrTuv8zzTP8EtbwysGbM805dZph/1y8Wx7sh7heSPn+7/Tnv9k0abC+H8u9/1JcoX2/Kf6Ln08nf30p/f290fFLj3vs8aeyLnnrqZuyzpd5skkNetJFmQM3HYEWBf5VSmpoDiU258F7iCtXcx7m+7fpMXzDv3ZzHmIZvhG81P7q9N/DKxobm/OIjfivR4xda2ixzXktkNrW1aBrq5h4CRAoQeCflxCEGNoW0KDbrq/sCBCYRyDnz+/nidCs1Qto0NWXUAIECKwg4LlzBfTelrTJequ4fAkQyCHguTOHojmuKGCT2SAECBAgQKBAAQ26wKIIiQABAgQIaND2AAECBAgQKFDAQSUFFkVIBAisKvDNtPrX02M4aOba9HhbelyTHsMNzfCcORx88rlVI7R4FwLRk526wJBkMQJZT1SKZvXogw+EhhZ+YlEohx4HRU+uuu2u+3I/L4b2czr56+lUlxt7qc3Zs2dDqUZP+AtNNsOgOfeVl7hnKJgpCRAgMEGgm+Y8wabLSzToLssuaQIECBBYUCD0Ksob49GgF6yQpQgQIECgS4FJ//ysBt3lXpE0AQIECCwoMOnfItegF6yQpQgQIECgS4FJv3ioQXe5VyRNgAABAgsKDP/k6egPDXo0mQsIECBAgMD8Ahr0/MZWIECAAIG+BSb9kpiTxPreNLInQIAAge0Fnk1TDG+lGn7WPJw+d+nN7/Ppvx+dsoQGPUXNNXMLRH+hYtJ7C+cOfq75d26+c66pF5239JOhcmOkE8L+LM35z3LPa755BeY8ISwauZe4o1LGESBAYJrAO6Zd5qreBTTo3neA/AkQmFvgrXMvYP42BTToNusqKwIEyhEY/iUsHwRGC2jQo8lcQIAAgVECk94DO2oFg5sU0KCbLKukCBAoSOBkQbEIpSIBDbqiYgmVAIEqBTToKsu2ftAa9Po1EAEBAm0LRN822LaC7EYLaNCjyVxAgACBUQKeZ0dxGXxRwEEl9gIBAj0JfPeSZIfnv+Hl5+EOdzj05sX0eHIGDA16BtQFphz2xN8drTPskTenx1DL4Z+OfOlov/zVnHFo0HPqmnuqQOiEsN3d3c+kBX4yPa74PtNf3d+PxXHXfaFxjz34QGjcraduCo2LDurtBK6oS/TEp1vv/I9v2tnZCe2t6NrBcV7iDkIdNyxa3y2WOO7Sw9vuum/1b6xWDyAzqun6EvjxTc25Lw7ZXklgpeY8hKRB17c1XyghZA26hCqIYarAO6de6DoCCwqscde+YHpNLjW8nL36hwa9egkEQIBA4wIadOMFnis9DXouWfMSIEDgVYHhl4p8EBgtoEGPJnMBAQIERgm4gx7FZfBFAQ3aXiBAoAeBNX/pR4PuYYfNkKMGPQOqKQkQKE7gSytG5Le4V8SveWkNuubqiZ0AgajAn0cHzjDOWdwzoPYwpYNKeqiyHAkQWPMO2vNsWfvv2RTOQXoMb6U67u1Uwy/1PV5CyDZOCVXoJ4bQz+LSCWF/kUj+aaksbyn8xLFS3cbGFT1BKliP/5TW/8WxMVxp/N7e3ufS5z+QHm/JOa+5Xi/wpw/9cYjk4SeeDo07c/7CFU8eDE2y0CAvcS8EbZlRAsU251FZGNy6wHs159ZLvG5+GvS6/lYnQKBegWvqDV3kNQho0DVUSYwECJQo4EeEJValoZg06IaKKRUCBBYV8PapRbn7W0yD7q/mMiZAII+AIzzzOJrlMgIatK1BgACBaQIa9DQ3VwUFNOgglGEECBB4g0DobYPUCEwV0KCnyrmOwGaB720eYgQBAgSOF/BbiHYGgfkEfjtNfUt6/JP0uCE9rkuP4djH4ZeLhruv4XH1fMub+VKBw8PDnfSR8663mgMv7IQ6BTToOusm6hECv7W7Gxr9q/v7oXHRQbfddd+vRcY++uADOZtGZMlVxwRP/gofz/Wpvb1YPvfc81w6/evbafDw/uXh9K9rYxcuM+rs2bPLLPSGVZLJKutadLOABr3ZyAgCcwsM5wL7BxXmVn713OXr51/GCgTyCPgZdB5HsxDYRkBz3kbPtQQaFdCgGy2stAgQIECgbgENuu76iZ4AAQIEGhXQoBstrLQIECBAoG4BDbru+omeAAECBBoV0KAbLay0CBAgQKBuAW+zqrt+oiewrcDfpgleSI/hvcHD88FwiMrwtq/hnOnhfcKeI7YVLv/6p1KIN5UfZn8R+uLrr+YyLk/gqymkH1sgrOfSGt9Mj/+fHl9Oj6E5XzwkZXiP8HB4x/Dn8DH8/+HtX88f/f1H0p/DaWjvPhoXDXdo9t85WvOx9OdfpscvRS/uaNyfpFx/ZqV8v3hU6/eutL5lLyPg3zO1NXIIDHdbG/fS7u7uk2nczTkWHOY4eTL29uGDg6FHbP6IzvfLwROf3h8w2RzVfCO+8P3mfMVFcucRXTeaefgkseiEwXEznPy18WsoGNrYYUWfZPf7H7s7lM/DTzwdGnfm/IW1nEPxXTrIz6BHk7ngGIHohs/WnFWBAAECrQto0K1XWH4ECBAgUKWABl1l2QRNgAABAq0LaNCtV1h+BAgQIFClgAZdZdkETYAAAQKtC2jQrVdYfgQIECBQpYAGXWXZBE2AAAECrQto0K1XWH4ECBAgUKWABl1l2QRNgMDKAt/OvH7Rh4VkznXN6Z5Zc/Gxazvqc6yY8bMLRE/0mj2QLRfIfWJW9ESv3OtG54vGtyXr7JcHTwh7ewokekDP7DFvucAqedx7x+1fS3Ffvyn2Fk8I25Tzxc+7g45KGUeAAAECOQXelnOyFufSoFusqpwIECBQvsB15Ye4boQa9Lr+VidAgAABAscKaNA2BgECBAgQKFBAgy6wKEIiQIAAAQIatD1AgAABAgQKFNCgCyyKkAgQIECAgAZtDxAgQGC8gINFxpu5YqSABj0SzHACBJoWeCSQneYcQAoM+UZgzKYhQy2Gx9ObBtb4+VVOkKkRSsxXFAg9Ye3t7WVlPDg4yDpf7hPMgidSnUgndYU+3vfITd9JA394w+Bnv/hTT/1QaMLMg1J8n09Tvic9rnQAxXMpvmsjS38q836J1iPF5nkxUiBjZhdw1OfsxBYgkE1gU3MeFlqlOR9l+IFApqHmHJjHEALNC3iJu/kSS5AAAQIEahTQoGusmpgJECBAoHkBDbr5EkuQAAECBGoU0KBrrJqYCRAgQKB5AQ26+RJLkAABAgRqFNCga6yamAkQIECgeQENuvkSS5AAAQIEahTQoGusmpgJEBgrMByiEvkIHboTmcgYAtsKODFnW8G2rw89We3u7oYUoid15T4hLBRcGhSNLzpfdFz0hKtz586Fptz9wCdD49KJXqFx0UHpJLHQ0Ht+91+GxkUHRf3SfJ7voqjGFSHgDrqIMgiCAAECBAi8XkCDtiMIECBAgECBAhp0gUUREgECBAgQ0KDtAQIECBAgUKCABl1gUYREgAABAgQ0aHuAAAECBAgUKKBBF1gUIREgQIAAAQ3aHiBAgAABAgUKaNAFFkVIBAgQIEDgKgRdCkRPCHs86ZzaJJT7BK79/f1NS77y+dwnmIUWnWHQ3t5eaNaPfvSjoXEnNp849kSa6PndRz75E7EJY6P2P//J2MAT/ys4zjACfQto0H3Xf1P2G5vzpgl8vkiBv0lRvVRkZIIiQOA1AQ3aZiDQn8DNKeWX+0tbxgTqEtCg66qXaAnkEHh7jknMQYDAvAJ+SWxeX7MTIECAAIFJAhr0JDYXESBAgACBeQU06Hl9zU6AAAECBCYJaNCT2FxEoHqB71afgQQINC6gQTdeYOkRuIzAV8kQIFC2gAZddn1ER2AOgS+kSR+dY2JzEiCQT8DbrPJZmmmDwMHBwSpG0XVzn4iWO9mMJ469P8X2/nTi2KfTn/8uPXyjnrtY5iOQQcAXZgZEUxCoVOCtmnOllRN2FwIadBdlliSBYwU+xIUAgXIFNOhyayMyAgQIEOhYQIPuuPhSJ0CAAIFyBTTocmsjMgIECBDoWECD7rj4UidAgACBcgU06HJrIzICBAgQ6FhAg+64+FIn0IDAMw3kIAUCxwpo0DYGAQI1CzweDP4wOM4wAsUILHWSWCtfHDsrVS6r3+7u7nDU43Ca1BU/Sj9Za1P8vX4+44ljrxCeO3duFcqzZ89G1v3ZNGitr8tIfMZsKXDvHbd/OU3xD7acJnr58Fz7Unp85cz5C/84etFc49xBzyVb9rwbm3PZ4YuOAIGOBN69YK7DN3tXp8eNC6552aU06BKqIAYCBAgQuJzAGn3qmhLKsUbiJeQtBgIECBCoQ6DbPtVt4nXsS1ESIECAQK8CGnSvlZc3AQIECBQtoEEXXR7BESBAgECvAhp0r5WXNwECBAgULaBBF10ewREgQIBArwIadK+VlzcBAgQIFC2w1EliIYR0wlVo3AqDPpvW/Pr+/n7WE72ieSSXYf0PRscvPe7g4GDpJV9ZL9UjtG7B+yoU/1yDWjlxbC4f875eIJ3o9bX0f65f2uX0LaudGRJ5vv9GOnHsXXOZuIOOyf7kGhvzktCKbc4xPqMIEGhAYPHmXIHZO+eMUYOO6Z4s+Q42loJRBAgQIFCTgAZdU7XESoAAAQLdCGjQ3ZRaogQIECBQk4AGXVO1xEqAAAEC3Qho0N2UWqIECBAgUJOABl1TtcRKgAABAt0IaNDdlFqiBAgQIFCTgAZdU7XESoAAAQLdCBR1kljp6q2cSHXy5PC2bh8EYgK5TxyLzheLrr9RHZ7o1V+RjzJ2B91t6SVOgEClAk70qrRwY8PWoMeKGU+AAAECBBYQ0KAXQLYEAQIECBAYK6BBjxUzngABAgQILCCgQS+AbAkCBAgQIDBWQIMeK2Y8AQIECBBYQECDXgDZEgQIECBAYKyABj1WzHgCBAgQILCAwFIN+jCYy/8JjjOMAAECBAisLfCVOQNY6iSx0DcC+/v7oUbeyolecxY2x9wHBwc5pjFHJwK9nRCWTvT6Uirte5Yu7+lbblx6ySrWe/iJp7PGeeb8hZ2sE06YLNQ4J8zrEgIECLQucEPrCcpvXQENel1/qxMgQIAAgWMFNGgbgwABAtME/Ksz09xcFRTQoINQhhEgQIAAgSUFNOglta1FgAABAgSCAhp0EMowAgQIECCwpIAGvaS2tQgQIECAQFBAgw5CGUaAAAECBJYU0KCX1LYWAQIECNQg8EwJQS51klgJuYphZYF0UtwqEUTX7e0krGgxzp49Gxq6ll860etrKcB3pceiNxxO9Dp+W+Q+0Su0+dKgEk7+isYaHadBR6WMI0CgVIHrSw1MXAS2EVj0O85tAnUtAQIECBDoSUCD7qnaciVAgACBagQ06GpKJVACBAgQ6ElAg+6p2nIlQIAAgWoENOhqSiVQAgQIEOhJQIPuqdpyJUCAAIFqBDToakolUAIECBDoSUCD7qnaciVAgECbAt9sMa2ddArPsymx6wpI7jDFsBOJI50YExl2Ynd3NzTOoO0Eoid1bbfK/FevdRLW/Jkdv0L0hLAvZA7wfU8+lHXG//affy/rfK1M5kSv+is53EGX0JwHyVBzrp9cBgQIECBAYLOAl7g3GxlBgAABAgQWF9CgFye3IAECBAgQ2CygQW82MoIAAQIECCwuoEEvTm5BAgQIECCwWUCD3mxkBAECBAgQWFxAg16c3IIECBAgQGCzgAa92cgIAgQIECCwuMBVi69oQQIECBBoUWA4bOorLSa2Vk5X/eb+g+9Iiw+HhFxz9OfJX9+9K4T84dOnVok7uu7d9++H4nPi2PFM0RPC0ml0IefoCXChyQy6rEDuE8Jyn/yVu3TRE7NO33Jj7qVD80XjC002YlD6enP40wivEocOd9AvHgU2fPdzssQgxUSAAAECBHoTGH4GPTTmg0sevRnIlwABAgQIFCcw3EG/dNScLwY3NGsfBAgQIECAwIoCwx30yzfccMPQlF8+isPPLVYsiKUJECBAgMAgcOnbrIaXun0QIECAAAECBQgML3GffOaZZ4bmPDTr4e7ZHXQBhRECAQIECPQtMDTo4XH1UYMe/u7wkr73hOwJECBAoACBiw15eHvV0Jg15wKKIgQCBAgQIDA06Lenx3NHd9GDiCZtXxAgQKBegeFHln9Vb/givyiwk06BmvzLYdETvUrnvvv+T4dCbOXEsegJYX/0K/8+5PKHDz8eGlf6SWJ7e3uhPNYa1MoJYY89/lSI8NZTN4XGRQf9h5//9ejQrOOc6JWVs6vJ3C13VW7JEiBAgEAtAhp0LZUSJwECBAh0JaBBd1VuyRIgQIBALQIadC2VEicBAgQIdCWgQXdVbskSIECAQC0CGnQtlRInAQIECHQloEF3VW7JEiBAgEAtAhp0LZUSJwECBAh0JTA06BfS43tdZS1ZAgQILCPwzDLLWKVFgavSKTdvfmNi25wuViNS9MSsu+/fD6W31oljuU8ICyVr0NYCuU8I2zqgRif4hY/fE8nsj267674PRQYaQ2BuAS9xzy1sfgIEahJ4X03BirVtAQ267frKjgCBcQLvGTfcaALzCWjQ89mamQCB+gSuqy9kEbcqoEG3Wll5ESBAgEDVAhp01eUTPAECBAi0KqBBt1pZeREgQIBA1QIadNXlEzwBAgQItCqgQbdaWXkRIDBF4GDKRa4hMIfA5Rr0l9Jih3MsaE4CBAisKPDttPZfp8ffpsdwguLFhjw83z2XHo+sGJulCbxOYGcbj+iJYx8+fWqbZaq79u77P71KzNET0XIH94cPPx6aMp1aFxpnUFkCh08+tEpAjz3+VNZ10wlhWz3fZQ3GZAQCAl7iDiAZQoBA9QJeuq6+hP0loEH3V3MZE+hR4GSPScu5bgENuu76iZ4AAQIEGhXQoBstrLQIECBAoG4BDbru+omeAAECBBoV0KAbLay0CBAgQKBuAQ267vqJngABAgQaFdCgGy2stAgQIECgboGr6g5f9AQIVCgwvCd5OLnr+fQY/j68Berq9HjzjLk8OuPcpiYwi4AGPQPrWid6zZCKKQmc2Ln5ztwKnndyi5qvSQEvcTdZVkkRIECAQO0CGnTtFRQ/AQIECDQpoEE3WVZJESBAgEDtAhp07RUUPwECBAg0KaBBN1lWSREgQIBA7QIadO0VFD8BAgQINCmgQTdZVkkRIECAQO0CGnTtFRQ/AQIECDQpoEE3WVZJESBAgEDtAsee6HPvHbc/lRL7h+mxU3uC4p9f4Mz5C/MvYoWWBIZjPnN+eJ7KqWmuYgQudwf9Hs25mBoJhAABAgQ6FLhcgx4Or/dBgAABAgQIrCTgZ9ArwVuWAAECBAhcSUCDtj8IECBAgECBAhp0gUUREgECBAgQ0KDtAQIECBAgUKDA5Rr0QYGxCokAAQIECHQjcLkG/WI3AhIlQIAAAQIFClyuQQ8HlTxXYLxCIkCAAAECXQgce5JYOhnqA5mzD50c9OHTpzIvazoCBAgQIFCngF8Sq7NuoiZAgACBxgU06MYLLD0CBAgQqFNAg66zbqImQIAAgcYFNOjGCyw9AgQIEKhTQIOus26iJkCAAIHGBTToxgssPQIECBCoU0CDrrNuoiZAgACBxgWWatAvNe4oPQIECBAgkFVgqQb9l1mjNhkBAgQIEGhcYKek/O6943YnjhVUkLvv/3RB0QilQ4Ginp869JfyygJL3UGvnKblCRAgQIBAXQIadF31Ei0BAgQIdCKgQXdSaGkSIECAQF0CGnRd9RItAQIECHQioEF3UmhpEiBAgEBdAhp0XfUSLQECBAh0IqBBd1JoaRIgQIBAXQIadF31Ei0BAgQIdCKgQXdSaGkSIECAQF0CW53Uk07++npK90frSvkHo/3w6VO1p/BK/E7+Kq6M0a+v0Al6xWU3f0BRv/kjsQKBFQS2vYOuvjmvYG5JAgQIECCwUWDbBr1xAQMIECBAgACB8QIa9HgzVxAgQIAAgdkFNOjZiS1AgAABAgTGC2jQ481cQYAAAQIEZhfQoGcntgABAgQIEBgvoEGPN3MFAQIECBCYXUCDnp3YAgQIECBAYLzAtg16OKjEBwECPyjg8BG7ggCBrQSaPqknnXS2ypPkWieTOUlsq6+FMRfn/rpZZZ+OSXilsbmdV0rDsgSmCWx7Bz1tVVcRIECAAAECVxTQoG0QAgQIECBQoIAGXWBRhESAAAECBDRoe4AAAQIECBQooEEXWBQhESBAgAABDdoeIECAAAECBQpo0AUWRUgECBAgQECDtgcIECBAgECBAq036C8n84MC3YVEgAABAgSuKHBVyz5nzl9470r5ORlqJfgtl3Vy1ZaALidAIJ9A63fQ+aTMRIAAAQIEFhTQoBfEthQBAgQIEIgKaNBRKeMIECBAgMCCAhr0gtiWIkCAAAECUQENOiplHAECBAgQWFBAg14Q21IECBAgQCAqoEFHpYwjQIAAAQILCmjQC2JbigABAgQIRAU06KjUuHFfHTd869HDwSj/b+tZTLCWgINt1pK3LoGCBZycVHBxJoTmiX4C2iWXlP710Ft9S6/HdrvN1QQ2CLiDtkUIECBAgECBAhp0gUUREgECBAgQ0KDtAQIECBAgUKCABl1gUYREgAABAgQ0aHuAAAECBAgUKKBBF1gUIREgQIAAAQ3aHiBAgAABAgUKaNAFFkVIBAgQIEBAg7YHCBAoUaC3Q1lKrIGYVhZwUs/KBVhpeU9+x8O38vVQen1bcV7py9eyvQi4g+6l0vIkQIAAgaoENOiqyiVYAgQIEOhFQIPupdLyJECAAIGqBDToqsolWAIECBDoRUCD7qXS8iRAgACBqgQ06KrKJVgCBAgQ6EVAg+6l0vIkQIAAgaoENOiqyiVYAgQIEOhFQIPupdKvz7P0gyz6rIqsCRAgcImAE31shysJ9NbIfT34eiBAoBgBd9DFlEIgBAgQIEDg+wIatN1AgAABAgQKFNCgCyyKkAgQIECAgAZtDxAgQIAAgQIFNOgCiyIkAgQIECCgQdsDBAgQIECgQAENusCiCIkAAQIECGjQ9gABAgQIEChQQIMusChCIkCAAAECTk6yB3IItHLimK+HHLvBHAQIZBFwB52F0SQECBAgQCCvgAad19NsBAgQIEAgi4AGnYXRJAQIECBAIK+ABp3X02wECBAgQCCLgAadhdEkBAgQIEAgr4AGndfTbAQIECBAIIuABp2F0SQECBAgQCCvgAad19NsBAgQIEAgi4AGnYXRJAQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIZBT4e1iSBRc2ZM+TAAAAAElFTkSuQmCC",style:{display:"none"}})]})},O=i.p+"static/media/dora1.26d2b5e5.png",k=i.p+"static/media/doraLeft.1f2dd769.png",S=i.p+"static/media/doraRight.48b4e079.png",D=i.p+"static/media/floor.3c58318d.png",U=i.p+"static/media/floorBad.f523f4c3.png",F=i.p+"static/media/forest.4084e9ae.png",L=i.p+"static/media/backgroundMusic.e69518ac.mp3",M=i.p+"static/media/gameOver.ecaf1372.mp3",K=i.p+"static/media/pop.5b688e1e.mp3",N=i.p+"static/media/fall.c2c56b90.mp3",R=800,G=800,P=function(){function t(e){Object(l.a)(this,t),this.width=160,this.height=30,this.position={x:0,y:0},this.answer=(Math.floor(12*Math.random())+1)*e,this.img=document.getElementById("floor"),this.loaded=0}return Object(d.a)(t,[{key:"draw",value:function(t){var e=this;if(this.img.addEventListener("load",(function(i){t.drawImage(e.img,e.position.x,e.position.y,e.width,e.height),e.loaded+=1})),0!==this.loaded){t.drawImage(this.img,this.position.x,this.position.y,this.width,this.height);var i=this.answer;t.font=this.height-10+"px Arial",t.fillStyle="white",t.fillText(i,this.position.x+60,this.position.y+24)}}}]),t}(),X=function(){function t(e){Object(l.a)(this,t),this.width=160,this.height=30,this.id=0,this.hit=0,this.position={x:0,y:0},this.colour="rgb(0, 0, 0)",this.answer=(Math.floor(12*Math.random())+1)*e+Math.floor(Math.random()*(e-2)+1),this.imgGood=document.getElementById("floor"),this.imgBad=document.getElementById("floorBad"),this.img=this.imgGood,this.loaded=0}return Object(d.a)(t,[{key:"draw",value:function(t){var e=this;if(this.img.addEventListener("load",(function(i){t.drawImage(e.img,e.position.x,e.position.y,e.width,e.height),e.loaded+=1})),0!==this.loaded){t.drawImage(this.img,this.position.x,this.position.y,this.width,this.height);var i=this.answer;t.font=this.height-10+"px Arial",t.fillStyle="white",t.fillText(i,this.position.x+60,this.position.y+24)}}}]),t}(),T=function(){function t(){Object(l.a)(this,t),this.gameState=0}return Object(d.a)(t,[{key:"draw",value:function(t){-1===this.gameState&&(t.rect(0,0,G,R),t.fillStyle="rgba(0,0,0,0.5)",t.fill(),t.font="30px Arial",t.fillStyle="white",t.textAlign="center",t.fillText("GAME OVER",400,400))}}]),t}(),H=function(){function t(){Object(l.a)(this,t),this.imageStill=document.getElementById("dora1"),this.imageLeft=document.getElementById("doraLeft"),this.imageRight=document.getElementById("doraRight"),this.image=this.imageStill,this.width=this.image.width,this.height=this.image.height,this.position={x:200,y:795-this.height},this.speed=5,this.movement=0,this.gravity=.2,this.gravitySpeed=0,this.onPlatform=0,this.buffer=1,this.loaded=1,this.score=0,this.printTest=0}return Object(d.a)(t,[{key:"draw",value:function(t){var e=this;this.imageStill.addEventListener("load",(function(i){t.drawImage(e.imageStill,e.position.x,e.position.y,e.width,e.height),e.loaded+=1})),this.imageLeft.addEventListener("load",(function(i){t.drawImage(e.imageLeft,e.position.x,e.position.y,e.width,e.height),e.loaded+=1})),this.imageRight.addEventListener("load",(function(i){t.drawImage(e.imageRight,e.position.x,e.position.y,e.width,e.height),e.loaded+=1})),0!==this.loaded&&t.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(t,e,i,n){if(-1!==n.gameState&&(this.position.x+=this.movement,this.position.x+this.width>G&&(this.position.x=G-this.width),this.position.x<0&&(this.position.x=0)),1===n.gameState){this.position.y+=1;for(var s=0;s<e.length;s++)if(this.position.x+this.width>e[s].position.x&&this.position.x<e[s].position.x+e[s].width&&Math.abs(this.position.y+this.height-e[s].position.y)<15&&(this.gravitySpeed>0||1===this.onPlatform)){this.imgSrc="still",this.onPlatform=1,this.gravitySpeed=0,this.position.y=e[s].position.y-this.height-this.buffer;var o=e[0];e[0]=e[s],e[s]=o,s=e.length}else this.onPlatform=0;for(var a=0;a<e.length;a++)e[a].position.y+=1,e[a].position.y>R&&(this.score+=1,document.getElementById("scoreID").innerHTML="Score: "+this.score,e[a].position.y=-e[a].height);for(var r=0;r<i.length;r++){if(i[r].position.y+=1,this.position.x+this.width>i[r].position.x&&this.position.x<i[r].position.x+i[r].width&&Math.abs(this.position.y+this.height-i[r].position.y)<15&&this.gravitySpeed>0)if(0===i[r].hit)i[r].hit=1,i[r].img=i[r].imgBad,new Audio(K).play(),r=0}if(0===this.onPlatform){if(this.gravitySpeed+=this.gravity,this.position.y+=this.gravitySpeed,this.gravitySpeed>0)if(this.position.y>R-this.height)this.score+=1,document.getElementById("scoreID").innerHTML="Score: "+this.score,this.position.y=795-this.height,this.gravitySpeed=0,n.gameState=-1,console.log("game over"),document.getElementById("backgroundMusic").pause(),document.getElementById("gameOverMusic").play()}else this.gravitySpeed=0;for(var A=0;A<i.length;A++)0!==i[A].hit&&(i[A].hit>10&&(i[A].hit=10),i[A].position.y+=i[A].hit,i[A].hit+=1),i[A].position.y>R&&(this.score+=1,document.getElementById("scoreID").innerHTML="Score: "+this.score,i[A].position.y=-i[A].height,i[A].hit=0,i[A].img=i[A].imgGood)}}},{key:"moveLeft",value:function(){this.movement=-this.speed,this.image=this.imageLeft}},{key:"moveRight",value:function(){this.movement=this.speed,this.image=this.imageRight}},{key:"jump",value:function(t){if(-1!==t.gameState){if(this.onPlatform=0,0===this.gravitySpeed)this.gravitySpeed=-8,new Audio(N).play();t.gameState=1}}},{key:"stop",value:function(){this.movement=0,this.image=this.imageStill}}]),t}(),V=function(){var t,e="",i="",s="",o=[],a=[],r=Math.floor(11*Math.random())+2,A=0,g=0;function h(t){var n=t-g;if(g=t,""!==s){s.clearRect(0,0,G,R);var r=document.getElementById("backgroundImage");r&&(0===A?r.addEventListener("load",(function(t){s&&(s.drawImage(r,0,0,G,R),A=1)})):s&&s.drawImage(r,0,0,G,R)),""!==e&&(e.update(n,o,a,i),e.draw(s));for(var c=0;c<a.length;c++)a[c].draw(s);for(var d=0;d<o.length;d++)o[d].draw(s);i.draw(s)}requestAnimationFrame(h)}return Object(n.useEffect)((function(){var n=document.getElementById("backgroundMusic");n.play(),n.loop=!0,console.log("beginning v 1.22"),document.getElementById("headingID").innerHTML="Which numbers are divisible by "+r,document.getElementById("scoreID").innerHTML="Score:",function(){t=document.getElementById("gameScreen"),s=t.getContext("2d"),e=new H,i=new T,e.draw(s),console.log("starting");for(var n=400,A=R,g=0;g<8;g++){var h=new P(r),c=Math.floor(120*Math.random())+60;Math.floor(10*Math.random())%2===0&&(c*=-1),n+c<0||n+c+h.width>G?n-=c:n+=c,A-=Math.floor(30*Math.random())+90,h.position.x=n,h.position.y=A-h.height,o.push(h)}for(var d=0;d<10;d++){var l=new X(r);l.position.x=Math.floor(Math.random()*(G-l.width)+10)+5,l.position.y=Math.floor(Math.random()*(R-l.height)-10)+5;for(var u=0,B=0;B<o.length;B++)l.position.x>o[B].position.x-o[B].width&&l.position.x<o[B].position.x+o[B].width&&l.position.y>o[B].position.y-o[B].height&&l.position.y<o[B].position.y+o[B].height&&(u=1,B=o.length);if(0===u)for(var I=0;I<a.length;I++)l.position.x>a[I].position.x-a[I].width&&l.position.x<a[I].position.x+a[I].width&&l.position.y>a[I].position.y-a[I].height&&l.position.y<a[I].position.y+a[I].height&&(u=1);1===u?d-=1:a.push(l)}}(),requestAnimationFrame(h)})),document.addEventListener("keydown",(function(t){if(""!==e)switch(t.key){case"ArrowLeft":e.moveLeft();break;case"ArrowRight":e.moveRight();break;case" ":e.jump(i)}})),document.addEventListener("keyup",(function(t){if(""!==e)switch(t.key){case"ArrowLeft":e.movement<0&&e.stop();break;case"ArrowRight":e.movement>0&&e.stop()}})),Object(p.jsxs)("div",{className:"Dora",children:[Object(p.jsx)("audio",{id:"backgroundMusic",controls:!0,src:L}),Object(p.jsx)("audio",{id:"gameOverMusic",controls:!0,src:M}),Object(p.jsx)("h3",{id:"headingID",children:"test"}),Object(p.jsx)("h4",{id:"scoreID",children:"Score:"}),Object(p.jsx)("canvas",{id:"gameScreen",width:"800",height:"800"}),Object(p.jsx)("img",{id:"dora1",src:O,style:{display:"none"},alt:"dora",height:"100",width:"70"}),Object(p.jsx)("img",{id:"doraRight",src:S,style:{display:"none"},alt:"doraRight",height:"100",width:"70"}),Object(p.jsx)("img",{id:"doraLeft",src:k,style:{display:"none"},alt:"doraLeft",height:"100",width:"70"}),Object(p.jsx)("img",{id:"floor",src:D,style:{display:"none"},alt:"floor"}),Object(p.jsx)("img",{id:"floorBad",src:U,style:{display:"none"},alt:"floorbad"}),Object(p.jsx)("img",{id:"backgroundImage",src:F,style:{display:"none"},alt:"backgroundimage"}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:function(){console.log("reset"),window.location.reload(!0)},children:"Play Again?"})]})},J=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(r.c,{children:[Object(p.jsx)(r.a,{path:"/",component:V,exact:!0}),Object(p.jsx)(r.a,{path:"/Dora",component:V}),Object(p.jsx)(r.a,{path:"/Flappy",component:j})]})})},Y=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,49)).then((function(e){var i=e.getCLS,n=e.getFID,s=e.getFCP,o=e.getLCP,a=e.getTTFB;i(t),n(t),s(t),o(t),a(t)}))},q=i(22);a.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(q.a,{children:Object(p.jsx)(J,{})})}),document.getElementById("root")),Y()}},[[47,1,2]]]);
//# sourceMappingURL=main.c83b6f89.chunk.js.map