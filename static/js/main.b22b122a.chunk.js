(this.webpackJsonpmazegame=this.webpackJsonpmazegame||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function n(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s=a(0),o=a.n(s),l=a(7),i=a.n(l),c=a(1),h=a(2),u=a(4),p=a(3),w=a(5);function v(e,t,a){var r=[];return e.x>0&&1==a[e.x-1][e.y]&&r.push({x:e.x-1,y:e.y}),e.y>0&&1==a[e.x][e.y-1]&&r.push({x:e.x,y:e.y-1}),e.x<t-1&&1==a[e.x+1][e.y]&&r.push({x:e.x+1,y:e.y}),e.y<t-1&&1==a[e.x][e.y+1]&&r.push({x:e.x,y:e.y+1}),r}function f(e){return e.map((function(e){return e.filter((function(e){return 0==e})).length})).reduce((function(e,t){return e+t}))}function d(e,t,a){var r,n=f(t),s=Math.round(Math.random()*n-.5);e:for(var o=0;o<t.length;o++)for(var l=0;l<t[0].length;l++)if(0==t[o][l]){if(0==s){r={x:o,y:l};break e}s--}var i=v(r,e,t),c=i[Math.round(Math.random()*i.length-.5)];c.x==r.x?c.y>r.y?a.vertical_walls[r.x][r.y+1]=0:a.vertical_walls[r.x][r.y]=0:c.x>r.x?a.horizontal_walls[r.x+1][r.y]=0:a.horizontal_walls[r.x][r.y]=0,t[r.x][r.y]=i.length>1?0:-1,t[c.x][c.y]=v(c,e,t).length>0?0:-1;for(var h=function(e,t,a){var r=[];return e.x>0&&r.push({x:e.x-1,y:e.y}),e.y>0&&r.push({x:e.x,y:e.y-1}),e.x<t-1&&r.push({x:e.x+1,y:e.y}),e.y<t-1&&r.push({x:e.x,y:e.y+1}),r}(c,e),u=0;u<h.length;u++){var p=h[u];0==t[p.x][p.y]&&(t[p.x][p.y]=v(p,e,t).length>0?0:-1)}return{cells:t,walls:a}}var m=function(e){var t=function(e){for(var t=function(e){for(var t=[],a=[],r=0;r<e;r++){var n=Array(e+1).fill(1);t.push(n)}for(r=0;r<e+1;r++){n=Array(e).fill(1);a.push(n)}return{vertical_walls:t,horizontal_walls:a}}(e),a=0;a<e;a++)t.vertical_walls[a][0]=0,t.vertical_walls[a][e]=0;return t.horizontal_walls[0]=Array(e).fill(0),t.horizontal_walls[e]=Array(e).fill(0),t}(e),a=function(e){for(var t=[],a=0;a<e;a++){var r=Array(e).fill(1);t.push(r)}return t}(e),r=Math.round(Math.random()*e-.5),n=Math.round(Math.random()*e-.5);a[r][n]=0;for(var s={walls:t,cells:a};f(s.cells);)s=d(e,s.cells,s.walls);return{vertical_walls:(s=function(e){for(var t=e.walls.vertical_walls.length,a=0;a<t;a++)e.walls.vertical_walls[a][0]=1,e.walls.vertical_walls[a][t]=1;return e.walls.horizontal_walls[0]=Array(t).fill(1),e.walls.horizontal_walls[t]=Array(t).fill(1),e}(s)).walls.vertical_walls,horizontal_walls:s.walls.horizontal_walls}};var g=function(e){return o.a.createElement("div",{className:"wall",orientation:e.orientation,blocking:e.blocking?"true":"false"})};var y=function(){return o.a.createElement("div",{className:"dot"})},z=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.size;t++)e.push(o.a.createElement(y,{key:2*t})),e.push(o.a.createElement(g,{orientation:"horizontal",key:2*t+1,blocking:this.props.walls[t]}));return e.push(o.a.createElement(y,{key:2*this.props.size})),o.a.createElement("div",{className:"wallRow"},e)}}]),t}(o.a.Component);var _=function(e){return o.a.createElement("img",{src:e.occupied?"person.png":e.coin?"coin.png":"none.png",className:"square"})};var k=function(e){for(var t=[],a=0;a<e.size;a++)t.push(o.a.createElement(g,{orientation:"vertical",key:2*a,blocking:e.walls[a]})),t.push(o.a.createElement(_,{key:2*a+1,occupied:e.personX==a?1:0,coin:e.coinX==a?1:0}));return t.push(o.a.createElement(g,{orientation:"vertical",key:2*e.size,blocking:e.walls[e.size]})),o.a.createElement("div",{className:"wallRow"},t)};var x=function(e){for(var t=[],a=0;a<e.gridsize;a++)t.push(o.a.createElement(z,{size:e.gridsize,key:2*a,walls:e.horizontal_walls[a]})),t.push(o.a.createElement(k,{size:e.gridsize,key:2*a+1,walls:e.vertical_walls[a],personX:e.personY==a?e.personX:-1,coinX:e.gridsize-1==a?e.gridsize-1:-1}));return t.push(o.a.createElement(z,{size:e.gridsize,key:2*e.gridsize,walls:e.horizontal_walls[e.gridsize]})),o.a.createElement("div",{className:"grid"},t)};var b=function(e){return o.a.createElement("input",{className:"move",type:"image",onClick:function(){return e.move(e.dir)},src:e.dir+".png"})};var E=function(e){return o.a.createElement("div",{className:"controls"},o.a.createElement(b,{dir:"left",move:function(t){return e.move(t)}}),o.a.createElement(b,{dir:"up",move:e.move}),o.a.createElement(b,{dir:"down",move:e.move}),o.a.createElement(b,{dir:"right",move:e.move}))};var X=function(e){return o.a.createElement("button",{onClick:e.newMaze},"New Maze")},Y=function(e){function t(e){var a;Object(c.a)(this,t),a=Object(u.a)(this,Object(p.a)(t).call(this,e));var r=parseInt(e.gridsize),n=m(r);return a.state={personX:0,personY:0,vertical_walls:n.vertical_walls,horizontal_walls:n.horizontal_walls},a}return Object(w.a)(t,e),Object(h.a)(t,[{key:"handleKeyDown",value:function(e){var t;switch(e.key){case"ArrowUp":t="up";break;case"ArrowDown":t="down";break;case"ArrowLeft":t="left";break;case"ArrowRight":t="right"}this.move(t),this.checkForVictory()}},{key:"componentWillMount",value:function(){document.addEventListener("keydown",this.handleKeyDown.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown.bind(this))}},{key:"generateNewMaze",value:function(){var e=parseInt(this.props.gridsize),t=m(e);this.setState({personX:0,personY:0,vertical_walls:t.vertical_walls,horizontal_walls:t.horizontal_walls})}},{key:"move",value:function(e){switch(console.log(e),e){case"left":this.state.personX>0&&!this.state.vertical_walls[this.state.personY][this.state.personX]?this.setState({personX:this.state.personX-1,personY:this.state.personY,vertical_walls:this.state.vertical_walls,horizontal_walls:this.state.horizontal_walls}):console.log("You can't go there");break;case"right":this.state.personX<this.props.gridsize-1&&!this.state.vertical_walls[this.state.personY][this.state.personX+1]?this.setState({personX:this.state.personX+1,personY:this.state.personY,vertical_walls:this.state.vertical_walls,horizontal_walls:this.state.horizontal_walls}):console.log("You can't go there");break;case"up":this.state.personY>0&&!this.state.horizontal_walls[this.state.personY][this.state.personX]?this.setState({personX:this.state.personX,personY:this.state.personY-1,vertical_walls:this.state.vertical_walls,horizontal_walls:this.state.horizontal_walls}):console.log("You can't go there");break;case"down":this.state.personY<this.props.gridsize-1&&!this.state.horizontal_walls[this.state.personY+1][this.state.personX]?this.setState({personX:this.state.personX,personY:this.state.personY+1,vertical_walls:this.state.vertical_walls,horizontal_walls:this.state.horizontal_walls}):console.log("You can't go there")}}},{key:"checkForVictory",value:function(){this.state.personX==this.props.gridsize-1&this.state.personY==this.props.gridsize-1&&this.generateNewMaze()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"game"},o.a.createElement(x,{gridsize:this.props.gridsize,horizontal_walls:this.state.horizontal_walls,vertical_walls:this.state.vertical_walls,personX:this.state.personX,personY:this.state.personY}),o.a.createElement(E,{move:function(t){e.move(t),e.checkForVictory()}}),o.a.createElement(X,{newMaze:function(){return e.generateNewMaze()}}))}}]),t}(o.a.Component),A=document.querySelector("#root");i.a.render(o.a.createElement(Y,{gridsize:"15"}),A),function(e){if("serviceWorker"in navigator){if(new URL("/mazegame",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/mazegame","/service-worker.js");r?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var r=a.headers.get("content-type");404===a.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):n(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):n(t,e)}))}}()},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.b22b122a.chunk.js.map