<template>
  <div class="display">
    <div class="line">
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <p class="col-2">First Name:</p>
      <p class="col-10">{{firstName}}</p>
    </div>
    <div>
      <p class="col-2">Last Name:</p>
      <p class="col-10">{{lastName}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Display',
  computed: mapGetters({
    firstName: 'firstName',
    lastName: 'lastName'
  })
}
</script>

<style scoped>
  .display {
    text-align: left;
  }
</style>
