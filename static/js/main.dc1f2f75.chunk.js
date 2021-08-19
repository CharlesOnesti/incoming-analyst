(this["webpackJsonpweb-template"]=this["webpackJsonpweb-template"]||[]).push([[0],{63:function(e,t,n){e.exports=n(80)},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),o=n.n(l),c=n(112),i=n(36),u=n(9),m=n(13),d={colors:{},fonts:{}},s=n(49),p=n(55),f=n(54),h=n(48),E=n(14),b=new f.a({uri:"http://localhost:5000/graphql",credentials:"include"}),g=new E.a((function(e,t){return t(e).map((function(t){var n=e.getContext().response.headers.get("x-token");return n&&localStorage.setItem("token",n),t}))})),v=new E.a((function(e,t){var n=localStorage.getItem("token");return n&&e.setContext({headers:{authorization:"Bearer ".concat(n)}}),t(e)})),x=Object(h.a)((function(){})),y=new s.a({cache:new p.a,link:E.a.from([x,g,v,b])}),w=n(15);function _(){var e=Object(w.a)(["\n  display: flex;\n"]);return _=function(){return e},e}function M(){var e=Object(w.a)(["\n  font-family: arial;\n  font-size: 48px;\n  color: ",";\n  span {\n    color: ","\n  }\n  margin-bottom: 0;\n  @media (max-width: 780px) {\n    font-size: 38px;\n  }\n"]);return M=function(){return e},e}function T(){var e=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 5vw 0 0 0;\n  @media (max-width: 780px) {\n    margin: 30px 0 0 0;\n  }\n"]);return T=function(){return e},e}var I=m.b.div(T()),O=m.b.h1(M(),(function(e){return e.color}),(function(e){return e.color2})),j=(m.b.div(_()),function(e){var t=e.text,n=e.text2,a=e.color1,l=e.color2;return r.a.createElement(I,null,r.a.createElement(O,{color:a,color2:l},t," ",n&&r.a.createElement("span",null,n)))});function A(){var e=Object(w.a)(['\n  width: 100%;\n  margin: 30px 30px 30px 0px;\n  position: relative;\n  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: middle;\n']);return A=function(){return e},e}function k(){var e=Object(w.a)(["\n  width: 200px;\n  height: 320px;\n  margin: 30px;\n  position: relative;\n  @media (max-width: 780px) {\n    width: 100%;\n    margin: 30px 0 0 0;\n  }\n"]);return k=function(){return e},e}function B(){var e=Object(w.a)(["\n  width: 70%;\n  display: flex;\n  margin: 0vh 15vw 0 15vw;\n  position: relative;\n  @media (max-width: 780px) {\n    margin: 0 0 0 0;\n    display: inline-block;\n    justify-items: center;\n    width: 80%;\n  }\n"]);return B=function(){return e},e}m.b.div(B()),m.b.div(k());var C=m.b.div(A());function D(){var e=Object(w.a)(["\n  height: 50px;\n  width: 100px;\n  font-size: 20px;\n  color: green;\n"]);return D=function(){return e},e}var S=m.b.button(D()),R=function(e){var t=e.children,n=e.onClick;return r.a.createElement(S,{onClick:n},t)},z=function(){var e=Object(u.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{text:"Paper LBO Tool",color1:"black"}),r.a.createElement(C,null,r.a.createElement("br",null),"When you are ready to begin, press the button below to generate a paper LBO prompt."),r.a.createElement("br",null),r.a.createElement(C,null,"This exercise is meant to be done with pen and paper and no calculator."),r.a.createElement("br",null),r.a.createElement(C,null,"When you are finished, click the Show Answer button to check your work!"),r.a.createElement(R,{onClick:function(){return e.push("/quiz")}},"START"))},F=n(22);function N(){var e=Object(w.a)(["\n  margin-top: 30px;\n  width: 100%;\n  caption-side: top;\n  border: none;\n  border-collapse: collapse;\n  /* border-collapse: separate; */\n  /* border-spacing: 5px 10px; */\n\n  caption-side: bottom;\n  /* empty-cell: show | hide;  */\n  /* empty-cell is a property of table or the cells themselves */\n\n  /* vertical-align: baseline | sub | super | text-top | \n                text-bottom | middle | top | bottom | \n                <percentage> | <length> */\n\n  /* tbody {\n    vertical-align: top;\n  }              */\n  td,\n  th {\n    border: none;\n  }\n  /* td,\n  th {\n    border: 1px solid;\n  } */\n\n  td {\n    padding: 5px 10px;\n    text-align: left;\n    font-family: arial;\n  }\n\n  tbody tr {\n    :nth-of-type(odd) {\n      background-color: #efefef;\n    }\n    :hover {\n      background-color: lightpink;\n    }\n  }\n  thead > tr {\n    background-color: #c2c2c2;\n  }\n  caption {\n    font-size: 0.9em;\n    padding: 5px;\n    font-weight: bold;\n  }\n"]);return N=function(){return e},e}function W(){var e=Object(w.a)(["\n  font-family: arial;\n"]);return W=function(){return e},e}function Y(){var e=Object(w.a)(["\n  text-align: center;\n  line-height: 40px;\n"]);return Y=function(){return e},e}function q(){var e=Object(w.a)(["\n  margin-left: 10%;\n  margin-right: 10%;\n  font-size: 24px;\n  text-align: left;\n  line-height: 30px;\n  @media (max-width: 900px){\n    font-size: 18px;\n    line-height: 20px;\n  }\n"]);return q=function(){return e},e}var L=m.b.div(q()),V=m.b.div(Y()),U=m.b.p(W()),G=m.b.table(N()),J=n(58),P=n(115),H=n(113),$=Object(P.a)((function(e){var t=Object.assign({},e);return r.a.createElement(H.a,t)}))({marginTop:"20px",marginRight:"5px",width:"300px",height:"50px",fontFamily:"arial",fontWeight:"normal",fontSize:"24px"}),K=function(e){var t=e.value,n=e.setValue,a=e.label,l=Object(J.a)(e,["value","setValue","label"]);return r.a.createElement($,Object.assign({value:t,onChange:function(e){return n(e.target.value)},label:a},l))},Q=function(e){var t=e.variable;return r.a.createElement("span",null," ",t,"")},X=function(e){var t=e.submitted,n=e.reset,l=e.setReset,o=Object(a.useState)(0),c=Object(F.a)(o,2),i=c[0],u=c[1],m=Object(a.useState)(0),d=Object(F.a)(m,2),s=d[0],p=d[1];return Object(a.useEffect)((function(){var e=setInterval((function(){s<60&&p(s+1),59===s&&(u(i+1),p(0))}),1e3);return t&&clearInterval(e),n&&(u(0),p(0),l(!1)),function(){clearInterval(e)}})),r.a.createElement("div",null,r.a.createElement("h1",{style:{fontFamily:"arial"}},i,":",s<10?"0".concat(s):s))},Z=function(e){for(var t=e.entry_mult,n=e.ltm_rev,a=e.ebitda_margin,r=e.debt_percent,l=e.int_rate,o=e.rev_growth,c=e.tax_rate,i=e.capex_pr,u=e.nwc_pr,m=[0,1,2,3,4,5].map((function(e){return n*Math.pow(1+o/100,e)})),d=m.map((function(e){return e*(a/100)})),s=t*d[0],p=r/100*s,f=m.map((function(e){return-e*(i/100)})),h=d.map((function(e,t){return e+f[t]})),E=new Array(6).fill(-l/100*p),b=h.map((function(e,t){return e+E[t]})),g=m.map((function(e){return e*(u/100)})),v=b.map((function(e){return-Math.max(e,0)*(c/100)})),x=b.map((function(e,t){return e+v[t]})),y=m.map((function(e){return-e*(i/100)})),w=[0],_=1;_<g.length;_++)w[_]=g[_-1]+g[_];var M=x.map((function(e,t){return e+f[t]+w[t]+y[t]})),T=t*d[5],I=p-M.slice(1,6).reduce((function(e,t){return e+t}),0),O=(T-I)/(s-p);return{irr:Math.pow(O,.2)-1,financials:{Revenue:m,EBITDA:d,DA:f,EBIT:h,Interest:E,EBT:b,Taxes:v,Income:x,NegatedDA:f.map((function(e){return-e})),NWC_Change:w,Capex:y,FCF:M,NWC:g},returns:{entry_mult:t,entry_nd:p,exit_nd:I}}},ee={Revenue:"Revenue",EBITDA:"EBITDA",DA:"(-) D&A",EBIT:"EBIT",Interest:"(-) Interest",EBT:"EBT",Taxes:"(-) Taxes",Income:"Net Income",NegatedDA:"(+) D&A",NWC_Change:"(-) Increase in NWC",Capex:"(-) Capex",FCF:"Free Cash Flow",NWC:"Memo: NWC"},te=function(e){var t=e.variables,n=e.data,l=e.reset,o=e.setReset,c=Object(a.useState)(""),i=Object(F.a)(c,2),u=i[0],m=i[1],d=Object(a.useState)(!1),s=Object(F.a)(d,2),p=s[0],f=s[1],h=t||{},E=h.entry_mult,b=h.ltm_rev,g=h.ebitda_margin,v=h.debt_percent,x=h.int_rate,y=h.rev_growth,w=h.tax_rate,_=h.capex_pr,M=h.nwc_pr,T="You are tasked with evaluating an investment opportunity in Company A,\n  which has an LTM Revenue of $".concat(b," million and an EBITDA margin of\n  ").concat(g,"%. Your firm is considering making a bid at\n  ").concat(E," times LTM EBITDA (assume multiple parity for exit) and funding the acquisition with\n  ").concat(v,"%  debt with an interest rate of\n  ").concat(x,"%. The management is confident that the firm can acheive a revenue growth of\n  ").concat(y,"% per year and maintain constant EBITDA margins. The firm has a tax rate of\n  ").concat(w,"%. Capital Expenditures are equal to\n  ").concat(_,"% of the revenue and are equal to Depreciation. Net Working Capital is\n  ").concat(M,"% of revenue each year. What would the IRR of this investment be over\n  a 5 year horizon?");return r.a.createElement(L,null,r.a.createElement(j,{text:"Paper LBO Tool",color1:"black"}),r.a.createElement("br",null),r.a.createElement(U,null,T),r.a.createElement("br",null),r.a.createElement(X,{submitted:p,reset:l,setReset:o}),r.a.createElement(V,null,p?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"You Guessed:",r.a.createElement(Q,{variable:u}),"%"),r.a.createElement("p",null,"The correct answer was",r.a.createElement(Q,{variable:Math.round(1e3*n.irr)/10}),"%"),Math.abs(u-Math.round(1e3*n.irr)/10)<2.5?r.a.createElement("p",{style:{color:"green"}},"Great Work!"):r.a.createElement("p",{style:{color:"red"}},"Try again"),r.a.createElement(R,{onClick:function(){return o(!l),m(""),f(!1)}},"Another One"),r.a.createElement(G,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,"Enter"),r.a.createElement("td",null,"Exit"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"LTM EBITDA"),r.a.createElement("td",null,Math.round(n.financials.EBITDA[0])),r.a.createElement("td",null,Math.round(n.financials.EBITDA[5]))),r.a.createElement("tr",null,r.a.createElement("td",null,"(x) EBITDA Multiple"),r.a.createElement("td",null,"".concat(n.returns.entry_mult,"x")),r.a.createElement("td",null,"".concat(n.returns.entry_mult,"x"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Enterprise Value"),r.a.createElement("td",null,Math.round(n.financials.EBITDA[0]*n.returns.entry_mult)),r.a.createElement("td",null,Math.round(n.financials.EBITDA[5]*n.returns.entry_mult))),r.a.createElement("tr",null,r.a.createElement("td",null,"(-) Net Debt"),r.a.createElement("td",null,-Math.round(n.returns.entry_nd)),r.a.createElement("td",null,-Math.round(n.returns.exit_nd))),r.a.createElement("tr",null,r.a.createElement("td",null,"Equity Value"),r.a.createElement("td",null,Math.round(n.financials.EBITDA[0]*n.returns.entry_mult-n.returns.entry_nd)),r.a.createElement("td",null,Math.round(n.financials.EBITDA[5]*n.returns.entry_mult-n.returns.exit_nd))))),r.a.createElement(G,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,"Year 0"),r.a.createElement("td",null,"Year 1"),r.a.createElement("td",null,"Year 2"),r.a.createElement("td",null,"Year 3"),r.a.createElement("td",null,"Year 4"),r.a.createElement("td",null,"Year 5"))),r.a.createElement("tbody",null,Object.keys(n.financials).map((function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,ee[e]),n.financials[e].map((function(t,n){return console.log(n,e),0===n&&"Revenue"!=e&&"EBITDA"!==e?r.a.createElement("td",null):r.a.createElement("td",null,Math.round(t))})))})))),r.a.createElement("div",{style:{height:100}})):r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f(!0)}},r.a.createElement(K,{type:"text",value:u,placeholder:"answer",onChange:function(e){return m(e.target.value)}}),r.a.createElement(R,{type:"submit"},"Submit")))))},ne=function(){var e=Object(a.useState)(!1),t=Object(F.a)(e,2),n=t[0],l=t[1],o=function(){var e=Math.floor(5*Math.random()+8),t=100*Math.floor(9*Math.random()+1),n=10*Math.floor(3*Math.random()+2),a=10*Math.floor(3*Math.random()+4),r=5*Math.floor(2*Math.random()+1);return console.log(a),{entry_mult:e,ltm_rev:t,ebitda_margin:n,debt_percent:a,int_rate:r,rev_growth:e<15?5:10,tax_rate:5*Math.floor(5*Math.random()+4),capex_pr:5*Math.floor(2*Math.random()+1),nwc_pr:10*Math.floor(2*Math.random()+1)}}();return r.a.createElement(te,{variables:o,data:Z(o),reset:n,setReset:l})},ae=n(16),re=Object(ae.a)(),le=function(){return r.a.createElement(i.a,{history:re},r.a.createElement(m.a,{theme:d},r.a.createElement(c.a,{client:y},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:z}),r.a.createElement(u.a,{path:"/quiz",component:ne})))))};n(79);o.a.render(r.a.createElement(le,null),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.dc1f2f75.chunk.js.map