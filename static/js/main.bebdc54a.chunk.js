(this["webpackJsonpjump-game"]=this["webpackJsonpjump-game"]||[]).push([[0],{10:function(t,i,e){},11:function(t,i,e){},13:function(t,i,e){"use strict";e.r(i);var o=e(1),s=e.n(o),n=e(5),a=e.n(n),h=(e(10),e(2)),d=e(3),r=(e(11),e.p+"static/media/dora1.26d2b5e5.png"),c=e.p+"static/media/doraLeft.1f2dd769.png",l=e.p+"static/media/doraRight.48b4e079.png",g=e.p+"static/media/floor.3c58318d.png",m=e.p+"static/media/floorBad.f523f4c3.png",p=e.p+"static/media/forest.4084e9ae.png",f=e.p+"static/media/backgroundMusic.e69518ac.mp3",y=e.p+"static/media/gameOver.ecaf1372.mp3",u=e.p+"static/media/pop.5b688e1e.mp3",v=e.p+"static/media/fall.c2c56b90.mp3",w=e(0),b=800,x=800,j=function(){function t(i){Object(h.a)(this,t),this.width=160,this.height=30,this.position={x:0,y:0},this.answer=(Math.floor(12*Math.random())+1)*i,this.img=document.getElementById("floor"),this.loaded=0}return Object(d.a)(t,[{key:"draw",value:function(t){var i=this;if(this.img.addEventListener("load",(function(e){t.drawImage(i.img,i.position.x,i.position.y,i.width,i.height),i.loaded+=1})),0!==this.loaded){t.drawImage(this.img,this.position.x,this.position.y,this.width,this.height);var e=this.answer;t.font=this.height-10+"px Arial",t.fillStyle="white",t.fillText(e,this.position.x+60,this.position.y+24)}}}]),t}(),I=function(){function t(i){Object(h.a)(this,t),this.width=160,this.height=30,this.id=0,this.hit=0,this.position={x:0,y:0},this.colour="rgb(0, 0, 0)",this.answer=(Math.floor(12*Math.random())+1)*i+Math.floor(Math.random()*(i-2)+1),this.imgGood=document.getElementById("floor"),this.imgBad=document.getElementById("floorBad"),this.img=this.imgGood,this.loaded=0}return Object(d.a)(t,[{key:"draw",value:function(t){var i=this;if(this.img.addEventListener("load",(function(e){t.drawImage(i.img,i.position.x,i.position.y,i.width,i.height),i.loaded+=1})),0!==this.loaded){t.drawImage(this.img,this.position.x,this.position.y,this.width,this.height);var e=this.answer;t.font=this.height-10+"px Arial",t.fillStyle="white",t.fillText(e,this.position.x+60,this.position.y+24)}}}]),t}(),S=function(){function t(){Object(h.a)(this,t),this.gameState=0}return Object(d.a)(t,[{key:"draw",value:function(t){-1===this.gameState&&(t.rect(0,0,x,b),t.fillStyle="rgba(0,0,0,0.5)",t.fill(),t.font="30px Arial",t.fillStyle="white",t.textAlign="center",t.fillText("GAME OVER",400,400))}}]),t}(),k=function(){function t(){Object(h.a)(this,t),this.imageStill=document.getElementById("dora1"),this.imageLeft=document.getElementById("doraLeft"),this.imageRight=document.getElementById("doraRight"),this.image=this.imageStill,this.width=this.image.width,this.height=this.image.height,this.position={x:200,y:795-this.height},this.speed=5,this.movement=0,this.gravity=.2,this.gravitySpeed=0,this.onPlatform=0,this.buffer=1,this.loaded=1,this.score=0,this.printTest=0}return Object(d.a)(t,[{key:"draw",value:function(t){var i=this;this.imageStill.addEventListener("load",(function(e){t.drawImage(i.imageStill,i.position.x,i.position.y,i.width,i.height),i.loaded+=1})),this.imageLeft.addEventListener("load",(function(e){t.drawImage(i.imageLeft,i.position.x,i.position.y,i.width,i.height),i.loaded+=1})),this.imageRight.addEventListener("load",(function(e){t.drawImage(i.imageRight,i.position.x,i.position.y,i.width,i.height),i.loaded+=1})),0!==this.loaded&&t.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(t,i,e,o){if(-1!==o.gameState&&(this.position.x+=this.movement,this.position.x+this.width>x&&(this.position.x=x-this.width),this.position.x<0&&(this.position.x=0)),1===o.gameState){this.position.y+=1;for(var s=0;s<i.length;s++)if(this.position.x+this.width>i[s].position.x&&this.position.x<i[s].position.x+i[s].width&&Math.abs(this.position.y+this.height-i[s].position.y)<15&&(this.gravitySpeed>0||1===this.onPlatform)){this.imgSrc="still",this.onPlatform=1,this.gravitySpeed=0,this.position.y=i[s].position.y-this.height-this.buffer;var n=i[0];i[0]=i[s],i[s]=n,s=i.length}else this.onPlatform=0;for(var a=0;a<i.length;a++)i[a].position.y+=1,i[a].position.y>b&&(this.score+=1,document.getElementById("scoreID").innerHTML="Score: "+this.score,i[a].position.y=-i[a].height);for(var h=0;h<e.length;h++){if(e[h].position.y+=1,this.position.x+this.width>e[h].position.x&&this.position.x<e[h].position.x+e[h].width&&Math.abs(this.position.y+this.height-e[h].position.y)<15&&this.gravitySpeed>0)if(0===e[h].hit)e[h].hit=1,e[h].img=e[h].imgBad,new Audio(u).play(),h=0}if(0===this.onPlatform){if(this.gravitySpeed+=this.gravity,this.position.y+=this.gravitySpeed,this.gravitySpeed>0)if(this.position.y>b-this.height)this.score+=1,document.getElementById("scoreID").innerHTML="Score: "+this.score,this.position.y=795-this.height,this.gravitySpeed=0,o.gameState=-1,console.log("game over"),document.getElementById("backgroundMusic").pause(),document.getElementById("gameOverMusic").play()}else this.gravitySpeed=0;for(var d=0;d<e.length;d++)0!==e[d].hit&&(e[d].hit>10&&(e[d].hit=10),e[d].position.y+=e[d].hit,e[d].hit+=1),e[d].position.y>b&&(this.score+=1,document.getElementById("scoreID").innerHTML="Score: "+this.score,e[d].position.y=-e[d].height,e[d].hit=0,e[d].img=e[d].imgGood)}}},{key:"moveLeft",value:function(){this.movement=-this.speed,this.image=this.imageLeft}},{key:"moveRight",value:function(){this.movement=this.speed,this.image=this.imageRight}},{key:"jump",value:function(t){if(-1!==t.gameState){if(this.onPlatform=0,0===this.gravitySpeed)this.gravitySpeed=-8,new Audio(v).play();t.gameState=1}}},{key:"stop",value:function(){this.movement=0,this.image=this.imageStill}}]),t}(),M=function(){var t=0,i=0,e=0,s=0,n=[],a=[],h=Math.floor(11*Math.random())+2,d=0,u=0;function v(e){d=parseInt(document.getElementById("backgroundLoaded").innerHTML);var o=e-u;if(u=e,0!==s){s.clearRect(0,0,x,b);var h=document.getElementById("backgroundImage");0===d?h.addEventListener("load",(function(t){s.drawImage(h,0,0,x,b),document.getElementById("backgroundLoaded").innerHTML=1})):s.drawImage(h,0,0,x,b),0!==t&&(t.update(o,n,a,i),t.draw(s));for(var r=0;r<a.length;r++)a[r].draw(s);for(var c=0;c<n.length;c++)n[c].draw(s);i.draw(s)}requestAnimationFrame(v)}return Object(o.useEffect)((function(){var o=document.getElementById("backgroundMusic");o.play(),o.loop=!0,console.log("beginning v 1.22"),document.getElementById("headingID").innerHTML="Which numbers are divisible by "+h,document.getElementById("scoreID").innerHTML="Score:",function(){e=document.getElementById("gameScreen"),s=e.getContext("2d"),t=new k,i=new S,t.draw(s),console.log("starting");for(var o=400,d=b,r=0;r<8;r++){var c=new j(h),l=Math.floor(120*Math.random())+60;Math.floor(10*Math.random())%2===0&&(l*=-1),o+l<0||o+l+c.width>x?o-=l:o+=l,d-=Math.floor(30*Math.random())+90,c.position.x=o,c.position.y=d-c.height,n.push(c)}for(var g=0;g<10;g++){var m=new I(h);m.position.x=Math.floor(Math.random()*(x-m.width)+10)+5,m.position.y=Math.floor(Math.random()*(b-m.height)-10)+5;for(var p=0,f=0;f<n.length;f++)m.position.x>n[f].position.x-n[f].width&&m.position.x<n[f].position.x+n[f].width&&m.position.y>n[f].position.y-n[f].height&&m.position.y<n[f].position.y+n[f].height&&(p=1,f=n.length);if(0===p)for(var y=0;y<a.length;y++)m.position.x>a[y].position.x-a[y].width&&m.position.x<a[y].position.x+a[y].width&&m.position.y>a[y].position.y-a[y].height&&m.position.y<a[y].position.y+a[y].height&&(p=1);1===p?g-=1:a.push(m)}}(),requestAnimationFrame(v)})),document.addEventListener("keydown",(function(e){if(0!==t)switch(e.key){case"ArrowLeft":t.moveLeft();break;case"ArrowRight":t.moveRight();break;case" ":t.jump(i)}})),document.addEventListener("keyup",(function(i){if(0!==t)switch(i.key){case"ArrowLeft":t.movement<0&&t.stop();break;case"ArrowRight":t.movement>0&&t.stop()}})),Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)("audio",{id:"backgroundMusic",controls:!0,src:f}),Object(w.jsx)("audio",{id:"gameOverMusic",controls:!0,src:y}),Object(w.jsx)("h3",{id:"headingID",children:"test"}),Object(w.jsx)("h4",{id:"scoreID",children:"Score:"}),Object(w.jsx)("canvas",{id:"gameScreen",width:"800",height:"800"}),Object(w.jsx)("img",{id:"dora1",src:r,style:{display:"none"},alt:"dora",height:"100",width:"70"}),Object(w.jsx)("img",{id:"doraRight",src:l,style:{display:"none"},alt:"doraRight",height:"100",width:"70"}),Object(w.jsx)("img",{id:"doraLeft",src:c,style:{display:"none"},alt:"doraLeft",height:"100",width:"70"}),Object(w.jsx)("img",{id:"floor",src:g,style:{display:"none"},alt:"floor"}),Object(w.jsx)("img",{id:"floorBad",src:m,style:{display:"none"},alt:"floorbad"}),Object(w.jsx)("img",{id:"backgroundImage",src:p,style:{display:"none"},alt:"backgroundimage"}),Object(w.jsx)("br",{}),Object(w.jsx)("button",{onClick:function(){console.log("reset"),window.location.reload(!0)},children:"Play Again?"}),Object(w.jsx)("p",{id:"backgroundLoaded",style:{display:"block"},children:"0"}),Object(w.jsx)("p",{id:"playerID",style:{display:"block"},children:"0"}),Object(w.jsx)("p",{id:"menuID",style:{display:"block"},children:"0"}),Object(w.jsx)("p",{id:"canvasID",style:{display:"block"},children:"0"}),Object(w.jsx)("p",{id:"ctxID",style:{display:"block"},children:"0"}),Object(w.jsx)("p",{id:"lastID",style:{display:"block"},children:"0"})]})},O=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,14)).then((function(i){var e=i.getCLS,o=i.getFID,s=i.getFCP,n=i.getLCP,a=i.getTTFB;e(t),o(t),s(t),n(t),a(t)}))};a.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(M,{})}),document.getElementById("root")),O()}},[[13,1,2]]]);
//# sourceMappingURL=main.bebdc54a.chunk.js.map