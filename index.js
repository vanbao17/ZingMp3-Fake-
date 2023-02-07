const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)



const listsong = $(".list-songs");
const listlibary = $(".list-libarys");
const listplaylist = $("#list-playlist");
const tagPersonal = $$('#Category li')
const hr = $('#Category-bar .Category-down ')
const audio = $('.audio')
const personalTags = $$('#personal-contentcenter .content')
const imgplaysong = $(".playsong-left img")
const nameplaysong = $(".playsong-name .name h3")
const singerplaysong = $(".playsong-name  p")
const tagplaysong = $('#playsong')
const buttonPlay  = $('.playsong-pause-play .play')
const buttonPause  = $('.playsong-pause-play .pause')
const progress = $('.progress')
const timesong = $('.timeSong')
const processsong = $('.processSong')
const prevSong = $('.song-prev')
const nextSong = $('.song-next')
const shuffleSong = $('.song-shuffle')
const repeatSong = $('.song-repeat')
const recent = $$(".recent")
const songrecent = $("#song-recent")
const displaysongrecent = $('.display-song-recent')
const processVolume = $('.process-volume')
const activeMenu =$$('.menu1')
const turnOnVolume = $(".on-volume") 
const turnOffVolume = $(".off-volume") 
const navContent = $(".content-nav")
navContent.style.position = 'fixed !improtant'
audio.volume = 20/100;
processVolume.value = 50;
const personal = {
    currentIndexSong:0,
    isPlay:false,
    isChange:false,
    isshuffleSong:false,
    isrepeatSong:false,
    indexrepeatSong:0,
    indexrepeatListSong:0,
    isdisplaysongrecent :false,
    isturnOffVolume:false,
    libarys:[
        {
            name:'Mr.Siro',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/d/d/d/c/dddc859b6759898ee13efe2627230ec3.jpg'
        },
        {
            name:'The Night',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/a/1/e/1a1eddaf21410b770f028ca3259695bf.jpg'
        },
        {
            name:'Alen Walker',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/b/a/6/b/ba6b56ca02dd06f37693d945acfcdad9.jpg'
        },
        {
            name:'Bùi Anh Tuấn',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/4/1/41f229e867c3787ed1ddee90a4bd2bbb_1506073807.jpg'
        },
        {
            name:'Bức Tường',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/7/f/7f712e2524fd159e2ecec9d67028aed9_1419916224.jpg'
        }
    ],
    playlists:[
        {
            image:'https://photo-playlist-zmp3.zmdcdn.me/s2/user-playlist?src=HavwqN7EvKCI1oYSFOdq0rHDR9mrYV43N5HdW6RP-GDT03I2Ojd_0mqBC8fWqwTRN5avYJRMeGj1Lt_SEf3p00eLDeHnnBfNHrbnbMsTwGfHMN7VFz3cNm82VjXfqRDHKryiWpxNi59M32g6ETMs0LWAHu0qqTu7L0D0XJt6X4K33mRNDet635n4Kfvcm8fBJGH1r2J0Z4jE14VBTDpTIXG2HPjzsjDF4WSVo7pUXar71nZCADJKJK0DL9TfWTWB4WOVrI3VarzRLrAPPyxJ614HKfjdcTCQ2a4UcJQQrXuEHKhCRfxKJ0uJJyjamDb211bFmct2qbnUMHlEVG&size=thumb/240_240',
            name:'Noo',
            nameuser:'Phạm Văn Bảo'
        },
        {
            image:'https://photo-playlist-zmp3.zmdcdn.me/s2/user-playlist?src=HavwqN7EvKCI1oYSFOdq0r1DOvmnYVi3N5jjXJA5zr5VNpo2Oz7t2rbRRe8tXgPKNrLfrZw6zbT91oY0Ci2aN095OTXvbEqBJmacoMNDx5OD2IRNOzBjL5nT8jCmq-zK25uarMZNkm013N7MQu2y0meAJO9drD0530rFX6R8YqHO0GdMROF93GTANPyzpeLA5bO4ps3UXKfQK1_3CehJ5rC5IiPesjmN05H2a3k9s1bIMnMURTRTSGKEHVDhtDnr00TShocBq3DI31VjODMRPnjTMg4dnDiaKKbQeIV0soGO7XUjTi60V1yO5_ubmub-J10Vgd2QrIuV4XZu8fZJPX436lHz&size=thumb/240_240',
            name:'Động lực',
            nameuser:'Phạm Văn Bảo'
        },
        {
            image:'https://photo-playlist-zmp3.zmdcdn.me/s2/user-playlist?src=HavwqN7EvKCI1oYSFOdq0rPDOvnjYQi31bjdrMxJ-51M2ZU5ReB_0WK8OzGzqgXSK5q_tc-5z5SO12g0OyEcN5D6OzWeb-yB7WeaoJJElrPS2YJNCu2wNmvU9umsqRmB30ydZsFGl5bP3t2CDuRg2rbL6uepYuSFNbKVXZQGsqO8MLdKFTkP3rSI3PrjbjL8Hb8TrtwMW4X5KaYPBzk774y4ICuWtOLEImOScYNRWKvF0n_BTz29J4y82PPcX8KA7GD2r2_QpbvKKW-OQCkEJXuJ3yzedOuP0aT5ppcSZnvP5KANECg845CL49WyoDiU0HP7bppAqGaFKHYRVG&size=thumb/240_240',
            name:'Chill',
            nameuser:'Phạm Văn Bảo'
        },
    ],
    songs : [
        {
            name:'Định Mệnh',
            singer:'Noo Phước Thịnh',
            album:'',
            path:'songs/song4.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/d/e/b/6deb8ea62749618d200bbe270ade7f3e.jpg'
        },
        {
            name:'Chạm khẽ tim anh một chút thôi',
            singer:'Noo Phước Thịnh',
            album:'',
            path:'songs/song6.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/d/e/b/6deb8ea62749618d200bbe270ade7f3e.jpg'
        },  
        {
            name:'Em đã thương người ta hơn anh',
            singer:'Noo Phước Thịnh',
            album:'',
            path:'songs/song8.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/d/e/b/6deb8ea62749618d200bbe270ade7f3e.jpg'
        },
        {
            name:'Yêu một người sao buồn đến thế',
            singer:'Noo Phước Thịnh',
            path:'songs/song10.mp3',
            album:'',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/0/c/3/e0c341956a038d66b77275b20168b112.jpg'
        },
        {
            name:'Cause I Love You',
            singer:'Noo Phước Thịnh',
            album:'',
            path:'songs/song7.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/8/f/0/d/8f0da549f6cf94288361aac93d05d284.jpg'
        },
        {
            name:'Thương mấy cũng là người dưng',
            singer:'Noo Phước Thịnh',
            album:'',
            path:'songs/song9.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/8/f/0/d/8f0da549f6cf94288361aac93d05d284.jpg'
        },
        {
            name:'Cơn mơ băng giá',
            singer:'Noo Phước Thịnh',
            album:'',
            path:'songs/song5.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/d/d/9/bdd90e2f31c41756ba054b6d96ccd674.jpg'
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
        // {
        //     name:'Đi đâu để thấy hoa bay',
        //     singer:'Hà Anh Tuấn',
        //     album:'',
        //     path:'https://vnso-zn-15-tf-mp3-320s1-zmp3.zmdcdn.me/df7989e5dfa436fa6fb5/554259536577642684?authen=exp=1675521843~acl=/df7989e5dfa436fa6fb5/*~hmac=5ca9432a82a99fecf64f44048d688e53&fs=MTY3NTM0OTA0MzYyNnx3ZWJWNnwxMDQ4NDI0NzmUsICxfDU5LjE1My4yMjQdUngMjI',
        //     image:'https://i.pinimg.com/736x/80/1e/61/801e61077fd861bd67d248116c04ad97.jpg'
        // },
        // {
        //     name:'Chưa Bao Giờ',
        //     singer:'Hà Anh Tuấn',
        //     album:'',
        //     path:'https://vnso-zn-10-tf-mp3-320s1-zmp3.zmdcdn.me/f7e2a163f7221e7c4733/4703424405522837128?authen=exp=1675521866~acl=/f7e2a163f7221e7c4733/*~hmac=8398919c852dc2f9516699faf7949cd6&fs=MTY3NTM0OTA2NjQ1NHx3ZWJWNnwxMDQ4NDI0NzmUsICxfDU5LjE1My4yMjQdUngMjI',
        //     image:'https://i.pinimg.com/564x/e3/9c/9e/e39c9ea172a31c46fc9289212b593680.jpg'
        // },
        // {
        //     name:'Giâc mơ chỉ là giấc mơ',
        //     singer:'Hà Anh Tuấn',
        //     album:'',
        //     path:'https://vnso-zn-23-tf-mp3-320s1-zmp3.zmdcdn.me/76d47248ab0c42521b1d/3318461162738757549?authen=exp=1675521891~acl=/76d47248ab0c42521b1d/*~hmac=43d5d0193626701420c0d464c082ccaf&fs=MTY3NTM0OTA5MTkyNXx3ZWJWNnwxMDQ4NDI0NzmUsICxfDU5LjE1My4yMjQdUngMjI',
        //     image:'https://i.pinimg.com/564x/bf/b4/b7/bfb4b7d496fb3046d7f07ee6e22230ac.jpg'
        // },
        // {
        //     name:'Mashup chỉ còn những mùa nhớ',
        //     singer:'Hà Anh Tuấn',
        //     album:'',
        //     path:'https://vnso-zn-10-tf-mp3-320s1-zmp3.zmdcdn.me/6cd6284a7e0b9755ce1a/2178783514501594317?authen=exp=1675521918~acl=/6cd6284a7e0b9755ce1a/*~hmac=c2164e76b2763d1afa9acabcbe7f88c4&fs=MTY3NTM0OTExODM3Nnx3ZWJWNnwxMDQ4NDI0NzmUsICxfDU5LjE1My4yMjQdUngMjI',
        //     image:'https://i.pinimg.com/564x/88/d6/f6/88d6f633996932935d43dca34c305820.jpg'
        // },
        // {
        //     name:'Người',
        //     singer:'Hà Anh Tuấn',
        //     album:'',
        //     path:'https://vnso-zn-5-tf-mp3-320s1-zmp3.zmdcdn.me/9e557ca7e5e30cbd55f2/1932857558382396677?authen=exp=1675521948~acl=/9e557ca7e5e30cbd55f2/*~hmac=71f4b8948854b66886524b0657ca4bc5&fs=MTY3NTM0OTE0ODMzMXx3ZWJWNnwxMDQ4NDI0NzmUsICxfDU5LjE1My4yMjQdUngMjI',
        //     image:'https://i.pinimg.com/736x/2e/d1/54/2ed15444732711e74a184a8d5da401cd.jpg'
        // },
        // {
        //     name:'Người tình mùa đông',
        //     singer:'Hà Anh Tuấn',
        //     album:'',
        //     path:'https://vnso-zn-16-tf-mp3-320s1-zmp3.zmdcdn.me/3b5a79db2f9ac6c49f8b/2878669073906586910?authen=exp=1675521969~acl=/3b5a79db2f9ac6c49f8b/*~hmac=4443615059e617035ed9bf7b9ef76fe5&fs=MTY3NTM0OTE2OTI4OHx3ZWJWNnwxMDQ4NDI0NzmUsICxfDU5LjE1My4yMjQdUngMjI',
        //     image:'https://i.pinimg.com/736x/bc/58/9b/bc589b90ac406a936ec647eb8df34eeb.jpg'
        // },
        // {
        //     name:'Phố mùa đông',
        //     singer:'Hà Anh Tuấn',
        //     album:'',
        //     path:'https://vnso-zn-15-tf-mp3-320s1-zmp3.zmdcdn.me/3fe11d604b21a27ffb30/4669118512350951093?authen=exp=1675521987~acl=/3fe11d604b21a27ffb30/*~hmac=c41b04fe95b137d7ceb6adf1a241808a&fs=MTY3NTM0OTE4NzMwMnx3ZWJWNnwxMDQ4NDI0NzmUsICxfDU5LjE1My4yMjQdUngMjI',
        //     image:'https://i.pinimg.com/564x/0b/34/d4/0b34d4444fea16aac0685d2a115ab511.jpg'
        // },
        // {
        //     name:'Tháng mấy em nhớ anh ?',
        //     singer:'Hà Anh Tuấn',
        //     album:'',
        //     path:'https://vnso-zn-16-tf-mp3-320s1-zmp3.zmdcdn.me/6b28d4118d50640e3d41/5181445787208545549?authen=exp=1675521506~acl=/6b28d4118d50640e3d41/*~hmac=5eb6b366af214f01692c6ac912c22022&fs=MTY3NTM0ODmUsICwNjMzNXx3ZWJWNnwxMDA4ODYwMjE1fDEdUngNTMdUngMTQ0Ljkw',
        //     image:'https://i.pinimg.com/736x/7f/b2/a9/7fb2a9e07ffc6b4546e95e9fa05b020b.jpg'
        // },
        // {
        //     name:'Tháng tư là lời nói dối của em',
        //     singer:'Hà Anh Tuấn',
        //     album:'',
        //     path:'https://vnso-zn-5-tf-mp3-320s1-zmp3.zmdcdn.me/ff75ee453401dd5f8410/1589336670738807709?authen=exp=1675521973~acl=/ff75ee453401dd5f8410/*~hmac=44543f80345d92e2fad3cfe374d68724&fs=MTY3NTM0OTE3MzE0Nnx3ZWJWNnwxMDmUsIC1MDYxNzmUsIC5fDExMy4xOTEdUngMTgyLjYw3',
        //     image:'https://i.pinimg.com/736x/86/73/f0/8673f00fed92c363da30de4492b241a3.jpg'
        // },
        // {
        //     name:'Trái tim em cũng biết đau',
        //     singer:'Hà Anh Tuấn',
        //     album:'',
        //     path:'https://vnso-zn-23-tf-mp3-320s1-zmp3.zmdcdn.me/89d6ad57fb1612484b07/1897209746444752983?authen=exp=1675522051~acl=/89d6ad57fb1612484b07/*~hmac=02abdb02e3256ae6b18379509695c9b8&fs=MTY3NTM0OTI1MTY3OHx3ZWJWNnwxMDQ4NDI0NzmUsICxfDU5LjE1My4yMjQdUngMjI',
        //     image:'https://i.pinimg.com/736x/21/5c/ce/215ccebf41f0805969ca33c09daf7722.jpg'
        // },
        // {
        //     name:'Lối nhỏ',
        //     singer:'Đen',
        //     album:'',
        //     path:'https://vnso-zn-23-tf-mp3-s1-zmp3.zmdcdn.me/edc75a7a3f3dd6638f2c/7555328701165411356?authen=exp=1675773773~acl=/edc75a7a3f3dd6638f2c/*~hmac=fa5e8994b6670aaa75695f9a146d3670&fs=MTY3NTYwMDk3MzI0Nnx3ZWJWNnwwfDExOC42OC42LjE3Mw',
        //     image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/d/0/b/2d0bf08b1ddaa07bae28208796316571.jpg'
        // }
    ],
    defineproperties: function() {
        Object.defineProperty(this,'currentSong',{
            get : function() {
                return personal.songs[personal.currentIndexSong ]
            }
        })
    },
    rendersong: function() {
        var htmls = personal.songs.map(function(song,index) {
            return`
                <div class="song" >
                    <div class="baihat">
                        <div class="icon-hover">
                            <p><ion-icon name="musical-notes-outline"></ion-icon></p>
                            <input type="checkbox">
                        </div>
                        <div class="avatar-baihat">
                            <img src="${song.image}" alt="">
                            <ion-icon name="play"></ion-icon>
                            <div class="gif"></div>
                            <div class="avatar-opacity"></div>
                        </div>
                        <div class="name-song">
                            <h2>${song.name}</h2>
                            <p class="singer">${song.singer}</p>
                        </div>
                    </div>
                    <div class="album" style="margin-left: -50px;"><p>${song.album}</p></div>
                    <div class="time">
                        <ion-icon name="mic" class="mic"></ion-icon>
                        <ion-icon name="heart" class="heart"></ion-icon>
                        <p class="listtimesong">04:03</p>
                        <ion-icon name="ellipsis-horizontal" class="horizontal"></ion-icon>
                    </div>
                </div>
            `
        })
        listsong.innerHTML = htmls.join('')
    }
    ,
    rederlibary:function() {
        var htmls = personal.libarys.map(function(libary) {
            return `
                <div class="libary-item">
                    <div class="container-libary">
                        <div class="img-avatar">
                            <img src="${libary.image}" alt="">
                        </div>
                        <div class="shuffle">
                            <ion-icon name="shuffle-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="name">
                        <p>${libary.name}</p>
                    </div>
                </div>
            `
        })
        listlibary.innerHTML = htmls.join('')
    },
    rederplaylist:function() {
        var htmls = personal.playlists.map(function(playlist){
            return `
                <div class="playlist-item">
                    <div class="container-playlist">
                        <div class="playlist-avatar">
                            <img src=${playlist.image} alt="">
                        </div>
                        <div class="playlist-active">
                            <ion-icon name="close" class="playlist-close"></ion-icon>
                            <ion-icon name="play" class="playlist-play"></ion-icon>
                            <ion-icon name="ellipsis-horizontal" class="playlist-threedoc"></ion-icon>
                        </div>
                        <div class="playlist-opacity"></div>
                    </div>
                    <div class="playlist-name">
                        <h2>${playlist.name}</h2>
                        <p>${playlist.nameuser}</p>
                    </div>
                </div>
            `
        })  
        listplaylist.innerHTML = htmls.join('')
    },
    playsong:function() {
        audio.load();
        personal.LoadCurrentSong()
        // audio.currentTime=0;
        audio.play()
    },
    LoadCurrentSong : function() {
        imgplaysong.src = personal.currentSong.image;
        nameplaysong.textContent = personal.currentSong.name
        singerplaysong.textContent = personal.currentSong.singer
        audio.src = personal.currentSong.path
    },
    checkNumber :function(a) {
        var demso = 1;
        if(!isNaN(a))
        {
            while(a>=10)
            {
                a =a /10;
                demso++;   
            }
            return(demso);
        }
    },
    secondsToHms:function(d) {
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        if(this.checkNumber(s)!=undefined&&this.checkNumber(m)!=undefined)
        {
            if(!isNaN(m)&&!isNaN(s))
            {
                if(personal.checkNumber(m)==1)
                    var m ="0" + Math.floor(d % 3600 / 60);
                if(personal.checkNumber(s)==1)
                    var s ="0" + Math.floor(d % 3600 % 60);

                return(m+':'+s)
            }
        }
    },
    playrandomsong:function() {
        let newindex
        do {
            newindex = Math.floor(Math.random()*personal.songs.length)
        }
        while(newindex==personal.currentIndexSong)
        personal.currentIndexSong = newindex
    },
    displayPlayingsong :function(d) {
        $$(".gif").forEach(function(gif,index) {
            gif.style.visibility = "hidden"
            if(d==index)
                gif.style.visibility = "visible"
        })
    },
    handleEvent:function() {
        tagPersonal.forEach(function(tag,index) {
            var pane = personalTags[index];
            hr.style.left = 0
            hr.style.width = $('.Category-item.active').offsetWidth+'px'
            tag.onclick = function() {
                $('.Category-item.active').classList.remove("active")
                this.classList.add("active")
                hr.style.left = $('.Category-item.active').offsetLeft+'px'
                hr.style.width  = $('.Category-item.active').offsetWidth + "px";
                $('.content.active').classList.remove("active")
                pane.classList.add("active")
            }
        });
        $$('.song').forEach(function(song,index) {
            song.onclick = function() {
                personal.currentIndexSong = index;
                tagplaysong.style.bottom = 0;
                buttonPause.classList.add("active")
                buttonPlay.classList.remove("active")
                personal.playsong()
                cdThumbAnimation.play()
                personal.displayPlayingsong(index)
            }
        })
        activeMenu.forEach(function(menu) {
            menu.onclick = function() {
                $('.menu1.active').classList.remove('active')
                this.classList.add("active")
            }
        })
        buttonPause.onclick=function(){
            buttonPause.classList.remove("active")
            buttonPlay.classList.add("active")
            audio.pause();
        }
        buttonPlay.onclick = function() {
            buttonPause.classList.add("active")
            buttonPlay.classList.remove("active")
            audio.play()
        }
        const cdThumbAnimation = $('.playsong-image').animate([
            {transform :'rotate(360deg)'}
        ],{
            duration: 10000,
            iterations:Infinity
        })
        cdThumbAnimation.pause()
        audio.ontimeupdate = function() {   
            if(!personal.isChange)
            {
                progress.value = (audio.currentTime/audio.duration)*100;
            }
            if(audio.ended)
            {
                if(personal.indexrepeatListSong==2)
                {
                    if(personal.currentIndexSong==personal.songs.length-1)
                        personal.currentIndexSong=0;
                    personal.playsong()
                }
                if(personal.indexrepeatSong==1)
                {
                    audio.currentTime=0
                    audio.play();
                }
                else
                {
                    if(personal.isshuffleSong) {
                        personal.playrandomsong()
                        personal.playsong()
                    }
                }
                if(personal.indexrepeatListSong!=2&&personal.indexrepeatSong!=1)
                {
                    if (personal.currentIndexSong<personal.songs.length-1)
                    {
                        personal.currentIndexSong++;
                        personal.playsong()
                    }
                    personal.displayPlayingsong( personal.currentIndexSong)
                }
                buttonPause.classList.remove("active")
                buttonPlay.classList.add("active")
            }
            audio.onpause = function() {
                cdThumbAnimation.pause()
            }
            audio.onplay = function() {
                buttonPause.classList.add("active")
                buttonPlay.classList.remove("active")
                cdThumbAnimation.play()
            }
            var min = Math.floor(audio.currentTime % 3600 / 60)
            var second = Math.floor(audio.currentTime % 3600 % 60)
            if(personal.checkNumber(Math.floor(audio.currentTime % 3600 / 60))==1)
                min = "0" + Math.floor(audio.currentTime % 3600 / 60)
            if(personal.checkNumber(Math.floor(audio.currentTime % 3600 % 60))==1)
                second = "0"+Math.floor(audio.currentTime % 3600 % 60)
            processsong.textContent = min + ":" + second
            timesong.textContent = personal.secondsToHms(audio.duration)
            
            prevSong.onclick = function() {
                if(personal.isshuffleSong)
                {
                    personal.playrandomsong()
                }
                else
                {
                    if(personal.currentIndexSong>=0)
                        personal.currentIndexSong--;
                    else
                        personal.currentIndexSong = personal.songs.length-1;
                }
                personal.playsong()
            }
            nextSong.onclick = function() {
                if(personal.isshuffleSong)
                {
                    personal.playrandomsong()
                }
                else
                {
                    if(personal.currentIndexSong<personal.songs.length-1&&personal.currentIndexSong>=0)
                        personal.currentIndexSong++;
                    else
                        personal.currentIndexSong = 0;
                }
                personal.playsong()
            }
            shuffleSong.onclick = function() {
                personal.isshuffleSong = !personal.isshuffleSong
                if(personal.isshuffleSong)
                    this.classList.add("active")
                else
                    this.classList.remove("active")
            }
            repeatSong.onclick = function() {
                personal.isrepeatSong = !personal.isrepeatSong
                if(personal.isrepeatSong&&personal.indexrepeatListSong==0)
                {
                    this.classList.add("active")
                    personal.indexrepeatListSong = 2;
                }
                if(personal.indexrepeatSong==0&&personal.isrepeatSong == false)
                {
                    this.innerHTML = `<ion-icon name="sync-outline"></ion-icon>`
                    personal.indexrepeatSong = 1;
                    personal.indexrepeatListSong=0;
                }
                if(personal.indexrepeatSong!=0&&personal.isrepeatSong == true)
                {
                    this.innerHTML = `<ion-icon name="repeat-outline"></ion-icon>`
                    this.classList.remove("active")
                    personal.indexrepeatSong = 0;
                    personal.indexrepeatListSong=0;
                    personal.isrepeatSong = false
                }
            }
        }   
        progress.addEventListener("mousedown",function() {
            personal.isChange = !personal.isChange
        })
        progress.addEventListener("mouseup",function() {
            personal.isChange = !personal.isChange
            audio.currentTime=(progress.value/100)*audio.duration;
        })
        recent.forEach(function(rec) {
            rec.onclick = function() {
                $('.recent.active').classList.remove('active')
                this.classList.add('active');
            }
        })
        displaysongrecent.onclick = function() {
            personal.isdisplaysongrecent = !personal.isdisplaysongrecent
            if(personal.isdisplaysongrecent)
            {
                songrecent.style.transform = "translateX(0)"
                this.style.backgroundColor = "#3056DC"
            }
            else
            {
                songrecent.style.transform = "translateX(100%)" 
                this.style.backgroundColor =  '#443856';               
            }
        }
        processVolume.onmousemove = function() {            
            audio.volume = (this.value/100)*1
        }
        turnOffVolume.onclick = function() {
            turnOnVolume.style.visibility = "visible"
            turnOffVolume.style.visibility = "hidden"
            audio.volume = 0;
            processVolume.value = 0
            processVolume.onchange = function() {
                if( processVolume.value >0)
                {
                    turnOnVolume.style.visibility = "hidden"
                    turnOffVolume.style.visibility = "visible"
                    audio.volume = (processVolume.value/100)*1
                }
            }
        }
        turnOnVolume.onclick = function() {
            turnOnVolume.style.visibility = "hidden"
            turnOffVolume.style.visibility = "visible"
            audio.volume = (20/100)
            processVolume.value = 20
        }
    },
    handleTimeSong:function(s) {
        if(s<personal.songs.length)
        {
            audio.src = personal.songs[s].path
            audio.onloadedmetadata = function() {
                personal.songs.forEach(function(song,index) {
                    if(s==index)
                    {
                        const listsongtime = $$('.list-songs .song .time .listtimesong')
                        listsongtime[s].textContent = personal.secondsToHms(audio.duration)   
                    }
                })
                personal.handleTimeSong(s+1)
            }
        }
    },
    start:function() {
        this.defineproperties()
        this.rendersong()
        this.rederlibary()
        this.rederplaylist()
        this.handleEvent()
        personal.handleTimeSong(0);
    }
}
personal.start()