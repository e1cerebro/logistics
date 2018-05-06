import Vue from "vue";
import Router from "vue-router";
import Why from "@/components/Why";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Quote from "@/components/Quote";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "Why",
            component: Why
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        },{
            path: "/quote",
            name: "quote",
            component: Quote
        }
    ]
});