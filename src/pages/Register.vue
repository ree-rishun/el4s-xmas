<template>
  <div>
    Register {{name}}
    <input v-model="name" />
  </div>
</template>

<script>
export default {
  name: 'Register',
  props: {},
  data() {
    return {
      name: "namename"
    }
  },
  methods: {

  },

}
</script>

<style>
</style>
