<template>
    <div class="row justify-content-center">
        <div class="col-8">
            <div v-if="student">
                <h2 class="jh-entity-heading"><span>Student</span> {{student.id}}</h2>
                <dl class="row jh-entity-details">
                    <dt>
                        <span>Name</span>
                    </dt>
                    <dd>
                        <span>{{student.name}}</span>
                    </dd>
                    <dt>
                        <span>University</span>
                    </dt>
                    <dd>
                        <div v-if="student.universityId">
                            <router-link :to="{name: 'UniversityView', params: {universityId: student.universityId}}">{{student.universityName}}</router-link>
                        </div>
                    </dd>
                </dl>
                <button type="submit"
                        v-on:click.prevent="previousState()"
                        class="btn btn-info">
                    <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span> Back</span>
                </button>
                <router-link v-if="student.id" :to="{name: 'StudentEdit', params: {studentId: student.id}}" tag="button" class="btn btn-primary">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span> Edit</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./student-details.component.ts">
</script>
