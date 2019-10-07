import Home from '../Pages/Intro.svelte';
import Writing from '../Pages/Writing.svelte';
import Speaking from '../Pages/Speaking.svelte';
import Work from '../Pages/Work.svelte';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/writing',
    name: 'Writing',
    component: Writing,
  },
  {
    path: '/speaking',
    name: 'Speaking',
    component: Speaking,
  },
  {
    path: '/work',
    name: 'Work',
    component: Work,
  }
]