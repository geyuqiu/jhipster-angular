import { mixins } from 'vue-class-component';

import { Component, Inject } from 'vue-property-decorator';
import Vue2Filters from 'vue2-filters';
import { IUniversity } from '@/shared/model/university.model';
import AlertMixin from '@/shared/alert/alert.mixin';

import UniversityService from './university.service';

@Component
export default class University extends mixins(Vue2Filters.mixin, AlertMixin) {
  @Inject('universityService') private universityService: () => UniversityService;
  private removeId: number = null;

  public universities: IUniversity[] = [];

  public isFetching = false;

  public mounted(): void {
    this.retrieveAllUniversitys();
  }

  public clear(): void {
    this.retrieveAllUniversitys();
  }

  public retrieveAllUniversitys(): void {
    this.isFetching = true;

    this.universityService()
      .retrieve()
      .then(
        res => {
          this.universities = res.data;
          this.isFetching = false;
        },
        err => {
          this.isFetching = false;
        }
      );
  }

  public prepareRemove(instance: IUniversity): void {
    this.removeId = instance.id;
    if (<any>this.$refs.removeEntity) {
      (<any>this.$refs.removeEntity).show();
    }
  }

  public removeUniversity(): void {
    this.universityService()
      .delete(this.removeId)
      .then(() => {
        const message = 'A University is deleted with identifier ' + this.removeId;
        this.alertService().showAlert(message, 'danger');
        this.getAlertFromStore();
        this.removeId = null;
        this.retrieveAllUniversitys();
        this.closeDialog();
      });
  }

  public closeDialog(): void {
    (<any>this.$refs.removeEntity).hide();
  }
}
