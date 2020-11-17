<template>
 <div class="">
    <Row class="row">
        <Col span="4" :phone="{span: 2}">col-4/col-2</Col>
        <Col span="4" :phone="{span: 8}">col-4>/col-8</Col>
        <Col span="4" :phone="{span: 2}">>col-4/col-2</Col>
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