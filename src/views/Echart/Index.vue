<template>
  <div class="home">
     <div>
         <router-link to="/echart/demo01">Demo01</router-link>
     </div>
     <div>
         <router-view/>
     </div>
  </div>
</template>
 
<script>

export default {
  name: 'echartIndex'
}
</script>
