
const menuresponsive = $$('#responsive-menu-down .responsive-item')
menuresponsive.forEach(function(e,index) {
    e.onclick = function() {
        $(".responsive-item.active").classList.remove('active')
        this.classList.add('active')
        $$(".responsive-content").forEach(function(e) {
            $('.responsive-content.active').classList.remove('active')
            $$(".responsive-content")[index].classList.add("active")
        })
    }
    $('.responsive-listsong-tym span').onclick = function() {
        $$(".responsive-item").forEach(function(a) {
            $(".responsive-item.active").classList.remove('active')
            menuresponsive[1].classList.add("active")
        })
        $$(".responsive-content").forEach(function(e) {
            $('.responsive-content.active').classList.remove('active')
            $$(".responsive-content")[1].classList.add("active")
        })
    }
})
var i=1;
setInterval(function() {
    if(i<$$('.slide-item').length) {
        $('.responsive-list-slide').style.transform = `translateX(-${100*i}%)`
        $$(".responsive-list-action .item").forEach(function(e,index) {
            $('.responsive-list-action .item.active').classList.remove('active')
            $$(".responsive-list-action .item")[i].classList.add('active')
        })
        i++;
    }
    else {
        i=0;
    }
},4000)
// $$("#responsive-menu-down ul li").forEach(function(e,index) {
//     e.onclick = function() {
//         $('.responsive-item.active').classList.remove('active')
//         this.classList.add('active')
//     }
// } )