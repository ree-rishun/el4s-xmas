<template>
  <div>
    <div id="hoge">
      <select v-model="selectedId">
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
import {db} from "../firebase"
export default {
  name: 'Gacha',
  props: {},
  data() {
    return {
      selectedId: '',
      options: []
    }
  },
  methods: {
    doGacha: function() {
      const itemsRef = db.collection("items").where("roomId", "==", this.$route.params.roomId);
      let results = []
      // 自分以外のitemを一見取得
      itemsRef.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          results.push(doc.data());
        });
        const resultItemId = results.filter(d => d.id !== this.selectedId)[Math.floor(Math.random() * results.length)].roomId
        this.$router.push({
          name: 'gachaResult',
          query: {
            resultItemId: resultItemId
          }
        });
      });
    }
  },
  async mounted() {
    const self = this;
    try {
      const itemsRef = db.collection("items").where("roomId", "==", self.$route.params.roomId);
      await itemsRef.get().then((snapshot) => {
        const data = []
        snapshot.forEach((doc) => {
          data.push({...doc.data(), id: doc.id});
        });
        self.options = data
        if (data.length > 0) {
          self.selectedId = data[0].id
        }
      });
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style>
</style>
