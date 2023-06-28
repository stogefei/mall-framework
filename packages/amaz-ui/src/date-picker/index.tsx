import { DatePicker } from 'ant-design-vue';
import dayjs, { Dayjs } from 'dayjs';
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import { DateUtils } from '@amaz/utils';
import { defineComponent, ExtractPropTypes, ref } from 'vue';
import { withInstall } from '../_utils';
const prefixCls = 'bb-date-picker';
const datePickerProps = () => ({
  value: { default: null, type: dayjs || String },
  mode: { default: null, type: String },
  format: { default: DateUtils.DateFormat.FULLTIME, String },
  allowClear: { default: true, Boolean },
  disabled: { default: false, Boolean },
  disabledDate: { default: null, Function },
  dateRender: { default: null, Function },
  getCalendarContainer: { default: null, Function },
});
const component = {
  name: prefixCls,
  components: {
    ADatePicker: DatePicker,
  },
  props: datePickerProps(),
  data () {
    return {
      dateType: ['year', 'month', 'date', 'time'],
      currentMode: '',
      open: false,
      currentValue: null,
    };
  },
  setup (props, { slots, attrs, emit }) {
    const format = props.format || DateUtils.DateFormat.FULLTIME;
    const defaultValue = props.value ? dayjs(props.value, format) : null;
    const dateValue:any = ref<Dayjs>(defaultValue);
    const showTime:any = ref(false);
    let mode = 'date';
    if (props.mode) {
      mode = props.mode;
    } else {
      switch (props.format) {
        case DateUtils.DateFormat.YEAR:
          mode = 'year';
          break;
        case DateUtils.DateFormat.YEARTOMONTH:
          mode = 'month';
          break;
        case DateUtils.DateFormat.YEARTODAY:
          mode = 'date';
          break;
        case DateUtils.DateFormat.FULLTIME:
          mode = 'date';
          showTime.value = true;
          break;
        default:
          mode = 'date';
          break;
      }
    }
    const change = (val:any) => {
      const value = val ? dayjs(val, format) : null;
      dateValue.value = val;
      emit('input', value);
      emit('change', value);
    };
    const openChange = (status: any) => {
      console.log(status, 'status');
    };
    const panelChange = (value, valMode) => {
      console.log(value, 'value');
    };
    const dateProps = {
      ...props,
      ...attrs,
      mode: mode,
      showTime: showTime.value,
      locale: locale,
    };
    return () => {
      return <a-date-picker
        onChange={change}
        onOpenChange={openChange}
        onPanelChange={panelChange}
        {...dateProps}
        value={dateValue.value}
        v-model:Value={dateValue.value}
      />;
    };
  },
};
// eslint-disable-next-line no-undef
export type BDatePickerProps = Partial<ExtractPropTypes<ReturnType<typeof datePickerProps>>>;
const BBDatePicker = defineComponent(component);
export default withInstall(BBDatePicker);
