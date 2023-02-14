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
const main = $$('#content>.content');
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
        {
            name:'Old Town Road',
            singer:'hehe',
            album:'',
            path:'https://vnso-zn-15-tf-mp3-320s1-zmp3.zmdcdn.me/3cd181e2d7a53efb67b4/3815851332802545146?authen=exp=1676125948~acl=/3cd181e2d7a53efb67b4/*~hmac=89d57b1d2d11979890814adcf81f3ada&fs=MTY3NTk1MzE0ODI0NHx3ZWJWNnwxMDQ4NDI0NzmUsICxfDU5LjE1My4yMzMdUngMTM4',
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
    defineproperties: function(page) {
        Object.defineProperty(page,'currentSong',{
            get : function() {
                return page.songs[page.currentIndexSong ]
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
                        <p class="listtimesong">00:00</p>
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
    playsong:function(type) {
        audio.load();
        personal.LoadCurrentSong(type)
        audio.play()
    },
    LoadCurrentSong : function(ob) {
        imgplaysong.src = ob.currentSong.image;
        nameplaysong.textContent = ob.currentSong.name
        singerplaysong.textContent = ob.currentSong.singer
        audio.src = ob.currentSong.path
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
                personal.playsong(personal)
                cdThumbAnimation.play()
                personal.displayPlayingsong(index)
            }
        })
        activeMenu.forEach(function(menu,index) {
            menu.onclick = function(e) {
                $('.menu1.active').classList.remove('active')
                this.classList.add("active")
                $('#content>.content.active').classList.remove('active')
                main[index].classList.add('active');
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
                    personal.playsong(personal)
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
                        personal.playsong(personal)
                    }
                }
                if(personal.indexrepeatListSong!=2&&personal.indexrepeatSong!=1)
                {
                    if(personal.currentIndexSong<personal.songs.length-1)
                    {
                        personal.currentIndexSong++;
                        personal.playsong(personal)
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
                personal.playsong(personal)
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
                personal.playsong(personal)
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
        this.defineproperties(personal)
        this.rendersong()
        this.rederlibary()
        this.rederplaylist()
        this.handleEvent()
        personal.handleTimeSong(0);
    }
}
const iconnext = $('.icon-next')
const iconprev = $('.icon-prev')
const listgallery = $('.list-gallery')
const exlporeTags = $$(".explore-newdeloy-tags .newdeloy-tag")
const exlporeConTentTags = $$("#explore-newdeloy .explore-newdeloys")
const nextRadio = $(".radio-next")
const prevRadio = $(".radio-prev")
const newsongslist = $('.newsongs-list')
const indexsongslist = $$('.newsongs-item')
const eventPrev = $('.explore-title p .icon:first-child')
const eventNext = $('.explore-title p .icon:last-child')
const eventChangeBackground = $('#list-option li:first-child')
eventChangeBackground.onclick = function() {
    console.log($('menu').offsetWidth);
}
$('#content').style.transform=`translateX(${$('menu').offsetWidth}px)`
const exlpore = {
    isShow:false,
    currentIndexSong:0,
    indexEvent:0,
    slides: [
        {
            image:"https://photo-zmp3.zmdcdn.me/banner/3/4/1/b/341b43479d99aabab258cb180bdeb58d.jpg"
        },
        {
            image:"https://photo-zmp3.zmdcdn.me/banner/d/5/d/6/d5d69a3c27f366ff77a741a5e68933c0.jpg"
        },
        {
            image:"https://photo-zmp3.zmdcdn.me/banner/f/1/f/9/f1f9e232d47bc0d37034f90da15b9654.jpg"
        },
        {
            image:"https://photo-zmp3.zmdcdn.me/banner/0/0/6/0/006012720e42ced2337abdfb903f8ac9.jpg"
        },
        {
            image:"https://photo-zmp3.zmdcdn.me/banner/d/d/2/4/dd243b3822a181f31e98ed89be31b30d.jpg"
        },
        {
            image:"https://photo-zmp3.zmdcdn.me/banner/5/1/0/e/510ebfe923d34d5fe27392dacb0fb9b0.jpg"
        }
    ],
    recents: [
        {
            imgage:'https://photo-playlist-zmp3.zmdcdn.me/s2/user-playlist?src=HavwqN7EvKCI1oYSFOdq0r5DF9mzYV03KGHhqJ7OyLW90stHOelpKGjGPTastgeDMmDdtcICg0iJ3NRSQChw05XFFuGZdhDN5GDubJ_7iWfN0tYBETYp20PNV8zgsR48KbHwYJBTvLnR1o-ACOhYNr004zuztevPLWSHs3p2rHW22rUADucNKLr00yDdnDiMJ5nQaphKsnO0Ma6VQ82DImaF59eoq89BMbuSp663XaK8KKl2Dzo3BLy46wynre8fMWq2ytE1Zcy81acnEj_5Eq5N1FrzpeLr2nC4ftt8XIyIGHkjVvZHUKD6J_yfcz4hHK4UhNdBW2GG4qkYUfk3F4a0Igvz&size=thumb/240_240',
            title:"Động lực"
        },
        {
            imgage:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/d/2/5/ed251cf560be4747e7737b535c357f07.jpg',
            title:"#Zingchart"
        },
        {
            imgage:'https://photo-playlist-zmp3.zmdcdn.me/s2/user-playlist?src=HavwqN7EvKCI1oYSFOdq0rHDR9mrYV43N5HdW6RP-GDT03I2Ojd_0mqBC8fWqwTRN5avYJRMeGj1Lt_SEf3p00eLDeHnnBfNHrbnbMsTwGfHMN7VFz3cNm82VjXfqRDHKryiWpxNi59M32g6ETMs0LWAHu0qqTu7L0D0XJt6X4K33mRNDet635n4Kfvcm8fBJGH1r2J0Z4jE14VBTDpTIXG2HPjzsjDF4WSVo7pUXar71nZCADJKJK0DL9TfWTWB4WOVrI3VarzRLrAPPyxJ614HKfjdcTCQ2a4UcJQQrXuEHKhCRfxKJ0uJJyjamDb211bFmct2qbnUMHlEVG&size=thumb/240_240',
            title:"Noo"
        },
        {
            imgage:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/images/8/4/d/8/84d853405a3420614784d74b66d4a858.jpg',
            title:"Vũ"
        },
        {
            imgage:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/f/a/2/2fa2c5d52c030eeb492b29e5c30a6512.jpg',
            title:"Lối nhỏ Đen Vâu"
        },
        {
            imgage:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/images/c/a/6/7/ca67e30d6a7fedbb64d1341b61ad4b94.jpg',
            title:"Những bài hát hay của Noo Phước Thịnh"
        },
        {
            imgage:'https://photo-playlist-zmp3.zmdcdn.me/s2/user-playlist?src=HavwqN7EvKCI1oYSFOdq0rPDOvnjYQi31bjdrMxJ-51M2ZU5ReB_0WK8OzGzqgXSK5q_tc-5z5SO12g0OyEcN5D6OzWeb-yB7WeaoJJElrPS2YJNCu2wNmvU9umsqRmB30ydZsFGl5bP3t2CDuRg2rbL6uepYuSFNbKVXZQGsqO8MLdKFTkP3rSI3PrjbjL8Hb8TrtwMW4X5KaYPBzk774y4ICuWtOLEImOScYNRWKvF0n_BTz29J4y82PPcX8KA7GD2r2_QpbvKKW-OQCkEJXuJ3yzedOuP0aT5ppcSZnvP5KANECg845CL49WyoDiU0HP7bppAqGaFKHYRVG&size=thumb/240_240',
            title:"Chill"
        },
    ],
    YouWantHears:[
        {
            imgage:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/d/3/0/fd303f58e16acee435800b32621b5b60.jpg',
            title:"Pop princess",
            singers:['Britney Spears','Christina Aguilera','pham van minh']
        },
        {
            imgage:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/1/7/e/d17ede63fae6b485d1bc003170ee39b5.jpg',
            title:"Pop princess",
            singers:['The Chainsmokers','Calvin Harris','Alan Walker']
        },
        {
            imgage:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/4/4/4/d444dcf90cf33747e9369763474f2216.jpg',
            title:"Pop princess",
            singers:['Taylor Swift','Justin Bieber','Adele']
        },
        {
            imgage:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/1/3/8/b138850701bdb9b4f8c444f0e60e212d.jpg',
            title:"Pop princess",
            singers:['Zedd','Alessia Cara','Gryffin']
        },
        {
            imgage:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/d/f/c/ddfc89a5793ba5e0219aad3a86859756.jpg',
            title:"Pop princess",
            singers:['Katy Perry','Taylor Swift','Justin Bieber']
        },
    ],
    songs:[
        {
            name:'Định Mệnh',
            singer:'Noo Phước Thịnh',
            timeDeloy:'42 phút trước',
            path:'songs/song4.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/d/e/b/6deb8ea62749618d200bbe270ade7f3e.jpg'
        },
        {
            name:'Chạm khẽ tim anh một chút thôi',
            singer:'Noo Phước Thịnh',
            timeDeloy:' 3 giây trước',
            path:'songs/song6.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/d/e/b/6deb8ea62749618d200bbe270ade7f3e.jpg'
        },  
        {
            name:'Em đã thương người ta hơn anh',
            singer:'Noo Phước Thịnh',
            timeDeloy:'5 tiếng trước',
            path:'songs/song8.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/d/e/b/6deb8ea62749618d200bbe270ade7f3e.jpg'
        },
        {
            name:'Yêu một người sao buồn đến thế',
            singer:'Noo Phước Thịnh',
            path:'songs/song10.mp3',
            timeDeloy:'3 tiếng trước',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/0/c/3/e0c341956a038d66b77275b20168b112.jpg'
        },
        {
            name:'Cause I Love You',
            singer:'Noo Phước Thịnh',
            timeDeloy:'12 tiếng trước',
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
            name:'Cơn mơ băng giá',
            singer:'Noo Phước Thịnh',
            timeDeloy:'8 tiếng trước',
            path:'songs/song5.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/d/d/9/bdd90e2f31c41756ba054b6d96ccd674.jpg'
        },
        {
            name:'Những kẻ mộng mơ',
            singer:'Noo Phước Thịnh',
            timeDeloy:'1 tiếng trước',
            path:'songs/song1.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/4/3/c/143c3e0f7a42b90009f5738899280003.jpg'
        },
        {
            name:'Chợt thấy em khóc',
            singer:'Noo Phước Thịnh',
            timeDeloy:'10 tiếng trước',
            path:'songs/song11.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/7/c/0/97c0d89266b572d570062a0b7abbb99a.jpg'
        },
        {
            name:'Old Town Road',
            singer:'hehe',
            timeDeloy:'5 tiếng trước',
            path:'https://vnso-zn-15-tf-mp3-320s1-zmp3.zmdcdn.me/3cd181e2d7a53efb67b4/3815851332802545146?authen=exp=1676125948~acl=/3cd181e2d7a53efb67b4/*~hmac=89d57b1d2d11979890814adcf81f3ada&fs=MTY3NTk1MzE0ODI0NHx3ZWJWNnwxMDQ4NDI0NzmUsICxfDU5LjE1My4yMzMdUngMTM4',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/7/c/0/97c0d89266b572d570062a0b7abbb99a.jpg'
        },
        {
            name:'Something just like this',
            singer:'hehe',
            timeDeloy:'4 tiếng trước',
            path:'https://vnso-zn-24-tf-mp3-s1-zmp3.zmdcdn.me/b5535a5c671a8e44d70b/8692159048210559009?authen=exp=1676126132~acl=/b5535a5c671a8e44d70b/*~hmac=79aa31a04fe6cb77c0579c91bd2fc0cc&fs=MTY3NTk1MzMzMjIzMXx3ZWJWNnwwfDE0LjI0OC4xMTIdUngODk',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/7/c/0/97c0d89266b572d570062a0b7abbb99a.jpg'
        },
        {
            name:'Take me to church',
            singer:'hehe',
            timeDeloy:'vừa xong',
            path:'https://vnso-zn-5-tf-mp3-320s1-zmp3.zmdcdn.me/99811863c024297a7035/2841815870575837844?authen=exp=1676126532~acl=/99811863c024297a7035/*~hmac=be34c8b1fa5cc1b2fb664bda504dbf84&fs=MTY3NTk1MzmUsICzMjkxOHx3ZWJWNnwxMDQ4NDI0NzmUsICxfDU5LjE1My4yMzMdUngMTM4',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/7/c/0/97c0d89266b572d570062a0b7abbb99a.jpg'
        },
    ],
    NewDeloyVietNam:[
        {
            name:'Pham Van Bao',
            singer:'Noo Phước Thịnh',
            timeDeloy:'42 phút trước',
            path:'songs/song4.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/d/e/b/6deb8ea62749618d200bbe270ade7f3e.jpg'
        },
        {
            name:'Chạm khẽ tim anh một chút thôi',
            singer:'Noo Phước Thịnh',
            timeDeloy:' 3 giây trước',
            path:'songs/song6.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/d/e/b/6deb8ea62749618d200bbe270ade7f3e.jpg'
        },  
        {
            name:'Em đã thương người ta hơn anh',
            singer:'Noo Phước Thịnh',
            timeDeloy:'5 tiếng trước',
            path:'songs/song8.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/d/e/b/6deb8ea62749618d200bbe270ade7f3e.jpg'
        },
        {
            name:'Yêu một người sao buồn đến thế',
            singer:'Noo Phước Thịnh',
            path:'songs/song10.mp3',
            timeDeloy:'3 tiếng trước',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/0/c/3/e0c341956a038d66b77275b20168b112.jpg'
        },
        {
            name:'Cause I Love You',
            singer:'Noo Phước Thịnh',
            timeDeloy:'12 tiếng trước',
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
            name:'Cơn mơ băng giá',
            singer:'Noo Phước Thịnh',
            timeDeloy:'8 tiếng trước',
            path:'songs/song5.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/d/d/9/bdd90e2f31c41756ba054b6d96ccd674.jpg'
        },
        {
            name:'Những kẻ mộng mơ',
            singer:'Noo Phước Thịnh',
            timeDeloy:'1 tiếng trước',
            path:'songs/song1.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/4/3/c/143c3e0f7a42b90009f5738899280003.jpg'
        },
        {
            name:'Chợt thấy em khóc',
            singer:'Noo Phước Thịnh',
            timeDeloy:'10 tiếng trước',
            path:'songs/song11.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/7/c/0/97c0d89266b572d570062a0b7abbb99a.jpg'
        },
        {
            name:'Old Town Road',
            singer:'hehe',
            timeDeloy:'5 tiếng trước',
            path:'https://vnso-zn-15-tf-mp3-320s1-zmp3.zmdcdn.me/3cd181e2d7a53efb67b4/3815851332802545146?authen=exp=1676125948~acl=/3cd181e2d7a53efb67b4/*~hmac=89d57b1d2d11979890814adcf81f3ada&fs=MTY3NTk1MzE0ODI0NHx3ZWJWNnwxMDQ4NDI0NzmUsICxfDU5LjE1My4yMzMdUngMTM4',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/7/c/0/97c0d89266b572d570062a0b7abbb99a.jpg'
        },
        {
            name:'Something just like this',
            singer:'hehe',
            timeDeloy:'4 tiếng trước',
            path:'https://vnso-zn-24-tf-mp3-s1-zmp3.zmdcdn.me/b5535a5c671a8e44d70b/8692159048210559009?authen=exp=1676126132~acl=/b5535a5c671a8e44d70b/*~hmac=79aa31a04fe6cb77c0579c91bd2fc0cc&fs=MTY3NTk1MzMzMjIzMXx3ZWJWNnwwfDE0LjI0OC4xMTIdUngODk',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/7/c/0/97c0d89266b572d570062a0b7abbb99a.jpg'
        },
        {
            name:'Take me to church',
            singer:'hehe',
            timeDeloy:'vừa xong',
            path:'https://vnso-zn-5-tf-mp3-320s1-zmp3.zmdcdn.me/99811863c024297a7035/2841815870575837844?authen=exp=1676126532~acl=/99811863c024297a7035/*~hmac=be34c8b1fa5cc1b2fb664bda504dbf84&fs=MTY3NTk1MzmUsICzMjkxOHx3ZWJWNnwxMDQ4NDI0NzmUsICxfDU5LjE1My4yMzMdUngMTM4',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/7/c/0/97c0d89266b572d570062a0b7abbb99a.jpg'
        },
    ],
    NewDeloyNuocNgoai:[
        {
            name:'Pham Van Minh',
            singer:'Noo Phước Thịnh',
            timeDeloy:'42 phút trước',
            path:'songs/song4.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/d/e/b/6deb8ea62749618d200bbe270ade7f3e.jpg'
        },
        {
            name:'Chạm khẽ tim anh một chút thôi',
            singer:'Noo Phước Thịnh',
            timeDeloy:' 3 giây trước',
            path:'songs/song6.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/d/e/b/6deb8ea62749618d200bbe270ade7f3e.jpg'
        },  
        {
            name:'Em đã thương người ta hơn anh',
            singer:'Noo Phước Thịnh',
            timeDeloy:'5 tiếng trước',
            path:'songs/song8.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/6/d/e/b/6deb8ea62749618d200bbe270ade7f3e.jpg'
        },
        {
            name:'Yêu một người sao buồn đến thế',
            singer:'Noo Phước Thịnh',
            path:'songs/song10.mp3',
            timeDeloy:'3 tiếng trước',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/0/c/3/e0c341956a038d66b77275b20168b112.jpg'
        },
        {
            name:'Cause I Love You',
            singer:'Noo Phước Thịnh',
            timeDeloy:'12 tiếng trước',
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
            name:'Cơn mơ băng giá',
            singer:'Noo Phước Thịnh',
            timeDeloy:'8 tiếng trước',
            path:'songs/song5.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/d/d/9/bdd90e2f31c41756ba054b6d96ccd674.jpg'
        },
        {
            name:'Những kẻ mộng mơ',
            singer:'Noo Phước Thịnh',
            timeDeloy:'1 tiếng trước',
            path:'songs/song1.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/1/4/3/c/143c3e0f7a42b90009f5738899280003.jpg'
        },
        {
            name:'Chợt thấy em khóc',
            singer:'Noo Phước Thịnh',
            timeDeloy:'10 tiếng trước',
            path:'songs/song11.mp3',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/7/c/0/97c0d89266b572d570062a0b7abbb99a.jpg'
        },
        {
            name:'Old Town Road',
            singer:'hehe',
            timeDeloy:'5 tiếng trước',
            path:'https://vnso-zn-15-tf-mp3-320s1-zmp3.zmdcdn.me/3cd181e2d7a53efb67b4/3815851332802545146?authen=exp=1676125948~acl=/3cd181e2d7a53efb67b4/*~hmac=89d57b1d2d11979890814adcf81f3ada&fs=MTY3NTk1MzE0ODI0NHx3ZWJWNnwxMDQ4NDI0NzmUsICxfDU5LjE1My4yMzMdUngMTM4',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/7/c/0/97c0d89266b572d570062a0b7abbb99a.jpg'
        },
        {
            name:'Something just like this',
            singer:'hehe',
            timeDeloy:'4 tiếng trước',
            path:'https://vnso-zn-24-tf-mp3-s1-zmp3.zmdcdn.me/b5535a5c671a8e44d70b/8692159048210559009?authen=exp=1676126132~acl=/b5535a5c671a8e44d70b/*~hmac=79aa31a04fe6cb77c0579c91bd2fc0cc&fs=MTY3NTk1MzMzMjIzMXx3ZWJWNnwwfDE0LjI0OC4xMTIdUngODk',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/7/c/0/97c0d89266b572d570062a0b7abbb99a.jpg'
        },
        {
            name:'Take me to church',
            singer:'hehe',
            timeDeloy:'vừa xong',
            path:'https://vnso-zn-5-tf-mp3-320s1-zmp3.zmdcdn.me/99811863c024297a7035/2841815870575837844?authen=exp=1676126532~acl=/99811863c024297a7035/*~hmac=be34c8b1fa5cc1b2fb664bda504dbf84&fs=MTY3NTk1MzmUsICzMjkxOHx3ZWJWNnwxMDQ4NDI0NzmUsICxfDU5LjE1My4yMzMdUngMTM4',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/7/c/0/97c0d89266b572d570062a0b7abbb99a.jpg'
        },
    ],
    powerMidWeeks:[
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/1/7/5/f1756dd7c13150fed7b25bb87ef21d5d.jpg',
            title:'Nhạc cho thứ 7',
            description:'EDM không thể thiếu cho ngày thứ Bảy cuối tuần'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/2/c/8/c2c89b57b7cea83c8c1972861a5301a1.jpg',
            title:'Và thế là yêu',
            description:'Gặp em một buổi chiều, thấy lòng thiếu thiếu... thế là yêu!'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/7/a/8/57a8aacf893bb82891f9ad2ff570a7f6.jpg',
            title:'Đỉnh cao Trending',
            description:'Chiếm trọn Top Trending Việt Nam khi vừa ra mắt'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/e/e/4/0ee403c2084b53f0bbd9f7a4474f12ac.jpg',
            title:'R&B viêt ngày nay',
            description:'Bức tranh đa màu sắc của R&B Việt ngày nay'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/5/e/a/55ea69e44927a99b943be1a2e3047430.jpg    ',
            title:'Nhạc sĩ hát',
            description:'Ở đây có nhạc sĩ Kai Đinh và nhiều hơn nữa'
        },
    ],
    famousSingers:[
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/images/a/1/e/0/a1e02cdf50690af710b77af59db01d60.jpg',
            description:'Những chiếc nhạc mlem của HIEUTHUHAI'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/a/2/e/1a2e7b4845e7b40cfd9d1e169245928f.jpg',
            description:'Trúc Nhân và siêu Hit Có không giữ mất đừng tìm, Sáng mắt chưa'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/5/1/9/a5199dc00d416498bd38ca44b8b79c4d.jpg',
            description:'Ú òa một cái có ngay nhạc xịn của MONO'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/f/5/1/4f517d7a902dc1eb1b9735dc11108536.jpg',
            description:'Nghe Anh chưa thương em đến vậy đâu của Myra Trần và …'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/d/a/c/8dac50eb79753190ee18bb46f95797f3.jpg',
            description:'Vũ Cát Tường và bộ sưu tập Hit"độc nhất"'
        },
    ],
    onlyfans:[
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/images/b/4/8/0/b4807a29d5b9f6abb009bed66f81af8d.jpg',
            title:'Những Bài Hát Hay Nhất Của ...',
            description:'Alan Walker'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/8/f/9/88f98c32c575699aa4af4124de6d1be9.jpg',
            title:'Ritual (Single)',
            description:'Alan Walker'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/e/a/7/bea7743cfcdc9464d1cd1fd1281a6ba8.jpg',
            title:'Faded (Remixes)',
            description:'Alan Walker'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/e/d/d/fedd3035df204386e68275a79369047f.jpg',
            title:'Sing Me to Sleep (EP)',
            description:'Alan Walker'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/8/2/8/f828971973632637d83b119fe5801965.jpg    ',
            title:'Faded (EP)',
            description:'Alan Walker'
        },
    ],
    FavoriteArtists:[
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w480_r2x3_webp/cover_artist/e/d/6/d/ed6dfbd391ac1c13ab2abbfb1854ed47.jpg',
            name:'Bùi Anh Tuấn',
            listimage:
            [
                'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/c/2/6/4/c26405ed0a45459ad3af76210f4878bd.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/covers/8/9/89af1855ce349828e851a9fe834afc80_1474942606.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/covers/8/9/89af1855ce349828e851a9fe834afc80_1474942606.jpg'
            ]
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w480_r2x3_webp/cover_artist/f/4/f/f/f4ffb4dd34649a9b8ed66cf7924b657c.jpg',
            name:'Bức tường',
            listimage:[
                'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/covers/7/f/7fdc1a630c238af0815181f9faa190f5_1285212114.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/covers/7/f/7fdc1a630c238af0815181f9faa190f5_1285212114.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/covers/7/f/7fdc1a630c238af0815181f9faa190f5_1285212114.jpg   '
            ]
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w480_r2x3_webp/cover_artist/e/a/6/0/ea601168be387cec200c4a08f528ed88.jpg',
            name:'Lil Nas X',
            listimage:[
                'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/0/3/5/40354058076ab81f7da2e14e8965a3e2.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/2/d/6/42d6a1aa54e1fdafb6f241db6902c60f.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/9/8/3/598368a45f9061cff3275937295b7584.jpg'
            ]
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w480_r2x3_webp/cover_artist/4/3/0/c/430cd64ec15d30b342678c95185f76ba.jpg',
            name:'Noo Phước Thịnh',
            listimage:[
                'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/6/d/e/b/6deb8ea62749618d200bbe270ade7f3e.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/covers/6/e/6e7b90d96728c9ce1b4c2a104d622784_1507799020.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/9/6/6/6/96661ff604cbdfcbe5751d8ff96c82c6.jpg'
            ]
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w480_r2x3_webp/cover_artist/3/5/a/d/35ad281a468d21a2d0ad5a8d96c62f23.jpg',
            name:'Mr.Siro',
            listimage:[
                'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/d/5/d/8d5dbe985cfcd4f76d2c1ff3ce78abf3.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/d/6/2/4d62b014dddf2702af85e1d14d5c0a0b.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/6/9/4/4/6944b95014e0aa283befab1bcd5f8cdd.jpg'
            ]
        },
    ],
    radios:[
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/f/d/7/9/fd79808d2180de9a421afa6aff38953e.jpg',
            imagesuport:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/4/6/b/146b49d11cc9b3bc591823bfedb8bce2.jpg',
            title:"V-POP",
            duration:'360',
            viewer:'1k đang nghe'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/5/b/8/2/5b82aaa0580bd3917bfd8f2b07577e69.jpg',
            imagesuport:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/2/c/c/f/2ccf96f6da468b466c5f8d1188f62eee.jpg',
            title:'Pladio',
            duration:'143',
            viewer:'109 đang nghe'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/2/3/5/e235117d191db9f7bbc82a3d31f17e60.jpg',
            imagesuport:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/7/7/8/d/778d152062edfbe0e4c4abf151858bf0.jpg',
            title:'Chạm',
            duration:'160',
            viewer:'65 đang nghe'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/5/0/0/050026740ab256072ce322be0fcd01bb.jpg',
            imagesuport:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/8/5/4/0/854010f76bddeefd5f13305a1d6cc8be.jpg',
            title:'On Air',
            duration:'188',
            viewer:'14 đang nghe'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg',
            imagesuport:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg',
            title:'US-UK',
            duration:'300',
            viewer:'67 đang nghe'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/4/f/f/d4ffcd5734d4dae6266fec08719324f0.jpg',
            imagesuport:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/b/0/d/a/b0da7c8ecd6521337682f3a86fa0170f.jpg',
            title:'K-POP',
            duration:'250',
            viewer:'33 đang nghe'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/c/2/1/bc2115886f2e2e9f7cf2fa28a39cda12.jpg',
            imagesuport:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/c/f/2/4/cf2428f7e56a8c2a52d84cb106891de2.jpg',
            title:'Acoustic',
            duration:'234',
            viewer:'99 đang nghe'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/f/b/0/efb05fb9097a7057aecef6ecb62bff5a.jpg',
            imagesuport:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/0/9/9/3/0993b3110c60ba6518fceeba9913d20d.jpg',
            title:'Acoustic',
            duration:'118',
            viewer:'23 đang nghe'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/f/2/2/bf223818f85e7fe129091b415038ca6c.jpg',
            imagesuport:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/b/f/3/b/bf3bf87a788a5d0b8719c6feee774a2e.jpg',
            title:'Rap Việt',
            duration:'223',
            viewer:'1k đang nghe'
        },
        {
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/f/6/2/ef629460aba3bf16ced1931b951a9dc6.jpg',
            imagesuport:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/e/7/f/3/e7f3098c8bc0e12444a9495900580ed5.jpg',
            title:'EDM',
            duration:'444',
            viewer:'6k đang nghe'
        },
    ],
    imageNewSongs:[
        {
            name:'Hoa lạc lối',
            singer:'Khang Việt',
            day:'',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/9/a/8/9/9a894135b316f76d84a2ed6e113d8ad6.jpg',
        },
        {
            name:'Ghệ iu dấu của em ơi',
            singer:'Tlinh',
            day:'',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/b/9/5/7/b95760bf9d1dc98d671e494b73f15492.jpg',
        },
        {
            name:'Người yêu xịn xò',
            singer:'Tiên Tiên',
            day:'',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/7/c/6/e7c62eca5fea137039126c3009682937.jpg',
        },
        {
            name:'Tuesday',
            singer:'Vương anh tú',
            day:'',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/a/d/b/4/adb4e8399efce647e0d5b2516851ba54.jpg',
        },
        {        
            name:'Cẩm y vệ ',
            singer:'Đình Dũng',
            day:'',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/a/c/6/4/ac641faa185e8dd10e64df943a755c63.jpg',
        },
        {
            name:'Rời xa thế giới',
            singer:'ChuChu',
            day:'',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/f/4/b/df4b97eed06fc583cfe690bea4872a23.jpg',
        },
        {
            name:'Mình ơi',
            singer:'Đoàn Thúy Trang',
            day:'',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/0/6/2/1/06215c94c0e55ff17cde7aa453daa578.jpg',
        },
        {
            name:'Pháo hoa',
            singer:'Gill',
            day:'',
            image:'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/2/2/1/5/2215e1749302789c6450aa5243b4e1a1.jpg',
        },
    ],
    listimageCompanys:[
        'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/genie.png',
        'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/beggers.png',
        'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/FUGA.png',
        'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/hikoon.png',
        'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/orcahrd.png',
        'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/kakao.png',
        'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/taihe.png',
        'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/empire.png',
        'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/ingrooves.png',
        'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/universal-1.png',
        'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/jsj.png',
        'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/SM-Entertainment.png',
        'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/danal.png',
        'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/stone-music.png',
        'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/believe.png',
        'https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/route-note.png', 
    ],
    listimageBody:[
        "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/London-light1.jpg",
        "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/rose.jpg",
    ],
    renderimageNewSongs :function() {
        exlpore.imageNewSongs.forEach(function(imageNewSong,index) {
            $$(".newsongs-item img").forEach(function(a,indeximg) {
                if(index==indeximg) {
                    a.src = imageNewSong.image;
                }
            })
            $$(".newsongs-item h3").forEach(function(a,indexname) {
                if(index==indexname) {
                    a.textContent = imageNewSong.name;
                }
            })
            $$(".newsongs-item span").forEach(function(a,indexsinger) {
                if(index==indexsinger) {
                    a.textContent = imageNewSong.singer;
                }
            })
            $$(".newsongs-item .item-top").forEach(function(a,indextop) {
                a.textContent = `#${indextop+1}`
            })
        })
    },
    renderlistimageCompany:function() {
        var htmls = exlpore.listimageCompanys.map(function(listimageCompany) {
            return `<li><img src="${listimageCompany}" alt=""</li>`
        })
        $(".explore-list-company").innerHTML = htmls.join('')
    },
    renderradios:function() {
        var htmls = exlpore.radios.map(function(radio) {
            return `
            <div class="radio-item">
                <div class="item-img">
                    <div class="item-img-avatar">
                        <img src="${radio.image}" alt="">
                        <div class="item-img-con">
                            <img src="${radio.imagesuport}" alt="">
                        </div>
                    </div>
                    <div class="item-action">
                        <ion-icon name="play"></ion-icon>
                    </div>
                    <div class="item-shadow"></div>
                    <span class="radio-live">LIVE</span>
                    <svg viewBox="0 0 80 80" class="radio-duration">
                        <circle class="circle" cx="40" cy="40" r="38" style="stroke-dasharray:${radio.duration};"/>
                    </svg>
                </div>
                <div class="item-title">
                    <h3>${radio.title}</h3>
                    <span>${radio.viewer}</span>
                </div>
            </div>
            `
        })
        $(".radio-list").innerHTML = htmls.join('')
    },
    renderFavoriteArtists :function() {
        var htmls  = exlpore.FavoriteArtists.map(function(FavoriteArtist) {
            return `
            <div class="FavoriteArtist-item">
                <div class="item-img">
                    <img src="${FavoriteArtist.image}" alt="">
                </div>
                <div class="FavoriteArtist-down">
                    <h4>${FavoriteArtist.name}</h4>
                    <div class="FavoriteArtist-listimgsong">
                        <img src="" alt="">
                        <img src="" alt="">
                        <img src="" alt="">
                    </div>
                </div>
                <ion-icon name="play" class="FavoriteArtist-play"></ion-icon>
                <div class="item-shadow"></div>
            </div>
            `
        })
        $(".explore-FavoriteArtist-list").innerHTML = htmls.join('')
        var list = exlpore.FavoriteArtists.map(function(FavoriteArtist) {
            return FavoriteArtist.listimage
        })
        for(var i=0;i<list.length;i++) {
            var htmlslist = list[i].map(function(e) {
                return `<img src="${e}" alt="">`
            })
            $$('.FavoriteArtist-listimgsong').forEach(function(e,index) {
                if(i===index) {
                    e.innerHTML = htmlslist.join('')
                }
            })
        }
    },
    renderonlyfans:function() {
        var htmls = exlpore.onlyfans.map(function(onlyfan) {
            return `
            <div class="onlyfan-item">
                <div class="item-img">
                    <img src="${onlyfan.image}" alt="">
                    <div class="item-action">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="caret-forward-circle-outline"></ion-icon>
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                    <div class="item-shadow"></div>
                </div>
                <div class="item-title">
                    <h3>${onlyfan.title}</h3>
                    <div class="singers">
                        <span>${onlyfan.description}</span>
                    </div>
                </div>
            </div>
            `
        })
        $(".explore-onlyfan-list").innerHTML = htmls.join('')
    },
    renderfamousSingers:function() {
        var htmls = exlpore.famousSingers.map(function(famousSinger) {
            return `
            <div class="famousSinger-item">
                <div class="item-img">
                    <img src="${famousSinger.image}" alt="">
                    <div class="item-action">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="caret-forward-circle-outline"></ion-icon>
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                    <div class="item-shadow"></div>
                </div>
                <div class="item-title">
                    <div class="singers">
                        <span>${famousSinger.description}</span>
                    </div>
                </div>
            </div>
            `
        })
        $(".explore-famousSinger-list").innerHTML = htmls.join('')
    },
    renderpowerMidWeek:function() {
        var htmls = exlpore.powerMidWeeks.map(function(powerMidWeek) {
            return `
            <div class="powerMidWeek-item">
                <div class="item-img">
                    <img src="${powerMidWeek.image}" alt="">
                    <div class="item-action">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="caret-forward-circle-outline"></ion-icon>
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                    <div class="item-shadow"></div>
                </div>
                <div class="item-title">
                    <h3>${powerMidWeek.title}</h3>
                    <div class="singers">
                        <span>${powerMidWeek.description}</span>
                    </div>
                </div>
            </div>
            `
        })
        $(".explore-powerMidWeek-list").innerHTML = htmls.join('');
    },
    renderSlide:function() {
        var htmls = exlpore.slides.map(function(slide) {
            return `<div class="gallery-item"><img src="${slide.image}" alt=""></div>`
        })
        listgallery.innerHTML = htmls.join('')
    },
    renderListRecent:function() {
        const htmls = exlpore.recents.map(function(recent) {
            return `
                <div class="recent-item">
                    <div class="recent-item-img">
                        <img src="${recent.imgage}" alt="">
                        <div class="recent-item-action">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="caret-forward-circle-outline"></ion-icon>
                            <ion-icon name="close-outline"></ion-icon>
                        </div>
                        <div class="recent-item-shadow"></div>
                    </div>
                    <div class="recent-item-title">
                        <h3>${recent.title}</h3>
                    </div>
                </div>
            `
        })  
        $('.explore-recents-list').innerHTML = htmls.join("")
    },
    renderYouWantHear:function() {
        var htmls = exlpore.YouWantHears.map(function(YouWantHear) {
            return `
            <div class="youwanthear-item">
                <div class="item-img">
                    <img src="${YouWantHear.imgage}" alt="">
                    <div class="item-action">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="caret-forward-circle-outline"></ion-icon>
                        <ion-icon name="close-outline"></ion-icon>
                    </div>
                    <div class="item-shadow"></div>
                </div>
                <div class="item-title">
                    <h3>${YouWantHear.title}</h3>
                    <div class="singers"></div>
                </div>
            </div>
            `
        })
        $('.explore-youwanthear-list').innerHTML = htmls.join('')
        var singers = exlpore.YouWantHears.map(function(YouWantHear) {
            return YouWantHear.singers
        })
        for(var i=0;i<singers.length;i++) {
            var htmlslist = singers[i].map(function(e) {
                return `<span>${e},  </span>`
            })
            $$('.singers').forEach(function(e,index) {
                if(i===index) {
                    e.innerHTML = htmlslist.join('')
                }
            })
        }
    },
    renderDeloyNewAll:function() {
        var htmls = exlpore.songs.map(function(NewDeloy) {
            return `
                <div class="explore-newdeloy-item">
                    <div class="newdeloy-item-left">
                        <div class="item-left-avatar">
                            <img src="${NewDeloy.image}" alt="">
                            <div class="item-left-action">
                                <ion-icon name="play" class="play"></ion-icon>
                                <div class="gif"></div>
                                <div class="opacity"></div>
                            </div>
                        </div>
                        <div class="item-left-title">
                            <h3>${NewDeloy.name}</h3>
                            <p>${NewDeloy.singer}</p>
                            <p class="deloytime">${NewDeloy.timeDeloy}</p>
                        </div>
                    </div>
                    <div class="newdeloy-item-right">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
            `
        })
        $(".newdeloy-All").innerHTML = htmls.join('')
    },
    renderDeloyNewVietNam:function() {
        var htmls = exlpore.NewDeloyVietNam.map(function(NewDeloy) {
            return `
                <div class="explore-newdeloy-item">
                    <div class="newdeloy-item-left">
                        <div class="item-left-avatar">
                            <img src="${NewDeloy.image}" alt="">
                            <div class="item-left-action">
                                <ion-icon name="play" class="play"></ion-icon>
                                <div class="gif"></div>
                                <div class="opacity"></div>
                            </div>
                        </div>
                        <div class="item-left-title">
                            <h3>${NewDeloy.name}</h3>
                            <p>${NewDeloy.singer}</p>
                            <p class="deloytime">${NewDeloy.timeDeloy}</p>
                        </div>
                    </div>
                    <div class="newdeloy-item-right">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
            `
        })
        $(".newdeloy-Vietnam").innerHTML = htmls.join('')
    },
    renderDeloyNewNuocNgoai:function() {
        var htmls = exlpore.NewDeloyNuocNgoai.map(function(NewDeloy) {
            return `
                <div class="explore-newdeloy-item">
                    <div class="newdeloy-item-left">
                        <div class="item-left-avatar">
                            <img src="${NewDeloy.image}" alt="">
                            <div class="item-left-action">
                                <ion-icon name="play" class="play"></ion-icon>
                                <div class="gif"></div>
                                <div class="opacity"></div>
                            </div>
                        </div>
                        <div class="item-left-title">
                            <h3>${NewDeloy.name}</h3>
                            <p>${NewDeloy.singer}</p>
                            <p class="deloytime">${NewDeloy.timeDeloy}</p>
                        </div>
                    </div>
                    <div class="newdeloy-item-right">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
            `
        })
        $(".newdeloy-Nuocngoai").innerHTML = htmls.join('')
    },
    slideshowprev:function() {
            previous = $('.gallery-item.previous')
            first = $('.gallery-item.first')
            add = $('.gallery-item.add')
            last = $('.gallery-item.last')
            next = $('.gallery-item.next')
            select = $('.gallery-item.select')
            if(previous!=null)
            {
                previous.classList.add('select')
                previous.classList.remove('previous')
            }
            if(first!=null)
            {
                first.classList.add('previous')
                first.classList.remove('first')
            }
            if(add!=null)
            {
                add.classList.add('first')
                add.classList.remove('add')
            }
            if(last!=null)
            {
                last.classList.add('add')
                last.classList.remove('last')
            }
            if(next!=null)
            {
                next.classList.add('last')
                next.classList.remove('next')
            }
            if(select!=null)
            {
                select.classList.add('next')
                select.classList.remove('select')
            }
    },
    slideshownext:function() {
        previous = $('.gallery-item.previous')
            first = $('.gallery-item.first')
            add = $('.gallery-item.add')
            last = $('.gallery-item.last')
            next = $('.gallery-item.next')
            select = $('.gallery-item.select')
            if(previous!=null)
            {
                previous.classList.add('first')
                previous.classList.remove('previous')
            }
            if(first!=null)
            {
                first.classList.add('add')
                first.classList.remove('first')
            }
            if(add!=null)
            {
                add.classList.add('last')
                add.classList.remove('add')
            }
            if(last!=null)
            {
                last.classList.add('next')
                last.classList.remove('last')
            }
            if(next!=null)
            {
                next.classList.add('select')
                next.classList.remove('next')
            }
            if(select!=null)
            {
                select.classList.add('previous')
                select.classList.remove('select')
            }
    },
    slidenewsongs:function() {
        var i=2;
        var IntervalSlideNewSong = setInterval(function() {
            newsongslist.style.transform = `translateX(calc(${(i+1)*-34}%))`
            i=i+3;
            if(i>indexsongslist.length)
            {
                newsongslist.style.transform = `translateX(0)`
                i=2;
            }
        },5000)
        $('.explore-newsongs-list').onmousemove = function() {
            clearInterval(IntervalSlideNewSong);
        }
        $('.explore-newsongs-list').onmouseleave = function() {
            var IntervalSlide = setInterval(function() {
                newsongslist.style.transform = `translateX(calc(${(i+1)*-34}%))`
                i=i+3;
                if(i>indexsongslist.length)
                {
                    newsongslist.style.transform = `translateX(0)`
                    i=2;
                }
            },5000)
            $('.explore-newsongs-list').onmousemove = function() {
                clearInterval(IntervalSlide);
            }
        }
    },
    handleEvent:function() {
        $$('.gallery-item')[0].classList.add('select')
        $$('.gallery-item')[1].classList.add('next')
        $$('.gallery-item')[2].classList.add('last')
        $$('.gallery-item')[3].classList.add('add')
        $$('.gallery-item')[4].classList.add('first')
        $$('.gallery-item')[5].classList.add('previous')
        var timeshow = setInterval(function() {   
            previous = $('.gallery-item.previous')
            first = $('.gallery-item.first')
            add = $('.gallery-item.add')
            last = $('.gallery-item.last')
            next = $('.gallery-item.next')
            select = $('.gallery-item.select')
            if(previous!=null)
            {
                previous.classList.add('first')
                previous.classList.remove('previous')
            }
            if(first!=null)
            {
                first.classList.add('add')
                first.classList.remove('first')
            }
            if(add!=null)
            {
                add.classList.add('last')
                add.classList.remove('add')
            }
            if(last!=null)
            {
                last.classList.add('next')
                last.classList.remove('last')
            }
            if(next!=null)
            {
                next.classList.add('select')
                next.classList.remove('next')
            }
            if(select!=null)
            {
                select.classList.add('previous')
                select.classList.remove('select')
            }
        },4000)
        listgallery.onmousemove = function() {
            $(".gallery-item-icon.icon-next").classList.add("show");
            $(".gallery-item-icon.icon-prev").classList.add("show");
            clearInterval(timeshow)
        }
        listgallery.onmouseleave = function() {
            $(".gallery-item-icon.icon-next").classList.remove("show");
            $(".gallery-item-icon.icon-prev").classList.remove("show");
            var timeshow =  setInterval(function() {   
                previous = $('.gallery-item.previous')
                first = $('.gallery-item.first')
                add = $('.gallery-item.add')
                last = $('.gallery-item.last')
                next = $('.gallery-item.next')
                select = $('.gallery-item.select')
                if(previous!=null)
                {
                    previous.classList.add('first')
                    previous.classList.remove('previous')
                }
                if(first!=null)
                {
                    first.classList.add('add')
                    first.classList.remove('first')
                }
                if(add!=null)
                {
                    add.classList.add('last')
                    add.classList.remove('add')
                }
                if(last!=null)
                {
                    last.classList.add('next')
                    last.classList.remove('last')
                }
                if(next!=null)
                {
                    next.classList.add('select')
                    next.classList.remove('next')
                }
                if(select!=null)
                {
                    select.classList.add('previous')
                    select.classList.remove('select')
                }
            },4000)
            listgallery.onmousemove = function() {
                clearInterval(timeshow)
            }
        }
        iconnext.onclick = function() {
            exlpore.slideshownext()
        }
        iconprev.onclick = function() {
            exlpore.slideshowprev()
        }
        exlporeTags.forEach(function(exlporeTag,index) {
            exlporeTag.onclick = function() {
                $(".newdeloy-tag.active").classList.remove('active')
                this.classList.add("active");
                $(".explore-newdeloys.active").classList.remove("active");
                exlporeConTentTags[index].classList.add("active");
            }
        })
        nextRadio.onclick = function() {
            $(".radio-list").style.transform =`translateX(-${$$('.radio-item').length*$('.radio-item').offsetWidth-$('.radio-item').offsetWidth*7}px)`
            nextRadio.classList.remove("active")
            prevRadio.classList.add("active")
            prevRadio.onclick = function() {
                $(".radio-list").style.transform =`translateX(0px)`
                nextRadio.classList.add("active")
                prevRadio.classList.remove("active")
            }
            setTimeout(function() {
                $(".radio-list").style.transform =`translateX(0px)`
                nextRadio.classList.add("active")
                prevRadio.classList.remove("active")
            },3000)
        }
        const onclickSongExplore = $$('.explore-newdeloy-item')
        onclickSongExplore.forEach(function(e,index) {
            e.onclick = function() {
                exlpore.currentIndexSong = index;
                tagplaysong.style.bottom = 0;
                buttonPause.classList.add("active")
                buttonPlay.classList.remove("active");
                audio.load()
                personal.playsong(exlpore)
                personal.displayPlayingsong(personal.currentIndexSong)
            }
        })
        $$('#explore-event .explore-title p .icon').forEach(function(icon,index) {
            icon.onclick = function() {
                this.classList.remove("active")
                if(index==1&&($$('.event-item').length-exlpore.indexEvent)>3)
                {
                    $("#explore-event p .icon-prev").classList.add("active")
                    $("#explore-event p .icon-next").classList.add("active")
                    exlpore.indexEvent++;
                    $('.explore-event-list').style.transform= `translateX(calc(${-exlpore.indexEvent*34}%))`
                }
                if(index==0&&(exlpore.indexEvent)>0)
                {
                    $("#explore-event p .icon-prev").classList.add("active")
                    $("#explore-event p .icon-next").classList.add("active")
                    exlpore.indexEvent--;
                    $('.explore-event-list').style.transform= `translateX(calc(${-exlpore.indexEvent*34}%))`
                }
                if(($$('.event-item').length-3) == exlpore.indexEvent) {
                    $("#explore-event p .icon-next").classList.remove("active")
                }
                if(exlpore.indexEvent==0) {
                    $("#explore-event p .icon-prev").classList.remove("active")
                }
            }
        })
    },
    start:function() {
        personal.defineproperties(exlpore)
        this.renderSlide()
        this.renderListRecent()
        this.renderYouWantHear()
        this.renderDeloyNewAll()
        this.renderDeloyNewVietNam()
        this.renderDeloyNewNuocNgoai()
        this.renderpowerMidWeek()
        this.renderfamousSingers()
        this.renderonlyfans()
        this.renderFavoriteArtists()
        this.renderradios()
        this.slidenewsongs()
        this.renderimageNewSongs()
        this.renderlistimageCompany()
        this.handleEvent()
    }
}
exlpore.start()
personal.start()