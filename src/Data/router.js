import Home from '../Pages/Intro.svelte';
import Blog from '../Pages/Blog.svelte';
import Talks from '../Pages/Talks.svelte';
import Work from '../Pages/Work.svelte';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/talks',
    name: 'Talks',
    component: Talks,
  },
  {
    path: '/work',
    name: 'Work',
    component: Work,
  },
]