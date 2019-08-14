<template>
  <div class="home">
    
    <a-button type="primary">Primary</a-button>
    <br/><br/>
    <a-button>Default</a-button>
    <br/><br/>
    <a-button type="dashed">Dashed</a-button>
    <br/><br/>
    <a-button type="danger">Danger</a-button>
    <br/><br/>
    <a-button type="link">Link</a-button>
    <br/><br/>

    <p>
	    <a-button type="primary" loading>
	      Loading
	    </a-button>	    
    </p>

	<a-button type="primary">
      Go forward<a-icon type="download" />
    </a-button>

    

  </div>
</template>

<script>

import Vue from 'vue'
import { Button } from 'ant-design-vue'
import { Icon } from 'ant-design-vue'

Vue.use(Button)
Vue.use(Icon)

export default {
  name: 'buttonDemo',
  components: {
    
  }
}
</script>
