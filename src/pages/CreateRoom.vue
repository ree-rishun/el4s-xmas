<template>
  <div>
    <label>
      <span>グループ名</span>
      <input
        type="text"
        v-model="group.name"
        placeholder="仲良しグループ">
    </label>
    <label>
      <span>人数</span>
      <input
        type="number"
        min="2"
        v-model="group.menber">
    </label>
    <label>
      <span>あいことば</span>
      <input
        type="password"
        v-model="group.password"
        placeholder="＊＊＊＊＊">
    </label>
    <label>
      <button
        @click="createGroup()">作成</button>
    </label>

  </div>
</template>

<script>
  import {db} from "../firebase"

  export default {
    name: 'CreateRoom',
    data () {
      return {
        group: {
          name: '',
          menber: 2,
          password: ''
        }
      }
    },
    methods: {
      createGroup () {
        // グループを登録
        const doc_ref = db.collection('rooms')

        // グループを新しく追加
        doc_ref.add(this.group).then( (snapshot) => {
          console.log(snapshot.id)
          this.$router.push({
            name: 'createResult',
            query: {
              groupID: snapshot.id
            }
          })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  label{
    display: block;
    text-align: center;
    margin-top: 20px;
    span{
      display: block;
      width: 240px;
      margin-left: calc((100% - 240px) / 2);
      font-size: 0.7rem;
      color: #4290ff;
      text-align: left;
    }

    input[type="text"], input[type="number"], input[type="password"]{
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