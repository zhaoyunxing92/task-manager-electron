/**
 * @author :  sunny
 * @date : 2017/9/29 16:44
 * @description :
 */
const Login = () => import(/* webpackChunkName: "task-login" */ './login.vue')

export const name = {
  path: '/auth',
  name: 'task-welcome',
  component: {template: '<router-view></router-view>'},
  redirect: '/auth/login',
  meta: {title: '登陆'},
  children: [
    {
      path: '/auth/login',
      name: 'task-login',
      component: Login,
      meta: {title: '登陆'}
    },
  ]
}
