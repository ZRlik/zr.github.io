(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);A&&A(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r=[];function o(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"26e881fb"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(e);var c=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",c.name="ChunkLoadError",c.type=a,c.request=r,n[1](c)}i[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var A=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"06cd":function(e,t,n){},3329:function(e,t,n){},"54f3":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"book-item"},[n("van-image",{attrs:{width:"70px",height:"90px",fit:"cover",src:e._f("parseImageUrl")(e.item.cover)}}),n("div",{staticClass:"info"},[n("h5",{staticClass:"name"},[n("span",{staticClass:"title"},[e._v(e._s(e.item.title))])]),n("p",{staticClass:"desc"},[e._v(e._s(e.item.shortIntro))]),n("div",{staticClass:"category"},[n("div",[n("span",[e._v("未来世界")]),n("span",{staticClass:"split"},[e._v("|")]),n("span",{staticClass:"c-red"},[e._v(e._s(e._f("sentIment")(e.item.latelyFollower))+"人气")])]),n("i",{staticClass:"tag"},[e._v(e._s(e.item.majorCate))])]),n("van-divider",{style:{borderColor:"#c4c4c4",margin:"5px 0"}})],1)],1)},i=[],r=(n("b680"),{props:["item"],filters:{parseImageUrl:function(e){return"//statics.zhuishushenqi.com"+e},sentIment:function(e){return e>=1e4?parseFloat((e/1e4).toFixed(1))+"万":e}}}),o=r,s=(n("dd73"),n("2877")),l=Object(s["a"])(o,a,i,!1,null,null,null);t["a"]=l.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=(n("d3b7"),n("bc3a")),r=n.n(i),o={},s=r.a.create(o);s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},a["a"].use(Plugin);Plugin;var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],u=(n("034f"),n("2877")),A={},m=Object(u["a"])(A,l,c,!1,null,null,null),d=m.exports,g=(n("3ca3"),n("ddb0"),n("8c4f")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home"},[n("header",{staticClass:"navbar"},[n("van-nav-bar",{scopedSlots:e._u([{key:"left",fn:function(){return[n("van-image",{attrs:{width:"78",height:"18",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAToAAABIBAMAAACU8SQRAAAALVBMVEVHcEz////////////////////////////////////////////////////////NXt0CAAAADnRSTlMA4fGcFXjOJ7Q7WmlLh+5Ft9UAAAOBSURBVGje5ZpNaxNBGMfHJmnaWEPxIl5CDl68hIIHPZUIS/VUetBrqSAeQw5CPYUcRDwF8SaI5Oyh5C7I4lmkX0AwSV82L93PYLKZzO48u7M7MztP3OJz6TJMpj/+O/O8zRKytIYbtiPC2Q06PCYkx0+8IPH2fT6pTfStE0HXzgydGe344a6Ybs2bMFqnM89Jwfs73KID/WtAt3humnqzaekcAV22tUOh241Y1K0G6AjZ4OkI2bx+dBIWoBNZWjon03S42gH7T+iiTsXCtldI5+jTPaYDE2thT44DhqtdJ46u7CZZX3wqTn1v3EJ5s8l0Tqbpzs3QOTh0UxTtQAbV48a+yNOdZZqummm6Nsq+M0V3mmntuuHFbOqNY+gCR74Q6T8N0TVR6IBHEdCJ4ixbckAQ6eqadBuCghaJTjFHWRYt892sRidn6ejYfpxg0hFNutZyzkgxc19LPGaD9HQnyzl/EOnmTxUdukNYW2aKrgN7Grh0PbWqh22HA0S6vi4dW8vOIF2RrVVXrbb95o9nL2M8yoUmXSkUs5XobsGqRJMuOQugiEHXbsdVjHwz2Mu/8r5T65mnG9LlmpJ0ey6INDkXBkYmbCVd1UPLsijtBJGsyP7jwIbu031rnG4q0E5A95H98C7bxzWW89RN010qaRci4Ynv+3RDI3RVJe1Cb9F72+xgDLqG6Y5UtAufAM+e8s0FNqGWmm5HQbu8700eWpYV1bXaCdM981pfGlUP9Uay2u25CZn7Yjt6D1eMTrsmm9kHee02K8l07h1ZOmHvM7hmXV67H64E3cwNsh2oR5cDVZScdjddGbpZCElJtw76i9Jndl++uzjRpgvkaVdExd+1VkHX8unGJrRzjNL94gMZinbjJG8spPPj0aJolM7v9ldBtwsuJKXzOwW6qTZdgw9kqbVzjNIFfnWApd0oVK9I0hUD02ysfadNtwUCGYp2c2fg38e9tgIWX20XotqBpvfdpVw3LUyXgxdl0tqV1bTTolsHgUxeOwW6M126MghkKNrJ3TLF9T6X3U+gnfhrmbLCHaMu3QkIZFA7ZTqj2h2CQJZaO6N0HXiNh6FdX5euAQIZvBFI+kpL6jblXkeTDgYyFLrtUk2Lrii6xjNLR95o0ZVAmxeLjnz++u357weP3r96cbsm/2ZjPyK103+Vyt2FUMtbx59+Utp3M9p/RvcXlN2FjxlfktkAAAAASUVORK5CYII="}})]},proxy:!0},{key:"title",fn:function(){return[n("button",{class:{active:"male"===e.gender},on:{click:function(t){return e.$router.push("/?gender=male")}}},[e._v(" 男生 ")]),n("button",{class:{active:"female"===e.gender},on:{click:function(t){return e.$router.push("/?gender=female")}}},[e._v(" 女生 ")])]},proxy:!0},{key:"right",fn:function(){return[n("van-image",{attrs:{width:"24",height:"24",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAKlBMVEVHcEz///////////////////////////////////////////////////+LBpLMAAAADXRSTlMApSzS4boSaI048EtBf5mWRgAAANhJREFUOMvV0z0KwjAYxvGItVqK4AWEro6CqyDSVRB3wQsI7iLoAQQv4OxBvIDgt/DexTchjX3gOYDN8ELz69D+Q4ypwornIicqLdG1YFKzkv2F9H57ySDPZ17S3VA6Qeq6dffS1TEK0tanq5eJjgcVTSRvKnsdTyobHS8qR/c1TJY6blQiOIuyNOw8MHHnt2LStHPLJLFzyiSWcriyGAgHAuFAIBwIhAOBcCAQDgTCgUA4EAgHAuFAIBwIhANx4S5eIvdzxZ3TcJ/iC1J9bRzu6bm/zkxl1xfJoE8h5ybMjAAAAABJRU5ErkJggg=="}}),n("van-image",{attrs:{width:"24",height:"24",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJ1BMVEVHcEz///////////////////////////////////////////////8NopmKAAAADHRSTlMA1sQO8CSnQW6ZWoSHROfVAAABhklEQVRYw+2Yr0+DMRCGl8HGwELAfGLJFGRi4AADCUFNoAgkiJGAmwCHQGAIZoJAcAgCFofFdCnj1/1RJGRhtGt7710yBPke/+Tr3bXvLSsUcnJcdvabdvZcYtzTNwu4cUx95lBjmX64xoyx+kDpNiBlkX4xLf0I+JlJcrgElFNXeQWUzFUMb0yRxx2rFH2lyip7vvLCKh1feWOVtq/0pA1DWtb0FcsqNMQoFMXBFOUrmqwYpeLCKK6l4vIrnpjmISviQhFKiuhzPmMao4pxzbLQrCTN4vtXnFzNbKzPX+DCykF/LpsPoLE7CCZ7AxnbzuU/BIxVN/zsE2uU/OwzW+IcY4OsPBzj1BK8YugxL1GIWkqpB5WusBKmmk5EiTdtgmIcQQlGUJzdRpV38bmiJysmlCq0JpCdkSUUIy4lUkw5qbSg9c3v8uek8imtPlx/idIEIqDCKGey2UfmP84oa9IeB7v8yCgf0rEEB9NmlB6aR8lkyhjFyBUL/KbmFeLI/2zI+TO+AHPambLIoiO3AAAAAElFTkSuQmCC"}})]},proxy:!0}])}),n("div",{staticClass:"search"},[n("div",{staticClass:"search-box"},[n("van-swipe",{staticStyle:{height:"30px"},attrs:{vertical:"",loop:!0,autoplay:3e3,"show-indicators":!1}},[n("van-swipe-item",[e._v("重生千金：帝少的燃情宠妻")]),n("van-swipe-item",[e._v("鸿天神尊")]),n("van-swipe-item",[e._v("他从地狱里来")]),n("van-swipe-item",[e._v("娇娇女被九叔宠野了")]),n("van-swipe-item",[e._v("出名太快怎么办")])],1),n("van-image",{attrs:{width:"24",height:"24",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAG1BMVEVHcEyZmZmZmZmampqampqZmZmZmZmZmZmZmZm+x9fIAAAACHRSTlMA5XQSKE7CmQNx6RMAAAH+SURBVFjD7Vc9U8JAED0gQKsywpUIo6YERmcscXSUEnUYKUEtKMXRIe0pSfZnSxKIIbfZu0MLi7yKLLx7+3XZhbEcOXL8AtbplIv6W1+f8cghwocmoXQEMQ46pgyATx3KHWzhUM2oQgqvSrdmaYqnCqcLEmqKgqzT2zi+OrufR59FX0NEvEdPt1xDJoqkvXnsRdFQjGL4k5cfw40yaWOpenZgWar8akq6QuFXqkVs6RQ5X03kmOyc2Vh6ZmRzcizUARVMGXU79GxINLGQmrDEicoUVt/5stlZmfcyKAO8agOimDZ+XIFImYM7XcX9jSswxBPpEWVBrpNFFCagIBe9RFAgmwIExcROq4i/C3+HJDv4/SsSpQwaZiKbK0TDjPEre7EyuxmUjO+Ck74yKBU8zhnuL3Fly9RbKeyMCaYNmTPGwXJjEzmOrmy6/hb9Uq4gb8YuENGvT9yejdHsJOZYEAw8Jy3hgPFVc08k8lzmqskXegZ+7FrJUa8Y463NJd5NhsphCf5D8HDubEa/S8nY6x/VF4tpYl3QkEnDNViUAPaVMlZq7/GuuVKmyJMM0WSXShnWS3BEe7MKkTKsF/vmhduMhgyzTsKDxVM/sXG5quVv1GqN4r7RkUEXO9eEsrvM0lzGY8YyghnLGFICGZ8Zy9RM/wXNGx2WI0eO/4pvXVtwjS2EstwAAAAASUVORK5CYII="}})],1)])],1),n("div",{staticClass:"banner"},[n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},e._l(e.bannersMale,(function(e,t){return n("van-swipe-item",{key:t},[n("van-image",{attrs:{width:"100vw",height:"40vw",src:e.image}})],1)})),1),n("van-grid",{attrs:{border:!1}},e._l(e.bannerNavs,(function(t,a){return n("van-grid-item",{key:a,attrs:{text:t.text},nativeOn:{click:function(n){t.path&&e.$router.push(t.path)}}},[n("van-image",{attrs:{slot:"icon",width:"10vw",src:t.icon},slot:"icon"})],1)})),1),n("van-divider",{style:{margin:0}}),e._m(0),"male"==e.gender?e._l(e.maleList,(function(t){return n("HomeList",{key:t.id,attrs:{list:t.books.slice(.5)}},[e._v(" 男生"+e._s(t.shortTitle))])})):e._l(e.femaleList,(function(t){return n("HomeList",{key:t.id,attrs:{list:t.books.slice(.5)}},[e._v(" 女生"+e._s(t.shortTitle))])}))],2)])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lately-read"},[n("span",[e._v("最近阅读")])])}],p=n("5530"),v=(n("d81d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"home-list"},[n("h3",[e._t("default")],2),n("ul",{staticClass:"list"},e._l(e.list.splice(0,4),(function(e){return n("BookItem",{key:e.id,attrs:{item:e}})})),1)])}),y=[],b=n("54f3"),C={components:{BookItem:b["a"]},props:["list"]},k=C,B=(n("5903"),Object(u["a"])(k,v,y,!1,null,null,null)),E=B.exports,U=n("2f62"),M={name:"Home",components:{HomeList:E},data:function(){return{gender:"male",bannersMale:[{image:"https://plf-new.zhuishushenqi.com/management/images/20210209/d55ce1e6f7584005820dff309b388917.png"},{image:"https://plf-new.zhuishushenqi.com/management/images/20201218/12ddcc817cdf49f787959bb53e21b584.png"},{image:"https://plf-new.zhuishushenqi.com/management/images/20210209/d57b17f1f3f7478ba1879fb631005e1a.jpg"}],bannerNavs:[{icon:"data:image/png;base64,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",text:"书架"},{icon:"data:image/png;base64,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",text:"排行",path:"/ranking"},{icon:"data:image/png;base64,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",text:"VIP"},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAAM1BMVEVHcEz26/L36/L26/H26/H26/H36/H35ev26/H26/L/e4L6g4f/ubv/gon7i4/8q7D+ho3ioMi9AAAACnRSTlMAhUP/IeJf/ajGzgk+aQAABDBJREFUeNrtndtyJCEIhgcVxUym3fd/2s2mctydzDQ0CmTz36RqKhdfUQhoK5xOmiqpAlDviK3l3LBh7wRQUzl5VElPsPmGnuBdoZdKmHcJqboAT3uB38GTLXGlLBLVaMR23AUwHxTCWv9OPauor3PvqoT8bO41XlIxq2oBtjbyAuzU8xRN9O1CeZpoUiSpLU9Ugxlm7nmyurqxIS8QBDOzvrHnevMnz1aLfpQXikK5hqaLJMyL1Q5nmpoNVANEOuXYR9lIFJD5AHXPhuoBmYXUxswiasrmooDMbGrILgTu8+DB3JiyG+2uQwr6gcYSJdgJAh9lV6JQi5CxGEvzBt1KLIfe6daQHepOjinZpUo057jrIJCdCiJFjh0RhLJbUYA6aX/l1D1D9yD5e082R9/QGNDQ102N3qExoKGvmbr7h8ZQMfqrWN0jQPcQJentEhViQMPReNcUdGgpsuNdG9tZQdto8qhHXOSzlh542B8rVCbzdlbUxqIWe8c4q2rI/IMXpNtZWU0Uqk0NzTS10Ds2behN4h/M2HFWlyR+YCRolNUdttAv9UeNBV1FRzTG0CQqloyhUVRKG0M/O3WKBp0k9f+mLv5OwPFR6dcrEaNBI7ta8iDJPrypi70n55/SPKiLfWZT40FXwYmHOTQIIt4PtASaBCeP5tA9JjTGg8aY0C0edBOUHj/QEuj8A73MPdp/FvIuN/SZ6tpvFtCX8XhT443x/T/HRQlamsbvMD8RviKNK78Z1R6Pd/WKdO23g9AUD5rEOxdD9wD5dmvsZP7wn0Nr5xJyYxvyCKHEgy4nfh43h5bcqbGG7pKjXkHtoQpNkrse3NpDGxokny+4yUUbOkk+FHHTuDZ0kXySM4ZG0cdPY/cg0Wdmdu2hC11FH/SN43QRXZ2whUbZ9UdbaJDd6LWFfrvZ22yhL6yDGtkFyE0bemMHPH7QG9rQgx3w+P7RtKGbxDu4/jHsDE3iFwFtWDF/fhXAzC/DiBkPXa9vY/t1OayNe+kb4j9kiHEpiL7D45wIr3P6KeA7qHSK9+IMIz6iTOHeBX/1MjgFNHTMJ9i+02IJ17/hVgeH4vay7K3ORm7DXv1uTUmcdvi41x+ohnMOp4X1/U5d/iLInp5o7rL5ru5zzlLMzu6EEVvPxWzy5ylaM5pRp1CL0FmOYTaihkCBwxW1oHW2eT4XtaCmgMzG1OJW3xDKn82pD7WvryHi8z+50SCjHx/JsL56Qo35KD1I2DBcjmrTc9ZNGkHFWVZlUZ5RHmS1YuJPU590Nt/YU+aF1amePW2gHDT/QWOdj9DcmZQz5vYtmEepjb1ohGZSdJKFQ20LqSzJRovnBx+fVtotJvCmI6NsEcyGHQu5DYlf3BuYftLBxwTvBH3Xwmzd2sR/W7zCrSHeSFB9jnd/nUdP/c9EesSnPzRjGv1vvGbJhXBvG7oAAAAASUVORK5CYII=",text:"充值"}]}},computed:Object(p["a"])(Object(p["a"])({},Object(U["d"])(["rankCategory","maleList","femaleList"])),Object(U["b"])(["maleListIds","femaleListIds"])),methods:Object(p["a"])(Object(p["a"])({},Object(U["c"])(["updateRankCategory","updateMaleList","updateFemaleList"])),{},{getListByGender:function(){var e=this;"female"===this.gender?!this.femaleList&&Promise.all(this.femaleListIds.map((function(t){return e.axios.get("https://novel.kele8.cn/rank/"+t._id)}))).then((function(t){e.updateFemaleList(t.map((function(e){return e.data.ranking})))})):!this.maleList&&Promise.all(this.maleListIds.map((function(t){return e.axios.get("https://novel.kele8.cn/rank/"+t._id)}))).then((function(t){return e.updateMaleList(t.map((function(e){return e.data.ranking})))}))}}),created:function(){var e=this;this.gender=this.$route.query.gender||"male",this.rankCategory?this.getListByGender():this.axios.get("https://novel.kele8.cn/rank-category").then((function(t){console.log(t),e.updateRankCategory(t.data),e.getListByGender()})),this.axios.get("https://novel.kele8.cn/recommend/53115e30173bfacb4904897e").then((function(e){console.log(e)}))},beforeRouteUpdate:function(e,t,n){this.gender=e.query.gender||"male",this.getListByGender(),n()}},O=M,R=(n("de16"),Object(u["a"])(O,h,f,!1,null,null,null)),x=R.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" History ")])},N=[],w={},H=w,J=Object(u["a"])(H,L,N,!1,null,null,null),I=J.exports;a["a"].use(g["a"]);var q=[{path:"/",name:"Home",component:x},{path:"/mybook",name:"Mybook",component:function(){return n.e("about").then(n.bind(null,"8478"))}},{path:"/history",name:"History",component:I}],G=new g["a"]({routes:q}),Q=G;n("fb6a"),n("4de4");a["a"].use(U["a"]);var D=new U["a"].Store({state:{rankCategory:null,maleList:null,femaleList:null,myBooks:[],allChapters:[],currentChapterContent:null},getters:{maleListIds:function(e){return e.rankCategory?e.rankCategory.male.slice(0,3):[]},femaleListIds:function(e){return e.rankCategory?e.rankCategory.female.slice(0,3):[]}},mutations:{updateRankCategory:function(e,t){e.rankCategory=t},updateMaleList:function(e,t){e.maleList=t},updateFemaleList:function(e,t){e.femaleList=t},addMyBooks:function(e,t){e.myBooks.push(t)},delMyBooks:function(e,t){e.myBooks=e.myBooks.filter((function(e){return e.book!==t}))},updateAllChapters:function(e,t){e.allChapters.push(t)},updateCurrentChapterContent:function(e,t){e.currentChapterContent=t}},actions:{},modules:{}}),S=n("b970");n("157a");a["a"].use(S["a"]),a["a"].config.productionTip=!1,new a["a"]({router:Q,store:D,render:function(e){return e(d)}}).$mount("#app")},5903:function(e,t,n){"use strict";n("3329")},"85ec":function(e,t,n){},"8d91":function(e,t,n){},dd73:function(e,t,n){"use strict";n("06cd")},de16:function(e,t,n){"use strict";n("8d91")}});
//# sourceMappingURL=app.af147dc2.js.map