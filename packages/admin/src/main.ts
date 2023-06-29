import { createApp } from 'vue';
import 'ant-design-vue/dist/antd.css';
import StartUp from '@amaz/shared-utils/src/start-up';
import router from './router';
import App from './App';
import { message } from 'ant-design-vue';

//  全局message配置
message.config({
  top: '60px',
  duration: 2,
  maxCount: 1,
});

// createApp(App).use(router).mount('#app');

StartUp.settings({ message, router }).then(async () => {
  createApp(App).use(router).mount('#app');
});
