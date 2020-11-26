<template>
 <div class="">
     <Nav :selected.sync="selected">
         <NavItem name="home"><a href="https://baidu.com" target="_blank">首页</a></NavItem>
          <SubNav name="about">
            <template slot="title">关于</template>
            <NavItem name="culture">企业文化</NavItem>
             <SubNav name="info">
                <template slot="title">开发团队</template>
                <NavItem name="QQ">QQ</NavItem>
                <NavItem name="weixin">微信</NavItem>
            </SubNav>
            <SubNav name="phone">
                <template slot="title">联系方式</template>
                <NavItem name="QQ1">QQ</NavItem>
                <NavItem name="weixin1">微信</NavItem>
            </SubNav>
          </SubNav>
         <NavItem name="hire">招聘</NavItem>
     </Nav>
     <p class="content">sdfdsfsdfs</p>
     <div style="width: 100px; height: 300px;"></div>
     <Nav :selected.sync="selected" vertical style="width: 200px;">
         <NavItem name="home">首页</NavItem>
          <SubNav name="about">
            <template slot="title">关于</template>
            <NavItem name="culture">企业文化</NavItem>
             <SubNav name="info">
                <template slot="title">开发团队</template>
                <NavItem name="QQ">QQ</NavItem>
                <NavItem name="weixin">微信</NavItem>
            </SubNav>
            <SubNav name="phone">
                <template slot="title">联系方式</template>
                <NavItem name="QQ1">QQ</NavItem>
                <NavItem name="weixin1">微信</NavItem>
            </SubNav>
          </SubNav>
         <NavItem name="hire">招聘</NavItem>
     </Nav>
     <div style="width: 100px; height: 300px;"></div>
 </div>
</template>
 
<script>
import Nav from './nav/nav'
import NavItem from './nav/nav-item'
import SubNav from './nav/sub-nav'

export default {
   components: {
       Nav,NavItem,SubNav
   },
   data() {
       return {
           selected: 'home'
       }
   },
   
}
</script>
 
<style scoped lang = "scss">
    .content{
        padding: 30px;
    }
</style>