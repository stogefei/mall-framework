import {
  Component, Vue, Provide, Prop,
} from 'vue-property-decorator';
import { withInstall } from '../_utils';
const prefixCls = 'bb-form';
@Component({
  name: prefixCls,
  inheritAttrs: false,
})
class BBForm extends Vue {
  @Prop({ default: false }) force: boolean;

  @Prop({ default: 'horizontal' }) layout: 'horizontal' | 'vertical';

  itemList = {};

  itemTypeList = {};

  @Provide()
  registerItem ({ id, type, validate }) {
    this.itemList[id] = validate;
    if (type) {
      this.itemTypeList[type] = this.itemTypeList[type] || [];
      this.itemTypeList[type].push(validate);
    }
  }

  @Provide()
  unregisterItem (id) {
    delete this.itemList[id];
  }

  @Provide()
  isForce () {
    return this.force;
  }

  /**
   * 表单校验
   * @param force 是否开启强校验
   * @returns
   */
  async validate (force: boolean = false) {
    const items: any = Object.values(this.itemList);
    let message = null;
    for (let index = 0; index < items.length; index++) {
      const nMessage = await items[index](force);
      if (nMessage && !message) {
        message = nMessage;
      }
    }
    return {
      res: !message,
      errorMsg: message,
    };
  }

  render () {
    return (
      <div
        class={{
          [`${prefixCls}`]: true,
          [`${prefixCls}--vertical`]: this.layout === 'vertical',
        }}
      >
        {this.$slots.default}
      </div>
    );
  }
}

export default withInstall<BBForm>(BBForm);
