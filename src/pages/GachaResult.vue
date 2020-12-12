<template>
  <div>
    <template v-if="resultState === 0">
      <div>
        <img alt="img" src="../assets/gacha.gif" />
      </div>
    </template>
    <template v-if="resultState === 1">
      <div>
        <div>ガチャ結果</div>
        <div>{{title}}</div>
        <img :src="ogp" />
      </div>
    </template>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'GachaResult',
  props: {},
  data() {
    return {
      // 0: ガチャGIF, 1: 結果
      resultState: 0,
      title: "title",
      ogp: "https://m.media-amazon.com/images/I/415RMEh6CDL._AC_SR320,320_.jpg"
    }
  },
  methods: {
    showResult: function() {
      const self = this
      setTimeout(function() { self.resultState = 1 }, 3000);
    }
  },
  mounted: function () {
    const self = this;
    self.showResult();
    Axios.post("", {
      url: this.$route.query.url,
    }).then(response => {
      console.log(response)
    })
  }
}
</script>

<style>
</style>
