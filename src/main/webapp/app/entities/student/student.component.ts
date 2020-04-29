import { mixins } from 'vue-class-component';

import { Component, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IStudent } from '@/shared/model/student.model';
import AlertMixin from '@/shared/alert/alert.mixin';

import StudentService from './student.service';

@Component
export default class Student extends mixins(Vue2Filters.mixin, AlertMixin) {
  @Inject('studentService') private studentService: () => StudentService;
  private removeId: number = null;

  public students: IStudent[] = [];

  public isFetching = false;

  public mounted(): void {
    this.retrieveAllStudents();
  }

  public clear(): void {
    this.retrieveAllStudents();
  }

  public retrieveAllStudents(): void {
    this.isFetching = true;

    this.studentService()
      .retrieve()
      .then(
        res => {
          this.students = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IStudent): void {
    this.removeId = instance.id;
    if (<any>this.$refs.removeEntity) {
      (<any>this.$refs.removeEntity).show();
    }
  }

  public removeStudent(): void {
    this.studentService()
      .delete(this.removeId)
      .then(() => {
        const message = 'A Student is deleted with identifier ' + this.removeId;
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();
        this.removeId = null;
        this.retrieveAllStudents();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
