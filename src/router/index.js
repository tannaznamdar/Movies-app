import { createRouter, createWebHistory } from 'vue-router'

import MoviesGenre from "@/views/MoviesGenrePage.vue";
import CountryMovies from "@/views/CountryMoviesPage.vue";
import CountrySeries from "@/views/CountrySeriesPage.vue";
import Animation from "@/views/AnimationPage.vue";
import NewAnimation from "@/views/NewAnimationPage.vue";
import NewMovies from "@/views/NewMoviePage.vue";
import FreeMovies from "@/views/FreeMoviespage.vue";
import UpdateSeries from "@/views/UpdateSeriesPage.vue";
import PersianDub from "@/views/PersianDubPage.vue";
import Collection from "@/views/CollectionPage.vue";
import ComingSoon from "@/views/ComingSoonPage.vue";
import OscarMovies from "@/views/OscarMoviesPage.vue";
import TopMovie from "@/views/TopMoviePage.vue";
import Job from "@/views/JobPage.vue";
import ContactUs from "@/views/ContactUsPage.vue";
import Home from "@/views/HomePage.vue";
import TitlePage from "@/views/TitlePage.vue";
import Login from "@/views/LoginPage.vue";
import Dashboard from "@/views/dashboard/Dashboard.vue";
import Lists from "@/views/dashboard/ListsPage.vue";
import EditList from "@/views/dashboard/EditListPage.vue";
import Subscription from "@/views/dashboard/SubscriptionPage.vue";
import Tickets from "@/views/dashboard/TicketsPage.vue";
import Faq from "@/views/dashboard/FaqPage.vue";
import Tos from "@/views/dashboard/TosPage.vue";
import Wallet from "@/views/dashboard/WalletPage.vue";
import ForgotPassword from "@/views/ForgotPasswordPage.vue";
import Membership from "@/views/MembershipPage.vue";
import Director from "@/views/DirectorPage.vue";
import Actors from "@/views/ActorsPage.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: 'homePageRoute', component: Home },
    { path: "/title/:slug", name: 'titlePageRoute', component: TitlePage },
    { path: "/genre/:genre", name: 'moviesGenrePageRoute', component: MoviesGenre },
    { path: "/movie/:country", name: 'countryMoviePageRoute', component: CountryMovies },
    { path: "/series/:country", name: 'countrySeriesPageRoute', component: CountrySeries },
    { path: "/new-movies", name: "newMoviePageRoute", component: NewMovies },
    { path: "/free-movies", name: "freeMoviespageRoute", component: FreeMovies },
    { path: "/update-series", name: "updateSeriesPageRoute", component: UpdateSeries },
    { path: "/animation", name: "animationPageRoute", component: Animation },
    { path: "/new-animation", name: "newAnimationPageRoute", component: NewAnimation },
    { path: "/persian-dub/:slug?", name: "persianDubPageRoute", component: PersianDub },
    { path: "/collection", name: 'collectionPageRoute', component: Collection },
    { path: "/coming-soon", name: 'comingSoonPageRoute', component: ComingSoon },
    { path: "/top-movie", name: 'topMoviePageRoute', component: TopMovie },
    { path: "/oscar-movies", name: 'oscarMoviesPageRoute', component: OscarMovies },
    { path: "/job", name: "jobPageRoute", component: Job },
    { path: "/contact-us", name: "contactUsPageRoute", component: ContactUs },
    { path: "/login", name: "loginPageRoute", component: Login },
    { path: "/dashboard", name: "dashboardPageRoute", component: Dashboard },
    { path: "/dashboard/subscription", name: "subscriptionPageRoute", component: Subscription },
    { path: "/tos", name: "tosPageRoute", component: Tos },
    { path: "/dashboard/my-wallet", name: "walletPageRoute", component: Wallet },
    { path: "/dashboard/tickets", name: "ticketsPageRoute", component: Tickets },
    { path: "/dashboard/faq", name: "faqPageRoute", component: Faq },
    { path: "/dashboard/lists", name: "listsPageRoute", component: Lists },
    { path: "/dashboard/lists/edit-list", name: "editListPageRoute", component: EditList },
    { path: "/forgot-password", name: "forgotPasswordPageRoute", component: ForgotPassword },
    { path: "/membership", name: "membershipPageRoute", component: Membership },
    { path: "/director/:director?", name: "directorPageRoute", component: Director },
    { path: "/actors/:actor?", name: "actorsPageRoute", component: Actors },
    { path: "/:catchAll(.*)", redirect: '/' }
  ],

  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
