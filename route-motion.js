(function(root){
'use strict';
function prepare(points){let cumulative=[0];for(let i=1;i<points.length;i++)cumulative.push(cumulative[i-1]+Math.hypot(points[i][0]-points[i-1][0],points[i][1]-points[i-1][1]));return{points,cumulative,length:cumulative[cumulative.length-1]};}
function at(route,distance){const d=Math.max(0,Math.min(route.length,distance)),c=route.cumulative;let lo=0,hi=c.length-1;while(lo+1<hi){let m=(lo+hi)>>1;if(c[m]<=d)lo=m;else hi=m;}let a=route.points[lo],b=route.points[Math.min(lo+1,route.points.length-1)],len=c[Math.min(lo+1,c.length-1)]-c[lo],f=len>0?(d-c[lo])/len:0;return{x:a[0]+(b[0]-a[0])*f,y:a[1]+(b[1]-a[1])*f,segment:lo,f};}
function trail(route,distance,length=18){const end=Math.max(0,Math.min(route.length,distance)),start=Math.max(0,end-length),a=at(route,start),b=at(route,end),points=[[a.x,a.y]];for(let i=a.segment+1;i<=b.segment;i++)points.push(route.points[i]);points.push([b.x,b.y]);return points;}
const api={prepare,at,trail};if(typeof module!=='undefined')module.exports=api;root.RouteMotion=api;
})(typeof self!=='undefined'?self:globalThis);
