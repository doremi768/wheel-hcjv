const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

// describe('Toast', () => {
    // it('存在.', () => {
    //     expect(Toast).to.be.ok 
    // })
   
    // it('接受 autoClose',()=>{
    //     let div = document.createElement('div');
    //     document.body.appendChild(div);
    //     const Constructor = Vue.extend(Toast);
    //     const vm = new Constructor({
    //         autoClose: true
    //     }).$mount(div);
    //     setTimeout(() => {
    //         expect(document.body.contains(vm.$el)).to.eq(true)
    //         done();
    //     }, 3000);
    // })
// })

describe('toast',()=>{
    it('asdf',()=>{
        console.log(1)
    })
})