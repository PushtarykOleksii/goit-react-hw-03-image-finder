(window["webpackJsonpgoit-react-hw-02-movies"]=window["webpackJsonpgoit-react-hw-02-movies"]||[]).push([[0],{2:function(e,t,a){e.exports={photo_card:"PhotoCard_photo_card__189E0",stats:"PhotoCard_stats__3XRLi",stats_item:"PhotoCard_stats_item__1clgI",fullscreen_button:"PhotoCard_fullscreen_button__1dSBe",gallery_item:"PhotoCard_gallery_item__240R2"}},26:function(e,t,a){e.exports=a(57)},31:function(e,t,a){},4:function(e,t,a){e.exports={container:"Gallery_container__WNzg4",gallery:"Gallery_gallery__3RNHd",button:"Gallery_button__3HT1a"}},57:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),c=a.n(r),i=(a(31),a(5)),l=a(20),s=a(21),m=a(24),u=a(22),g=a(25),d=a(6),p=a.n(d),h=a(23),_=a.n(h),f=a(4),b=a.n(f),v=a(2),E=a.n(v),N=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.openModal,r=e.likes,c=e.views,i=e.downloads,l=e.comments;return o.a.createElement("li",{className:E.a.gallery_item},o.a.createElement("div",{className:E.a.photo_card},o.a.createElement("img",{src:t,alt:"imghere"}),o.a.createElement("div",{className:E.a.stats},o.a.createElement("p",{className:E.a.stats_item},o.a.createElement("i",{className:"material-icons"},"thumb_up"),r),o.a.createElement("p",{className:E.a.stats_item},o.a.createElement("i",{className:"material-icons"},"visibility"),c),o.a.createElement("p",{className:E.a.stats_item},o.a.createElement("i",{className:"material-icons"},"comment"),l),o.a.createElement("p",{className:E.a.stats_item},o.a.createElement("i",{className:"material-icons"},"cloud_download"),i)),o.a.createElement("button",{onClick:function(){return n(a)},type:"button",className:E.a.fullscreen_button},o.a.createElement("i",{className:"material-icons",style:{pointerEvents:"none"}},"zoom_out_map"))))},w=function(e){var t=e.imagesArr,a=e.onClickBtn,n=e.openModal;return o.a.createElement("div",{className:b.a.container},o.a.createElement("ul",{className:b.a.gallery},t.map((function(e){var t=e.webformatURL,a=e.largeImageURL,r=e.likes,c=e.views,i=e.comments,l=e.downloads;return o.a.createElement(N,{key:_.a.generate(),webformatURL:t,largeImageURL:a,likes:r,views:c,comments:i,downloads:l,openModal:n})}))),o.a.createElement("button",{type:"button",onClick:a,className:b.a.button},"Load more"))},y=a(7),S=a.n(y),C=function(e){var t=e.onSubmitForm,a=e.onChangeInput,n=e.inputSearch;return o.a.createElement("form",{className:S.a.search_form,onSubmit:t},o.a.createElement("input",{className:S.a.input,type:"text",value:n,onChange:a,autoComplete:"off",placeholder:"Search images..."}))},L=a(8),M=a.n(L),k=function(e){var t=e.largeURL,a=e.closeModal;return o.a.createElement("div",{className:M.a.basicLightbox,onClick:a},o.a.createElement("div",{className:M.a.modalContent},o.a.createElement("img",{src:t,alt:"imgLarge"})))},I=a(9),O=a.n(I);O.a.defaults.baseURL="https://pixabay.com/api/";var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cat",a="&key=".concat("13241537-06d8871706b8937518ecf25ca"),n="?image_type=photo&orientation=horizontal",o="&per_page=12",r="&page=".concat(e),c="&q=".concat(t);return O.a.get(n+o+a+r+c)},U=1,x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={imagesArr:[],pageNumber:1,inputSearch:"",isModalOpen:!1,largeImageURL:""},a.closeOnEscape=function(e){27===e.keyCode&&a.setState({isModalOpen:!1})},a.fetchingImg=function(){var e=a.state,t=e.pageNumber,n=e.inputSearch;R(t,n.toLowerCase()).then((function(e){return a.setState((function(t){return{imagesArr:[].concat(Object(i.a)(t.imagesArr),Object(i.a)(e.data.hits))}}),(function(){return window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}))})).catch(console.log)},a.fetchingNewImg=function(){var e=a.state,t=e.pageNumber,n=e.inputSearch;R(t,n.toLowerCase()).then((function(e){return a.setState({imagesArr:Object(i.a)(e.data.hits)})}),(function(){return window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})})).catch(console.log)},a.changePageNumber=function(){a.setState((function(e){return{pageNumber:e.pageNumber+U}})),a.fetchingImg()},a.handleChangeInput=function(e){a.setState({inputSearch:e.target.value})},a.onSubmitForm=function(e){e.preventDefault(),a.setState({pageNumber:1}),a.fetchingNewImg()},a.openModalWindow=function(e){a.setState({isModalOpen:!0,largeImageURL:e})},a.closeModalWindow=function(e){"IMG"!==e.target.tagName&&a.setState({isModalOpen:!1})},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchingImg(),document.addEventListener("keydown",this.closeOnEscape)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.closeOnEscape)}},{key:"render",value:function(){var e=this.state,t=e.imagesArr,a=e.inputSearch,n=e.isModalOpen,r=e.largeImageURL;return o.a.createElement("div",{className:p.a.app},o.a.createElement(C,{onSubmitForm:this.onSubmitForm,onChangeInput:this.handleChangeInput,inputSearch:a}),o.a.createElement(w,{className:p.a.container,imagesArr:t,onClickBtn:this.changePageNumber,openModal:this.openModalWindow}),n&&o.a.createElement(k,{largeURL:r,closeModal:this.closeModalWindow}))}}]),t}(n.Component);c.a.render(o.a.createElement(x,null),document.getElementById("root"))},6:function(e,t,a){},7:function(e,t,a){e.exports={search_form:"SearchForm_search_form__3vPzB",input:"SearchForm_input__zWLnu"}},8:function(e,t,a){e.exports={basicLightbox:"Modal_basicLightbox__1Btli",modalContent:"Modal_modalContent__1rYYD"}}},[[26,1,2]]]);
//# sourceMappingURL=main.049866f2.chunk.js.map