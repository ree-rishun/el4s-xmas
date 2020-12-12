<template>
  <div>
    <template v-if="resultState === 0">
      <div>
        <img alt="img" src="../assets/gacha.gif" />
      </div>
    </template>
    <template v-if="resultState === 1">
      <div>
        <p>ガチャ結果</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'GachaResult',
  props: {},
  data() {
    return {
      // 0: ガチャGIF, 1: 結果
      resultState: 0
    }
  },
  methods: {
    showResult: function() {
      const self = this
      setTimeout(function() { self.resultState = 1 }, 3000);
    }
  },
  mounted: function () {
    this.showResult();
  }
}
</script>

<style>
</style>
