(this["webpackJsonpfms-admin"]=this["webpackJsonpfms-admin"]||[]).push([[0],{109:function(e,t,a){},113:function(e,t,a){},115:function(e,t,a){},119:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),s=a(13),n=a.n(s),l=(a(109),a(19)),r=a(33),d=(a(113),a.p,a(1)),j=function(){Object(r.b)((function(e){return e.auth}));return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"topbar",children:Object(d.jsxs)("div",{className:"topbarWrapper",children:[Object(d.jsx)("div",{className:"topLeft",children:Object(d.jsx)("h1",{children:"Admin Panel"})}),Object(d.jsx)("div",{className:"topRight"})]})})})},b=a(24),o=(a(115),a(181)),u=a(91),p=a.n(u),h=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsxs)("div",{className:"sidebarWrapper",children:[Object(d.jsxs)("div",{className:"sidebarMenu",children:[Object(d.jsx)("h3",{className:"sidebarTitle",children:"Medicine Settings"}),Object(d.jsxs)("ul",{className:"sidebarList",children:[Object(d.jsx)(b.b,{to:"/addMedicine",className:"link",children:Object(d.jsxs)("li",{className:"sidebarListItem active",children:[Object(d.jsx)(o.a,{className:"sidebarIcon"}),"Add Medicine"]})}),Object(d.jsx)(b.b,{to:"/medicineList",className:"link",children:Object(d.jsxs)("li",{className:"sidebarListItem",children:[Object(d.jsx)(o.a,{className:"sidebarIcon"}),"My Medicine"]})})]})]}),Object(d.jsxs)("div",{className:"sidebarMenu",children:[Object(d.jsx)("h3",{className:"sidebarTitle",children:"Sales Module"}),Object(d.jsxs)("ul",{className:"sidebarList",children:[Object(d.jsx)(b.b,{to:"/sales",className:"link",children:Object(d.jsxs)("li",{className:"sidebarListItem active",children:[Object(d.jsx)(o.a,{className:"sidebarIcon"}),"Sales"]})}),Object(d.jsx)(b.b,{to:"/salesReport",className:"link",children:Object(d.jsxs)("li",{className:"sidebarListItem",children:[Object(d.jsx)(o.a,{className:"sidebarIcon"}),"Sales Report"]})})]})]}),Object(d.jsxs)("div",{className:"sidebarMenu",children:[Object(d.jsx)("h3",{className:"sidebarTitle",children:"Purchase Module"}),Object(d.jsxs)("ul",{className:"sidebarList",children:[Object(d.jsx)(b.b,{to:"/purchase",className:"link",children:Object(d.jsxs)("li",{className:"sidebarListItem active",children:[Object(d.jsx)(o.a,{className:"sidebarIcon"}),"Purchase"]})}),Object(d.jsx)(b.b,{to:"/purchaseReport",className:"link",children:Object(d.jsxs)("li",{className:"sidebarListItem",children:[Object(d.jsx)(o.a,{className:"sidebarIcon"}),"Purchase Report"]})})]})]}),Object(d.jsxs)("div",{className:"sidebarMenu",children:[Object(d.jsx)("h3",{className:"sidebarTitle",children:"Alarming Medicine"}),Object(d.jsx)("ul",{className:"sidebarList",children:Object(d.jsx)(b.b,{to:"/alarmingReport",className:"link",children:Object(d.jsxs)("li",{className:"sidebarListItem active",children:[Object(d.jsx)(o.a,{className:"sidebarIcon"}),"Alarming Report"]})})})]}),Object(d.jsxs)("div",{className:"sidebarMenu",children:[Object(d.jsx)("h3",{className:"sidebarTitle",children:"Settings"}),Object(d.jsx)("ul",{className:"sidebarList",children:Object(d.jsx)(b.b,{to:"/",className:"link",children:Object(d.jsxs)("li",{className:"sidebarListItem active",children:[Object(d.jsx)(p.a,{}),"Logout"]})})})]})]})})})},m=a(185),x=a(186),O=a(92),g=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),e.sidebar?Object(d.jsx)(m.a,{fluid:!0,children:Object(d.jsxs)(x.a,{children:[Object(d.jsx)(O.a,{md:2,children:Object(d.jsx)(h,{})}),Object(d.jsx)(O.a,{md:10,style:{marginLeft:"auto"},children:e.children})]})}):e.children]})},N=(a(119),function(){return Object(d.jsx)("div",{className:"home",children:Object(d.jsx)(g,{sidebar:!0,children:Object(d.jsx)("div",{className:"homeWidgets"})})})}),f=a(20),y=(a(201),a(76)),v=a.n(y),P=a(22),S=a(93),z="LOGIN_REQUEST",I="LOGIN_SUCCESS",C="LOGIN_FAILED",G=a(69),k={token:"",user:{fullname:"",email:""},authentiating:!1,authenticate:!1,error:""},W=Object(G.a)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:e=Object(P.a)(Object(P.a)(Object(P.a)({},e),t.payload),{},{authentiating:!0});break;case I:e=Object(P.a)(Object(P.a)(Object(P.a)({},e),t.payload),{},{authenticate:!0,authentiating:!1});break;case C:e=Object(P.a)(Object(P.a)({},e),t.payload)}return e}}),w=Object(G.b)(W),A=a(94),M=a.n(A).a.create({baseURL:"http://localhost:3300"}),R=function(){var e=Object(S.a)(v.a.mark((function e(t){var a,i,c,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.post("/user/admin/login",Object(P.a)({},t));case 3:201===(a=e.sent).status&&(i=a.data,c=i.access_token,s=i.user,localStorage.setItem("token",c),localStorage.setItem("user",JSON.stringify(s)),w.dispatch({type:I,payload:{access_token:c,user:s}})),w.dispatch({type:z,payload:Object(P.a)({},t)}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),w.dispatch({type:C,payload:{error:e.t0}});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),T=(a(140),function(){var e=Object(i.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1],s=Object(i.useState)(""),n=Object(f.a)(s,2),j=n[0],b=n[1],o=Object(i.useState)(""),u=Object(f.a)(o,2);u[0],u[1];return Object(r.b)((function(e){return e.auth})).authenticate?Object(d.jsx)(l.a,{to:"/"}):Object(d.jsx)("div",{className:"body",children:Object(d.jsx)(m.a,{children:Object(d.jsx)("div",{className:"container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto",children:Object(d.jsxs)("div",{className:"card card0 border-0",children:[Object(d.jsxs)("div",{className:"row d-flex",children:[Object(d.jsx)("div",{className:"col-lg-6",children:Object(d.jsxs)("div",{className:"card1 pb-5",children:[Object(d.jsxs)("div",{className:"row",children:[" ",Object(d.jsx)("img",{src:"https://i.imgur.com/CXQmsmF.png",className:"logo"})," "]}),Object(d.jsxs)("div",{className:"row px-3 justify-content-center mt-4 mb-5 border-line",children:[" ",Object(d.jsx)("img",{src:"https://i.imgur.com/uNGdWHi.png",className:"image"})," "]})]})}),Object(d.jsx)("div",{className:"col-lg-6",children:Object(d.jsxs)("div",{className:"card2 card border-0 px-4 py-5",children:[Object(d.jsxs)("div",{className:"row mb-4 px-3",children:[Object(d.jsx)("h6",{className:"mb-0 mr-4 mt-2",children:"Sign in with"}),Object(d.jsx)("div",{className:"facebook text-center mr-3",children:Object(d.jsx)("div",{className:"fa fa-facebook"})}),Object(d.jsx)("div",{className:"twitter text-center mr-3",children:Object(d.jsx)("div",{className:"fa fa-twitter"})}),Object(d.jsx)("div",{className:"linkedin text-center mr-3",children:Object(d.jsx)("div",{className:"fa fa-linkedin"})})]}),Object(d.jsxs)("div",{className:"row px-3 mb-4",children:[Object(d.jsx)("div",{className:"line"})," ",Object(d.jsx)("small",{className:"or text-center",children:"Or"}),Object(d.jsx)("div",{className:"line"})]}),Object(d.jsxs)("div",{className:"row px-3",children:[" ",Object(d.jsx)("label",{className:"mb-1",children:Object(d.jsx)("h6",{className:"mb-0 text-sm",children:"Email Address"})}),Object(d.jsx)("input",{className:"mb-4",type:"text",placeholder:"Enter a valid email address",onChange:function(e){return c(e.target.value)}})]}),Object(d.jsxs)("div",{className:"row px-3",children:[Object(d.jsx)("label",{className:"mb-1",children:Object(d.jsx)("h6",{className:"mb-0 text-sm",children:"Password"})}),Object(d.jsx)("input",{type:"password",placeholder:"Enter password",onChange:function(e){b(e.target.value)}})]}),Object(d.jsxs)("div",{className:"row px-3 mb-4",children:[Object(d.jsxs)("div",{className:"custom-control custom-checkbox custom-control-inline",children:[Object(d.jsx)("input",{id:"chk1",type:"checkbox",name:"chk",className:"custom-control-input"}),Object(d.jsx)("label",{for:"chk1",className:"custom-control-label text-sm",children:"Remember me"})]}),Object(d.jsx)("a",{href:"#",className:"ml-auto mb-0 text-sm",children:"Forgot Password?"})]}),Object(d.jsx)("div",{className:"row mb-3 px-3",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-blue text-center",onClick:function(e){return e.preventDefault(),R({email:a,password:j})},children:"Login"})}),Object(d.jsx)("div",{className:"row mb-4 px-3",children:Object(d.jsxs)("small",{className:"font-weight-bold",children:["Don't have an account?"," ",Object(d.jsx)("a",{className:"text-danger ",children:"Register"})]})})]})})]}),Object(d.jsx)("div",{className:"bg-blue py-4",children:Object(d.jsxs)("div",{className:"row px-3",children:[" ",Object(d.jsx)("small",{className:"ml-4 ml-sm-5 mb-2",children:"Copyright \xa9 2019. All rights reserved."}),Object(d.jsx)("div",{className:"social-contact ml-4 ml-sm-auto"})]})})]})})})})}),L=(a(95),a(141),function(){return Object(d.jsx)(g,{sidebar:!0,children:Object(d.jsxs)("div",{className:"newProduct",children:[Object(d.jsx)("h1",{className:"addProductTitle",children:"New Medicine"}),Object(d.jsxs)("form",{className:"addProductForm",children:[Object(d.jsxs)("div",{className:"addProductItem",children:[Object(d.jsx)("label",{children:"Medicine Name + Weight"}),Object(d.jsx)("input",{type:"text",placeholder:"Acitrin 10 (Tab)"})]}),Object(d.jsxs)("div",{className:"addProductItem",children:[Object(d.jsx)("label",{children:"Company Name / Manufacturer Name"}),Object(d.jsx)("input",{type:"text",placeholder:"Aci Limited"})]}),Object(d.jsxs)("div",{className:"addProductItem",children:[Object(d.jsx)("label",{children:"Group Name / Generic Name"}),Object(d.jsx)("input",{type:"text",placeholder:"Ampicilin"})]}),Object(d.jsxs)("div",{className:"addProductItem",children:[Object(d.jsx)("label",{children:"Manufacturer Country"}),Object(d.jsx)("input",{type:"text",placeholder:"Bangladesh"})]}),Object(d.jsxs)("div",{className:"addProductItem",children:[Object(d.jsx)("label",{children:"Pack Size"}),Object(d.jsx)("input",{type:"text",placeholder:"123"})]}),Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"row",width:"500px"},children:[Object(d.jsxs)("div",{className:"addProductItem",children:[Object(d.jsx)("label",{children:"TP"}),Object(d.jsx)("input",{type:"text",placeholder:"123"})]}),Object(d.jsxs)("div",{className:"addProductItem",children:[Object(d.jsx)("label",{children:"Vat(%) Per Unit"}),Object(d.jsx)("input",{type:"text",placeholder:"123"})]}),Object(d.jsxs)("div",{className:"addProductItem",children:[Object(d.jsx)("label",{children:"Discount(%)"}),Object(d.jsx)("input",{type:"text",placeholder:"123"})]})]}),Object(d.jsxs)("div",{className:"addProductItem",children:[Object(d.jsx)("label",{children:"Purchase Price"}),Object(d.jsx)("input",{type:"text",placeholder:"123"})]}),Object(d.jsxs)("div",{className:"addProductItem",children:[Object(d.jsx)("label",{children:"Sale Price"}),Object(d.jsx)("input",{type:"text",placeholder:"123"})]}),Object(d.jsxs)("div",{className:"addProductItem",children:[Object(d.jsx)("label",{children:"Product Code"}),Object(d.jsx)("input",{type:"text",placeholder:"XKSRFDS"})]}),Object(d.jsxs)("div",{className:"addProductItem",children:[Object(d.jsx)("label",{children:"Product Alart Qty"}),Object(d.jsx)("input",{type:"text",placeholder:"123"})]}),Object(d.jsx)("button",{className:"addProductButton",children:"Create"})]})]})})}),U=a(187),F=a(188),B=a(189),D=a(147),E=a(149),H=a(190),J=a(191),Q=a(192),X=a(193),K=a(194),_=a(195),V=a(196),$=a(200),q=a(35),Y=a.n(q),Z=a(27),ee=a.n(Z),te=a(37),ae=a.n(te),ie=[{id:"medicine",label:"Medicine Name",minWidth:170},{id:"company",label:"Company Name",minWidth:100},{id:"group",label:"Group Name",minWidth:170,align:"right"},{id:"country",label:"Manufacturer Country",minWidth:170,align:"right"},{id:"purchase",label:"Purchase Price",minWidth:100,align:"right"},{id:"sale",label:"Sale Price",minWidth:100,align:"right"},{id:"alart",label:"Alart Qty",minWidth:100,align:"right"},{id:"stock",label:"Stock",minWidth:100,align:"right"}];function ce(e,t,a,i){return{medicine:e,group:t,country:a,purchase:i}}var se=[ce("India","IN",1324171354,3287263),ce("China","CN",1403500365,9596961),ce("Italy","IT",60483973,301340),ce("United States","US",327167434,9833520),ce("Canada","CA",37602103,9984670),ce("Australia","AU",25475400,7692024),ce("Germany","DE",83019200,357578),ce("Ireland","IE",4857e3,70273),ce("Mexico","MX",126577691,1972550),ce("Japan","JP",126317e3,377973),ce("France","FR",67022e3,640679),ce("United Kingdom","GB",67545757,242495),ce("Russia","RU",146793744,17098246),ce("Nigeria","NG",200962417,923768),ce("Brazil","BR",210147125,8515767)],ne=Object(U.a)({root:{width:"90%"},container:{maxHeight:700}});function le(){var e=ne(),t=c.a.useState(0),a=Object(f.a)(t,2),i=a[0],s=a[1],n=c.a.useState(10),l=Object(f.a)(n,2),r=l[0],j=l[1];return Object(d.jsxs)(g,{sidebar:!0,children:[Object(d.jsx)(F.a,{className:e.root,children:Object(d.jsx)(B.a,{children:Object(d.jsxs)(D.a,{component:"form",className:e.root,children:[Object(d.jsx)(E.a,{className:e.input,style:{width:"20%",padding:20},placeholder:"Search Medicine",inputProps:{"aria-label":"search google maps"}}),Object(d.jsx)(H.a,{type:"submit",className:e.iconButton,"aria-label":"search",onClick:function(e){e.preventDefault()},children:Object(d.jsx)(Y.a,{})})]})})}),Object(d.jsxs)(D.a,{className:e.root,children:[Object(d.jsx)(J.a,{className:e.container,children:Object(d.jsxs)(Q.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(d.jsx)(X.a,{children:Object(d.jsxs)(K.a,{children:[ie.map((function(e){return Object(d.jsx)(_.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)})),Object(d.jsx)(_.a,{style:{minWidth:170},align:"center",children:"Action"})]})}),Object(d.jsx)(V.a,{children:se.slice(i*r,i*r+r).map((function(e){return Object(d.jsxs)(K.a,{hover:!0,role:"checkbox",tabIndex:-1,children:[ie.map((function(t){var a=e[t.id];return Object(d.jsx)(_.a,{align:t.align,children:a},t.id)})),Object(d.jsxs)(_.a,{align:"center",children:[Object(d.jsx)(H.a,{children:Object(d.jsx)(ae.a,{})}),Object(d.jsx)(H.a,{onClick:function(){return t=e.medicine,void console.log(t);var t},children:Object(d.jsx)(ee.a,{})})]})]},e.code)}))})]})}),Object(d.jsx)($.a,{rowsPerPageOptions:[10,25,100],component:"div",count:se.length,rowsPerPage:r,page:i,onPageChange:function(e,t){s(t)},onRowsPerPageChange:function(e){j(+e.target.value),s(0)}})]})]})}var re=a(198),de=a(197),je=a(199),be=a(204),oe=a(202);a(142);function ue(e){return Object(d.jsx)(oe.a,Object(P.a)({elevation:6,variant:"filled"},e))}var pe=[{id:"medicine",label:"Id",minWidth:170},{id:"company",label:"Company Name",minWidth:100},{id:"group",label:"Name",minWidth:170,align:"right"},{id:"country",label:"Price",minWidth:170,align:"right"},{id:"purchase",label:"Quantity",minWidth:100,align:"right"},{id:"sale",label:"Total",minWidth:100,align:"right"}];function he(e,t,a,i){return{medicine:e,group:t,country:a,purchase:i}}var me=[he("India","IN",1324171354,3287263),he("China","CN",1403500365,9596961),he("Italy","IT",60483973,301340),he("United States","US",327167434,9833520)],xe=function(){var e=c.a.useState(!1),t=Object(f.a)(e,2),a=t[0],i=t[1],s=function(e,t){"clickaway"!==t&&i(!1)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(g,{sidebar:!0,children:[Object(d.jsxs)(x.a,{children:[Object(d.jsxs)(O.a,{md:8,children:[Object(d.jsxs)(F.a,{style:{padding:"0px 20px 20px 20px"},children:[Object(d.jsx)("h4",{className:"sales-panel-heading",children:"Sales Panel"}),Object(d.jsxs)(x.a,{children:[Object(d.jsxs)(O.a,{md:8,children:[Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Search"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Company"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Group"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]})]}),Object(d.jsxs)(O.a,{md:4,children:[Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Stock"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Purchase Price"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Sale Price"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Qty"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsx)(re.a,{variant:"contained",color:"primary",onClick:function(){i(!0)},children:"Add To Cart"})]})]})]}),Object(d.jsxs)(F.a,{style:{padding:"0px 20px 20px 20px"},className:"cart-section-card",children:[Object(d.jsx)("h5",{className:"cart-panel-heading",children:"My Cart Panel"}),Object(d.jsx)(x.a,{children:Object(d.jsx)(D.a,{children:Object(d.jsx)(J.a,{children:Object(d.jsxs)(Q.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(d.jsx)(X.a,{children:Object(d.jsxs)(K.a,{children:[pe.map((function(e){return Object(d.jsx)(_.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)})),Object(d.jsx)(_.a,{style:{minWidth:170},align:"center",children:"Action"})]})}),Object(d.jsx)(V.a,{children:me.map((function(e){return Object(d.jsxs)(K.a,{hover:!0,role:"checkbox",tabIndex:-1,children:[pe.map((function(t){var a=e[t.id];return Object(d.jsx)(_.a,{align:t.align,children:a},t.id)})),Object(d.jsx)(_.a,{align:"center",children:Object(d.jsx)(H.a,{onClick:function(){return t=e.medicine,void console.log(t);var t},children:Object(d.jsx)(ee.a,{})})})]},e.code)}))})]})})})})]})]}),Object(d.jsx)(O.a,{md:4,children:Object(d.jsxs)(F.a,{children:[Object(d.jsx)("h4",{className:"sale-details-heading",children:"Sales Details Panel"}),Object(d.jsxs)("div",{className:"input-group mb-3 sales-details-input",children:[Object(d.jsx)("span",{children:"Sales No"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3 sales-details-input",children:[Object(d.jsx)("span",{children:"Total Amount"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3 sales-details-input",children:[Object(d.jsx)("span",{children:"Discount"}),Object(d.jsx)(de.a,{placeholder:"percentage (%)",inputProps:{"aria-label":"description"},className:"sale-details-discount-input"}),Object(d.jsx)(de.a,{placeholder:"amount ($)",inputProps:{"aria-label":"description"},className:"sale-details-discount-input"})]}),Object(d.jsxs)("div",{className:"input-group mb-3 sales-details-input",children:[Object(d.jsx)("span",{children:"Total With VAT"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3 sales-details-input",children:[Object(d.jsx)("span",{children:"Customer Name"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsx)(je.a,{}),Object(d.jsxs)("div",{className:"input-group mb-3 sales-details-input",children:[Object(d.jsx)("span",{children:"Received"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3 sales-details-input",children:[Object(d.jsx)("span",{children:"Retrun"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsx)("div",{class:"text-center",children:Object(d.jsx)(re.a,{className:"sale-details-sale-btn",variant:"contained",color:"primary",children:"SALE"})})]})})]}),Object(d.jsx)(be.a,{open:a,autoHideDuration:2e3,onClose:s,children:Object(d.jsx)(ue,{onClose:s,severity:"success",children:"Item Added To The Cart!"})})]})})},Oe=[{id:"medicine",label:"Medicine Name",minWidth:170},{id:"company",label:"Company Name",minWidth:100},{id:"group",label:"Group Name",minWidth:170,align:"right"},{id:"country",label:"Manufacturer Country",minWidth:170,align:"right"},{id:"purchase",label:"Purchase Price",minWidth:100,align:"right"},{id:"sale",label:"Sale Price",minWidth:100,align:"right"},{id:"alart",label:"Alart Qty",minWidth:100,align:"right"},{id:"stock",label:"Stock",minWidth:100,align:"right"}];function ge(e,t,a,i){return{medicine:e,group:t,country:a,purchase:i}}var Ne=[ge("India","IN",1324171354,3287263),ge("China","CN",1403500365,9596961),ge("Italy","IT",60483973,301340),ge("United States","US",327167434,9833520),ge("Canada","CA",37602103,9984670),ge("Australia","AU",25475400,7692024),ge("Germany","DE",83019200,357578),ge("Ireland","IE",4857e3,70273),ge("Mexico","MX",126577691,1972550),ge("Japan","JP",126317e3,377973),ge("France","FR",67022e3,640679),ge("United Kingdom","GB",67545757,242495),ge("Russia","RU",146793744,17098246),ge("Nigeria","NG",200962417,923768),ge("Brazil","BR",210147125,8515767)],fe=Object(U.a)({root:{width:"90%"},container:{maxHeight:700}});function ye(){var e=fe(),t=c.a.useState(0),a=Object(f.a)(t,2),i=a[0],s=a[1],n=c.a.useState(10),l=Object(f.a)(n,2),r=l[0],j=l[1];return Object(d.jsxs)(g,{sidebar:!0,children:[Object(d.jsx)(F.a,{className:e.root,children:Object(d.jsx)(B.a,{children:Object(d.jsxs)(D.a,{component:"form",className:e.root,children:[Object(d.jsx)(E.a,{className:e.input,style:{width:"20%",padding:20},placeholder:"Search Medicine",inputProps:{"aria-label":"search google maps"}}),Object(d.jsx)(H.a,{type:"submit",className:e.iconButton,"aria-label":"search",onClick:function(e){e.preventDefault()},children:Object(d.jsx)(Y.a,{})})]})})}),Object(d.jsxs)(D.a,{className:e.root,children:[Object(d.jsx)(J.a,{className:e.container,children:Object(d.jsxs)(Q.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(d.jsx)(X.a,{children:Object(d.jsxs)(K.a,{children:[Oe.map((function(e){return Object(d.jsx)(_.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)})),Object(d.jsx)(_.a,{style:{minWidth:170},align:"center",children:"Action"})]})}),Object(d.jsx)(V.a,{children:Ne.slice(i*r,i*r+r).map((function(e){return Object(d.jsxs)(K.a,{hover:!0,role:"checkbox",tabIndex:-1,children:[Oe.map((function(t){var a=e[t.id];return Object(d.jsx)(_.a,{align:t.align,children:a},t.id)})),Object(d.jsxs)(_.a,{align:"center",children:[Object(d.jsx)(H.a,{children:Object(d.jsx)(ae.a,{})}),Object(d.jsx)(H.a,{onClick:function(){return t=e.medicine,void console.log(t);var t},children:Object(d.jsx)(ee.a,{})})]})]},e.code)}))})]})}),Object(d.jsx)($.a,{rowsPerPageOptions:[10,25,100],component:"div",count:Ne.length,rowsPerPage:r,page:i,onPageChange:function(e,t){s(t)},onRowsPerPageChange:function(e){j(+e.target.value),s(0)}})]})]})}a(143);function ve(e){return Object(d.jsx)(oe.a,Object(P.a)({elevation:6,variant:"filled"},e))}var Pe=[{id:"medicine",label:"Id",minWidth:170},{id:"company",label:"Company Name",minWidth:100},{id:"group",label:"Name",minWidth:170,align:"right"},{id:"country",label:"Price",minWidth:170,align:"right"},{id:"purchase",label:"Quantity",minWidth:100,align:"right"},{id:"sale",label:"Total",minWidth:100,align:"right"}];function Se(e,t,a,i){return{medicine:e,group:t,country:a,purchase:i}}var ze=[Se("India","IN",1324171354,3287263),Se("China","CN",1403500365,9596961),Se("Italy","IT",60483973,301340),Se("United States","US",327167434,9833520)],Ie=function(){var e=c.a.useState(!1),t=Object(f.a)(e,2),a=t[0],i=t[1],s=function(e,t){"clickaway"!==t&&i(!1)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(g,{sidebar:!0,children:[Object(d.jsxs)(x.a,{children:[Object(d.jsxs)(O.a,{md:8,children:[Object(d.jsxs)(F.a,{style:{padding:"0px 20px 20px 20px"},children:[Object(d.jsx)("h4",{className:"purchase-panel-heading",children:"Purchase Panel"}),Object(d.jsxs)(x.a,{children:[Object(d.jsxs)(O.a,{md:8,children:[Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Search"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Company"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Group"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Box Size"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"}),Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",style:{marginLeft:"7px"},children:"Box Qty"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"}),Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",style:{marginLeft:"7px"},children:"Extra Qty"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsx)("div",{className:"purchase-box-calculation",children:Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})})]}),Object(d.jsxs)(O.a,{md:4,children:[Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Stock"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Purchase Price"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Sale Price"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3",children:[Object(d.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"VAT (%)"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsx)(re.a,{variant:"contained",color:"primary",onClick:function(){i(!0)},children:"Add To Cart"})]})]})]}),Object(d.jsxs)(F.a,{style:{padding:"0px 20px 20px 20px"},className:"cart-section-card",children:[Object(d.jsx)("h5",{className:"cart-panel-heading",children:"My Cart Panel"}),Object(d.jsx)(x.a,{children:Object(d.jsx)(D.a,{children:Object(d.jsx)(J.a,{children:Object(d.jsxs)(Q.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(d.jsx)(X.a,{children:Object(d.jsxs)(K.a,{children:[Pe.map((function(e){return Object(d.jsx)(_.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)})),Object(d.jsx)(_.a,{style:{minWidth:170},align:"center",children:"Action"})]})}),Object(d.jsx)(V.a,{children:ze.map((function(e){return Object(d.jsxs)(K.a,{hover:!0,role:"checkbox",tabIndex:-1,children:[Pe.map((function(t){var a=e[t.id];return Object(d.jsx)(_.a,{align:t.align,children:a},t.id)})),Object(d.jsx)(_.a,{align:"center",children:Object(d.jsx)(H.a,{onClick:function(){return t=e.medicine,void console.log(t);var t},children:Object(d.jsx)(ee.a,{})})})]},e.code)}))})]})})})})]})]}),Object(d.jsx)(O.a,{md:4,children:Object(d.jsxs)(F.a,{children:[Object(d.jsx)("h4",{className:"sale-details-heading",children:"Purchase Details Panel"}),Object(d.jsxs)("div",{className:"input-group mb-3 purchase-details-input",children:[Object(d.jsx)("span",{children:"Total Item"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3 purchase-details-input",children:[Object(d.jsx)("span",{children:"Total Amount"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3 purchase-details-input",children:[Object(d.jsx)("span",{children:"Purchase Number"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3 purchase-details-input",children:[Object(d.jsx)("span",{children:"Supplier"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3 purchase-details-input",children:[Object(d.jsx)("span",{children:"Discount"}),Object(d.jsx)(de.a,{placeholder:"percentage (%)",inputProps:{"aria-label":"description"},className:"sale-details-discount-input"}),Object(d.jsx)(de.a,{placeholder:"amount ($)",inputProps:{"aria-label":"description"},className:"sale-details-discount-input"})]}),Object(d.jsxs)("div",{className:"input-group mb-3 purchase-details-input",children:[Object(d.jsx)("span",{children:"Purchase By"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsx)(je.a,{}),Object(d.jsxs)("div",{className:"input-group mb-3 purchase-details-input",children:[Object(d.jsx)("span",{children:"Net Payable Amount"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsxs)("div",{className:"input-group mb-3 purchase-details-input",children:[Object(d.jsx)("span",{children:"Given Amount"}),Object(d.jsx)("input",{type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"})]}),Object(d.jsx)("div",{class:"text-center",children:Object(d.jsx)(re.a,{className:"sale-details-sale-btn",variant:"contained",color:"primary",children:"Purchase"})})]})})]}),Object(d.jsx)(be.a,{open:a,autoHideDuration:2e3,onClose:s,children:Object(d.jsx)(ve,{onClose:s,severity:"success",children:"Item Added To The Cart!"})})]})})},Ce=[{id:"medicine",label:"Medicine Name",minWidth:170},{id:"company",label:"Company Name",minWidth:100},{id:"group",label:"Group Name",minWidth:170,align:"right"},{id:"country",label:"Manufacturer Country",minWidth:170,align:"right"},{id:"purchase",label:"Alart Quantity",minWidth:100,align:"right"},{id:"sale",label:"Stock",minWidth:100,align:"right"}];function Ge(e,t,a,i){return{medicine:e,group:t,country:a,purchase:i}}var ke=[Ge("India","IN",1324171354,3287263),Ge("China","CN",1403500365,9596961),Ge("Italy","IT",60483973,301340),Ge("United States","US",327167434,9833520),Ge("Canada","CA",37602103,9984670),Ge("Australia","AU",25475400,7692024),Ge("Germany","DE",83019200,357578),Ge("Ireland","IE",4857e3,70273),Ge("Mexico","MX",126577691,1972550),Ge("Japan","JP",126317e3,377973),Ge("France","FR",67022e3,640679),Ge("United Kingdom","GB",67545757,242495),Ge("Russia","RU",146793744,17098246),Ge("Nigeria","NG",200962417,923768),Ge("Brazil","BR",210147125,8515767)],We=Object(U.a)({root:{width:"90%"},container:{maxHeight:700}});function we(){var e=We(),t=c.a.useState(0),a=Object(f.a)(t,2),i=a[0],s=a[1],n=c.a.useState(10),l=Object(f.a)(n,2),r=l[0],j=l[1];return Object(d.jsxs)(g,{sidebar:!0,children:[Object(d.jsx)(F.a,{className:e.root,children:Object(d.jsx)(B.a,{children:Object(d.jsxs)(D.a,{component:"form",className:e.root,children:[Object(d.jsx)(E.a,{className:e.input,style:{width:"20%",padding:20},placeholder:"Search Medicine",inputProps:{"aria-label":"search google maps"}}),Object(d.jsx)(H.a,{type:"submit",className:e.iconButton,"aria-label":"search",onClick:function(e){e.preventDefault()},children:Object(d.jsx)(Y.a,{})})]})})}),Object(d.jsxs)(D.a,{className:e.root,children:[Object(d.jsx)(J.a,{className:e.container,children:Object(d.jsxs)(Q.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(d.jsx)(X.a,{children:Object(d.jsxs)(K.a,{children:[Ce.map((function(e){return Object(d.jsx)(_.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)})),Object(d.jsx)(_.a,{style:{minWidth:170},align:"center",children:"Action"})]})}),Object(d.jsx)(V.a,{children:ke.slice(i*r,i*r+r).map((function(e){return Object(d.jsxs)(K.a,{hover:!0,role:"checkbox",tabIndex:-1,children:[Ce.map((function(t){var a=e[t.id];return Object(d.jsx)(_.a,{align:t.align,children:a},t.id)})),Object(d.jsxs)(_.a,{align:"center",children:[Object(d.jsx)(H.a,{children:Object(d.jsx)(ae.a,{})}),Object(d.jsx)(H.a,{onClick:function(){return t=e.medicine,void console.log(t);var t},children:Object(d.jsx)(ee.a,{})})]})]},e.code)}))})]})}),Object(d.jsx)($.a,{rowsPerPageOptions:[10,25,100],component:"div",count:ke.length,rowsPerPage:r,page:i,onPageChange:function(e,t){s(t)},onRowsPerPageChange:function(e){j(+e.target.value),s(0)}})]})]})}var Ae=[{id:"medicine",label:"Medicine Name",minWidth:170},{id:"company",label:"Company Name",minWidth:100},{id:"group",label:"Group Name",minWidth:170,align:"right"},{id:"country",label:"Manufacturer Country",minWidth:170,align:"right"},{id:"purchase",label:"Purchase Price",minWidth:100,align:"right"},{id:"sale",label:"Sale Price",minWidth:100,align:"right"},{id:"alart",label:"Alart Qty",minWidth:100,align:"right"},{id:"stock",label:"Stock",minWidth:100,align:"right"}];function Me(e,t,a,i){return{medicine:e,group:t,country:a,purchase:i}}var Re=[Me("India","IN",1324171354,3287263),Me("China","CN",1403500365,9596961),Me("Italy","IT",60483973,301340),Me("United States","US",327167434,9833520),Me("Canada","CA",37602103,9984670),Me("Australia","AU",25475400,7692024),Me("Germany","DE",83019200,357578),Me("Ireland","IE",4857e3,70273),Me("Mexico","MX",126577691,1972550),Me("Japan","JP",126317e3,377973),Me("France","FR",67022e3,640679),Me("United Kingdom","GB",67545757,242495),Me("Russia","RU",146793744,17098246),Me("Nigeria","NG",200962417,923768),Me("Brazil","BR",210147125,8515767)],Te=Object(U.a)({root:{width:"90%"},container:{maxHeight:700}});function Le(){var e=Te(),t=c.a.useState(0),a=Object(f.a)(t,2),i=a[0],s=a[1],n=c.a.useState(10),l=Object(f.a)(n,2),r=l[0],j=l[1];return Object(d.jsxs)(g,{sidebar:!0,children:[Object(d.jsx)(F.a,{className:e.root,children:Object(d.jsx)(B.a,{children:Object(d.jsxs)(D.a,{component:"form",className:e.root,children:[Object(d.jsx)(E.a,{className:e.input,style:{width:"20%",padding:20},placeholder:"Search Medicine",inputProps:{"aria-label":"search google maps"}}),Object(d.jsx)(H.a,{type:"submit",className:e.iconButton,"aria-label":"search",onClick:function(e){e.preventDefault()},children:Object(d.jsx)(Y.a,{})})]})})}),Object(d.jsxs)(D.a,{className:e.root,children:[Object(d.jsx)(J.a,{className:e.container,children:Object(d.jsxs)(Q.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(d.jsx)(X.a,{children:Object(d.jsxs)(K.a,{children:[Ae.map((function(e){return Object(d.jsx)(_.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)})),Object(d.jsx)(_.a,{style:{minWidth:170},align:"center",children:"Action"})]})}),Object(d.jsx)(V.a,{children:Re.slice(i*r,i*r+r).map((function(e){return Object(d.jsxs)(K.a,{hover:!0,role:"checkbox",tabIndex:-1,children:[Ae.map((function(t){var a=e[t.id];return Object(d.jsx)(_.a,{align:t.align,children:a},t.id)})),Object(d.jsxs)(_.a,{align:"center",children:[Object(d.jsx)(H.a,{children:Object(d.jsx)(ae.a,{})}),Object(d.jsx)(H.a,{onClick:function(){return t=e.medicine,void console.log(t);var t},children:Object(d.jsx)(ee.a,{})})]})]},e.code)}))})]})}),Object(d.jsx)($.a,{rowsPerPageOptions:[10,25,100],component:"div",count:Re.length,rowsPerPage:r,page:i,onPageChange:function(e,t){s(t)},onRowsPerPageChange:function(e){j(+e.target.value),s(0)}})]})]})}var Ue=function(){return Object(r.b)((function(e){return e.auth})),Object(i.useEffect)((function(){!function(){var e=localStorage.getItem("token"),t=JSON.parse(localStorage.getItem("user"));e?w.dispatch({type:I,payload:{token:e,user:t}}):w.dispatch({type:C,payload:{error:"Failed to login"}})}()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/",exact:!0,component:N}),Object(d.jsx)(l.b,{path:"/signin",component:T}),Object(d.jsx)(l.b,{path:"/addMedicine",component:L}),Object(d.jsx)(l.b,{path:"/medicineList",component:le}),Object(d.jsx)(l.b,{path:"/sales",component:xe}),Object(d.jsx)(l.b,{path:"/salesReport",component:ye}),Object(d.jsx)(l.b,{path:"/purchase",component:Ie}),Object(d.jsx)(l.b,{path:"/purchaseReport",component:Le}),Object(d.jsx)(l.b,{path:"/alarmingReport",component:we})]})})},Fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,205)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),i(e),c(e),s(e),n(e)}))};a(144),a(145);window.store=w,n.a.render(Object(d.jsx)(r.a,{store:w,children:Object(d.jsx)(b.a,{children:Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(Ue,{})})})}),document.getElementById("root")),Fe()}},[[146,1,2]]]);
//# sourceMappingURL=main.a25e9c73.chunk.js.map