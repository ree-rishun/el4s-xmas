<template>
  <div>
    <div id="hoge">
      <select v-model="selected">
        <option v-for="option in options" v-bind:value="option.id" :key="option.id">
          {{ option.name }}
        </option>
      </select>
    </div>
    <div id="hoge">
      <button v-on:click="doGacha">ガチャる</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gacha',
  props: {},
  data() {
    return {
      selected: '1',
      options: [
        // @todo: サーバーから取得
        { name: '名前1', id: '1' },
        { name: '名前2', id: '2' },
        { name: '名前3', id: '3' }
      ]
    }
  },
  methods: {
    doGacha: function() {
      // @todo: ここでサーバーに送信
      alert('hoge');  
    }
  },
}
</script>

<style>
</style>
