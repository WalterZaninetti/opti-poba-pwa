<template>
  <div class="hello">
    <div class="container">
      <b-table :data="players" :columns="columns"></b-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  data (){
      return {
          columns: [
              {
                  field: 'name',
                  label: 'First Name',
                  centered: true
              },
              {
                  field: 'surname',
                  label: 'Last Name',
                  centered: true
              },
              {
                  field: 'role',
                  label: 'Role',
                  centered: true
              },
              {
                  field: 'shirt_number',
                  label: 'Shirt Number',
                  centered: true
              }
          ]
      }
  },
  computed: {
    ...mapGetters(["players"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
li{
  list-style:none;
}
ul{
  padding:0;
}
</style>
