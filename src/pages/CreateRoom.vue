<template>
  <div>
    <input
      type="text"
      v-model="group.name"
      placeholder="グループ名">
    <input
      type="number"
      v-model="group.menber">
    <input
      type="password"
      v-model="group.password"
      placeholder="あいことば">

    <button>作成</button>
  </div>
</template>

<script>
  export default {
    name: 'CreateRoom',
    data () {
      return {
        group: {
          name: '',
          menber: '',
          password: ''
        }
      }
    }
  }
</script>

<style scoped lang="scss">

</style>