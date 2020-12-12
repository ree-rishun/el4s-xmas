<template>
  <div>
    <label>
      <input
        type="text"
        v-model="groupLink"
        readonly>
    </label>

    <label>
      <button
        @click="$router.push('/group/' + groupID)">
        開く
      </button>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'CreateResult',
    data () {
      return{
        groupID: '',
        groupLink: '',
        baseLink: 'http://localhost:8080/'
      }
    },
    methods: {

    },
    mounted() {
      // クエリパラメータの取得
      const queryData = this.$route.query

      // IDに格納
      this.groupID = queryData.groupID

      this.groupLink = this.baseLink + this.groupID
    }
  }
</script>

<style scoped lang="scss">

  label {
    display: block;
    text-align: center;
    margin-top: 20px;

    span {
      display: block;
      width: 240px;
      margin-left: calc((100% - 240px) / 2);
      font-size: 0.7rem;
      color: #4290ff;
      text-align: left;
    }

    input[type="text"], input[type="number"], input[type="password"] {
      display: inline-block;
      width: 240px;
      height: 50px;
      font-size: 1rem;
      line-height: 50px;
      outline: none;
      border: none;
      border-radius: 0;
      border-bottom: 1px solid #111111;
    }

    button{
      display: inline-block;
      width: 100px;
      height: 40px;
      border: none;
      outline: none;
      border-radius: 40px;
      background: #4290ff;
      color: #ffffff;
      font-weight: bold;
      font-size: 1rem;
    }
  }
</style>