<template>
 <div class="">
    <Row class="row">
        <Col span="12">50%</Col>
    </Row>
    <Row class="row">
        <Col span="3">25%</Col>
        <Col span="3">25%</Col>
        <Col span="3">25%</Col>
        <Col span="3">25%</Col>
    </Row>
    <Row class="row">
        <Col span="4">33.3%</Col>
        <Col span="4">33.3%</Col>
        <Col span="4">33.3%</Col>
    </Row>
    <Row class="row">
        <Col span="6">50%</Col>
        <Col span="6">50%</Col>
    </Row>
    <Row class="row">
        <Col span="8">66.6%</Col>
        <Col span="4">33.3%</Col>
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