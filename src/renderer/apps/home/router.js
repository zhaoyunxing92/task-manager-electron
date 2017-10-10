/**
 * @author :  sunny
 * @date : 2017/9/29 16:44
 * @description :
 */
const index = () => import(/* webpackChunkName: "group-foo" */ './welcome.vue')

export const name = {
  path: '/welcome',
  name: 'task-welcome',
  component: {template: '<router-view></router-view>'},
  redirect: '/welcome/index',
  meta: {title: '首页'},
  children: [
    {
      path: '/welcome/index',
      name: 'task-welcome-index',
      component: index,
      meta: {title: '首页'}
    },
  ]
}
