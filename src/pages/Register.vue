<template>
  <div>
    <label>
      <span>氏名</span>
      <input v-model="name" />
    </label>
    <label>
      <span>URL</span>
      <input v-model="url" />
    </label>
    <button v-on:click="submit">登録</button>
  </div>
</template>

<script>
import {db} from "../firebase"
console.log(db)
export default {
  name: 'Register',
  props: {},
  data() {
    return {
      name: "",
      url: ""
    }
  },
  methods: {
    submit() {
      console.log("submit")
    }
  },

}
</script>

<style>
</style>
