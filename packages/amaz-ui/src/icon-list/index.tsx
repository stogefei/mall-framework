import {
  Component, Vue, Prop, Watch, Model,
} from 'vue-property-decorator';
import Icon from '@amaz/icon';
// import VueIcon from '@ant-design/icons-vue';
import { Radio } from 'ant-design-vue';

import iconfont from '@amaz/icon/src/font/iconfont.json';
import { withInstall } from '../_utils';
import { VNodeData } from 'vue';

@Component({
  name: 'bb-icon-list',
  inheritAttrs: false,
  components: {
    BIcon: Icon,
    ARadio: Radio,
    ARadioGroup: Radio.Group,
    ARadioButton: Radio.Button,
  },
})
class BBIconList extends Vue {
  @Model('change', { default: () => [] }) checked: string | string[];

  @Prop({ default: null }) background: string;

  @Prop({ default: () => false }) multiple: boolean;

  // icons: any[] = (VueIcon as any).definitions.collection;

  iconList = [];

  currentKeys = [];

  get cusIcons () {
    return [];
  }

  @Watch('checked', { immediate: true, deep: true })
  watchCheckedKeys () {
    if (this.checked) {
      if (this.checked instanceof Array) {
        this.currentKeys = [...this.checked];
      } else {
        this.currentKeys = [this.checked];
      }
    } else {
      this.currentKeys = [];
    }
  }

  getThemeIcons () {
    this.iconList = [];
    // Object.values(this.icons).forEach(icon => {
    //   const theme = this.getTheme(icon);
    //   if (this.themes.includes(theme)) {
    //     this.iconList.unshift({ type: icon.name, theme: theme });
    //   }
    // });
    iconfont.glyphs.forEach((icon) => {
      if (/^[A-Za-z0-9-]*$/g.test(icon.font_class)) {
        this.iconList.push({ type: icon.font_class, theme: 'b8' });
      }
    });
  }

  getTheme (item) {
    if (item.theme === 'outline') return 'outlined';
    if (item.theme === 'fill') return 'filled';
    if (item.theme === 'twotone') return 'twoTone';
    return item.theme;
  }

  created () {
    this.getThemeIcons();
  }

  render () {
    const iconItemsTag = [];
    this.iconList.forEach((icon) => {
      // 兼容错误的ant icon
      if (!['interation', 'colum-height', 'canlendar'].includes(icon.type)) {
        const activeIndex = this.currentKeys.findIndex(
          (key) => key === icon.type,
        );
        const props: VNodeData = {};
        if (activeIndex > -1) {
          props.class = {
            active: true,
          };
          props.style = {
            background: this.background,
          };
        }
        iconItemsTag.push(
          <li
            {...props}
            onClick={() => {
              if (this.multiple) {
                if (activeIndex < 0) {
                  this.currentKeys.push(icon.type);
                } else {
                  this.currentKeys.splice(activeIndex, 1);
                }
                this.$emit('change', this.currentKeys);
              } else {
                this.currentKeys = [icon];
                this.$emit('change', icon.type);
              }
            }}
          >
            <i class={`bb-icon bb-icon-${icon.type}`} />
          </li>,
        );
      }
    });
    return <ul class="bb-icon-list">{...iconItemsTag}</ul>;
  }
}

export default withInstall<BBIconList>(BBIconList);
