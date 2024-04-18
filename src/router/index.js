import { createRouter, createWebHistory } from 'vue-router'

import Login from "@/views/LoginPage.vue";
import SingUp from "@/views/SingUpPage.vue";
import Genre from "@/views/GenrePage.vue";
import CountryMovies from "@/views/CountryMoviesPage.vue";
import ActionMovie from "@/views/ActionMoviePage.vue";
import RomanceMovie from "@/views/RomanceMoviePage.vue";
import FamilyMovie from "@/views/FamilyMoviePage.vue";
import IranianMovie from "@/views/IranianMoviePage.vue";
import TurkiyeMovie from "@/views/TurkiyeMoviePage.vue";
import KoreanMovie from "@/views/KoreanMoviePage.vue";
import Movies from "@/views/MoviesPage.vue";
import Series from "@/views/SeriesPage.vue";
import Animation from "@/views/AnimationPage.vue";
import PersianDub from "@/views/PersianDubPage.vue";
import Job from "@/views/JobPage.vue";
import ContactUs from "@/views/ContactUsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:"/login", name:"loginPageRoute" , component: Login},
    {path:"/singUp", name:"singUpPageRoute" , component: SingUp},
    {path:"/genre", name:"genrePageRoute" , component: Genre},
  //  {path: "/country/{country}",name: 'countryMovie',component: CountryMovies},
    {path:"/actionMovie", name:"actionMoviePageRoute" , component: ActionMovie},
    {path:"/romanceMovie", name:"romanceMoviePageRoute" , component: RomanceMovie},
    {path:"/familyMovie", name:"familyMoviePageRoute" , component: FamilyMovie},
    {path:"/iranianMovie", name:"iranianMoviePageRoute" , component: IranianMovie},
    {path:"/turkiyeMovie", name:"turkiyeMoviePageRoute" , component: TurkiyeMovie},
    {path:"/KoreanMovie", name:"koreanMoviePageRoute" , component: KoreanMovie},
    {path:"/movies", name:"moviesPageRoute" , component: Movies},
    {path:"/series", name:"seriesPageRoute" , component: Series},
    {path:"/animation", name:"animationPageRoute" , component: Animation},
    {path:"/persiandub", name:"PersianDubPageRoute" , component: PersianDub},
    {path:"/job", name:"JobPageRoute" , component: Job},
    {path:"/contactus", name:"contactUsPageRoute" , component: ContactUs},
  ]
})

export default router
