import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
window.Pusher = require('pusher-js');



// Vue.use(VueEcho, {
//   broadcaster: 'pusher',
//   httpHost:'127.0.0.1:8080',
//   wsHost:'127.0.0.1:8080',
//   key: '2237746a80eba78b502c',
//   cluster: 'us2',
// });


Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });

  return Router;
}
