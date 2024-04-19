import { createRouter, createWebHistory } from 'vue-router'

import MoviesGenre from "@/views/MoviesGenrePage.vue";
import CountryMovies from "@/views/CountryMoviesPage.vue";
import CountrySeries from "@/views/CountrySeriesPage.vue";
import Animation from "@/views/AnimationPage.vue";
import PersianDub from "@/views/PersianDubPage.vue";
import Category from "@/views/CategoryPage.vue";
import Job from "@/views/JobPage.vue";
import ContactUs from "@/views/ContactUsPage.vue";
import Login from "@/views/LoginPage.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {path: "/genre/:genre",name: 'moviesGenrePageRoute',component: MoviesGenre},
    {path: "/movie/:country",name: 'countryMoviePageRoute',component: CountryMovies},
    {path: "/Series/:country",name: 'countrySeriesPageRoute',component: CountrySeries},
    {path:"/animation", name:"animationPageRoute" , component: Animation},
    {path:"/persiandub", name:"PersianDubPageRoute" , component: PersianDub},
    {path: "/category/:content",name: 'categoryPageRoute',component: Category},
    {path:"/job", name:"JobPageRoute" , component: Job},
    {path:"/contactus", name:"contactUsPageRoute" , component: ContactUs},
    {path:"/login", name:"loginPageRoute" , component: Login},
  ]
})

export default router
