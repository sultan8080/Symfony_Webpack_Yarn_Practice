"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[143],{8144:(e,a,s)=>{s(7034)},7034:(e,a,s)=>{s(6992),s(1539),s(3948),s(9826),s(4678),function(e){e(window).on("load",(function(){if(e(".loader").fadeOut(),e("#preloder").delay(200).fadeOut("slow"),e(".featured__controls li").on("click",(function(){e(".featured__controls li").removeClass("active"),e(this).addClass("active")})),e(".featured__filter").length>0){var a=document.querySelector(".featured__filter");mixitup(a)}})),e(".set-bg").each((function(){var a=e(this).data("setbg");e(this).css("background-image","url("+a+")")})),e(".humberger__open").on("click",(function(){e(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper"),e(".humberger__menu__overlay").addClass("active"),e("body").addClass("over_hid")})),e(".humberger__menu__overlay").on("click",(function(){e(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper"),e(".humberger__menu__overlay").removeClass("active"),e("body").removeClass("over_hid")})),e(".mobile-menu").slicknav({prependTo:"#mobile-menu-wrap",allowParentLinks:!0}),e(".categories__slider").owlCarousel({loop:!0,margin:0,items:4,dots:!1,nav:!0,navText:["<span class='fa fa-angle-left'><span/>","<span class='fa fa-angle-right'><span/>"],animateOut:"fadeOut",animateIn:"fadeIn",smartSpeed:1200,autoHeight:!1,autoplay:!0,responsive:{0:{items:1},480:{items:2},768:{items:3},992:{items:4}}}),e(".hero__categories__all").on("click",(function(){e(".hero__categories ul").slideToggle(400)})),e(".latest-product__slider").owlCarousel({loop:!0,margin:0,items:1,dots:!1,nav:!0,navText:["<span class='fa fa-angle-left'><span/>","<span class='fa fa-angle-right'><span/>"],smartSpeed:1200,autoHeight:!1,autoplay:!0}),e(".product__discount__slider").owlCarousel({loop:!0,margin:0,items:3,dots:!0,smartSpeed:1200,autoHeight:!1,autoplay:!0,responsive:{320:{items:1},480:{items:2},768:{items:2},992:{items:3}}}),e(".product__details__pic__slider").owlCarousel({loop:!0,margin:20,items:4,dots:!0,smartSpeed:1200,autoHeight:!1,autoplay:!0});var a=e(".price-range"),s=e("#minamount"),t=e("#maxamount"),r=a.data("min"),i=a.data("max");a.slider({range:!0,min:r,max:i,values:[r,i],slide:function(e,a){s.val("$"+a.values[0]),t.val("$"+a.values[1])}}),s.val("$"+a.slider("values",0)),t.val("$"+a.slider("values",1)),e("select").niceSelect(),e(".product__details__pic__slider img").on("click",(function(){var a=e(this).data("imgbigurl");a!=e(".product__details__pic__item--large").attr("src")&&e(".product__details__pic__item--large").attr({src:a})}));var l=e(".pro-qty");l.prepend('<span class="dec qtybtn">-</span>'),l.append('<span class="inc qtybtn">+</span>'),l.on("click",".qtybtn",(function(){var a=e(this),s=a.parent().find("input").val();if(a.hasClass("inc"))var t=parseFloat(s)+1;else if(s>0)t=parseFloat(s)-1;else t=0;a.parent().find("input").val(t)}))}(jQuery)}},e=>{e.O(0,[891],(()=>{return a=8144,e(e.s=a);var a}));e.O()}]);