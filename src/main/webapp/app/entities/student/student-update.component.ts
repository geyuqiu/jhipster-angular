import { Component, Vue, Inject } from 'vue-property-decorator';

import { numeric, required, minLength, maxLength, minValue, maxValue } from 'vuelidate/lib/validators';

import UniversityService from '../university/university.service';
import { IUniversity } from '@/shared/model/university.model';

import AlertService from '@/shared/alert/alert.service';
import { IStudent, Student } from '@/shared/model/student.model';
import StudentService from './student.service';

const validations: any = {
  student: {
    name: {
      required
    },
    universityId: {
      required
    }
  }
};

@Component({
  validations
})
export default class StudentUpdate extends Vue {
  @Inject('alertService') private alertService: () => AlertService;
  @Inject('studentService') private studentService: () => StudentService;
  public student: IStudent = new Student();

  @Inject('universityService') private universityService: () => UniversityService;

  public universities: IUniversity[] = [];
  public isSaving = false;

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params.studentId) {
        vm.retrieveStudent(to.params.studentId);
      }
      vm.initRelationships();
    });
  }

  public save(): void {
    this.isSaving = true;
    if (this.student.id) {
      this.studentService()
        .update(this.student)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A Student is updated with identifier ' + param.id;
          this.alertService().showAlert(message, 'info');
        });
    } else {
      this.studentService()
        .create(this.student)
        .then(param => {
          this.isSaving = false;
          this.$router.go(-1);
          const message = 'A Student is created with identifier ' + param.id;
          this.alertService().showAlert(message, 'success');
        });
    }
  }

  public retrieveStudent(studentId): void {
    this.studentService()
      .find(studentId)
      .then(res => {
        this.student = res;
      });
  }

  public previousState(): void {
    this.$router.go(-1);
  }

  public initRelationships(): void {
    this.universityService()
      .retrieve()
      .then(res => {
        this.universities = res.data;
      });
  }
}
