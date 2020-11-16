<template>
 <div class="">
    <Row class="row" align="left">
        <Col span="6">col-6</Col>
        <Col span="3">col-3</Col>
    </Row>
    <Row class="row" align="center">
        <Col span="6">col-6</Col>
        <Col span="3">col-3</Col>
    </Row>
    <Row class="row" align="right">
        <Col span="6">col-6</Col>
        <Col span="3">col-3</Col>
    </Row>
 </div>
</template>
 
<script>
import Row from '../../../src/row'
import Col from '../../../src/col'
export default {
    components: {Row,Col}
}
</script>
 
<style scoped lang = "scss">
@import '../../../public/css/w-grid-col.scss';
</style>