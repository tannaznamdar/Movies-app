import { createRouter, createWebHistory } from 'vue-router'

import MoviesGenre from "@/views/MoviesGenrePage.vue";
import CountryMovies from "@/views/CountryMoviesPage.vue";
import CountrySeries from "@/views/CountrySeriesPage.vue";
import Animation from "@/views/AnimationPage.vue";
import NewMovie from "@/views/NewMoviePage.vue";
import UpdateSeries from "@/views/UpdateSeriesPage.vue";
import PersianDub from "@/views/PersianDubPage.vue";
import Other from "@/views/OtherPage.vue";
import Job from "@/views/JobPage.vue";
import ContactUs from "@/views/ContactUsPage.vue";
import Home from "@/views/HomePage.vue";
import TitlePage from "@/views/TitlePage.vue";
import Login from "@/views/LoginPage.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: 'homePageRoute', component: Home },
    { path: "/title/:slug", name: 'titlePageRoute', component: TitlePage },
    { path: "/genre/:genre", name: 'moviesGenrePageRoute', component: MoviesGenre },
    { path: "/movie/:country", name: 'countryMoviePageRoute', component: CountryMovies },
    { path: "/series/:country", name: 'countrySeriesPageRoute', component: CountrySeries },
    { path: "/new-movie", name: "newMoviePageRoute", component: NewMovie },
    { path: "/update-series", name: "updateSeriesPageRoute", component: UpdateSeries },
    { path: "/animation", name: "animationPageRoute", component: Animation },
    { path: "/persian-dub", name: "persianDubPageRoute", component: PersianDub },
    { path: "/other/:content", name: 'otherPageRoute', component: Other },
    { path: "/job", name: "jobPageRoute", component: Job },
    { path: "/contact-us", name: "contactUsPageRoute", component: ContactUs },
    { path: "/login", name: "loginPageRoute", component: Login },
    { path: "/:catchAll(.*)", redirect: '/' }
  ]
})

export default router
