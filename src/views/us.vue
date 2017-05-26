<template>
  <div id ="us">
    <img class="us-img" src="../images/joinus/u3629.png">
    <ul class="us-ul clear">
        <li  @mouseover="over(1)">
            <img src="../images/joinus/u3632.png">
            <p>
                <strong>工商注册</strong><br>
                <span>REGISTERED</span>
            </p>
        </li>
        
        <li @mouseover="over(2)">
            <img src="../images/joinus/u3634.png">
            <p>
                <strong>财税服务</strong><br>
                <span>SERVICE</span>
            </p>
        </li>
        <li @mouseover="over(3)">
            <img src="../images/joinus/u3636.png">
            <p>
                <strong>知识产权</strong><br>
                <span>INTELLECTUAL PROPERTY</span>
            </p>
        </li>
        <li @mouseover="over(4)">
            <img src="../images/joinus/u3638.png">
            <p>
                <strong>人力外包</strong><br>
                <span>HR OUTSOURCING</span>
            </p>
        </li>
    </ul>
    <div class="end-div">
        <strong>我们需要什么样的服务商？</strong>
        <p>
           {{usli}}<br>{{usli1}}
        </p>
    </div>
  </div>

  
</template>

<script>
    export default {
        name: 'us',
        data() {
            return {
                usli: '在公司注册、公司变更、资质审批等领域深耕多年，在业内享有一定的知名度，可以提供优质优价的服务；',
                usli1: '与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务。 '
            }

        },
        methods: {
            over: function(i) {
                switch (i) {
                    case 1:
                        this.usli = "在公司注册、公司变更、资质审批等领域深耕多年，在业内享有一定的知名度，可以提供优质优价的服务；";
                        this.usli1 = "与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务。 ";
                        break;
                    case 2:
                        this.usli = "在代理记账、审计验资等领域深耕多年，可以提供涉足各个行业优秀的财会人员；";
                        this.usli1 = "与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务。 ";
                        break;
                    case 3:
                        this.usli = "在商标注册，版权专利，著作权等领域深耕多年，具有丰富的知识产权经验；";
                        this.usli1 = "与时俱进，视野立足未来，了解创业者的需求，并乐于为创业者服务。 ";
                        break;
                    case 4:
                        this.usli = '在人事代理、企业社保、个人社保等领域深耕多年，具有丰富的社保代理经验。 ';
                        this.usli1 = "";
                        break;

                }
            },
        }
    }
</script>


<style lang="less" scoped>
    .us-img {
        width: 100%;
    }
    
    .us-ul {
        width: 1392px;
        margin: 0 auto;
        li {
            float: left;
            width: 348px;
            padding: 40px 0 60px;
            &:hover {
                color: #2494d4;
                 p {
                span {
                    color: #2494d4;
                }
            }
            }
            img {
                width: 132px;
                margin-left: 108PX;
            }
            p {
                text-align: center;
                span {
                    color: #676767;
                }
            }
        }
    }
    
    .end-div {
        width: 100%;
        text-align: center;
        height: 106px;
        margin-bottom: 100px;
        strong {
            display: block;
            margin-bottom: 25px;
        }
       
        p {
            line-height: 30px;

        }
    }
</style>