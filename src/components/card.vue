<template>
  <div class="total">
    <el-card shadow="hover" class="box-card" v-for="(item,index) in card" :key="index">
      <div slot="header" class="clearfix">
        <span>{{item.title}}</span>
        <el-tag :type="item.unitColor">{{item.unit}}</el-tag>
      </div>
      <div class="title">
        <h1>{{item.value}}</h1>
      </div>
      <div class="bottom">
        <span>{{item.subTitle}}</span>
        <span>{{item.subValue}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['card'],
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
.clearfix {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-card {
  width: 300px;
  height: 200px;
}
.el-tag {
  height: 24px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title{
  font-size: 36px;
  color: #6b7280;
  font-weight: bold;
  h1{
    margin-bottom: 20px;
  }
  border-bottom: 1px solid #ebeef5;
}
.bottom{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.total{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
