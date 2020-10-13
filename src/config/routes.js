import { lazy } from "react";

export default {

  Home : {
    path: '/',
    exact : true,
    component : lazy( () => import('../page/Home'))
  },
  
  About : {
    path: '/about',
    exact : true,
    component : lazy( () => import('../page/About'))
  },
  
  Contact : {
    path: '/contact',
    exact : true,
    component : lazy( () => import('../page/Contact'))
  },
  Story : {
    path: '/story/:storyId',
    exact : true,
    component : lazy( () => import('../page/Story'))
  }
  

}