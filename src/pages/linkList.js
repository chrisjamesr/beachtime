import About from './About.svelte'
import Shop from './Shop.svelte'
import Contact from './Contact.svelte'


export default [
  {
    path: "/",
    name: "about",
    component: About

  },
  {
    path: "shop",
    name: "shop",
    component: Shop
  },
  {
    path: "contact",
    name: "contact",
    component: Contact
  },
];