<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['save-data'])
const initialFormData = ref({
    firstName: {
        val: '',
        isValid: true,
      },
    lastName: {
        val: '',
        isValid: true,
      },
    description: {
        val: '',
        isValid: true,
      },
    rate: {
        val: null,
        isValid: true,
      },
    areas: {
        val: [],
        isValid: true,
      },
})

const validateForm = () => {
    initialFormData.value.formIsValid = true;
    if (initialFormData.value.firstName.val === '') {
        initialFormData.value.firstName.isValid = false;
        initialFormData.value.formIsValid = false;
    }
    if (initialFormData.value.lastName.val === '') {
        initialFormData.value.lastName.isValid = false;
        initialFormData.value.formIsValid = false;
    }
    if (initialFormData.value.description.val === '') {
        initialFormData.value.description.isValid = false;
        initialFormData.value.formIsValid = false;
    }
    if (!initialFormData.value.rate.val || initialFormData.value.rate.val < 0) {
        initialFormData.value.rate.isValid = false;
        initialFormData.value.formIsValid = false;
    }
    if (initialFormData.value.areas.val.length === 0) {
        initialFormData.value.areas.isValid = false;
        initialFormData.value.formIsValid = false;
    }
}

const clearValidity = (input) => {
    initialFormData.value[input].isValid = true;
}

const submitForm = () => {

    validateForm();

    if (!initialFormData.value.formIsValid) {
        return;
    }

    const formData = {
        first: initialFormData.value.firstName.val,
        last: initialFormData.value.lastName.val,
        desc: initialFormData.value.description.val,
        rate: initialFormData.value.rate.val,
        areas: initialFormData.value.areas.val
    };
    emit('save-data', formData);
}

</script>


<template>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{invalid: !initialFormData.firstName.isValid}">
        <label for="firstname">Firstname</label>
        <input
          type="text"
          id="firstname"
          v-model.trim="initialFormData.firstName.val"
          @blur="clearValidity('firstName')"
        />
        <p v-if="!initialFormData.firstName.isValid">Firstname must not be empty.</p>
      </div>
      <div class="form-control" :class="{invalid: !initialFormData.lastName.isValid}">
        <label for="lastname">Lastname</label>
        <input
          type="text"
          id="lastname"
          v-model.trim="initialFormData.lastName.val"
          @blur="clearValidity('lastName')"
        />
        <p v-if="!initialFormData.lastName.isValid">Lastname must not be empty.</p>
      </div>
      <div class="form-control" :class="{invalid: !initialFormData.description.isValid}">
        <label for="description">Description</label>
        <textarea
          id="description"
          rows="5"
          v-model.trim="initialFormData.description.val"
          @blur="clearValidity('description')"
        ></textarea>
        <p v-if="!initialFormData.description.isValid">Description must not be empty.</p>
      </div>
      <div class="form-control" :class="{invalid: !initialFormData.rate.isValid}">
        <label for="rate">Hourly Rate</label>
        <input 
            type="number" 
            id="rate" 
            v-model.number="initialFormData.rate.val" 
            @blur="clearValidity('rate')" 
        />
        <p v-if="!initialFormData.rate.isValid">Rate must be greater than 0.</p>
      </div>
      <div class="form-control" :class="{invalid: !initialFormData.areas.isValid}">
        <h3>Areas of Expertise</h3>
        <div>
          <input
            type="checkbox"
            id="frontend"
            value="frontend"
            v-model="initialFormData.areas.val"
            @blur="clearValidity('areas')"
          />
          <label for="frontend">Frontend Development</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="backend"
            value="backend"
            v-model="initialFormData.areas.val"
            @blur="clearValidity('areas')"
          />
          <label for="backend">Backend Development</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="career"
            value="career"
            v-model="initialFormData.areas.val"
            @blur="clearValidity('areas')"
          />
          <label for="career">Career Advisory</label>
        </div>
        <p v-if="!initialFormData.areas.isValid">At least one expertise must be selected.</p>
      </div>
      <p v-if="!initialFormData.formIsValid">Please fix the above errors and submit again.</p>
      <base-button>Register</base-button>
    </form>
</template>


<style scoped>
    .form-control {
        margin: 0.5rem 0;
    }

    label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }

    input[type="checkbox"]+label {
        font-weight: normal;
        display: inline;
        margin: 0 0 0 0.5rem;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        border: 1px solid #ccc;
        font: inherit;
    }

    input:focus,
    textarea:focus {
        background-color: #f0e6fd;
        outline: none;
        border-color: #3d008d;
    }

    input[type="checkbox"] {
        display: inline;
        width: auto;
        border: none;
    }

    input[type="checkbox"]:focus {
        outline: #3d008d solid 1px;
    }

    h3 {
        margin: 0.5rem 0;
        font-size: 1rem;
    }

    .invalid label {
        color: red;
    }

    .invalid input,
    .invalid textarea {
        border: 1px solid red;
    }
</style>