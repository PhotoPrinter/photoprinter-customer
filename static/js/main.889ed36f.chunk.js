(this["webpackJsonpphotoprinter-customer"]=this["webpackJsonpphotoprinter-customer"]||[]).push([[0],{392:function(e,t,a){},453:function(e,t,a){},454:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(18),r=a.n(i),s=a(26),j=a(62),l=a(487),o=a(89),d=a(245),b=a.n(d),u=a(349),O=a(478),x=a(312),h=a(311),f=a(239),m=a(480),p=a(350),g=a.n(p),v=a(5);function y(e){var t=c.a.useState(!1),a=Object(j.a)(t,2),n=a[0],i=a[1],r=c.a.useState(!1),s=Object(j.a)(r,2),l=s[0],d=s[1];return c.a.useEffect((function(){i(!0)}),[]),Object(v.jsx)(O.a,{in:n,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:1300,backgroundColor:"#fff"},children:Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[l&&Object(v.jsx)("div",{style:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.4)"},children:Object(v.jsx)(h.a,{})}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",backgroundColor:"#42465c",paddingLeft:18,height:65},children:[Object(v.jsx)(o.a,{variant:"h5",style:{flex:1,color:"#fff"},children:e.title}),Object(v.jsx)(f.a,{children:Object(v.jsx)(m.a,{children:Object(v.jsx)(g.a,{style:{color:"#fff"},fontSize:"large",onClick:function(){i(!1),setTimeout(e.handleClose,125)}})})})]}),Object(v.jsx)("div",{style:{flex:1,overflowY:"auto"},children:e.children}),e.showBottom&&Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",backgroundColor:"#42465c",paddingTop:12,paddingLeft:17,paddingBottom:12,paddingRight:17},children:[Object(v.jsx)(x.a,{variant:"contained",onClick:function(){i(!1),setTimeout(e.handleClose,125)},children:"Cancel"}),Object(v.jsx)(x.a,{variant:"contained",style:{marginLeft:15,backgroundColor:"#9ac9f5"},onClick:Object(u.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!0),t.next=3,e.handleConfirm();case 3:d(!1),i(!1);case 5:case"end":return t.stop()}}),t)}))),children:e.confirm})]})]})})}var C=a(15),w=a(313),S=(a(314),a(240)),I=a(241),k=a(244),R=a(315),P=a(242);a(497),a(499);function T(e){return Object(v.jsx)(w.a,Object(C.a)(Object(C.a)({},e),{},{fullWidth:!0,variant:"outlined"}))}function B(e){return Object(v.jsxs)(S.a,{variant:"outlined",fullWidth:!0,children:[Object(v.jsx)(I.a,{htmlFor:"outlined-age-native-simple",children:e.label}),Object(v.jsx)(k.a,{label:e.label,value:e.value,onChange:e.onChange,children:e.options.map((function(e,t){return Object(v.jsx)(R.a,{value:e.value,children:e.label},t)}))}),Object(v.jsx)(P.a,{children:e.helperText})]})}var D=a(353),z=a.n(D),E=a(489),A=a(490),N=a(491),W=a(484),F=a(492),M=a(485),_=a(493),L=a(204),G=a.n(L);a(392);function J(e){var t,a,n=c.a.useState(null!==(t=e.images)&&void 0!==t?t:[]),i=Object(j.a)(n,2),r=i[0],s=i[1],d=c.a.useState(-1),b=Object(j.a)(d,2),u=b[0],O=b[1];return c.a.useEffect((function(){e.images&&s(e.images)}),[e.images]),Object(v.jsxs)("div",{children:[Object(v.jsx)(z.a,{multiple:!0,value:r,onChange:function(t,a){s(t.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{paperType:"glossy",size:"5x7"})}))),e.setImages(t.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{paperType:"glossy",size:"5x7"})})))},maxNumber:50,dataURLKey:"data_url",children:function(t){var a=t.imageList,n=t.onImageUpload,c=t.onImageRemove;return Object(v.jsx)("div",{children:Object(v.jsxs)(E.a,{rowHeight:180,style:{width:"100%"},cols:3,children:[a.map((function(t,a){return Object(v.jsxs)(A.a,{className:"image",children:[Object(v.jsx)("img",{src:t.data_url,alt:t.file.name,onClick:function(){return!e.notEditable&&O(a)}}),Object(v.jsx)(N.a,{title:t.file.name,subtitle:"".concat(null===t||void 0===t?void 0:t.paperType,", ").concat(null===t||void 0===t?void 0:t.size),actionIcon:!e.notEditable&&Object(v.jsx)(f.a,{onClick:function(e){return c(a)},children:Object(v.jsx)(G.a,{style:{color:"#ffffff"}})})})]},t.file.name)})),e.allowAdd&&!e.notEditable&&Object(v.jsx)(A.a,{children:Object(v.jsx)(l.a,{container:!0,justifyContent:"center",alignItems:"center",onClick:n,className:"add-image-cta",children:Object(v.jsx)(o.a,{variant:"h6",children:"Click to add more items"})})})]})})}}),r[u]&&Object(v.jsxs)(W.a,{open:u>=0,onClose:function(){return O(void 0)},fullWidth:!0,children:[Object(v.jsxs)(F.a,{children:["How do you want us to print ",null===(a=r[u].file)||void 0===a?void 0:a.name,"?"]}),Object(v.jsxs)(M.a,{children:[Object(v.jsx)(_.a,{image:r[u].data_url,style:{height:250}}),Object(v.jsxs)(l.a,{container:!0,spacing:3,style:{marginTop:20,marginBottom:15},children:[Object(v.jsx)(l.a,{item:!0,xs:12,children:Object(v.jsx)(B,{label:"Paper type",value:r[u].paperType,options:[{value:"glossy",label:"Glossy"},{value:"matte",label:"Matte"}],onChange:function(e){return s(r.map((function(t,a){return a===u?Object(C.a)(Object(C.a)({},t),{},{paperType:e.target.value}):t})))}})}),Object(v.jsx)(l.a,{item:!0,xs:12,children:Object(v.jsx)(B,{label:"Print size",value:r[u].size,options:[{value:"5x7",label:"5x7"},{value:"8x10",label:"8x10"},{value:"11x14",label:"11x14"},{value:"16x20",label:"16x20"},{value:"17x22",label:"17x22"}],onChange:function(e){return s(r.map((function(t,a){return a===u?Object(C.a)(Object(C.a)({},t),{},{size:e.target.value}):t})))}})})]})]})]})]})}function H(e){return Object(v.jsx)(l.a,{item:!0,sm:12,md:6,children:Object(v.jsx)(l.a,{container:!0,children:Object(v.jsxs)(l.a,{item:!0,xs:12,children:[Object(v.jsxs)(l.a,{container:!0,children:[Object(v.jsx)(l.a,{item:!0,xs:!0,children:Object(v.jsxs)(o.a,{variant:"body1",children:[e.numImages," photos"]})}),Object(v.jsx)(l.a,{item:!0,children:Object(v.jsxs)(o.a,{variant:"body1",children:["$",(.56*e.numImages).toFixed(2)]})})]}),Object(v.jsxs)(l.a,{container:!0,children:[Object(v.jsx)(l.a,{item:!0,xs:!0,children:Object(v.jsx)(o.a,{variant:"body1",children:"Shipping"})}),Object(v.jsx)(l.a,{item:!0,children:Object(v.jsx)(o.a,{variant:"body1",children:"$4.99"})})]}),Object(v.jsx)(l.a,{container:!0,children:Object(v.jsx)(l.a,{item:!0,xs:!0,children:Object(v.jsx)("hr",{})})}),Object(v.jsxs)(l.a,{container:!0,children:[Object(v.jsx)(l.a,{item:!0,xs:!0,children:Object(v.jsx)(o.a,{variant:"body1",children:"Subtotal"})}),Object(v.jsx)(l.a,{item:!0,children:Object(v.jsxs)(o.a,{variant:"body1",children:["$",(.56*e.numImages).toFixed(2)]})})]}),Object(v.jsxs)(l.a,{container:!0,children:[Object(v.jsx)(l.a,{item:!0,xs:!0,children:Object(v.jsx)(o.a,{variant:"body1",children:"Total"})}),Object(v.jsx)(l.a,{item:!0,children:Object(v.jsxs)(o.a,{variant:"body1",children:["$",(.56*e.numImages*1.0938).toFixed(2)]})})]})]})})})}function Y(e){var t=c.a.useState(""),a=Object(j.a)(t,2),n=a[0],i=a[1],r=c.a.useState(""),d=Object(j.a)(r,2),b=d[0],u=d[1],O=c.a.useState({}),x=Object(j.a)(O,2),h=x[0],f=x[1],m=Object(s.f)();return Object(v.jsx)(y,{title:"Create a new order",confirm:"Create order",showBottom:!0,handleClose:function(){return m.goBack()},handleConfirm:function(){return m.goBack()},children:Object(v.jsx)(l.a,{container:!0,justify:"center",spacing:3,style:{width:"100%",marginTop:20},children:Object(v.jsxs)(l.a,{container:!0,item:!0,xs:12,sm:8,spacing:3,children:[Object(v.jsx)(l.a,{item:!0,xs:12,children:Object(v.jsx)(o.a,{variant:"h5",children:"Tell me about your master pieces"})}),Object(v.jsx)(l.a,{item:!0,xs:12,children:Object(v.jsx)(T,{label:"Give it a name",value:n,onChange:function(e){return i(e.target.value)}})}),Object(v.jsx)(l.a,{item:!0,xs:12,children:Object(v.jsx)(T,{label:"Describe it to me",value:b,onChange:function(e){return u(e.target.value)}})}),Object(v.jsx)(l.a,{item:!0,xs:12,children:Object(v.jsx)(o.a,{variant:"h5",children:"Show me your master pieces"})}),Object(v.jsx)(l.a,{item:!0,xs:12,children:Object(v.jsx)(J,{setImages:f,allowAdd:!0})}),h.length>0&&Object(v.jsxs)(c.a.Fragment,{children:[Object(v.jsx)(l.a,{item:!0,xs:12,children:Object(v.jsx)(o.a,{variant:"h5",children:"I've crunched the numbers"})}),Object(v.jsx)(H,{numImages:h.length})]})]})})})}var $=a(496),U=a(243),V=a.n(U),q=a(355),K=a.n(q),X=a(364),Q=a.n(X),Z=a(356),ee=a.n(Z),te=a(362),ae=a.n(te),ne=a(249),ce=a.n(ne),ie=a(248),re=a.n(ie),se=a(357),je=a.n(se),le=a(208),oe=a.n(le),de=a(359),be=a.n(de),ue=a(360),Oe=a.n(ue),xe=a(361),he=a.n(xe),fe=a(365),me=a.n(fe),pe=a(358),ge=a.n(pe),ve=a(363),ye=a.n(ve),Ce=a(366),we=a.n(Ce),Se={Add:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(K.a,Object(C.a)(Object(C.a)({},e),{},{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(ee.a,Object(C.a)(Object(C.a)({},e),{},{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(re.a,Object(C.a)(Object(C.a)({},e),{},{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(je.a,Object(C.a)(Object(C.a)({},e),{},{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(ce.a,Object(C.a)(Object(C.a)({},e),{},{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(oe.a,Object(C.a)(Object(C.a)({},e),{},{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(ge.a,Object(C.a)(Object(C.a)({},e),{},{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(be.a,Object(C.a)(Object(C.a)({},e),{},{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(Oe.a,Object(C.a)(Object(C.a)({},e),{},{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(he.a,Object(C.a)(Object(C.a)({},e),{},{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(ce.a,Object(C.a)(Object(C.a)({},e),{},{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(ae.a,Object(C.a)(Object(C.a)({},e),{},{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(re.a,Object(C.a)(Object(C.a)({},e),{},{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(ye.a,Object(C.a)(Object(C.a)({},e),{},{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(Q.a,Object(C.a)(Object(C.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(me.a,Object(C.a)(Object(C.a)({},e),{},{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return Object(v.jsx)(we.a,Object(C.a)(Object(C.a)({},e),{},{ref:t}))}))};function Ie(e){return Object(v.jsx)(V.a,Object(C.a)({icons:Se,options:{pageSizeOptions:[3,5,10],pageSize:3}},e))}function ke(e){var t=Object(s.f)();return Object(v.jsx)($.a,{maxWidth:"md",style:{marginTop:20},children:Object(v.jsxs)(l.a,{container:!0,spacing:3,children:[Object(v.jsx)(l.a,{item:!0,xs:12,children:Object(v.jsx)(Ie,{style:{width:"100%"},columns:[{title:"Order ID",field:"id"},{title:"Name",field:"name"},{title:"Status",field:"status"}],data:[{id:"237651",name:"Holiday 2021",status:"Shipped"},{id:"361295",name:"Summer vacation 2021",status:"Processing"}],title:"Your active orders",onRowClick:function(e,a){return t.push("/order/".concat(a.id))}})}),Object(v.jsx)(l.a,{item:!0,xs:12,children:Object(v.jsx)(Ie,{style:{width:"100%"},columns:[{title:"Order ID",field:"id"},{title:"Name",field:"name"},{title:"Status",field:"status"}],data:[{id:"927481",name:"Spring 2021",status:"Delivered"},{id:"927480",name:"Spring 2021",status:"Cancelled"}],title:"Your past orders",onRowClick:function(e,a){return t.push("/order/".concat(a.id))}})})]})})}a(453);function Re(e){var t=Object(s.f)();return Object(v.jsxs)(l.a,{container:!0,style:{padding:"5px 15px 0px 15px"},alignItems:"center",children:[Object(v.jsx)(l.a,{item:!0,xs:!0,children:Object(v.jsxs)(l.a,{container:!0,alignItems:"center",spacing:3,children:[Object(v.jsx)(l.a,{item:!0,children:Object(v.jsx)(o.a,{className:"typography-btn",variant:"h5",onClick:function(){return t.push("/")},children:"PhotoPrinter"})}),Object(v.jsx)(l.a,{item:!0,children:Object(v.jsx)(o.a,{variant:"subtitle1",style:{color:"#777777"},className:"typography-btn",onClick:function(){return t.push("/orders")},children:"Orders"})})]})}),Object(v.jsx)(l.a,{item:!0,children:Object(v.jsx)(o.a,{variant:"subtitle1",style:{color:"#777777"},className:"typography-btn",onClick:function(){return t.push("/profile")},children:"Profile"})})]})}function Pe(e){var t=Object(s.f)();return Object(v.jsx)(y,{title:"Profile",showBottom:!1,handleClose:function(){return t.goBack()},handleConfirm:function(){return t.goBack()},children:Object(v.jsx)(l.a,{container:!0,justify:"center",spacing:3,style:{width:"100%",marginTop:20},children:Object(v.jsxs)(l.a,{container:!0,item:!0,xs:12,sm:8,spacing:3,children:[Object(v.jsxs)(l.a,{item:!0,xs:12,children:[Object(v.jsx)(o.a,{variant:"h5",children:"Stuff about you"}),Object(v.jsx)(Te,{label:"Name",data:["Bryan Kwong"]}),Object(v.jsx)(Te,{label:"Phone",data:["(626) 000-0000"]}),Object(v.jsx)(Te,{label:"Email",data:["person.name@gmail.com"]})]}),Object(v.jsxs)(l.a,{item:!0,xs:12,children:[Object(v.jsx)(o.a,{variant:"h5",children:"Money stuff"}),Object(v.jsx)(Te,{label:"Payment card",data:[["\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 9274"],["VISA exp. 07/2024"]]}),Object(v.jsx)(Te,{label:"Billing address",data:["1 Washington Sq","San Jose, 95128 CA"]})]}),Object(v.jsxs)(l.a,{item:!0,xs:12,children:[Object(v.jsx)(o.a,{variant:"h5",children:"Shipping stuff"}),Object(v.jsx)(Te,{label:"Address",data:["1 Washington Sq","San Jose, 95128 CA"]}),Object(v.jsx)(Te,{label:"Default shipping",data:["USPS 2-Day Priority Mail"]})]})]})})})}function Te(e){var t,a=c.a.useState(!1),n=Object(j.a)(a,2),i=n[0],r=n[1];return Object(v.jsxs)(l.a,{container:!0,style:{marginTop:10},alignItems:"center",children:[Object(v.jsx)(l.a,{item:!0,xs:!0,children:Object(v.jsxs)(l.a,{container:!0,children:[Object(v.jsx)(l.a,{item:!0,xs:12,md:4,children:Object(v.jsx)(o.a,{variant:"body1",children:Object(v.jsx)("b",{children:e.label})})}),Object(v.jsx)(l.a,{item:!0,children:(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.map)&&e.data.map((function(e){return Object(v.jsx)(o.a,{variant:"body1",children:e})}))})]})}),!i&&Object(v.jsx)(l.a,{item:!0,children:Object(v.jsx)(f.a,{onClick:function(){return r((function(e){return!0}))},children:Object(v.jsx)(oe.a,{})})})]})}var Be=a(367),De=a.n(Be),ze=a(368),Ee=a.n(ze),Ae=a(369),Ne=a.n(Ae),We={237651:{id:"237651",name:"Holiday 2021",status:"Shipped",description:"Our trip to Paris in 09/06/2021. We visited the Champs Elysee, Musee du Rodin, and had a lot of coffee at Le Maison Rose"},361295:{id:"361295",name:"Summer vacation 2021",status:"Processing",description:"This was a trip to Rome, we flew on TAP through Lisbon. "},927481:{id:"927481",name:"Spring 2021",status:"Delivered"},927480:{id:"927480",name:"Spring 2021",status:"Cancelled"}},Fe=[{data_url:"https://i.imgur.com/us2mJck.jpeg",file:{name:"IMG_1231"},paperType:"glossy",size:"5x7"},{data_url:"https://i.imgur.com/fruRVwF.jpeg",file:{name:"IMG_1223"},paperType:"glossy",size:"5x7"},{data_url:"https://i.imgur.com/awlGgXB.jpeg",file:{name:"IMG_1232"},paperType:"glossy",size:"5x7"}],Me={Shipped:Object(v.jsx)(Ge,{}),Processing:Object(v.jsx)(He,{}),Delivered:Object(v.jsx)(Je,{}),Cancelled:Object(v.jsx)(Le,{})};function _e(e){var t=Object(s.g)().orderId,a=c.a.useState({}),n=Object(j.a)(a,2),i=n[0],r=n[1];return c.a.useEffect((function(){r(Object(C.a)(Object(C.a)({},We[t]),{},{images:Fe}))}),[t]),Object(v.jsx)($.a,{maxWidth:"md",style:{marginTop:20},children:Object(v.jsxs)(l.a,{container:!0,spacing:3,children:[Object(v.jsx)(l.a,{item:!0,xs:12,children:Object(v.jsxs)(l.a,{container:!0,children:[Object(v.jsx)(l.a,{item:!0,xs:!0,children:Object(v.jsxs)(o.a,{variant:"h5",children:[i.name," (#",t,")"]})}),Object(v.jsx)(l.a,{item:!0,children:Me[i.status]}),i.description&&Object(v.jsx)(l.a,{item:!0,xs:12,children:Object(v.jsx)(o.a,{variant:"subtitle1",children:i.description})})]})}),Object(v.jsxs)(l.a,{item:!0,xs:12,children:[Object(v.jsx)(o.a,{variant:"h6",children:"Your master pieces"}),Object(v.jsx)(J,{images:i.images,allowAdd:!0,setImages:function(){},notEditable:"Processing"!==i.status})]}),Object(v.jsxs)(l.a,{item:!0,xs:12,children:[Object(v.jsx)(o.a,{variant:"h6",children:"The numbers"}),Object(v.jsx)(H,{numImages:3})]})]})})}function Le(){return Object(v.jsxs)("div",{style:{display:"flex",alignItems:"center",color:"#bd0000"},children:[Object(v.jsx)(G.a,{style:{marginRight:5}}),Object(v.jsx)(o.a,{variant:"h6",children:"Cancelled"})]})}function Ge(){return Object(v.jsxs)("div",{style:{display:"flex",alignItems:"center",color:"#0081bd"},children:[Object(v.jsx)(De.a,{style:{marginRight:5}}),Object(v.jsx)(o.a,{variant:"h6",children:"Shipped"})]})}function Je(){return Object(v.jsxs)("div",{style:{display:"flex",alignItems:"center",color:"#00bd06"},children:[Object(v.jsx)(Ee.a,{style:{marginRight:5}}),Object(v.jsx)(o.a,{variant:"h6",children:"Delivered"})]})}function He(){return Object(v.jsxs)("div",{style:{display:"flex",alignItems:"center",color:"#e08a00"},children:[Object(v.jsx)(Ne.a,{style:{marginRight:5}}),Object(v.jsx)(o.a,{variant:"h6",children:"Processing"})]})}var Ye=function(){var e=Object(s.f)();return Object(v.jsxs)(c.a.Fragment,{children:[Object(v.jsx)(Re,{}),Object(v.jsxs)(s.c,{children:[Object(v.jsx)(s.a,{path:"/neworder",children:Object(v.jsx)(Y,{})}),Object(v.jsx)(s.a,{path:"/orders",children:Object(v.jsx)(ke,{})}),Object(v.jsx)(s.a,{path:"/order/:orderId",children:Object(v.jsx)(_e,{})}),Object(v.jsx)(s.a,{path:"/profile",children:Object(v.jsx)(Pe,{})}),Object(v.jsx)(s.a,{path:"/",children:Object(v.jsxs)($.a,{maxWidth:"md",style:{marginTop:30},children:[Object(v.jsx)(o.a,{variant:"h5",children:"Welcome to PhotoPrinter"}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(v.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){return e.push("/neworder")},style:{marginBottom:15},children:"Create a new order"}),Object(v.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){return e.push("/orders")},style:{marginBottom:15},children:"Check out existing orders"}),Object(v.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){return e.push("/profile")},style:{marginBottom:15},children:"Check out your profile"})]})]})})]})]})},$e=a(189);r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)($e.a,{children:Object(v.jsx)(Ye,{})})}),document.getElementById("root"))}},[[454,1,3]]]);
//# sourceMappingURL=main.889ed36f.chunk.js.map