(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[6],{1255:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return J}));var i=n(32),a=n(3),c=n.n(a),r=n(9),o=n(17),l=n(7),s=n(8),d=n(0),u=n(5),b=n(6),j=n(10),O=n(2),v=n(72),x=n(13),m=n(39),p=n(220),C=n(257),h=n(451),f=n(280),y=n(28),R=n(119),I=n(135),E=n(66),g=n(44),T=n(22),U=n(69),w=n(53),Y=n(330),N=n(129),_=n(965),k=n(38),S=n(198);var A=n(73),P=n(86),B=n(279),D=n(24),L=n(130),q=n(286),Q=n(123),V=n(126),M=n(407);function z(){return Object(D.c)((function(e){return e.burn}))}var F,H=n(50),W=n(310),X=n(1),G=u.e.div(F||(F=Object(s.a)(["\n  border: solid 1px ",";\n  border-radius: 16px;\n  padding: 16px;\n"])),(function(e){return e.theme.colors.cardBorder}));function J(e){var t,n,a,s,u,F,J,K,Z,$,ee,te,ne,ie,ae,ce,re,oe,le,se,de,ue=e.history,be=e.match.params,je=be.currencyIdA,Oe=be.currencyIdB,ve=null!==(t=Object(U.c)(je))&&void 0!==t?t:void 0,xe=null!==(n=Object(U.c)(Oe))&&void 0!==n?n:void 0,me=Object(T.a)(),pe=me.account,Ce=me.chainId,he=me.library,fe=Object(d.useMemo)((function(){return[Object(A.b)(ve,Ce),Object(A.b)(xe,Ce)]}),[ve,xe,Ce]),ye=Object(l.a)(fe,2),Re=ye[0],Ie=ye[1],Ee=Object(x.b)().t,ge=Object(H.g)(),Te=z(),Ue=Te.independentField,we=Te.typedValue,Ye=function(e,t){var n,i,a,c,r,s=Object(T.a)(),d=s.account,u=s.chainId,b=z(),O=b.independentField,v=b.typedValue,m=Object(x.b)().t,p=Object(L.b)(e,t),C=Object(l.a)(p,2)[1],h=Object(V.e)(null!==d&&void 0!==d?d:void 0,[null===C||void 0===C?void 0:C.liquidityToken]),f=null===h||void 0===h?void 0:h[null!==(n=null===C||void 0===C||null===(i=C.liquidityToken)||void 0===i?void 0:i.address)&&void 0!==n?n:""],y=[Object(A.b)(e,u),Object(A.b)(t,u)],R=y[0],I=y[1],E=(a={},Object(o.a)(a,M.a.CURRENCY_A,R),Object(o.a)(a,M.a.CURRENCY_B,I),Object(o.a)(a,M.a.LIQUIDITY,null===C||void 0===C?void 0:C.liquidityToken),a),g=Object(q.a)(null===C||void 0===C?void 0:C.liquidityToken),U=C&&g&&f&&R&&j.e.greaterThanOrEqual(g.raw,f.raw)?new j.k(R,C.getLiquidityValue(R,g,f,!1).raw):void 0,w=C&&g&&f&&I&&j.e.greaterThanOrEqual(g.raw,f.raw)?new j.k(I,C.getLiquidityValue(I,g,f,!1).raw):void 0,Y=(c={},Object(o.a)(c,M.a.CURRENCY_A,U),Object(o.a)(c,M.a.CURRENCY_B,w),c),N=new j.g("0","100");if(O===M.a.LIQUIDITY_PERCENT)N=new j.g(v,"100");else if(O===M.a.LIQUIDITY){if(null===C||void 0===C?void 0:C.liquidityToken){var _=Object(Q.a)(v,C.liquidityToken);_&&f&&!_.greaterThan(f)&&(N=new j.g(_.raw,f.raw))}}else if(E[O]){var k=Object(Q.a)(v,E[O]),S=Y[O];k&&S&&!k.greaterThan(S)&&(N=new j.g(k.raw,S.raw))}var P,B,D=(r={},Object(o.a)(r,M.a.LIQUIDITY_PERCENT,N),Object(o.a)(r,M.a.LIQUIDITY,f&&N&&N.greaterThan("0")?new j.k(f.token,N.multiply(f.raw).quotient):void 0),Object(o.a)(r,M.a.CURRENCY_A,R&&N&&N.greaterThan("0")&&U?new j.k(R,N.multiply(U.raw).quotient):void 0),Object(o.a)(r,M.a.CURRENCY_B,I&&N&&N.greaterThan("0")&&w?new j.k(I,N.multiply(w.raw).quotient):void 0),r);return d||(P=m("Connect Wallet")),D[M.a.LIQUIDITY]&&D[M.a.CURRENCY_A]&&D[M.a.CURRENCY_B]||(P=null!==(B=P)&&void 0!==B?B:m("Enter an amount")),{pair:C,parsedAmounts:D,error:P}}(null!==ve&&void 0!==ve?ve:void 0,null!==xe&&void 0!==xe?xe:void 0),Ne=Ye.pair,_e=Ye.parsedAmounts,ke=Ye.error,Se=function(){var e=Object(D.b)();return{onUserInput:Object(d.useCallback)((function(t,n){e(Object(M.b)({field:t,typedValue:n}))}),[e])}}().onUserInput,Ae=!ke,Pe=Object(d.useState)(!1),Be=Object(l.a)(Pe,2),De=Be[0],Le=Be[1],qe=Object(d.useState)(!1),Qe=Object(l.a)(qe,2),Ve=Qe[0],Me=Qe[1],ze=Object(d.useState)(""),Fe=Object(l.a)(ze,2),He=Fe[0],We=Fe[1],Xe=Object(Y.a)(),Ge=Object(H.u)(),Je=Object(l.a)(Ge,1)[0],Ke=(Z={},Object(o.a)(Z,M.a.LIQUIDITY_PERCENT,_e[M.a.LIQUIDITY_PERCENT].equalTo("0")?"0":_e[M.a.LIQUIDITY_PERCENT].lessThan(new j.g("1","100"))?"<1":_e[M.a.LIQUIDITY_PERCENT].toFixed(0)),Object(o.a)(Z,M.a.LIQUIDITY,Ue===M.a.LIQUIDITY?we:null!==(a=null===(s=_e[M.a.LIQUIDITY])||void 0===s?void 0:s.toSignificant(6))&&void 0!==a?a:""),Object(o.a)(Z,M.a.CURRENCY_A,Ue===M.a.CURRENCY_A?we:null!==(u=null===(F=_e[M.a.CURRENCY_A])||void 0===F?void 0:F.toSignificant(6))&&void 0!==u?u:""),Object(o.a)(Z,M.a.CURRENCY_B,Ue===M.a.CURRENCY_B?we:null!==(J=null===(K=_e[M.a.CURRENCY_B])||void 0===K?void 0:K.toSignificant(6))&&void 0!==J?J:""),Z),Ze=null===($=_e[M.a.LIQUIDITY_PERCENT])||void 0===$?void 0:$.equalTo(new j.g("1")),$e=Object(w.i)(null===Ne||void 0===Ne||null===(ee=Ne.liquidityToken)||void 0===ee?void 0:ee.address),et=Object(d.useState)(null),tt=Object(l.a)(et,2),nt=tt[0],it=tt[1],at=Object(P.b)(_e[M.a.LIQUIDITY],g.t),ct=Object(l.a)(at,2),rt=ct[0],ot=ct[1];function lt(){return(lt=Object(r.a)(c.a.mark((function e(){var t,n,i,a,r,o,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($e&&Ne&&he&&Xe){e.next=2;break}throw new Error("missing dependencies");case 2:if(t=_e[M.a.LIQUIDITY]){e.next=5;break}throw new Error("missing liquidity amount");case 5:return e.next=7,$e.nonces(pe);case 7:n=e.sent,i=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],a={name:"MSAA LPs",version:"1",chainId:Ce,verifyingContract:Ne.liquidityToken.address},r=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],o={owner:pe,spender:g.t,value:t.raw.toString(),nonce:n.toHexString(),deadline:Xe.toNumber()},l=JSON.stringify({types:{EIP712Domain:i,Permit:r},domain:a,primaryType:"Permit",message:o}),he.send("eth_signTypedData_v4",[pe,l]).then(b.splitSignature).then((function(e){it({v:e.v,r:e.r,s:e.s,deadline:Xe.toNumber()})})).catch((function(e){4001!==(null===e||void 0===e?void 0:e.code)&&ot()}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var st=Object(d.useCallback)((function(e,t){return it(null),Se(e,t)}),[Se]),dt=Object(d.useCallback)((function(e){return st(M.a.LIQUIDITY,e)}),[st]),ut=Object(d.useCallback)((function(e){return st(M.a.CURRENCY_A,e)}),[st]),bt=Object(d.useCallback)((function(e){return st(M.a.CURRENCY_B,e)}),[st]),jt=Object(N.d)();function Ot(){return vt.apply(this,arguments)}function vt(){return(vt=Object(r.a)(c.a.mark((function e(){var t,n,a,r,l,s,d,u,b,O,x,m,p,C;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ce&&he&&pe&&Xe){e.next=2;break}throw new Error("missing dependencies");case 2:if(n=_e[M.a.CURRENCY_A],a=_e[M.a.CURRENCY_B],n&&a){e.next=5;break}throw new Error("missing currency amounts");case 5:if(r=Object(k.h)(Ce,he,pe),t={},Object(o.a)(t,M.a.CURRENCY_A,Object(k.c)(n,Je)[0]),Object(o.a)(t,M.a.CURRENCY_B,Object(k.c)(a,Je)[0]),l=t,ve&&xe){e.next=9;break}throw new Error("missing tokens");case 9:if(s=_e[M.a.LIQUIDITY]){e.next=12;break}throw new Error("missing liquidity amount");case 12:if(d=xe===j.d,u=ve===j.d||d,Re&&Ie){e.next=16;break}throw new Error("could not wrap");case 16:if(rt!==P.a.APPROVED){e.next=20;break}u?(b=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],O=[d?Re.address:Ie.address,s.raw.toString(),l[d?M.a.CURRENCY_A:M.a.CURRENCY_B].toString(),l[d?M.a.CURRENCY_B:M.a.CURRENCY_A].toString(),pe,Xe.toHexString()]):(b=["removeLiquidity"],O=[Re.address,Ie.address,s.raw.toString(),l[M.a.CURRENCY_A].toString(),l[M.a.CURRENCY_B].toString(),pe,Xe.toHexString()]),e.next=25;break;case 20:if(null===nt){e.next=24;break}u?(b=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],O=[d?Re.address:Ie.address,s.raw.toString(),l[d?M.a.CURRENCY_A:M.a.CURRENCY_B].toString(),l[d?M.a.CURRENCY_B:M.a.CURRENCY_A].toString(),pe,nt.deadline,!1,nt.v,nt.r,nt.s]):(b=["removeLiquidityWithPermit"],O=[Re.address,Ie.address,s.raw.toString(),l[M.a.CURRENCY_A].toString(),l[M.a.CURRENCY_B].toString(),pe,nt.deadline,!1,nt.v,nt.r,nt.s]),e.next=25;break;case 24:throw new Error("Attempting to confirm without approval or a signature. Please contact support.");case 25:return e.next=27,Promise.all(b.map((function(e){var t;return(t=r.estimateGas)[e].apply(t,Object(i.a)(O)).then(k.b).catch((function(t){console.error("estimateGas failed",e,O,t)}))})));case 27:if(x=e.sent,-1!==(m=x.findIndex((function(e){return v.a.isBigNumber(e)})))){e.next=33;break}console.error("This transaction would fail. Please contact support."),e.next=38;break;case 33:return p=b[m],C=x[m],Me(!0),e.next=38,r[p].apply(r,Object(i.a)(O).concat([{gasLimit:C,gasPrice:ge}])).then((function(e){var t,n;Me(!1),jt(e,{summary:"Remove ".concat(null===(t=_e[M.a.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3)," ").concat(null===ve||void 0===ve?void 0:ve.symbol," and ").concat(null===(n=_e[M.a.CURRENCY_B])||void 0===n?void 0:n.toSignificant(3)," ").concat(null===xe||void 0===xe?void 0:xe.symbol)}),We(e.hash)})).catch((function(e){Me(!1),console.error(e)}));case 38:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function xt(){var e,t;return Object(X.jsxs)(m.a,{gap:"md",children:[Object(X.jsxs)(y.b,{align:"flex-end",children:[Object(X.jsx)(O.Cb,{fontSize:"24px",children:null===(e=_e[M.a.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)}),Object(X.jsxs)(y.c,{gap:"4px",children:[Object(X.jsx)(E.a,{currency:ve,size:"24px"}),Object(X.jsx)(O.Cb,{fontSize:"24px",ml:"10px",children:null===ve||void 0===ve?void 0:ve.symbol})]})]}),Object(X.jsx)(y.c,{children:Object(X.jsx)(O.a,{width:"16px"})}),Object(X.jsxs)(y.b,{align:"flex-end",children:[Object(X.jsx)(O.Cb,{fontSize:"24px",children:null===(t=_e[M.a.CURRENCY_B])||void 0===t?void 0:t.toSignificant(6)}),Object(X.jsxs)(y.c,{gap:"4px",children:[Object(X.jsx)(E.a,{currency:xe,size:"24px"}),Object(X.jsx)(O.Cb,{fontSize:"24px",ml:"10px",children:null===xe||void 0===xe?void 0:xe.symbol})]})]}),Object(X.jsx)(O.Cb,{small:!0,textAlign:"left",pt:"12px",children:Ee("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.",{slippage:Je/100})})]})}function mt(){var e,t,n;return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(y.b,{children:[Object(X.jsx)(O.Cb,{children:Ee("%assetA%/%assetB% Burned",{assetA:null!==(e=null===ve||void 0===ve?void 0:ve.symbol)&&void 0!==e?e:"",assetB:null!==(t=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==t?t:""})}),Object(X.jsxs)(y.c,{children:[Object(X.jsx)(E.b,{currency0:ve,currency1:xe,margin:!0}),Object(X.jsx)(O.Cb,{children:null===(n=_e[M.a.LIQUIDITY])||void 0===n?void 0:n.toSignificant(6)})]})]}),Ne&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(y.b,{children:[Object(X.jsx)(O.Cb,{children:Ee("Price")}),Object(X.jsxs)(O.Cb,{children:["1 ",null===ve||void 0===ve?void 0:ve.symbol," = ",Re?Ne.priceOf(Re).toSignificant(6):"-"," ",null===xe||void 0===xe?void 0:xe.symbol]})]}),Object(X.jsxs)(y.b,{children:[Object(X.jsx)("div",{}),Object(X.jsxs)(O.Cb,{children:["1 ",null===xe||void 0===xe?void 0:xe.symbol," = ",Ie?Ne.priceOf(Ie).toSignificant(6):"-"," ",null===ve||void 0===ve?void 0:ve.symbol]})]})]}),Object(X.jsx)(O.o,{disabled:!(rt===P.a.APPROVED||null!==nt),onClick:Ot,children:Ee("Confirm")})]})}var pt=Ee("Removing %amountA% %symbolA% and %amountB% %symbolB%",{amountA:null!==(te=null===(ne=_e[M.a.CURRENCY_A])||void 0===ne?void 0:ne.toSignificant(6))&&void 0!==te?te:"",symbolA:null!==(ie=null===ve||void 0===ve?void 0:ve.symbol)&&void 0!==ie?ie:"",amountB:null!==(ae=null===(ce=_e[M.a.CURRENCY_B])||void 0===ce?void 0:ce.toSignificant(6))&&void 0!==ae?ae:"",symbolB:null!==(re=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==re?re:""}),Ct=Object(d.useCallback)((function(e){st(M.a.LIQUIDITY_PERCENT,e.toString())}),[st]),ht=ve===j.d||xe===j.d,ft=Boolean(Ce&&(ve&&Object(j.o)(j.n[Ce],ve)||xe&&Object(j.o)(j.n[Ce],xe))),yt=Object(d.useCallback)((function(e){Oe&&Object(S.a)(e)===Oe?ue.push("/remove/".concat(Object(S.a)(e),"/").concat(je)):ue.push("/remove/".concat(Object(S.a)(e),"/").concat(Oe))}),[je,Oe,ue]),Rt=Object(d.useCallback)((function(e){je&&Object(S.a)(e)===je?ue.push("/remove/".concat(Oe,"/").concat(Object(S.a)(e))):ue.push("/remove/".concat(je,"/").concat(Object(S.a)(e)))}),[je,Oe,ue]),It=Object(d.useCallback)((function(){it(null),He&&st(M.a.LIQUIDITY_PERCENT,"0"),We("")}),[st,He]),Et=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,i=Object(d.useState)((function(){return e})),a=Object(l.a)(i,2),c=a[0],r=a[1],o=Object(d.useRef)(),s=Object(d.useCallback)((function(e){r(e),o.current&&clearTimeout(o.current),o.current=setTimeout((function(){t(e),o.current=void 0}),n)}),[n,t]);return Object(d.useEffect)((function(){o.current&&(clearTimeout(o.current),o.current=void 0),r(e)}),[e]),[c,s]}(Number.parseInt(_e[M.a.LIQUIDITY_PERCENT].toFixed(0)),Ct),gt=Object(l.a)(Et,2),Tt=gt[0],Ut=gt[1],wt=Object(O.Vb)(Object(X.jsx)(p.c,{title:Ee("You will receive"),customOnDismiss:It,attemptingTxn:Ve,hash:He||"",content:function(){return Object(X.jsx)(p.a,{topContent:xt,bottomContent:mt})},pendingText:pt}),!0,!0,"removeLiquidityModal"),Yt=Object(l.a)(wt,1)[0];return Object(X.jsxs)(W.a,{children:[Object(X.jsxs)(f.a,{children:[Object(X.jsx)(f.b,{backTo:"/pool",title:Ee("Remove %assetA%-%assetB% liquidity",{assetA:null!==(oe=null===ve||void 0===ve?void 0:ve.symbol)&&void 0!==oe?oe:"",assetB:null!==(le=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==le?le:""}),subtitle:Ee("To receive %assetA% and %assetB%",{assetA:null!==(se=null===ve||void 0===ve?void 0:ve.symbol)&&void 0!==se?se:"",assetB:null!==(de=null===xe||void 0===xe?void 0:xe.symbol)&&void 0!==de?de:""}),noConfig:!0}),Object(X.jsxs)(O.t,{children:[Object(X.jsxs)(m.a,{gap:"20px",children:[Object(X.jsxs)(y.b,{children:[Object(X.jsx)(O.Cb,{children:Ee("Amount")}),Object(X.jsx)(O.o,{variant:"text",scale:"sm",onClick:function(){return Le(!De)},children:Ee(De?"Simple":"Detailed")})]}),!De&&Object(X.jsxs)(G,{children:[Object(X.jsxs)(O.Cb,{fontSize:"40px",bold:!0,mb:"16px",style:{lineHeight:1},children:[Ke[M.a.LIQUIDITY_PERCENT],"%"]}),Object(X.jsx)(O.xb,{name:"lp-amount",min:0,max:100,value:Tt,onValueChanged:function(e){return Ut(Math.ceil(e))},mb:"16px"}),Object(X.jsxs)(O.O,{flexWrap:"wrap",justifyContent:"space-evenly",children:[Object(X.jsx)(O.o,{variant:"tertiary",scale:"sm",onClick:function(){return st(M.a.LIQUIDITY_PERCENT,"25")},children:"25%"}),Object(X.jsx)(O.o,{variant:"tertiary",scale:"sm",onClick:function(){return st(M.a.LIQUIDITY_PERCENT,"50")},children:"50%"}),Object(X.jsx)(O.o,{variant:"tertiary",scale:"sm",onClick:function(){return st(M.a.LIQUIDITY_PERCENT,"75")},children:"75%"}),Object(X.jsx)(O.o,{variant:"tertiary",scale:"sm",onClick:function(){return st(M.a.LIQUIDITY_PERCENT,"100")},children:"Max"})]})]})]}),!De&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(m.b,{children:Object(X.jsx)(O.d,{color:"textSubtle",width:"24px",my:"16px"})}),Object(X.jsxs)(m.a,{gap:"10px",children:[Object(X.jsx)(O.Cb,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Ee("You will receive")}),Object(X.jsxs)(I.c,{children:[Object(X.jsxs)(O.O,{justifyContent:"space-between",mb:"8px",children:[Object(X.jsxs)(O.O,{children:[Object(X.jsx)(E.a,{currency:ve}),Object(X.jsx)(O.Cb,{small:!0,color:"textSubtle",id:"remove-liquidity-tokena-symbol",ml:"4px",children:null===ve||void 0===ve?void 0:ve.symbol})]}),Object(X.jsx)(O.Cb,{small:!0,children:Ke[M.a.CURRENCY_A]||"-"})]}),Object(X.jsxs)(O.O,{justifyContent:"space-between",children:[Object(X.jsxs)(O.O,{children:[Object(X.jsx)(E.a,{currency:xe}),Object(X.jsx)(O.Cb,{small:!0,color:"textSubtle",id:"remove-liquidity-tokenb-symbol",ml:"4px",children:null===xe||void 0===xe?void 0:xe.symbol})]}),Object(X.jsx)(O.Cb,{small:!0,children:Ke[M.a.CURRENCY_B]||"-"})]}),Ce&&(ft||ht)?Object(X.jsx)(y.b,{style:{justifyContent:"flex-end",fontSize:"14px"},children:ht?Object(X.jsx)(_.a,{to:"/remove/".concat(ve===j.d?j.n[Ce].address:je,"/").concat(xe===j.d?j.n[Ce].address:Oe),children:Ee("Receive WAVAX")}):ft?Object(X.jsx)(_.a,{to:"/remove/".concat(ve&&Object(j.o)(ve,j.n[Ce])?"AVAX":je,"/").concat(xe&&Object(j.o)(xe,j.n[Ce])?"AVAX":Oe),children:Ee("Receive AVAX")}):null}):null]})]})]}),De&&Object(X.jsxs)(O.m,{my:"16px",children:[Object(X.jsx)(C.a,{value:Ke[M.a.LIQUIDITY],onUserInput:dt,onMax:function(){st(M.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ze,disableCurrencySelect:!0,currency:null===Ne||void 0===Ne?void 0:Ne.liquidityToken,pair:Ne,id:"liquidity-amount",onCurrencySelect:function(){return null}}),Object(X.jsx)(m.b,{children:Object(X.jsx)(O.d,{width:"24px",my:"16px"})}),Object(X.jsx)(C.a,{hideBalance:!0,value:Ke[M.a.CURRENCY_A],onUserInput:ut,onMax:function(){return st(M.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ze,currency:ve,label:Ee("Output"),onCurrencySelect:yt,id:"remove-liquidity-tokena"}),Object(X.jsx)(m.b,{children:Object(X.jsx)(O.a,{width:"24px",my:"16px"})}),Object(X.jsx)(C.a,{hideBalance:!0,value:Ke[M.a.CURRENCY_B],onUserInput:bt,onMax:function(){return st(M.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ze,currency:xe,label:Ee("Output"),onCurrencySelect:Rt,id:"remove-liquidity-tokenb"})]}),Ne&&Object(X.jsxs)(m.a,{gap:"10px",style:{marginTop:"16px"},children:[Object(X.jsx)(O.Cb,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:Ee("Prices")}),Object(X.jsxs)(I.c,{children:[Object(X.jsxs)(O.O,{justifyContent:"space-between",children:[Object(X.jsxs)(O.Cb,{small:!0,color:"textSubtle",children:["1 ",null===ve||void 0===ve?void 0:ve.symbol," ="]}),Object(X.jsxs)(O.Cb,{small:!0,children:[Re?Ne.priceOf(Re).toSignificant(6):"-"," ",null===xe||void 0===xe?void 0:xe.symbol]})]}),Object(X.jsxs)(O.O,{justifyContent:"space-between",children:[Object(X.jsxs)(O.Cb,{small:!0,color:"textSubtle",children:["1 ",null===xe||void 0===xe?void 0:xe.symbol," ="]}),Object(X.jsxs)(O.Cb,{small:!0,children:[Ie?Ne.priceOf(Ie).toSignificant(6):"-"," ",null===ve||void 0===ve?void 0:ve.symbol]})]})]})]}),Object(X.jsx)(O.m,{position:"relative",mt:"16px",children:pe?Object(X.jsxs)(y.b,{children:[Object(X.jsx)(O.o,{variant:rt===P.a.APPROVED||null!==nt?"success":"primary",onClick:function(){return lt.apply(this,arguments)},disabled:rt!==P.a.NOT_APPROVED||null!==nt,width:"100%",mr:"0.5rem",children:rt===P.a.PENDING?Object(X.jsx)(B.a,{children:Ee("Enabling")}):rt===P.a.APPROVED||null!==nt?Ee("Enabled"):Ee("Enable")}),Object(X.jsx)(O.o,{variant:!Ae&&_e[M.a.CURRENCY_A]&&_e[M.a.CURRENCY_B]?"danger":"primary",onClick:function(){Yt()},width:"100%",disabled:!Ae||null===nt&&rt!==P.a.APPROVED,children:ke||Ee("Remove")})]}):Object(X.jsx)(R.a,{})})]})]}),Ne?Object(X.jsx)(m.a,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:Object(X.jsx)(h.a,{showUnwrapped:ft,pair:Ne})}):null]})}},965:function(e,t,n){"use strict";var i,a=n(8),c=n(109),r=n(5),o=Object(r.e)(c.a)(i||(i=Object(a.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=o}}]);
//# sourceMappingURL=6.8c23d42d.chunk.js.map