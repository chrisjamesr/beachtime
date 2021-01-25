import Home from './Home.svelte'
import About from './About.svelte'
import Contact from './Contact.svelte'
import Gallery from './Gallery.svelte'

export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "about",
    name: "about",
    component: About

  },
  {
    path: "gallery",
    name: "gallery",
    component: Gallery
  },
  {
    path: "contact",
    name: "contact",
    component: Contact
  },
];