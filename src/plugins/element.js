import '../../node_modules/element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import {Message,Input,Form, FormItem,Button} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message
