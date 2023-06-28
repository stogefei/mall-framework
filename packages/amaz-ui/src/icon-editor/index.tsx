import {
  Component, Vue, Model, Watch, Prop,
} from 'vue-property-decorator';
import { withInstall } from '../_utils';
import Combobox from '../combobox';
import BIcon from '../icon';
import BButton from '../button';
import BIconUpload from '../icon-upload';

import BIconAvatar from '../icon-avatar';

import IconList from '../icon-list';

export interface IBIconEditorVaule {
  /**
   * 类型
   */
  type: 'icon' | 'pic';
  /**
   * 颜色
   */
  color?: string;
  /**
   * icon key
   */
  iconKey?: string;
  /**
   * 图片ID
   */
  picId?: string;
}

const prefixCls = 'bb-icon-editor';

@Component({
  name: prefixCls,
  inheritAttrs: false,
  components: {
    BCombobox: Combobox,
    BIconList: IconList,
    BIconAvatar,
    BIcon,
    BButton,
    BIconUpload,
  },
})
class BBIconSelect extends Vue {
  @Model('input', { default: null }) value: IBIconEditorVaule;

  @Prop({ default: null }) name: string; // 空名称

  @Prop({ default: 64 }) size: number; // 大小

  @Prop({ default: true }) picture: boolean; // 是否允许上传图片

  @Prop({ default: null }) defaultIcon: string; // 默认的Iocn

  @Prop({ default: 'blue' }) defaultColor: string; // 默认的颜色

  @Prop({ default: 'default' }) theme: 'solid' | 'default';

  @Prop({ default: 'square' }) shape: 'square' | 'round';

  comboboxStatus = false;

  current: IBIconEditorVaule = null;

  curType = null;

  colors = {
    blue: '#315efb',
    'daybreak-blue': '#2dbef7',
    'light-blue': '#23b7ff',
    'geek-blue': '#3a67d7',
    orange: '#ff9d00',
    'volcano-orange': '#ffa632',
    pink: '#ed3198',
    red: '#ff3640',
    'bluish-green': '#56cd69',
    'polar-green': '#52c41a',
    green: '#0abf5b',
    'light-purple': '#887ced',
    purple: '#7d32e6',
    'golden-purple': '#8c25b1',
  };

  @Watch('value', { immediate: true })
  watchValue () {
    if (this.value) {
      this.current = this.value;
      this.curType = this.value.type;
    } else {
      this.current = {
        type: 'icon',
        color: this.defaultColor,
        iconKey: this.defaultIcon,
        picId: null,
      };
      this.curType = 'icon';
    }
  }

  onIconChange (icon) {
    this.current.iconKey = icon;
    this.current.type = 'icon';
    this.onChange();
  }

  onSelectColor (color) {
    this.current.color = color;
    this.onChange();
  }

  onPicChange (e: Event) {
    e.stopPropagation();
    this.curType = 'pic';
    if (this.current.picId) {
      this.current.type = 'pic';
      this.onChange();
    }
  }

  onChange () {
    this.$emit('input', this.current);
    this.$emit('change', this.current);
  }

  render () {
    let Tag;
    if (this.curType === 'icon') {
      const listProps = {
        class: {
          [`${prefixCls}-list`]: true,
        },
        props: {
          checked: this.current?.iconKey,
          background: this.colors[this.current?.color],
        },
        on: {
          change: this.onIconChange,
        },
      };

      const ColorTags = [];
      Object.keys(this.colors).forEach((key) => {
        const active = this.current?.color === key;
        ColorTags.push(
          <div
            class={{
              [`${prefixCls}-color`]: true,
              active: active,
            }}
          >
            {
              <span
                style={`background:${this.colors[key]}`}
                onClick={() => {
                  this.onSelectColor(key);
                }}
              >
                {active && <b-icon type="check" theme="b8" />}
              </span>
            }
          </div>,
        );
      });
      let PicBtnTag;
      if (this.picture) {
        PicBtnTag = (
          <b-button icon="symbol_pic" onClick={this.onPicChange}>
            自定义图片
          </b-button>
        );
      }
      Tag = (
        <div class={`${prefixCls}-popup`}>
          <div class={`${prefixCls}-header`}>
            <label>选择图形颜色</label>
            {PicBtnTag}
          </div>
          <div class={`${prefixCls}-colors`}>{ColorTags}</div>
          <div class={`${prefixCls}-icons`}>
            <label>选择图形</label>
            <b-icon-list {...listProps} />
          </div>
        </div>
      );
    } else {
      Tag = (
        <div class={`${prefixCls}-popup`}>
          <div class={`${prefixCls}-header`}>
            <b-button
              icon="left-o"
              onClick={(e: Event) => {
                e.stopPropagation();
                this.curType = 'icon';
                this.current.type = 'icon';
              }}
            >
              自定义图片
            </b-button>
          </div>
          <div class={`${prefixCls}-pic-wrap`}>
            <b-icon-upload
              value={this.current.picId}
              shape="square"
              iconSize={256}
              onChange={(icon) => {
                this.current.type = 'pic';
                this.current.picId = icon;
                this.onChange();
              }}
            />
          </div>
        </div>
      );
    }

    return (
      <b-combobox
        v-model={this.comboboxStatus}
        class={prefixCls}
        autoClose={false}
      >
        <div slot="combobox" class={`${prefixCls}__icon`}>
          <b-icon-avatar
            value={this.current}
            size={this.size}
            theme={this.theme}
            shape={this.shape}
          >
            {this.name?.substring(0, 1).toLocaleUpperCase()}
          </b-icon-avatar>
        </div>
        {Tag}
      </b-combobox>
    );
  }
}

export default withInstall<BBIconSelect>(BBIconSelect);
