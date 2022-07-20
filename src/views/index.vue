<template>
  <div>
    <card :card="card"></card>
    <div>
      <SmallCard class="SmallCard"></SmallCard>
    </div>

    <div class="echa">
      <div class="left">
        <div class="font">
          <p>订单统计</p>
          <div class="button">
             <el-button type="primary" size="mini" plain>近一个月</el-button>
              <el-button type="primary" size="mini" plain>近一周</el-button>
               <el-button type="primary" size="mini" plain>近24小时</el-button>
          </div>
        </div>
        <e-charts class="chart" :option="option" />
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card.vue'
import { getCard, getEcharts } from '@/api/user'
import SmallCard from '@/components/small-card.vue'
export default {
  data() {
    return {
      card: '',
      echarts: [],
    }
  },
  methods: {},
  created() {
    getCard().then((res) => {
      // console.log(res);
      this.card = res.data.data.panels
      // console.log(this.card)
    }),
      getEcharts().then((res) => {
        // console.log(res)
        this.echarts = res.data.data
        // console.log(this.echarts.x)
      })
  },
  mounted() {},
  components: {
    card,
    SmallCard
  },
  computed: {
    option() {
      return {
        xAxis: {
          type: 'category',
          data: this.echarts.x
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.echarts.y,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      }
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.SmallCard {
  margin-left: 10px;
  margin-top: 20px;
}
.echa {
  height: 330px;
  width: 100%;
  // background-color: #fff;
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
  align-items: center;
  .left,.right {
    width: 48%;
    height: 100%;
    background-color: #ffffff;
    margin-left: 20px;
    margin-top: 50px;
  }
}
.chart {
  height: 300px;
  margin-top: -20px;
  width: 600px;
}
.font{
  width: 100%;
  height: 50px;
  // margin-top: 20px;
  // margin-left: 20px;
  background-color: #f9fafb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
    font-size: 18px;
    padding-top: 10px;
    padding-left: 10px;
  }
  .button{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
