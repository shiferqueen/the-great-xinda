<template>
    <div>
    <p>首页/购物车</p>
    <dl>
        <dt>
            全部商品（<span>1</span>）
        </dt>
        <dd class="company">公司</dd>
        <dd class="commodity">服务商品</dd>
        <dd class="price">单价</dd>
        <dd class="quantity">数量</dd>
        <dd class="sum">全额</dd>
        <dd class="empty"></dd>
        <dd class="operation">操作</dd>
    </dl>
    </div>
</template>

<script>
    export default {
        name: 'goods'
    }
</script>

<style lang="less" scoped>
    .width1200 {
        width: 1200px;
        margin: 0 auto;
    }
    
    dl {
        width:1200px;
        dt {
            width: 100%;
        }
        dd {
            float: left;
        }
    }
    
    .company {
        width: 13%;
    }
    
    .commodity {
        width: 18%;
    }
    
    .price {
        width: 15%;
    }
    
    .quantity {
        width: 25%;
    }
    
    .sum {
        width: 12%;
    }
    
    .empty {
        width: 9%;
    }
    
    .operation {
        width: 8%;
    }
</style>