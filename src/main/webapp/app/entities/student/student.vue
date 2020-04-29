<template>
    <div>
        <h2 id="page-heading">
            <span id="student-heading">Students</span>
            <router-link :to="{name: 'StudentCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-student">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span >
                    Create a new Student
                </span>
            </router-link>
        </h2>
        <b-alert :show="dismissCountDown"
            dismissible
            :variant="alertType"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged">
            {{alertMessage}}
        </b-alert>
        <br/>
        <div class="alert alert-warning" v-if="!isFetching && students && students.length === 0">
            <span>No students found</span>
        </div>
        <div class="table-responsive" v-if="students && students.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span>ID</span></th>
                    <th><span>Name</span></th>
                    <th><span>University</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="student in students"
                    :key="student.id">
                    <td>
                        <router-link :to="{name: 'StudentView', params: {studentId: student.id}}">{{student.id}}</router-link>
                    </td>
                    <td>{{student.name}}</td>
                    <td>
                        <div v-if="student.universityId">
                            <router-link :to="{name: 'UniversityView', params: {universityId: student.universityId}}">{{student.universityName}}</router-link>
                        </div>
                    </td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'StudentView', params: {studentId: student.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline">View</span>
                            </router-link>
                            <router-link :to="{name: 'StudentEdit', params: {studentId: student.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(student)"
                                   variant="danger"
                                   class="btn btn-sm"
                                   v-b-modal.removeEntity>
                                <font-awesome-icon icon="times"></font-awesome-icon>
                                <span class="d-none d-md-inline">Delete</span>
                            </b-button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <b-modal ref="removeEntity" id="removeEntity" >
            <span slot="modal-title"><span id="lfiErfassungBackendApp.student.delete.question">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-student-heading">Are you sure you want to delete this Student?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-student" v-on:click="removeStudent()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./student.component.ts">
</script>
