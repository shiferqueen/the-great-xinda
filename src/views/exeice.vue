<template>
      <div>
          <Row>
              <Col span="12">
                  <span class="fir">第一</span>
                  <span class="fir">第二</span>
                  <span class="fir">第三</span>
                  <span class="fir">第四</span>
                  <span class="fir">第五</span>
              </Col>
              <Col span="12"><span class="fir">第二</span></Col>
          </Row>
          <br>
          <Row :gutter="18">
              <Col span="8"><div class="tem">图片</div></Col>
              <Col span="8"><div class="box">盒子</div></Col>
              <Col span="8"><div class="bulb">灯泡</div></Col>
          </Row>
      </div>
</template>

<script>
import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.config.productionTip = false
Vue.use(iView)
export default {
     name: 'exeice',
}
</script>
<style lang="less" scoped>
    div {
        color: #fff;
    }
    .tem {
        width: 100%;
        height: 30px;
        background: #f2f;
        text-align: center;
    }
    .box {
        width: 100%;
        height: 30px;
        background: #2ff;
        text-align: center;
    }
    .bulb {
        width: 100%;
        height: 30px;
        background: #22f;
        text-align: center;
    }

</style>


