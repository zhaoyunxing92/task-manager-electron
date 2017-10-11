/**
 * @author :  sunny
 * @date : 2017/9/29 16:44
 * @description :
 */
const Welcome = () => import(/* webpackChunkName: "group-foo" */ './welcome')

const OrgDetails = () => import(/* webpackChunkName: "org" */ '../org/orgDetails')
const createOrg = () => import(/* webpackChunkName: "org" */ '../org/createOrg')

const Project = () => import(/* webpackChunkName: "project" */'../project/project')
const ProjectDetails = () => import(/* webpackChunkName: "project" */'../project/projectDetails')

export const name = {
  path: '/welcome',
  name: 'task-welcome',
  component: Welcome,
  redirect: '/orgdetails',
  meta: {title: ''},
  children: [
    {
      path: '/orgdetails',
      name: 'task-org',
      component: OrgDetails,
      meta: {title: '组织信息'},
    },
    {
      path: '/orgList',
      name: 'task-org',
      component: createOrg,
      meta: {title: '组织'},
    },
    {
      path: '/project',
      name: 'task-projects',
      component: Project,
      meta: {title: '项目'},
    },
    {
      path: '/project/:pro_id',
      name: 'task-projects-details',
      component: ProjectDetails,
      meta: {title: '项目详情'},
    },
  ]
}
