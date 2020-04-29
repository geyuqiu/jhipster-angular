<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <form name="editForm" role="form" novalidate v-on:submit.prevent="save()" >
                <h2 id="lfiErfassungBackendApp.university.home.createOrEditLabel">Create or edit a University</h2>
                <div>
                    <div class="form-group" v-if="university.id">
                        <label for="id">ID</label>
                        <input type="text" class="form-control" id="id" name="id"
                               v-model="university.id" readonly />
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="university-name">Name</label>
                        <input type="text" class="form-control" name="name" id="university-name"
                            :class="{'valid': !$v.university.name.$invalid, 'invalid': $v.university.name.$invalid }" v-model="$v.university.name.$model"  required/>
                        <div v-if="$v.university.name.$anyDirty && $v.university.name.$invalid">
                            <small class="form-text text-danger" v-if="!$v.university.name.required">
                                This field is required.
                            </small>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" id="cancel-save" class="btn btn-secondary" v-on:click="previousState()">
                        <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span>Cancel</span>
                    </button>
                    <button type="submit" id="save-entity" :disabled="$v.university.$invalid || isSaving" class="btn btn-primary">
                        <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span>Save</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" src="./university-update.component.ts">
</script>
