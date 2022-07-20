<template>
  <div>
    <el-card
      class="box-card smallcard"
      shadow="hover"
      v-for="(item, index) in cardData"
      :key="index"
    >
      <div class="clearfix">
         <p><i :class="item.class"></i></p>
        <p>{{ item.title }}</p>
       
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      cardData: [
        { title: '用户', class:'el-icon-user'},
        { title: '商品' ,class:'el-icon-shopping-cart-2'},
        { title: '订单',class:"el-icon-document-copy"},
        { title: '评价' ,class:"el-icon-chat-line-round"},
        { title: '图库' ,class:"el-icon-picture-outline"},
        { title: '公告' ,class:"el-icon-bell"},
        { title: '配置' ,class:'el-icon-setting'},
        { title: '优惠券', class:"el-icon-folder-opened"}
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.smallcard {
  width: 150px;
  height: 90px;
  float: left;
  margin-left: 5px;
}
.clearfix{
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
  margin-top: 5px;
  i{
    color: #1372af;
    font-size: 24px;
  }
}
}
</style>
