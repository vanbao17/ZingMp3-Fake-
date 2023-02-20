
const menuresponsive = $$('#responsive-menu-down .responsive-item')
const renderinPersonal = $('.responsive-listsong-tym')
const hrdown = $(".container-songstitle.responsive .Category-down");
var getApi ='http://localhost:3000/songs';
const zingchartresponsive = {
    isChangeColorTym:false,
    playpause:false,
    listsongRender:[],
    widthHR:0,
    listsong : [
        {
            name:'Định Mệnh',
            singer:'Noo Phước Thịnh',
            path:'songs/song4.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/d/e/b/6deb8ea62749618d200bbe270ade7f3e.jpg'
        },
        {
            name:'Chạm khẽ tim anh một chút thôi',
            singer:'Noo Phước Thịnh',
            path:'songs/song6.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/d/e/b/6deb8ea62749618d200bbe270ade7f3e.jpg'
        },  
        {
            name:'Em đã thương người ta hơn anh',
            singer:'Noo Phước Thịnh',
            path:'songs/song8.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/d/e/b/6deb8ea62749618d200bbe270ade7f3e.jpg'
        },
        {
            name:'Yêu một người sao buồn đến thế',
            singer:'Noo Phước Thịnh',
            path:'songs/song10.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/0/c/3/e0c341956a038d66b77275b20168b112.jpg'
        },
        {
            name:'Cause I Love You',
            singer:'Noo Phước Thịnh',
            path:'songs/song7.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/8/f/0/d/8f0da549f6cf94288361aac93d05d284.jpg'
        },
        {
            name:'Thương mấy cũng là người dưng',
            singer:'Noo Phước Thịnh',
            timeDeloy:'1 tiếng trước',
            path:'songs/song9.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/8/f/0/d/8f0da549f6cf94288361aac93d05d284.jpg'
        },
        {
            name:'Luôn yêu đời',
            singer:'Đen, Chang',
            path:'songs/song7.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/8/f/0/d/8f0da549f6cf94288361aac93d05d284.jpg'
        },
        {
            name:'Ngày khác lạ',
            singer:'Đen',
            path:'songs/song13.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/8/f/0/d/8f0da549f6cf94288361aac93d05d284.jpg'
        },
        {
            name:'Ngôi sao cô đơn',
            singer:'Jack',
            path:'songs/song12.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/8/f/0/d/8f0da549f6cf94288361aac93d05d284.jpg'
        },
    ],
    playsong:function(data) {
        $('#responsive-playsong').innerHTML = `
        <div class="playsong-infor">
            <hr>
            <div class="avatar">
                <img src="${data.image}" alt="">
            </div>
            <div class="title">
                <h3>${data.name}</h3>
                <p>${data.singer}</p>
            </div>
        </div>
        <div class="playsong-action">
            <ion-icon name="heart-outline"></ion-icon>
            <div class="pause-play">
                <ion-icon name="pause" class="tag-action active">
                <ion-icon name="play" class="tag-action">
            </ion-icon>
            </div>
            <ion-icon name="play-skip-forward"></ion-icon>
        </div>
        `
        audio.src = data.path;
        audio.play()
        audio.ontimeupdate = function() {
            $("#responsive-playsong hr").style.width = ($("#responsive-playsong").offsetWidth*audio.currentTime)/audio.duration +'px';
        }
        $$('.pause-play').onclick = function() {
            zingchartresponsive.playpause = !zingchartresponsive.playpause
            if(zingchartresponsive.playpause==true) {

            }
            if(zingchartresponsive.playpause==false) {

            }
            console.log(zingchartresponsive.playpause);
        }
    },
    handleEvent :function() {
        menuresponsive.forEach(function(e,index) {
            e.onclick = function() {
                $(".responsive-item.active").classList.remove('active')
                this.classList.add('active')
                $$(".responsive-content").forEach(function(e) {
                    $('.responsive-content.active').classList.remove('active')
                    $$(".responsive-content")[index].classList.add("active")
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
        $$("#responsive-zingchart .heart").forEach(function(item,index) {
            item.onclick = function() {
                zingchartresponsive.isChangeColorTym = !zingchartresponsive.isChangeColorTym
                if(zingchartresponsive.isChangeColorTym==true)
                {
                    this.name = 'heart';
                    var objectsong = {
                        id:index-1,
                        name:zingchartresponsive.listsong[index-1].name,
                        path:zingchartresponsive.listsong[index-1].path,
                        image:zingchartresponsive.listsong[index-1].image,
                        singer:zingchartresponsive.listsong[index-1].singer,
                    }
                    zingchartresponsive.listsongRender.push(objectsong)
                    zingchartresponsive.rendersongPersonal(zingchartresponsive.listsongRender)
                }
                if(zingchartresponsive.isChangeColorTym==false)
                {
                    this.name = 'heart-outline';
                }
            }
        })
        $('.responsive-listsong-tym .toExplore').onclick = function() {
            $$(".responsive-item").forEach(function(a) {
                $(".responsive-item.active").classList.remove('active')
                menuresponsive[1].classList.add("active")
            })
            $$(".responsive-content").forEach(function(e) {
                $('.responsive-content.active').classList.remove('active')
                $$(".responsive-content")[1].classList.add("active")
            })
        }
        $$("#songs-responsive .tag").forEach(function(item,index) {
            item.onclick=function() {
                $("#songs-responsive .tag.active").classList.remove('active')
                item.classList.add('active')
                $$("#songs-responsive .tag-content").forEach(function(item1,index1) {
                    if(index==index1)
                    {
                        $("#songs-responsive .tag-content.active").classList.remove('active')
                        $$("#songs-responsive .tag-content")[index].classList.add("active")
                    }
                })
            }
        })
        $$("#podcast-responsive .tag").forEach(function(item,index) {
            item.onclick=function() {
                $("#podcast-responsive .tag.active").classList.remove('active')
                item.classList.add('active')
            }
        })
        $$(".container-songstitle.responsive .Category-item ").forEach(function(item,index) {
            hrdown.style.left = 0
            hrdown.style.width = '54px'
            item.onclick = function() {
                hrdown.style.left = item.offsetLeft +'px'
                hrdown.style.width = item.offsetWidth+'px'
                $$('#responsive-personal .content').forEach(function(item1,index1) {
                    if(index==index1) {
                        $('#responsive-personal .content.active').classList.remove('active')
                            
                    }
                })
            }
        })
        $$('.zingchart-item').forEach(function(item,index) {
            item.onclick = function() {
                var objectsong = {
                    id:index,
                    name:zingchartresponsive.listsong[index].name,
                    path:zingchartresponsive.listsong[index].path,
                    image:zingchartresponsive.listsong[index].image,
                    singer:zingchartresponsive.listsong[index].singer,
                }
                zingchartresponsive.playsong(objectsong)
                $('#responsive-playsong').style.bottom = $('#responsive-menu-down').offsetHeight+'px'
            }
        })
    },
    rendersongPersonal:function(data) {
        var htmls  = data.map(function(item,index) {
            return `
                <div class="listsong-tym-item songs-item-${item.id}">
                    <div class="listsong-tym-avatar">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="listsong-tym-title">
                        <h3>${item.name}</h3>
                        <p>${item.singer}</p>
                    </div>
                    <div class="listsong-tym-action">
                        <ion-icon name="heart" class="heart" onclick = "zingchartresponsive.deleteSongAtPersonal(${item.id})"></ion-icon>
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
            `
        })
        $('.responsive-listsong-tym').innerHTML = htmls.join('')
    },
    deleteSongAtPersonal:function(id) {
        zingchartresponsive.listsongRender.forEach(function(item) {
            if (item.id==id) {
                $('.songs-item-'+id).remove()
            }
        })
        var a = zingchartresponsive.listsongRender.filter(function(item) {
            return item.id!=id
        })
        $$("#responsive-zingchart .heart")[id+1].name = "heart-outline"
        zingchartresponsive.isChangeColorTym = !zingchartresponsive.isChangeColorTym
        zingchartresponsive.listsongRender = a;
        if(zingchartresponsive.listsongRender.length==0)
        {
            var span = document.createElement('span');
            span.classList.add("toExplore")
            span.textContent = "Explore";
            $(".responsive-listsong-tym").appendChild(span)
            $('.responsive-listsong-tym .toExplore').onclick = function() {
                $$(".responsive-item").forEach(function(a) {
                    $(".responsive-item.active").classList.remove('active')
                    menuresponsive[1].classList.add("active")
                })
                $$(".responsive-content").forEach(function(e) {
                    $('.responsive-content.active').classList.remove('active')
                    $$(".responsive-content")[1].classList.add("active")
                })
            }
        }   
    },
    renderListsong:function() {
        var htmls = this.listsong.map(function(item,index) {
            return `
                <hr>
                <div class="zingchart-item">
                    <div class="zingchart-stt">
                        <p>${index+1}<ion-icon name="remove"></ion-icon></p>
                    </div>
                    <div class="zingchart-song">
                        <div class="zingchart-ava">
                            <img src="${item.image}" alt="">
                        </div>
                        <div class="zingchart-title">
                            <div class="zingchart-title-namesong">
                                <h3>${item.name}</h3>
                            </div>
                            <div class="zingchart-title-singer">
                                <span>${item.singer}</span>
                            </div>
                        </div>
                        <div class="zingchart-action">
                            <ion-icon class="heart" name="heart-outline"></ion-icon>
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>
                </div>
            `
        })
        $('.zingchart-list-songs').innerHTML = htmls.join('')
    },
    start:function() {
        this.renderListsong() ;
        this.handleEvent()
    }
}
zingchartresponsive.start();