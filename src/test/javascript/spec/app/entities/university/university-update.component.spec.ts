/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';
import Router from 'vue-router';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import UniversityUpdateComponent from '@/entities/university/university-update.vue';
import UniversityClass from '@/entities/university/university-update.component';
import UniversityService from '@/entities/university/university.service';

import StudentService from '@/entities/student/student.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const store = config.initVueXStore(localVue);
const router = new Router();
localVue.use(Router);
localVue.component('font-awesome-icon', {});

describe('Component Tests', () => {
  describe('University Management Update Component', () => {
    let wrapper: Wrapper<UniversityClass>;
    let comp: UniversityClass;
    let universityServiceStub: SinonStubbedInstance<UniversityService>;

    beforeEach(() => {
      universityServiceStub = sinon.createStubInstance<UniversityService>(UniversityService);

      wrapper = shallowMount<UniversityClass>(UniversityUpdateComponent, {
        store,
        localVue,
        router,
        provide: {
          alertService: () => new AlertService(store),
          universityService: () => universityServiceStub,

          studentService: () => new StudentService()
        }
      });
      comp = wrapper.vm;
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const entity = { id: 123 };
        comp.university = entity;
        universityServiceStub.update.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(universityServiceStub.update.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        comp.university = entity;
        universityServiceStub.create.resolves(entity);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(universityServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });
  });
});
