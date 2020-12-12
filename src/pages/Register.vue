<template>
  <div>
    <div>
      <label>
        <span>氏名</span>
        <input v-model="name" />
      </label>
    </div>
    <div>
      <label>
        <span>URL</span>
        <input v-model="url" />
      </label>
    </div>
    <div>
      <button v-on:click="submit">登録</button>
    </div>
  </div>
</template>

<script>
import {db} from "../firebase"
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
    async submit() {
      try {
        const itemsRef = db.collection("items");
        await itemsRef.add({
          name: this.name,
          url: this.url,
        })
        this.$router.push("/register_result")
      } catch (e) {
        console.log(e)
      }
    }
  },
}
</script>

<style>
</style>
