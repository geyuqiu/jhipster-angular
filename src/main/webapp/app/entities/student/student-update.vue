<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="lfiErfassungBackendApp.student.home.createOrEditLabel">Create or edit a Student</h2>
                <div>
                    <div class="form-group" v-if="student.id">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="student.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="student-name">Name</label>
                        <input type="text" class="form-control" name="name" id="student-name"
                            :class="{'valid': !$v.student.name.$invalid, 'invalid': $v.student.name.$invalid }" v-model="$v.student.name.$model"  required/>
                        <div v-if="$v.student.name.$anyDirty && $v.student.name.$invalid">
                            <small class="form-text text-danger" v-if="!$v.student.name.required">
                                This field is required.
                            </small>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="student-university">University</label>
                        <select class="form-control" id="student-university" name="university" v-model="$v.student.universityId.$model" required>
                            <option v-if="!student.universityId" v-bind:value="null" selected></option>
                            <option v-bind:value="universityOption.id" v-for="universityOption in universities" :key="universityOption.id">{{universityOption.name}}</option>
                        </select>
                    </div>
                    <div v-if="$v.student.universityId.$anyDirty && $v.student.universityId.$invalid">
                        <small class="form-text text-danger" v-if="!$v.student.universityId.required">
                            This field is required.
                        </small>
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span>Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.student.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./student-update.component.ts">
</script>
