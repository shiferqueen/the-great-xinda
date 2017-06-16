<template>
    <div>
    <div class="width1200">  
    <Row :gutter="16">
        <Col class="col" span='6' >
            <div>push1</div>
        </Col>
        <Col offset="6" class="col" span='6'>
             <div>push2</div>
        </Col>
        <Col class="col" span='6'>
             <div>push3</div>
        </Col>
        <Col class="col" span='6' >
             <div>push4</div>
        </Col>
    </Row>
    </div>  
    <br>
    <p> type = flex </p>
     <Row :gutter="16" type = 'flex' class="code-row-bg" align="bottom">
        <Col class="col" span='6' align = "middle" push="12">
            <div>push1</div>
        </Col>
        <Col class="col" span='6' pull="6">
             <div>push2</div>
        </Col>
        <Col class="col" span='6' pull='6'>
             <div>push3</div>
        </Col>
        <Col class="col" span='6' >
             <div>push4</div>
        </Col>
    </Row>
    
    <p>响应式</p>
    <Row class="code-row-bg" >
        <Col class="col" :xs='{ span: 10,offset:2}' :md='{ span: 5,offset:1}'> <div>col</div></Col>
        <Col class="col" :xs='{ span: 10,offset:2}' :md='{ span: 5,offset:1}'> <div>col</div></Col>
        <Col class="col" :xs='{ span: 10,offset:2}' :md='{ span: 5,offset:1}'> <div>col</div></Col>
        <Col class="col" :xs='{ span: 10,offset:2}' :md='{ span: 5,offset:1}'> <div>col</div></Col>
    </Row>
    </div>
</template>

<script>
    export default {
        name: 'my',
        components: {}

    }
</script>


<style lang='less' scoped>
    .col {
        padding: 10px 0;
        color: #fff;
        text-align: center;
        div {
            background: #2d8cf0;
            padding: 10px 0;
        }
    }
    .width1200{
        width:1200px;
        margin: 0 auto;
    }
    .code-row-bg {
        height: 100px;
        background: #ccc;
        margin-bottom: 50px;
    }
</style>