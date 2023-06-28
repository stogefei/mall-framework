import { DatePicker } from 'ant-design-vue';
import {
  Component, Prop, Vue, Model,
} from 'vue-property-decorator';
import { Moment } from 'moment';
import { DateUtils } from '@amaz/utils';
import { VNodeData } from 'vue';
import { withInstall } from '../_utils';

const prefixCls = 'bb-date-range-picker';

@Component({
  name: prefixCls,
  components: {
    ARangePicker: DatePicker.RangePicker,
  },
})
class BBDateRangePicker extends Vue {
  @Model('input', { default: null }) value: string[];

  @Prop({ default: DateUtils.DateFormat.FULLTIME }) format: string;

  @Prop({ default: false }) allowClear: boolean;

  @Prop({ default: false }) disabled: boolean;

  @Prop({ default: null }) disabledDate: (currentDate: Moment) => boolean;

  @Prop({ default: null }) dateRender: Function;

  @Prop({ default: null }) getCalendarContainer: Function;

  get mode () {
    let mode;
    switch (this.format) {
      case DateUtils.DateFormat.YEAR:
        mode = ['year', 'year'];
        break;
      case DateUtils.DateFormat.YEARTOMONTH:
        mode = ['month', 'month'];
        break;
      default:
        mode = ['date', 'date'];
        break;
    }
    return mode;
  }

  input (date, dateString) {
    this.$emit('input', dateString);
    this.$emit('change', dateString);
  }

  render () {
    const props: VNodeData = {
      props: {
        ...this.$props,
        value: this.value,
        mode: this.mode,
      },
      on: {
        change: this.input,
      },
    };

    return <a-range-picker {...props}></a-range-picker>;
  }
}
export default withInstall<BBDateRangePicker>(BBDateRangePicker);
