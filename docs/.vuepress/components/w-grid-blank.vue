<template>
 <div class="">
    <Row class="row">
        <Col span="3">col-3</Col>
        <Col span="2" blank="1">col-2</Col>
        <Col span="3">col-3</Col>
        <Col span="2" blank="1">col-2</Col>
    </Row>
    <Row class="row">
        <Col span="3">col-3</Col>
        <Col span="3" blank="2">col-3</Col>
        <Col span="2"  blank="2">col-2</Col>
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