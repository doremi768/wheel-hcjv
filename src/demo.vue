<template>
 <div class="">
     <Nav :selected.sync="selectedTab">
         <NavItem name="home">首页</NavItem>
         <NavItem name="about">关于</NavItem>
         <NavItem name="hire">招聘</NavItem>
     </Nav>
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
           selectedTab: ['home']
       }
   },
   
}
</script>
 
<style scoped lang = "scss">
</style>