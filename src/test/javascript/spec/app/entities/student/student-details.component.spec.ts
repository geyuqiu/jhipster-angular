/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import StudentDetailComponent from '@/entities/student/student-details.vue';
import StudentClass from '@/entities/student/student-details.component';
import StudentService from '@/entities/student/student.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('Student Management Detail Component', () => {
    let wrapper: Wrapper<StudentClass>;
    let comp: StudentClass;
    let studentServiceStub: SinonStubbedInstance<StudentService>;

    beforeEach(() => {
      studentServiceStub = sinon.createStubInstance<StudentService>(StudentService);

      wrapper = shallowMount<StudentClass>(StudentDetailComponent, {
        store,
        localVue,
        provide: { studentService: () => studentServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundStudent = { id: 123 };
        studentServiceStub.find.resolves(foundStudent);

        // WHEN
        comp.retrieveStudent(123);
        await comp.$nextTick();

        // THEN
        expect(comp.student).toBe(foundStudent);
      });
    });
  });
});
