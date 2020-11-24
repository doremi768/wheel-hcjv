<template>
 <div class="">
    <Row class="row" :gutter="10">
        <Col span="3"><div>col-3</div></Col>
        <Col span="3"><div>col-3</div></Col>
        <Col span="3"><div>col-3</div></Col>
        <Col span="3"><div>col-3</div></Col>
    </Row>
    <Row class="row" :gutter="10">
        <Col span="4"><div>col-4</div></Col>
        <Col span="4"><div>col-4</div></Col>
        <Col span="4"><div>col-4</div></Col>
    </Row>
    <Row class="row" :gutter="10">
        <Col span="6"><div>col-6</div></Col>
        <Col span="6"><div>col-6</div></Col>
    </Row>
 </div>
</template>
 
<script>
import Row from '../../../src/grid/row'
import Col from '../../../src/grid/col'
export default {
    components: {Row,Col}
}
</script>
 
<style scoped lang = "scss">
$col-height: 45px;
$col-children-bg: #A3E9A4;
$col-margin: 5px 0;
$col-children-border-radius: 8px;
$col-color: #fff;
$col-font-size: 18px;
 .row{
    .col{
        height: $col-height;
        margin: $col-margin;
        text-align: center;
        line-height: $col-height;
        color: $col-color;
        font-size: $col-font-size;
        div{
            height: $col-height;
            border-radius: $col-children-border-radius;
            background-color: $col-children-bg;
        }
    }
 }
</style>