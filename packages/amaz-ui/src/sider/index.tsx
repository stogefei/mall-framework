import {
  Component, Vue, Prop, Model, Watch,
} from 'vue-property-decorator';
import { Layout } from 'ant-design-vue';
import BIcon from '../icon';
import { withInstall } from '../_utils';

@Component({
  name: 'bb-layout-sider',
  inheritAttrs: false,
  components: {
    ALayoutSider: Layout.Sider,
    BIcon,
  },
})
class BBLayoutSider extends Vue {
  @Model('collapse', { default: false }) collapsed: boolean; // 当前状态

  @Prop({ default: 0 }) maxWidth!: number; // 最大宽度

  @Prop({ default: 0 }) minWidth!: number; // 最小宽度

  @Prop({ default: () => [] }) draw: string[]; // 拖动的方向

  @Prop({ default: false }) collapsible: boolean; // 是否可以折叠

  @Prop({ default: false }) reverseArrow: boolean; // 是否转换箭头方向

  @Prop({ default: 0 }) collapsedWidth: number; // 折叠保留的最小宽度

  prefixCls: string = 'bb-layout-sider';

  direction: string | undefined = undefined;

  target: HTMLDivElement | undefined = undefined;

  x: number = 0;

  y: number = 0;

  attr: any = {
    width: null,
    height: null,
  };

  width!: number;

  height!: number;

  drawing = false;

  props: any;

  currentCollapsed = false;

  @Watch('collapsed', { immediate: true })
  watchCollapsed () {
    this.currentCollapsed = this.collapsed;
  }

  mousedown (direction: string, e: MouseEvent) {
    if (this.currentCollapsed) return;
    this.$emit('adjuststart', e, direction);
    e.stopPropagation();
    e.preventDefault();
    this.x = e.pageX;
    this.y = e.pageY;
    this.direction = direction;
    this.width = this.attr.width;
    this.height = this.attr.height;
    this.drawing = true;
    this.target = e.target as HTMLDivElement;
    this.target.classList.add(`${this.prefixCls}__${direction}-active`);
    window.document.addEventListener('mousemove', this.mousemove, false);
    window.document.addEventListener('mouseup', this.mouseup, false);
  }

  mousemove (e: MouseEvent) {
    if (
      this.direction &&
      ['top', 'bottom'].includes(this.direction) &&
      this.height
    ) {
      this.attr.height =
        this.height +
        (this.direction === 'top' ? e.pageY - this.y : this.y - e.pageY);
    } else if (
      this.width &&
      this.direction &&
      ['left', 'right'].includes(this.direction)
    ) {
      this.attr.width =
        this.width +
        (this.direction && this.direction === 'right'
          ? e.pageX - this.x
          : this.x - e.pageX);
    }

    if (this.maxWidth && this.attr.width > this.maxWidth) {
      this.attr.width = this.maxWidth;
    }
    if (this.minWidth && this.attr.width < this.minWidth) {
      this.attr.width = this.minWidth;
    }
    this.$emit('adjusting', e);
  }

  mouseup (e) {
    if (this.target) {
      this.target.classList.remove(
        `${this.prefixCls}__${this.direction}-active`,
      );
      this.target = undefined;
    }

    this.drawing = false;
    window.document.removeEventListener('mousemove', this.mousemove, false);
    window.document.removeEventListener('mouseup', this.mouseup, false);
    this.$emit('adjustend', e);
  }

  init () {
    this.props = Object.assign({}, this.$props, this.$attrs);
    this.attr.width = parseInt(this.props.width) || 200;
    this.attr.height = parseInt(this.props.height) || 200;
  }

  created () {
    this.init();
  }

  render () {
    const slotDefault = this.$slots.default;

    const draw = this.props.draw || [];

    const directions = ['left', 'right', 'top', 'bottom'].filter((key) =>
      draw.includes(key),
    );
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this = this;

    const props = {
      class: {
        [this.prefixCls]: true,
        [`${this.prefixCls}-drawing`]: this.drawing && !this.currentCollapsed,
      },
      attrs: this.$attrs,
      props: {
        ...this.$props,
        width: this.attr.width.toString(),
        height: this.attr.height.toString(),
        collapsedWidth: this.collapsedWidth,
        theme: 'light',
        trigger: null,
        collapsed: this.currentCollapsed,
      },
      on: { ...this.$listeners },
    };

    const directionWraps = directions.map((direction) => (
      <div
        class={`${this.prefixCls}__${direction}`}
        onMousedown={(e) => {
          _this.mousedown(direction, e);
        }}
      ></div>
    ));

    const TriggerTag = (
      <div
        class={{
          [`${this.prefixCls}__trigger`]: true,
          [`${this.prefixCls}__trigger-right`]: this.reverseArrow,
        }}
        onClick={() => {
          this.currentCollapsed = !this.currentCollapsed;
          this.$emit('collapse', this.currentCollapsed);
        }}
      >
        {this.reverseArrow ? (
          <b-icon
            type={!this.currentCollapsed ? 'right-o' : 'left-o'}
            theme="b8"
          />
        ) : (
          <b-icon
            type={this.currentCollapsed ? 'right-o' : 'left-o'}
            theme="b8"
          />
        )}
      </div>
    );
    return (
      <a-layout-sider {...props}>
        {...directionWraps}
        <div class={`${this.prefixCls}__body`}>{slotDefault}</div>
        {this.collapsible && TriggerTag}
      </a-layout-sider>
    );
  }
}
export default withInstall<BBLayoutSider>(BBLayoutSider);
