(function () {
    let oWrap=document.querySelector('.wrap');
    let list=document.querySelector('.content1');
    // console.log(55,oWrap.innerHTML,list.length);
    list.style.width=list.children.length+'00vw';
    let slide=new BScroll(oWrap,{
        scrollX:true,
        scrollY:false,
        momentum:false,
        autoPlay:true,
        interval:2000,
        scrollbar:{
            fade: true,
        },
        snap:{
            loop:false,
            threshold:.3,
            /*autoPlay:true,
            interval:2000,*/
            easing: {
                style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                fn: function(t) {
                    return t * (2 - t)
                }
            }
        }
    });
    slide.refresh();
    slide.on('beforeScrollStart',function () {
        console.log(4567);
    })
    console.log(list.children.length);
    // list.style.width=list.children.length+'00vw';
})();
