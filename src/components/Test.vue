<template>

</template>

<script>

  import {adminlogin} from '../api/api'
  import {messageErrorShow,messageSuccessShow} from "../tool/loading";

  import arraytool from '../tool/tool'

  export default {
        name: "Test",
        data(){
          return{

          }
        },
        mounted() {
          messageErrorShow("error",3);
          messageSuccessShow("欢迎",5);
          adminlogin("test2","123456").then(function (resp) {
            let data = resp.data;//JSON.parse(resp.data)
            console.log(data);
          }).catch(function (error) {
            console.log(error);
          })
        }
    }
</script>

<style scoped>

</style>
