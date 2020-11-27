<template>
 <div class="">
    <table class="table" :class="{bordered}">
        <thead>
            <tr>
                <th v-if="select"><input type="checkbox" @change="onChangeAllItem" ref="allChecked"
                :checked="areAllItemSelected"></th>
                <th v-if="numberVisible">#</th>
                <th v-for="column in columns" :key="column.field">
                    <div class="table-header">
                        {{column.text}}
                        <span class="sorter">
                            <Icon name="up"></Icon>
                            <Icon name="down2"></Icon>
                        </span>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody :class="{striped}">
            <tr v-for="(item,index) in dataSource" :key="item.id">
                <td v-if="select">
                    <input type="checkbox" @change="onChangeItem(item,index,$event)"
                    :checked="isSelectedItems(item)">
                </td>
                <td v-if="numberVisible">{{index + 1}}</td>
                <td v-for="column in columns" :key="column.field">
                    {{item[column.field]}}
                </td>
            </tr>
        </tbody>
    </table>
 </div>
</template>
 
<script>
import Icon from './icon.vue'
export default {
    data () {
        return {

        }
    },
    components: {Icon},
    watch: {
        selectedItems() {
            if(this.selectedItems.length === this.dataSource.length) {
                this.$refs.allChecked.indeterminate = false;
            } else if(this.selectedItems.length === 0) {
                this.$refs.allChecked.indeterminate = false;
            } else {
                this.$refs.allChecked.indeterminate = true;
            }
        }
    },
    computed: {
        areAllItemSelected() {
            let a = this.dataSource.map(item => item.id).sort();
            let b = this.selectedItems.map(item => item.id).sort();
            let equal = true;
            if(a.length !== b.length) {return false;} 
            for(let i = 0 ; i < a.length; i++) {
                if(a[i] !== b[i]) {
                    equal = false;
                    break;
                }
            }
            return equal;
        }
    },
    props: {
        columns: {
            type: Array,
            required: true
        },
        dataSource: {
            type: Array,
            required: true,
            validator(array) {
               return !(array.filter(item => item.id === undefined).length > 0);
            }
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
        },
        selectedItems: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        onChangeItem(item,index,e) {
            let selected = e.target.checked;
            let copy= JSON.parse(JSON.stringify(this.selectedItems));
            if(selected) {
                copy.push(item);
            } else {
                copy = copy.filter(i => i.id !== item.id);
            }
            this.$emit('update:selectedItems',copy);
        },
        onChangeAllItem(e) {
            let selected = e.target.checked;
            this.$emit('update:selectedItems',selected ? this.dataSource : []);
        },
        isSelectedItems(item) {
            return this.selectedItems.filter(i => i.id === item.id).length > 0;
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
        th {
            .table-header {
                display: flex;
                align-items: center;
                .sorter {
                    display: inline-flex;
                    flex-direction: column;
                    cursor: pointer;
                    svg {
                        width: 10px;
                        height: 10px;
                        margin: 0 8px;
                        fill: #ccc;
                        &:first-child {
                            position: relative;
                            bottom: -2px;
                        }
                        &:nth-child(2) {
                            position: relative;
                            top: 2px;
                        }
                    }
                }
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