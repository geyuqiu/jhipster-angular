import Vue from 'vue';
import Component from 'vue-class-component';
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
]);
import Router from 'vue-router';
import { Authority } from '@/shared/security/authority';
import Home from '../core/home/home.vue';
import Error from '../core/error/error.vue';
import JhiConfigurationComponent from '../admin/configuration/configuration.vue';
import JhiDocsComponent from '../admin/docs/docs.vue';
import JhiHealthComponent from '../admin/health/health.vue';
import JhiLogsComponent from '../admin/logs/logs.vue';
import JhiAuditsComponent from '../admin/audits/audits.vue';
import JhiMetricsComponent from '../admin/metrics/metrics.vue';
import JhiTrackerComponent from '../admin/tracker/tracker.vue';
/* tslint:disable */

import Student from '../entities/student/student.vue';
import StudentUpdate from '../entities/student/student-update.vue';
import StudentDetails from '../entities/student/student-details.vue';
import University from '../entities/university/university.vue';
import UniversityUpdate from '../entities/university/university-update.vue';
import UniversityDetails from '../entities/university/university-details.vue';
// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

Vue.use(Router);

// prettier-ignore
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/forbidden',
      name: 'Forbidden',
      component: Error,
      meta: { error403: true }
    },
    {
      path: '/not-found',
      name: 'NotFound',
      component: Error,
      meta: { error404: true }
    },
    {
      path: '/admin/docs',
      name: 'JhiDocsComponent',
      component: JhiDocsComponent,
      meta: { authorities: [Authority.ADMIN] }
    },
    {
      path: '/admin/audits',
      name: 'JhiAuditsComponent',
      component: JhiAuditsComponent,
      meta: { authorities: [Authority.ADMIN] }
    },
    {
      path: '/admin/jhi-health',
      name: 'JhiHealthComponent',
      component: JhiHealthComponent,
      meta: { authorities: [Authority.ADMIN] }
    },
    {
      path: '/admin/logs',
      name: 'JhiLogsComponent',
      component: JhiLogsComponent,
      meta: { authorities: [Authority.ADMIN] }
    },
    {
      path: '/admin/jhi-metrics',
      name: 'JhiMetricsComponent',
      component: JhiMetricsComponent,
      meta: { authorities: [Authority.ADMIN] }
    },
    {
      path: '/admin/jhi-configuration',
      name: 'JhiConfigurationComponent',
      component: JhiConfigurationComponent,
      meta: { authorities: [Authority.ADMIN] }
    }
,
    {
      path: '/admin/jhi-tracker',
      name: 'JhiTrackerComponent',
      component: JhiTrackerComponent,
      meta: { authorities: [Authority.ADMIN] }
    }
    ,
    {
      path: '/student',
      name: 'Student',
      component: Student,
      meta: { authorities: [Authority.USER] }
    },
    {
      path: '/student/new',
      name: 'StudentCreate',
      component: StudentUpdate,
      meta: { authorities: [Authority.USER] }
    },
    {
      path: '/student/:studentId/edit',
      name: 'StudentEdit',
      component: StudentUpdate,
      meta: { authorities: [Authority.USER] }
    },
    {
      path: '/student/:studentId/view',
      name: 'StudentView',
      component: StudentDetails,
      meta: { authorities: [Authority.USER] }
    }
    ,
    {
      path: '/university',
      name: 'University',
      component: University,
      meta: { authorities: [Authority.USER] }
    },
    {
      path: '/university/new',
      name: 'UniversityCreate',
      component: UniversityUpdate,
      meta: { authorities: [Authority.USER] }
    },
    {
      path: '/university/:universityId/edit',
      name: 'UniversityEdit',
      component: UniversityUpdate,
      meta: { authorities: [Authority.USER] }
    },
    {
      path: '/university/:universityId/view',
      name: 'UniversityView',
      component: UniversityDetails,
      meta: { authorities: [Authority.USER] }
    }
    // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
  ]
});
