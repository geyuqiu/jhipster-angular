/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import * as config from '@/shared/config/config';
import UniversityDetailComponent from '@/entities/university/university-details.vue';
import UniversityClass from '@/entities/university/university-details.component';
import UniversityService from '@/entities/university/university.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

describe('Component Tests', () => {
  describe('University Management Detail Component', () => {
    let wrapper: Wrapper<UniversityClass>;
    let comp: UniversityClass;
    let universityServiceStub: SinonStubbedInstance<UniversityService>;

    beforeEach(() => {
      universityServiceStub = sinon.createStubInstance<UniversityService>(UniversityService);

      wrapper = shallowMount<UniversityClass>(UniversityDetailComponent, {
        store,
        localVue,
        provide: { universityService: () => universityServiceStub }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        const foundUniversity = { id: 123 };
        universityServiceStub.find.resolves(foundUniversity);

        // WHEN
        comp.retrieveUniversity(123);
        await comp.$nextTick();

        // THEN
        expect(comp.university).toBe(foundUniversity);
      });
    });
  });
});
