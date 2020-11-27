<template>
 <div class="">
    <table class="table" :class="{bordered}">
        <thead>
            <tr>
                <th v-if="select"><input type="checkbox"></th>
                <th v-if="numberVisible">#</th>
                <th v-for="(column,index) in columns" :key="index">
                    {{column.text}}
                </th>
            </tr>
        </thead>
        <tbody :class="{striped}">
            <tr v-for="(item,index) in dataSource" :key="index">
                <td v-if="select"><input type="checkbox" @change="onChangeItem(item,index,$event)"></td>
                <td v-if="numberVisible">{{index + 1}}</td>
                <td v-for="(column,index1) in columns" :key="index1">
                    {{item[column.field]}}
                </td>
            </tr>
        </tbody>
    </table>
 </div>
</template>
 
<script>
export default {
    data () {
        return {

        }
    },
    props: {
        columns: {
            type: Array,
            required: true
        },
        dataSource: {
            type: Array,
            required: true
        },
        numberVisible: {
            type: Boolean,
            default: false
        },
        bordered: {
            type: Boolean,
            default: false
        },
        striped: {
            type: Boolean,
            default: true
        },
        select: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        onChangeItem(item,index,e) {
            this.$emit('changeItem',{selected: e.target.checked,item,index});
        }
    }
}
</script>
 
<style scoped lang = "scss">
$table-border-bottom: 1px solid #ccc;
$table-border: 1px solid #ccc;

$cell-padding: 10px;
$cell-border-bottom: 1px solid #ccc;
$cell-border: 1px solid #ccc;
$cell-text-align: left;
    .table {
        width: 100%;
        border-collapse: collapse;
        border-bottom:$table-border-bottom;
        &.bordered{
            border: $table-border;
            td,th {
            border: $cell-border;
            }
        }
        td,th {
            padding: $cell-padding;
            border-bottom: $cell-border-bottom;
            text-align: $cell-text-align;
        }
        .striped {
            >tr{
                &:nth-child(odd) {
                    background: #fff;
                }
                &:nth-child(even) {
                    background: #f1f1f1;
                }
            }
        }
    }
</style>