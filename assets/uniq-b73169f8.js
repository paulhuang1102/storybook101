import{D as _,E as d,F as o,G as b}from"./_baseIsEqual-ac00f0cb.js";function x(n,e,r,s){for(var t=n.length,i=r+(s?1:-1);s?i--:++i<t;)if(e(n[i],i,n))return i;return-1}var g=x;function $(n){return n!==n}var w=$;function N(n,e,r){for(var s=r-1,t=n.length;++s<t;)if(n[s]===e)return s;return-1}var S=N,A=g,O=w,q=S;function F(n,e,r){return e===e?q(n,e,r):A(n,O,r)}var T=F,C=T;function E(n,e){var r=n==null?0:n.length;return!!r&&C(n,e,0)>-1}var U=E;function W(n,e,r){for(var s=-1,t=n==null?0:n.length;++s<t;)if(r(e,n[s]))return!0;return!1}var p=W;function G(){}var H=G,c=_,R=H,Y=d,D=1/0,L=c&&1/Y(new c([,-0]))[1]==D?function(n){return new c(n)}:R,Z=L,j=o,k=U,z=p,B=b,J=Z,K=d,M=200;function P(n,e,r){var s=-1,t=k,i=n.length,h=!0,f=[],a=f;if(r)h=!1,t=z;else if(i>=M){var I=e?null:J(n);if(I)return K(I);h=!1,t=B,a=new j}else a=e?[]:f;n:for(;++s<i;){var u=n[s],l=e?e(u):u;if(u=r||u!==0?u:0,h&&l===l){for(var v=a.length;v--;)if(a[v]===l)continue n;e&&a.push(l),f.push(u)}else t(a,l,r)||(a!==f&&a.push(l),f.push(u))}return f}var Q=P,V=Q;function X(n){return n&&n.length?V(n):[]}var m=X;export{m as u};
//# sourceMappingURL=uniq-b73169f8.js.map
