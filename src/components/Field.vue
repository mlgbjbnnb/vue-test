<template>
  <div class="field-container">
    <div class="line">
      <router-link to="/">Home</router-link>
    </div>
    <div class="line">
      <label for="first-name" class="col-2">First Name</label>
      <input id="first-name" class="col-2" type="text" v-model="firstNameRef"/>
    </div>
    <div class="line">
      <label for="second-name" class="col-2">Second Name</label>
      <input id="second-name" class="col-2" type="text" v-model="lastNameRef"/>
    </div>
    <button @click="submitForm">submit</button>
    <div class="display-content">
      <div class="line">
        <span class="col-2">First Name:</span>
        <span id="first-name-ref" class="col-10">{{firstNameRef}}</span>
      </div>
      <div class="line">
        <span class="col-2">Second Name:</span>
        <span id="last-name-ref" class="col-10">{{lastNameRef}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Field',
  data () {
    return {
      firstNameRef: this.$store.state.form.firstName,
      lastNameRef: this.$store.state.form.lastName
    }
  },
  methods: {
    ...mapActions([
      'updateFields'
    ]),
    submitForm () {
      this.updateFields({
        firstName: this.firstNameRef,
        lastName: this.lastNameRef
      })
      this.$router.push('/display')
    }
  }
}
</script>

<style scoped>
  .field-container {
    text-align: left;
  }
  button {
    line-height: 24px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #337ab7;
    color: #fff;
  }
  .display-content {
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid;
  }
</style>
