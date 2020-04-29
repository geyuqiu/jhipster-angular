<template>
    <div>
        <h2 id="page-heading">
            <span id="university-heading">Universities</span>
            <router-link :to="{name: 'UniversityCreate'}" tag="button" id="jh-create-entity" class="btn btn-primary float-right jh-create-entity create-university">
                <font-awesome-icon icon="plus"></font-awesome-icon>
                <span >
                    Create a new University
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
        <div class="alert alert-warning" v-if="!isFetching && universities && universities.length === 0">
            <span>No universities found</span>
        </div>
        <div class="table-responsive" v-if="universities && universities.length > 0">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th><span>ID</span></th>
                    <th><span>Name</span></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="university in universities"
                    :key="university.id">
                    <td>
                        <router-link :to="{name: 'UniversityView', params: {universityId: university.id}}">{{university.id}}</router-link>
                    </td>
                    <td>{{university.name}}</td>
                    <td class="text-right">
                        <div class="btn-group">
                            <router-link :to="{name: 'UniversityView', params: {universityId: university.id}}" tag="button" class="btn btn-info btn-sm details">
                                <font-awesome-icon icon="eye"></font-awesome-icon>
                                <span class="d-none d-md-inline">View</span>
                            </router-link>
                            <router-link :to="{name: 'UniversityEdit', params: {universityId: university.id}}"  tag="button" class="btn btn-primary btn-sm edit">
                                <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                                <span class="d-none d-md-inline">Edit</span>
                            </router-link>
                            <b-button v-on:click="prepareRemove(university)"
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
            <span slot="modal-title"><span id="lfiErfassungBackendApp.university.delete.question">Confirm delete operation</span></span>
            <div class="modal-body">
                <p id="jhi-delete-university-heading">Are you sure you want to delete this University?</p>
            </div>
            <div slot="modal-footer">
                <button type="button" class="btn btn-secondary" v-on:click="closeDialog()">Cancel</button>
                <button type="button" class="btn btn-primary" id="jhi-confirm-delete-university" v-on:click="removeUniversity()">Delete</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./university.component.ts">
</script>
