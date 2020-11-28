<template>
 <div class="wrapper" ref="wrapper">
    <div :style="{height,overflow:'auto'}" ref="tableWrapper">
        <table class="table" :class="{bordered}" ref="table">
            <thead>
                <tr>
                    <th style="width: 50px;"></th>
                    <th v-if="select" style="width: 50px;">
                        <input type="checkbox" @change="onChangeAllItem" ref="allChecked"
                    :checked="areAllItemSelected">
                    </th>
                    <th v-if="numberVisible" style="width: 50px">#</th>
                    <th :style="{width: column.width + 'px'}" v-for="column in columns" :key="column.field">
                        <div class="table-header">
                            {{column.text}}
                            <span class="sorter" v-if="column.field in orderBy" @click="changeOrderBy(column.field)">
                                <Icon name="up" :class="{active: orderBy[column.field] === 'asc'}"></Icon>
                                <Icon name="down2" :class="{active: orderBy[column.field] === 'desc'}"></Icon>
                            </span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody :class="{striped}">
                <template v-for="(item,index) in dataSource">
                <tr :key="item.id">
                    <td style="width: 50px">
                        <div v-if="item[expendField]" @click="expendItem(item.id)" class="expend-field">
                            <span v-if="isExendedIds(item.id)">&minus;</span>
                            <span v-else>+</span>
                        </div>
                    </td>
                    <td v-if="select" style="width: 50px">
                        <input type="checkbox" @change="onChangeItem(item,index,$event)"
                        :checked="isSelectedItems(item)">
                    </td>
                    <td v-if="numberVisible" style="width: 50px">{{index + 1}}</td>
                    <td :style="{width: column.width + 'px'}" v-for="column in columns" :key="column.field">
                        {{item[column.field]}}
                    </td>
                </tr>
                <tr v-if="isExendedIds(item.id)" :key="`${item.id}-expend`">
                    <td :colspan="colspan(item[expendField])">
                        {{item[expendField]}}
                    </td>
                </tr>
                </template>
            </tbody>
        </table>
        <div v-if="loading" class="loading">
            <Icon name="loading"/>
        </div>
    </div>
 </div>
</template>
 
<script>
import Icon from './icon.vue'
import Button from './button/button.vue'
export default {
    data () {
        return {
            table2: null,
            expendedIds: [],
            open: false
        }
    },
    components: {Icon,Button},
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
        },
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
        },
        orderBy: {
            type: Object,
            default: () => ({})
        },
        loading: {
            type: Boolean,
            default: false
        },
        height: {
            type : String | Number
        },
        expendField: {
            type: String
        }
    },
    mounted() {
        let table2 = this.$refs.table.cloneNode(false);
        this.table2 = table2;
        table2.classList.add('copy');
        let tHead = this.$refs.table.children[0];
        let {height} = tHead.getBoundingClientRect();
        this.$refs.wrapper.style.paddingTop = height + 'px';
        this.$refs.tableWrapper.style.height = this.height - height + 'px';
        table2.appendChild(tHead);
        this.$refs.wrapper.appendChild(table2);
    
    },
    beforeDestroy() {
        this.table2.remove();
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
        },
        changeOrderBy(key) {
            let copy = JSON.parse(JSON.stringify(this.orderBy));
            let oldValue = copy[key];
            if(oldValue === 'asc') {
                copy[key] = 'desc'
            } else if (oldValue === 'desc') {
                copy[key] = true;
            } else {
                copy[key] = 'asc';
            }
            this.$emit('update:orderBy',copy);
        },
        expendItem(id) {
            this.open = !this.open
            if(this.isExendedIds(id)){
                let a = this.expendedIds.splice(this.expendedIds.indexOf(id),1)
            } else {
                this.expendedIds.push(id);
            }
        },
        isExendedIds(id) {
            return this.expendedIds.indexOf(id) >= 0;
        },
        colspan(expendField) {
            if(expendField) {
                return this.columns.length + Number(this.numberVisible) + Number(this.select) + 1
            } else {
                return this.columns.length + Number(this.numberVisible) + Number(this.select)
            }
        }
    },
    
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
                        &.active {
                            fill: #000;
                        }
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
    .wrapper {
        position: relative;
        margin: 10px;
        .loading {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(255,255,255,.6);
        }
        .copy{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background: #fff;
        }
    }
   .expend-field {
       display: flex;
       align-items: center;
       justify-content: left;
       cursor: pointer;
       padding-left: 10px;
       font-size: 20px;
   }
</style>