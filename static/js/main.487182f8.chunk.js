(this.webpackJsonptwopizza=this.webpackJsonptwopizza||[]).push([[0],{22:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACWCAIAAAAUvlBOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGaSURBVHhe7dIxAcAgEMDAb3Uw4t9ZPXRBAtnulhjI8609cNt7ClcZi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLFIGIuEsUgYi4SxSBiLhLEIzPzl6gJZ4/mnoAAAAABJRU5ErkJggg=="},23:function(e){e.exports=JSON.parse('[{"name":"Uri\'s pizza","description":"big solami pizza","price":69,"imageURL":"./src/img/2.png"},{"name":"Hleb pizza","description":"Just dough","price":1,"imageURL":"../img/2.png"},{"name":"Yevgenip\'s pizza","description":"Shenkevich smell","price":89,"imageURL":"../img/3.png"}]')},26:function(e,t,a){e.exports=a(40)},31:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),c=a(21),r=a.n(c),l=(a(31),a(5)),s=a(6),u=a(8),o=a(7),m=a(14),p=function(){var e=Object(m.b)().loginWithRedirect;return n.a.createElement("button",{className:"btn btn-outline-success",onClick:function(){return e()}},"Log in")},z=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(p,null)}}]),a}(i.Component),E=a(25),h=a(15),g=a(22),d=a.n(g),I=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"col-lg-4 card m-auto"},n.a.createElement("h3",{className:"text-center"},this.props.pizzaElement.name),n.a.createElement("img",{className:"border card-img-top",src:d.a,alt:"".concat(this.props.pizzaElement.imageURL," picture")}),n.a.createElement("div",{className:"card-body row"},n.a.createElement("div",{className:"col-auto"},n.a.createElement("h4",{className:"card-title"},"Description"),n.a.createElement("p",{className:"card-text"},this.props.pizzaElement.description)),n.a.createElement("div",{className:"col-auto m-auto text-center"},n.a.createElement("h4",null,"Price"),n.a.createElement("h5",{className:""},this.props.pizzaElement.price,"$"))),n.a.createElement("button",{onClick:function(){return e.props.pizzaEdit(e.props.pizzaElement,e.props.index)},className:"btn btn-outline-success"},"Edit"))}}]),a}(i.Component),f=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).state={pizzaList:Object(h.a)(i.props.pizzaList)},i}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container align-items-start form-row no-gutters"},this.state.pizzaList.map((function(t,a){return n.a.createElement(I,{key:a,index:a,pizzaElement:t,pizzaEdit:e.props.pizzaEdit,pizzaConfPath:"/pizzaconf"})})))}}]),a}(i.Component),S=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).state={pizzaElement:i.props.pizzaElement},i}return Object(s.a)(a,[{key:"changeName",value:function(e){this.setState((function(t){return t.pizzaElement.name=e}))}},{key:"changeDescription",value:function(e){this.setState((function(t){return t.pizzaElement.description=e}))}},{key:"changePrice",value:function(e){this.setState((function(t){return t.pizzaElement.price=e}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container d-flex mt-3 row no-gutters align-items-center text-center"},n.a.createElement("div",{className:"col-lg-4 d-flex flex-column"},n.a.createElement("label",{className:"mt-3",htmlFor:"PizzaNameEditInput"},"Pizza name"),n.a.createElement("input",{onChange:function(t){return e.changeName(t.target.value)},id:"PizzaNameEditInput",type:"text"}),n.a.createElement("label",{className:"mt-3",htmlFor:"PizzaImageEditInput"},"Pizza image"),n.a.createElement("input",{id:"PizzaImageEditInput",type:"file"}),n.a.createElement("label",{className:"mt-3",htmlFor:"PizzaDescriptionEditInput"},"Pizza description"),n.a.createElement("input",{onChange:function(t){return e.changeDescription(t.target.value)},id:"PizzaDescriptionEditInput",type:"text"}),n.a.createElement("label",{className:"mt-3",htmlFor:"PizzaPriceEditInput"},"Pizza price"),n.a.createElement("input",{onChange:function(t){return e.changePrice(t.target.value)},id:"PizzaPriceEditInput",type:"number"}),n.a.createElement("button",{onClick:function(){return e.props.editPizzaElement(e.state.pizzaElement,e.props.pizzaElementChangeIndex)},className:"btn btn-outline-success mt-3"},"Submit editions"),n.a.createElement("button",{onClick:this.props.exitConfig,className:"btn btn-outline-success mt-3"},"Back")),n.a.createElement(I,{pizzaElement:this.props.pizzaElement}))}}]),a}(i.Component),b=a(23),L=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).state={configuring:!1,pizzaConfElement:null,pizzalist:Object(h.a)(b)},i}return Object(s.a)(a,[{key:"pizzaEdit",value:function(e,t){this.setState({pizzaConfElement:Object(E.a)({},e),pizzaElementChangeIndex:t,configuring:!this.state.configuring})}},{key:"exitConfig",value:function(){this.setState({configuring:!1})}},{key:"editPizzaElement",value:function(e,t){console.log(t),this.setState((function(a){a.pizzalist[t]=e}))}},{key:"configurable",value:function(e){return e?n.a.createElement(S,{editPizzaElement:this.editPizzaElement.bind(this),exitConfig:this.exitConfig.bind(this),pizzaElement:this.state.pizzaConfElement,pizzaElementChangeIndex:this.state.pizzaElementChangeIndex}):n.a.createElement(f,{pizzaList:this.state.pizzalist,pizzaEdit:this.pizzaEdit.bind(this)})}},{key:"render",value:function(){return this.configurable(this.state.configuring)}}]),a}(i.Component),x=a(11),A=a(1),v=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container d-flex flex-column align-items-center"},n.a.createElement(x.a,null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(x.b,{to:"/"},"Auth")),n.a.createElement("li",null,n.a.createElement(x.b,{to:"/pizzalist"},"PizzaList"))),n.a.createElement(A.c,null,n.a.createElement(A.a,{path:"/",exact:!0},n.a.createElement(z,null)),n.a.createElement(A.a,{path:"/pizzalist"},n.a.createElement(L,null)))))}}]),a}(i.Component);a(39);r.a.render(n.a.createElement(m.a,{domain:"neistow.eu.auth0.com",clientId:"d6L4cb4NlNmSmnjCIM5VheCVEM1SX2v0",redirectUri:"http://localhost:3000/pizzalist"},n.a.createElement(v,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.487182f8.chunk.js.map