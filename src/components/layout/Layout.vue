<!--
 * @Description: layout
-->
<template>
  <div class="core-layout relative">
    <el-container>
      <el-aside class="mean-container">
        <Mean ref="meanRef" />
      </el-aside>
      <el-container class="overflow">
        <el-header class="padding-0 h-60 flex-shrink">
          <Header @handleCollapse="handleCollapse" />
        </el-header>
        <el-main class="router-view-container bg-white">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
// components
import Header from '@/components/layout/Header.vue'
import Mean from '@/components/layout/Mean.vue'
// apis
import { ref } from 'vue'
// dom
const meanRef = ref()

/**
 * @description: 收起/展开 菜单栏 
 * @return {*}
 */
const handleCollapse = (isCollapse) => {
  meanRef.value.handleCollapse(isCollapse)
}
</script>

<style scoped>
.core-layout {
  height: 100%;
  display: flex;
}
.core-layout .router-view-container {
  padding: 0;
  display: flex;
}
.core-layout .h-60 {
  height: 60px;
}
.core-layout .padding-0{
  padding: 0;
}
.core-layout .mean-container {
  width: inherit;
}
</style>