var allSongs = document.querySelectorAll('audio')
var playbtn = document.querySelector('#playbtn');
var container = document.querySelector(".playlist-content")
var finalDuration = document.querySelector('#finalDuration')
var singerName = document.querySelector('#singerName')
var playingSongName = document.querySelector('#playingSongName')
var songImage = document.querySelector("#songImage")
var content = document.querySelector('#content')


var singerNames = ["Ed Sheeran","Ed Sheeran","Nikita Gandhi","Honey Singh","Billie Ellish","Kumar Sanu","Ed Sheeran"]
var songNames = []
var urls = ["https://upload.wikimedia.org/wikipedia/en/2/2e/Ed_Sheeran_-_Bad_Habits_2.png",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Ed_Sheeran_-_Beautiful_People.png",
    "https://a10.gaanacdn.com/gn_img/song/ZaP374RWDy/P37N87ZxKD/size_xxl_1602940505.webp",
    "https://a10.gaanacdn.com/gn_img/song/0wrb4qNKLg/rb4Ny6yX3L/size_l_1603348858.webp",
    "https://t2.genius.com/unsafe/275x0/https%3A%2F%2Fimages.genius.com%2F340ad5b2b1163aa2333a8efc0815b84f.1000x1000x1.jpg",
    "https://www.pinkvilla.com/imageresize/sv_new_song_0.jpg?width=752&format=webp&t=pvorg",
    "https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png"]


    var current_playing_song = 0;
temp = ``
var flag = false;


function showAllSongs(){
    allSongs.forEach(function(val,index){
        var imgsrc = val.getAttribute("src")
        songNames.push(imgsrc.substr(8,(imgsrc.length)-12))
        temp+= `<div class=playlist-item>
        <div class="left-content">
            <!-- Index -->
            <div style="margin-right:4px;">
                ${index+1}
            </div>
            <div class="coverer"  >
               <!-- --shows play button on hover ------ -->
            <img src=${urls[index]}>
            </div>
            <!---- Name and Singer of the song--- -->
            <div>
                <div>
                ${imgsrc.substr(8,(imgsrc.length)-12)}
                </div>
                <p>
                   ${singerNames[index]}
                </p>
            </div>
        </div>
        <!-- Like button -->
        <div class="right-content">
            <i  id="${index}" class="ri-play-mini-line"></i>
        </div>
        </div>`
    })
    container.innerHTML = temp
}

function playsongs(){
    container.addEventListener("click",function(param){
        var current_song =  Number(param.target.id)
        console.log(current_song)
        console.log(current_song)
        stop(current_playing_song)
        start(current_song)
        current_playing_song = current_song
        playbtn.innerHTML = '<i class="ri-pause-line"></i>';
        songImage.src = urls[ current_playing_song]
        flag = true
    })
    }



function start(IndexOfSong){
    var songDuration = allSongs[IndexOfSong].duration
    allSongs[IndexOfSong].play()
    flag = true
    finalDuration.textContent =( songDuration/60).toFixed(2)
    singerName.innerHTML = singerNames[IndexOfSong]
    playingSongName.innerHTML = songNames[IndexOfSong]
    // songImage.src = urls[IndexOfSong]
}
    
function stop(IndexOfSong){
    allSongs[IndexOfSong].pause();
    allSongs[IndexOfSong].currentTime = 0;
}


playbtn.addEventListener('click',function(){
    if(flag){
        playbtn.innerHTML='<i class="ri-play-line"></i>';
        allSongs[current_playing_song].pause()
        flag = false
    }
    else{
        playbtn.innerHTML = '<i class="ri-pause-line"></i>';
        allSongs[current_playing_song].play()
        flag = true
    }
})




showAllSongs()
playsongs()