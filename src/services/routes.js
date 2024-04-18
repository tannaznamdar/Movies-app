import Login from "./../pages/LoginPage.vue"
import SingUp from "./../pages/SingUpPage.vue"
import Genre from "./../pages/GenrePage.vue"
import ActionMovie from "./../pages/ActionMoviePage.vue"
import RomanceMovie from "./../pages/RomanceMoviePage.vue"
import FamilyMovie from "./../pages/FamilyMoviePage.vue"
import IranianMovie from "./../pages/IranianMoviePage.vue"
import AmericaMovie from "./../pages/AmericaMoviePage.vue"
import TurkiyeMovie from "./../pages/TurkiyeMoviePage.vue"
import KoreanMovie from "./../pages/KoreanMoviePage.vue"
import Movies from "./../pages/MoviesPage.vue"
import Series from "./../pages/SeriesPage.vue"
import Animation from "./../pages/AnimationPage.vue"
import PersianDub from "./../pages/PersianDubPage.vue"
import Job from "./../pages/JobPage.vue"
import ContactUs from "./../pages/ContactUsPage.vue"


export default[
    {path:"/login", name:"loginPageRoute" , component: Login},
    {path:"/singUp", name:"singUpPageRoute" , component: SingUp},
    {path:"/genre", name:"genrePageRoute" , component: Genre},
    {path:"/actionMovie", name:"actionMoviePageRoute" , component: ActionMovie},
    {path:"/romanceMovie", name:"romanceMoviePageRoute" , component: RomanceMovie},
    {path:"/familyMovie", name:"familyMoviePageRoute" , component: FamilyMovie},
    {path:"/iranianMovie", name:"iranianMoviePageRoute" , component: IranianMovie},
    {path:"/turkiyeMovie", name:"turkiyeMoviePageRoute" , component: TurkiyeMovie},
    {path:"/americaMovie", name:"americaMoviePageRoute" , component: AmericaMovie},
    {path:"/KoreanMovie", name:"koreanMoviePageRoute" , component: KoreanMovie},
    {path:"/movies", name:"moviesPageRoute" , component: Movies},
    {path:"/series", name:"seriesPageRoute" , component: Series},
    {path:"/animation", name:"animationPageRoute" , component: Animation},
    {path:"/persiandub", name:"PersianDubPageRoute" , component: PersianDub},
    {path:"/job", name:"JobPageRoute" , component: Job},
    {path:"/contactus", name:"contactUsPageRoute" , component: ContactUs},
    
]