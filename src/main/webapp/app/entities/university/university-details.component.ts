import { Component, Vue, Inject } from 'vue-property-decorator';

import { IUniversity } from '@/shared/model/university.model';
import UniversityService from './university.service';

@Component
export default class UniversityDetails extends Vue {
  @Inject('universityService') private universityService: () => UniversityService;
  public university: IUniversity = {};

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.universityId) {
        vm.retrieveUniversity(to.params.universityId);
      }
    });
  }

  public retrieveUniversity(universityId) {
    this.universityService()
      .find(universityId)
      .then(res => {
        this.university = res;
      });
  }

  public previousState() {
    this.$router.go(-1);
  }
}
