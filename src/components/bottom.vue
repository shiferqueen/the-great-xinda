<template>
    <Row>
        <Col :xs="{ span: 0, offset: 0 }" :sm="{ span: 24, offset:0 }">
            <div class="gongshang">
              <div class="zhunzi">
                ©Copyright 2016 北京信达科技有限公司 京ICP备 16011621号
              </div>
            </div>
        </Col>
    </Row>

</template>

<script>

export default {
  name: 'bottom'
}
</script>

<style lang="less" scoped>
.gongshang{
  width: 100%;
  height: 45px;
  background: #ccc;
  .zhunzi{
    width:380px;
    margin: 0 auto;
    font-size: 13px;
    color: #000;
    line-height: 50px;
  }
}

</style>
