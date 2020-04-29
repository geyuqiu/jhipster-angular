/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import sinon, { SinonStubbedInstance } from 'sinon';

import AlertService from '@/shared/alert/alert.service';
import * as config from '@/shared/config/config';
import UniversityComponent from '@/entities/university/university.vue';
import UniversityClass from '@/entities/university/university.component';
import UniversityService from '@/entities/university/university.service';

const localVue = createLocalVue();

config.initVueApp(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('b-alert', {});
localVue.component('b-badge', {});
localVue.directive('b-modal', {});
localVue.component('b-button', {});
localVue.component('router-link', {});

const bModalStub = {
  render: () => {},
  methods: {
    hide: () => {},
    show: () => {}
  }
};

describe('Component Tests', () => {
  describe('University Management Component', () => {
    let wrapper: Wrapper<UniversityClass>;
    let comp: UniversityClass;
    let universityServiceStub: SinonStubbedInstance<UniversityService>;

    beforeEach(() => {
      universityServiceStub = sinon.createStubInstance<UniversityService>(UniversityService);
      universityServiceStub.retrieve.resolves({ headers: {} });

      wrapper = shallowMount<UniversityClass>(UniversityComponent, {
        store,
        localVue,
        stubs: { bModal: bModalStub as any },
        provide: {
          alertService: () => new AlertService(store),
          universityService: () => universityServiceStub
        }
      });
      comp = wrapper.vm;
    });

    it('should be a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Should call load all on init', async () => {
      // GIVEN
      universityServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

      // WHEN
      comp.retrieveAllUniversitys();
      await comp.$nextTick();

      // THEN
      expect(universityServiceStub.retrieve.called).toBeTruthy();
      expect(comp.universities[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
    it('Should call delete service on confirmDelete', async () => {
      // GIVEN
      universityServiceStub.delete.resolves({});

      // WHEN
      comp.prepareRemove({ id: 123 });
      comp.removeUniversity();
      await comp.$nextTick();

      // THEN
      expect(universityServiceStub.delete.called).toBeTruthy();
      expect(universityServiceStub.retrieve.callCount).toEqual(2);
    });
  });
});
