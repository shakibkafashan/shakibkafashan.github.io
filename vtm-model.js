/* Synthetic VTM demonstration. Prescribed paths, bounded uniform speeds,
   deterministic reaction/braking, and common-time oriented-body contact. */
(function(root){
'use strict';
const L=4.5,W=1.8,TAU=.5,BRAKE=3,MEAN_A=7.5,MEAN_B=8.5;
function progress(v,eta){if(eta<=TAU)return v*eta;let r=Math.min(eta-TAU,v/BRAKE);return v*TAU+v*r-.5*BRAKE*r*r;}
function leftPath(s){if(s<32)return{x:4,y:-40+s,a:Math.PI/2};if(s<32+6*Math.PI){let q=(s-32)/12;return{x:-8+12*Math.cos(q),y:-8+12*Math.sin(q),a:Math.PI/2+q};}return{x:-8-(s-32-6*Math.PI),y:4,a:Math.PI};}
function poseA(t,v,eta){return leftPath(20+MEAN_A*t+progress(v,eta));}
function poseB(t,v,eta,offset){return{x:-4,y:30-MEAN_B*(t-offset)-progress(v,eta),a:-Math.PI/2};}
function intersects(a,b){const dx=b.x-a.x,dy=b.y-a.y,ca=Math.cos(a.a),sa=Math.sin(a.a),cb=Math.cos(b.a),sb=Math.sin(b.a),dot=ca*cb+sa*sb,cross=ca*sb-sa*cb,hL=L/2,hW=W/2;
 if(Math.abs(dx*ca+dy*sa)>hL+hL*Math.abs(dot)+hW*Math.abs(cross))return false;
 if(Math.abs(-dx*sa+dy*ca)>hW+hL*Math.abs(cross)+hW*Math.abs(dot))return false;
 if(Math.abs(dx*cb+dy*sb)>hL+hL*Math.abs(dot)+hW*Math.abs(cross))return false;
 if(Math.abs(-dx*sb+dy*cb)>hW+hL*Math.abs(cross)+hW*Math.abs(dot))return false;
 return true;}
function speedAt(v,eta){return eta<=TAU?v:Math.max(0,v-BRAKE*(eta-TAU));}
function horizon(spread){return TAU+(MEAN_B+spread)/BRAKE;}
function estimate(t,offset,spread,n=32,dt=.06){const H=horizon(spread),steps=Math.ceil(H/dt),as=[],bs=[],speedsA=[],speedsB=[];
 for(let i=0;i<n;i++){const q=(i+.5)/n;let va=MEAN_A+spread*(2*q-1),vb=MEAN_B+spread*(2*q-1);speedsA.push(va);speedsB.push(vb);let aa=[],bb=[];for(let k=0;k<=steps;k++){let eta=k*H/steps;aa.push(poseA(t,va,eta));bb.push(poseB(t,vb,eta,offset));}as.push(aa);bs.push(bb);}
 let count=0,representative=null;
 for(let i=0;i<n;i++)for(let j=0;j<n;j++){for(let k=0;k<=steps;k++){if(intersects(as[i][k],bs[j][k])){count++;if(!representative)representative={vA:speedsA[i],vB:speedsB[j],eta:k*H/steps};break;}}}
 return{p:count/(n*n),count,pairs:n*n,H,representative};}
function curve(offset,spread,step=.1,n=32,dt=.06){const out=[];for(let i=0;i<=Math.round(9/step);i++){let t=i*step;out.push({t,...estimate(t,offset,spread,n,dt)});}return out;}
function corners(p){const c=Math.cos(p.a),s=Math.sin(p.a);return[[-L/2,-W/2],[L/2,-W/2],[L/2,W/2],[-L/2,W/2]].map(([x,y])=>[p.x+c*x-s*y,p.y+s*x+c*y]);}
const api={L,W,TAU,BRAKE,MEAN_A,MEAN_B,progress,speedAt,leftPath,poseA,poseB,intersects,horizon,estimate,curve,corners};if(typeof module!=='undefined')module.exports=api;root.VTM=api;
})(typeof self!=='undefined'?self:globalThis);
