const navbars = document.querySelector('.parent-line')
const bars = document.querySelectorAll('.line')
const lists = document.querySelector('.lists')

navbars.addEventListener('click' , function(){
    bars.forEach(function(item){
    item.classList.toggle("active")

    })
    lists.classList.toggle('open-list')
})

var filmInfo = [
    {
        aboutFilm: "Two former special forces soldiers must take a group of civilians along Baghdad's (death road) to the safe Green Zone", 
        nameFilm: "hidden strike (2023)" , 
        director: "scot wa" , 
         income: "none" , 
         actors:" chaki chan  , john cina"
    },
    {
        aboutFilm:" A family with friends and their two children are enjoying their weekend but suspect something supernatural and the situation suddenly changes when the children return to the woods at night" ,
        nameFilm: "There is some thing wrong(2023)" , 
        director: "rocksan bejamin" , 
         income: "none" , 
         actors:" alisha winright , amanda kroo"
    },
    {
        aboutFilm:" A documentary on how Lionel Messi succeeded in promoting the World Cup",
        nameFilm: "lionel messi (2023)" , 
        director: "asive kapadia" , 
         income: "none" , 
         actors:" lionel messi"
    },
    {
        aboutFilm:"When a god of war comes back to life in a young girl's body، street orphan Seya discovers that she is dedicated to protecting her and saving the world، but only if she can face her past and become a towering knight" ,
        nameFilm: "knights of the zodiac(2023)" , 
        director: "tomek baginscy" , 
         income: "none" , 
         actors:" famka yansn , madisn aismen"
    },
    {
        aboutFilm:"Peter Quill assembles his team to defend the universe and one of their own crews- a task that could mean the end of the Guardians of the Galaxy if they fail" ,
        nameFilm: "guardians of the galaxy(2023)" , 
        director: "jamis gun" , 
         income: "none" , 
         actors:"cris prad , bradly kupar"
    },
    {
        aboutFilm:"A new T-virus emerges in the city، and as a result of the investigation، all the victims have visited Alcatraz Island، where Chris and his team are on their way to the island، where new dangers await them" ,
        nameFilm: " resident Evil : Death island(2023)" ,
        director: "ejero hausmy" , 
         income: "none" , 
         actors:"stivany marcilo , mathyo mersar"
    },
    {
        aboutFilm:"America is suffering from chaos and the Company of Willand has built a vast prison called Spraul، where more than 400 prisoners are left to die" ,
        nameFilm: "Death race  (2023)" ,
        director: "don mikle pon" , 
         income: "none" , 
         actors:"loosy ardn , nikolas aron"
    },
    {
        aboutFilm:"A special forces commander must carry out a dangerous act to save a young child and take him to a safe place away from Taliban and terrorist fighters in Afghanistan" ,
        nameFilm: " warhorse one(2023)" ,
        director: "wilyam kofman" , 
         income: "none" , 
         actors:"johny strong , asina dernar"
    },
];

alert("welcome to our webside");

const main_image = document.querySelectorAll('.main-image')
const access_film = document.querySelector('.access-film')


const filmName = document.querySelector('.film-name')
const aboutFilm = document.querySelector('.about-film')
const income = document.querySelector('.income')
const director = document.querySelector('.director')
const actor = document.querySelector('.actor')
const video = document.querySelector('video')
const access_image = document.querySelector('.e')
main_image.forEach(function(item){
    item.addEventListener('click' , function(){

        access_film.style.transform = `translateX(0px)`
        const dataVideo = item.getAttribute('data-vedio')
        const dataNum = item.getAttribute('data-num')
        filmName.innerHTML = filmInfo[dataNum].nameFilm
        aboutFilm.innerHTML  = filmInfo[dataNum].aboutFilm
        income.innerHTML = "none"
        director.innerHTML = filmInfo[dataNum].director
        actor.innerHTML =  filmInfo[dataNum].actors
        access_image.src = item.src
        window.scrollTo(0 , 0)
        video.src =   item.getAttribute('data-vedio') 
      document.querySelector('main').classList.toggle('none')
        
    })
})


// Back to the previous page Button

document.querySelector('.btn-back-prev').addEventListener('click' , function(){
    access_film.style.transform = `translateX(-2000px)`
    document.querySelector('main').classList.remove('none')
})

window.addEventListener('scroll' , function(){
   if(this.window.pageYOffset > 150){
    document.querySelector(".nav-container").classList.add("image-1")
    this.document.querySelector('.scrool-btn').classList.add("animation")
   }else{
    document.querySelector('.scrool-btn').classList.remove("animation")
    document.querySelector(".nav-container").classList.remove("image-1")
}  
})

document.querySelector('.filma').addEventListener('click' , function(){
    bars.forEach(function(item){
        item.classList.toggle("active")
        })
        lists.classList.toggle('open-list')
})

document.querySelector(".About").addEventListener('click' , function(){
    bars.forEach(function(item){
        item.classList.toggle("active")
        })
        lists.classList.toggle('open-list')
    
   document.querySelector(".about-list").classList.add("open-about-list")
})
document.querySelector(".fa-xmark").addEventListener('click' , function(){

   document.querySelector(".about-list").classList.remove("open-about-list")
})






