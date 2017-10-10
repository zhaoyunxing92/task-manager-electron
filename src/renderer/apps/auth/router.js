/**
 * @author :  sunny
 * @date : 2017/9/29 16:44
 * @description :
 */
const Login = () => import(/* webpackChunkName: "auth" */ './login.vue')
const Register = () => import(/* webpackChunkName: "auth" */ './register.vue')
const RestPwd = () => import(/*webpackChunkName: "auth"*/'./resetPwd.vue')

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
    {
      path: '/auth/reg',
      name: 'task-reg',
      component: Register,
      meta: {title: '注册账号'}
    },
    {
      path: '/auth/resetpwd',
      name: 'task-resetpwd',
      component: RestPwd,
      meta: {title: '修改密码'}
    },
  ]
}
