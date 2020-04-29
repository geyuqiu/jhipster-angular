import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength, minValue, maxValue } from 'vuelidate/lib/validators';

import StudentService from '../student/student.service';
import { IStudent } from '@/shared/model/student.model';

import AlertService from '@/shared/alert/alert.service';
import { IUniversity, University } from '@/shared/model/university.model';
import UniversityService from './university.service';

const validations: any = {
  university: {
    name: {
      required
    }
  }
};

@Component({
  validations
})
export default class UniversityUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('universityService') private universityService: () => UniversityService;
  public university: IUniversity = new University();

  @Inject('studentService') private studentService: () => StudentService;

  public students: IStudent[] = [];
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.universityId) {
        vm.retrieveUniversity(to.params.universityId);
      }
      vm.initRelationships();
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.university.id) {
      this.universityService()
        .update(this.university)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A University is updated with identifier ' + param.id;
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.universityService()
        .create(this.university)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A University is created with identifier ' + param.id;
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveUniversity(universityId): void {
    this.universityService()
      .find(universityId)
      .then(res => {
        this.university = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {
    this.studentService()
      .retrieve()
      .then(res => {
        this.students = res.data;
      });
  }
}
