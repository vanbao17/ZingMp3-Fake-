
const menuresponsive = $$('#responsive-menu-down .responsive-item')
const renderinPersonal = $('.responsive-listsong-tym')
const hrdown = $(".container-songstitle.responsive .Category-down");
audio.volume = 100/100;
$(".responsive-content").style.paddingBottom = $("#responsive-menu-down").offsetHeight+$('#responsive-playsong').offsetHeight+"px"
const zingchartresponsive = {
    isChangeColorTym:false,
    playpause:false,
    listsongRender:[],
    searchsong:[],
    widthHR:0,
    cdThumbAnimation:0,
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
            image:'https://avatar-ex-swe.nixcdn.com/song/2017/10/17/6/c/9/9/1508222792935_640.jpg'
        },  
        {
            name:'Em đã thương người ta hơn anh',
            singer:'Noo Phước Thịnh',
            path:'songs/song8.mp3',
            image:'https://i.scdn.co/image/ab67616d0000b27308becedeb90d846da6b66dc3'
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
            image:'https://avatar-ex-swe.nixcdn.com/song/2017/05/19/0/4/d/e/1495164349216_640.jpg'
        },
        {
            name:'Luôn yêu đời',
            singer:'Đen, Chang',
            path:'songs/song14.mp3',
            image:'https://toquoc.mediacdn.vn/thumb_w/640/280518851207290880/2023/2/6/3290684947036645947223808715986389199022976n-16756522731891705583167.jpeg'
        },
        {
            name:'Ngày khác lạ',
            singer:'Đen',
            path:'songs/song13.mp3',
            image:'https://avatar-ex-swe.nixcdn.com/song/2018/02/24/2/5/c/e/1519436244959_640.jpg'
        },
        {
            name:'Ngôi sao cô đơn',
            singer:'Jack',
            path:'songs/song12.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/e/2/e/b/e2eb2e4c19e54ab61871ce9f04ac339f.jpg'
        },
        {
            name:'Cơn mơ băng giá',
            singer:'Noo Phước Thịnh',
            path:'songs/song5.mp3',
            image:'https://i1.sndcdn.com/artworks-kVdZwpsz1CtvCy7c-POEWJg-t500x500.jpg'
        },
        {
            name:'Những kẻ mộng mơ',
            singer:'Noo Phước Thịnh',
            album:'',
            path:'songs/song1.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/4/3/c/143c3e0f7a42b90009f5738899280003.jpg'
        },
        {
            name:'Chợt thấy em khóc',
            singer:'Noo Phước Thịnh',
            album:'',
            path:'songs/song11.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/7/c/0/97c0d89266b572d570062a0b7abbb99a.jpg'
        },
    ],
    playsong:function(data,a) {
        $('#responsive-playsong').innerHTML = `
        <div class="playsong-infor">
            <hr class="up">
            <hr class="down">
            <div class="avatar">
                <img src="${data.image}" alt="">
            </div>
            <div class="title">
                <h3>${data.name}</h3>
                <p>${data.singer}</p>
            </div>
        </div>
        <div class="playsong-action">
            <ion-icon name="${a}" style="color:${a=="heart"?"#3560F5":""}"></ion-icon>
            <div class="pause-play">
                <ion-icon name="pause" class="tag-action active"></ion-icon>
                <ion-icon name="play" class="tag-action"></ion-icon>
            </div>
            <ion-icon name="play-skip-forward"></ion-icon>
        </div>
        `
        audio.src = data.path;
        audio.play()
        audio.ontimeupdate = function() {
            $("#responsive-playsong hr").style.width = ($("#responsive-playsong").offsetWidth*audio.currentTime)/audio.duration +'px';
            if(audio.ended) {
                if(data.id<zingchartresponsive.listsong.length-1) {
                    var a = data.id+1;
                    var objectsong = {
                        id:a,
                        name:zingchartresponsive.listsong[a].name,
                        path:zingchartresponsive.listsong[a].path,
                        image:zingchartresponsive.listsong[a].image,
                        singer:zingchartresponsive.listsong[a].singer,
                    }
                }
                if(data.id==zingchartresponsive.listsong.length-1) {
                    console.log(data.id);
                    var objectsong = {
                        id:0,
                        name:zingchartresponsive.listsong[0].name,
                        path:zingchartresponsive.listsong[0].path,
                        image:zingchartresponsive.listsong[0].image,
                        singer:zingchartresponsive.listsong[0].singer,
                    }
                }
                zingchartresponsive.playsong(objectsong)   
            }
        }
        const cdThumbAnimation = $('.playsong-infor .avatar').animate([
            {transform :'rotate(360deg)'}
        ],{
            duration: 10000,
            iterations:Infinity
        })
        $('.pause-play').onclick = function() {
            zingchartresponsive.playpause = !zingchartresponsive.playpause
            if(zingchartresponsive.playpause==true) {
                $('.pause-play ion-icon[name="pause"]').classList.remove('active')
                $('.pause-play ion-icon[name="play"]').classList.add('active')
                audio.pause()
                cdThumbAnimation.pause()
            }
            if(zingchartresponsive.playpause==false) {
                $('.pause-play ion-icon[name="pause"]').classList.add('active')
                $('.pause-play ion-icon[name="play"]').classList.remove('active')
                audio.play()
                cdThumbAnimation.play()
            }
        }
        $('.playsong-action ion-icon[name="play-skip-forward"]').onclick = function() {
            var a = data.id+1;
            if(a<=zingchartresponsive.listsong.length-1)
            {
                var objectsong = {
                    id:a,
                    name:zingchartresponsive.listsong[a].name,
                    path:zingchartresponsive.listsong[a].path,
                    image:zingchartresponsive.listsong[a].image,
                    singer:zingchartresponsive.listsong[a].singer,
                }
            }
            if(a>zingchartresponsive.listsong.length-1) {
                var objectsong = {
                    id:0,
                    name:zingchartresponsive.listsong[0].name,
                    path:zingchartresponsive.listsong[0].path,
                    image:zingchartresponsive.listsong[0].image,
                    singer:zingchartresponsive.listsong[0].singer,
                }
            }
            zingchartresponsive.playsong(objectsong)   
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
        $$("#responsive-zingchart .hearts .heart-outline").forEach(function(item,index) {
            zingchartresponsive.isColorHeart="heart-outline"
            item.onclick = function() {
                $$("#responsive-zingchart .hearts .heart").forEach(function(item1,index1) {
                    if(index==index1) {
                        item1.classList.add('active');
                    }
                })
                item.classList.remove('active')
                var objectsong = {
                    id:index,
                    name:zingchartresponsive.listsong[index].name,
                    path:zingchartresponsive.listsong[index].path,
                    image:zingchartresponsive.listsong[index].image,
                    singer:zingchartresponsive.listsong[index].singer,
                }
                zingchartresponsive.listsongRender.push(objectsong)

                zingchartresponsive.rendersongPersonal(zingchartresponsive.listsongRender)
                $(".responsive-personal-libarys .item-libary:first-child .libary-number").textContent = (zingchartresponsive.listsongRender.length);
                $(".favouriteSongs-title p span").textContent = (zingchartresponsive.listsongRender.length);
            }
        })
        $$("#responsive-zingchart .hearts .heart").forEach(function(item1,index1) {
            item1.onclick = function() {
                zingchartresponsive.isColorHeart="heart"
                $$("#responsive-zingchart .hearts .heart-outline").forEach(function(item,index) {
                    if(index1==index) {
                        item.classList.add('active');
                    }
                })
                item1.classList.remove('active');
                zingchartresponsive.deleteSongAtPersonal(index1);
                $(".responsive-personal-libarys .item-libary:first-child .libary-number").textContent = (zingchartresponsive.listsongRender.length);
                $(".favouriteSongs-title p span").textContent = (zingchartresponsive.listsongRender.length);
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
                $$("#responsive-personal .content").forEach(function(item1,index1) {
                    if(index!=index1)
                    {
                        item1.classList.remove("active")
                    }
                })
                $$("#responsive-personal .content")[index].classList.add('active')
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
                var a = zingchartresponsive.listsongRender.some(function(item1) {
                    return index==item1.id
                })
                var b = "heart-outline"
                if(a) {
                    b = "heart"
                }
                zingchartresponsive.playsong(objectsong,b)
                $$('.zingchart-item .zingchart-song>div').forEach(function(item2,index2) {
                    item2.onclick = function() {
                        $$(".zingchart-action .download")[(index)].style.display = "none";
                    }
                })
                // zingchartresponsive.playsong(objectsong,b)
                if(zingchartresponsive.isChangeColorTym==true) {
                    var heighofitem = item.offsetHeight;
                    $('#responsive-personal').style.paddingBottom = (heighofitem*(zingchartresponsive.listsongRender.length-1))+"px"
                }
                $$('.responsive-content').forEach(function(item) {
                    item.style.paddingBottom = ($('#responsive-playsong').offsetHeight+$('#responsive-menu-down').offsetHeight) +'px'
                })
                $('#responsive-playsong').style.bottom = $('#responsive-menu-down').offsetHeight-2+'px' 
            }
        })
        $$('.zingchart-action ion-icon[name="ellipsis-horizontal"]').forEach(function(item,index) {
            item.onclick = function() {
                $$(".zingchart-action .download")[(index-1)].style.display = "block";
                $$(".zingchart-action .download").forEach(function(item1,index1) {
                    if(index!=(index1+1)) {
                        item1.style.display = 'none';       
                    }
                })
                $$(".zingchart-action .download")[(index-1)].onclick = function() {
                    this.style.display="none"
                }
            }
        })
        $('#responsive-personal .item-libary:first-child').onclick = function() {
            $('#favouriteSongs').style.transform="translateY(0)"
        }
        $('.favouriteSongs-content nav ion-icon[name="arrow-back-outline"]').onclick = function() {
            $('#favouriteSongs').style.transform="translateY(100%)"
        }
        $('.favouriteSongs-content nav div ion-icon[name="search-outline"]').onclick = function() {
            $(".favouriteSongs-content-menu").style.display = "none"
            $(".search-favouriteSongs").style.display = "block"
        }
        $('.search-favouriteSongs span').onclick = function() {
            $(".favouriteSongs-content-menu").style.display = "block"
            $(".search-favouriteSongs").style.display = "none"
        }
        $('.search-favouriteSongs input').onkeyup = function() {
            zingchartresponsive.listsongRender.forEach(function(item) {
                if( $('.search-favouriteSongs input').value==item.name)
                {
                    $('.responsive-listsong-tym').innerHTML = `
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
                    `;
                }
            }) 
            if(this.value=='') {
                zingchartresponsive.rendersongPersonal(zingchartresponsive.listsongRender)
            }
        }
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
        zingchartresponsive.listsongRender.forEach(function(item,index) {
            if (item.id==id) {
                $('.songs-item-'+id).remove()
            }
        })
        var a = zingchartresponsive.listsongRender.filter(function(item) {
            return item.id!=id
        })
        $$("#responsive-zingchart .heart")[id+1].classList.remove("active")
        $$("#responsive-zingchart .heart-outline")[id].classList.add("active")
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
        $(".responsive-personal-libarys .item-libary:first-child .libary-number").textContent = (zingchartresponsive.listsongRender.length);
        $(".favouriteSongs-title p span").textContent = (zingchartresponsive.listsongRender.length);
    },
    renderListsong:function() {
        var htmls = this.listsong.map(function(item,index) {
            return `
                <hr>
                <div class="zingchart-item">
                    <div class="zingchart-stt" style="color:${index+1==1?`red`:index+1==2?'blue':index+1==3?'green':'black'}">
                        <p>${index+1}<ion-icon name="remove"></ion-icon></p>
                    </div>
                    <div class="zingchart-song">
                        <div class="zingchart-ava click-song">
                            <img src="${item.image}" alt="">
                        </div>
                        <div class="zingchart-title click-song">
                            <div class="zingchart-title-namesong">
                                <h3>${item.name}</h3>
                            </div>
                            <div class="zingchart-title-singer">
                                <span>${item.singer}</span>
                            </div>
                        </div>
                        <section class="zingchart-action">
                            <div class=hearts>
                                <ion-icon class="item-heart heart" name="heart"></ion-icon>
                                <ion-icon class="item-heart heart-outline active" name="heart-outline"></ion-icon>
                            </div>
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                            <div class="download">
                                <a download="${item.name}" href="${item.path}" class="action-download"><ion-icon name="download"></ion-icon>Download</a>
                            </div>
                        </section>
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