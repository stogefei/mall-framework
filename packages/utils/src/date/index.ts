import moment from 'moment';

enum DateFormat {
  /**
   * 年月日时分秒
   */
  FULLTIME = 'YYYY-MM-DD HH:mm:ss',
  /**
   * 年月日时分
   */
  YEARTOMINUTE = 'YYYY-MM-DD HH:mm',
  /**
   * 年月日时
   */
  YEARTOHOUR = 'YYYY-MM-DD HH',
  /**
   * 年月日
   */
  YEARTODAY = 'YYYY-MM-DD',
  /**
   * 年月
   */
  YEARTOMONTH = 'YYYY-MM',
  /**
   * 年
   */
  YEAR = 'YYYY',
}
const acronymMounth: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Agu',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const lowercaseMounth: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'Aguest',
  'Agu',
  'September',
  'October',
  'November',
  'December',
];
const weekName: string[] = [
  '星期日',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
];
/**
 * 时间转换
 * @param date  时间对象
 * @param fmt  YYYY-MM-DD HH:mm:ss q季度
 */
function format(date: Date, oFormat: string = 'YYYY-MM-DD HH:mm:ss'): string {
  let fmt = oFormat;
  const o: any = {
    'M+': date.getMonth() + 1, // 月份
    'D+': date.getDate(), // 日
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'Q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
    // "E+": acronymMounth[date.getMonth()], // 英文月份
  };
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length),
    );
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? o[k]
          : ('00' + o[k]).substr(('' + o[k]).length),
      );
    }
  }
  // 过滤英文月份
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, acronymMounth[date.getMonth()]);
  }
  // 星期
  if (/(W+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, weekName[date.getDay()]);
  }
  return fmt;
}

/**
 * 获取时间范围
 * @param date
 * @param type  使用 second，minute等枚举
 * @returns
 */
function range(date: Date | string, type: string = 'second'): string[] {
  let startDate = moment(date);
  const endDate = moment(date);
  const mFormat = DateFormat.FULLTIME;
  let tType: any = 'day';

  switch (type) {
    case 'second':
    case 'minute':
    case 'hour':
    case 'day':
    case 'month':
    case 'year':
    case 'week':
    case 'quarter':
      tType = type;
      break;
    case 'latestWeek':
      startDate = startDate.subtract(7, 'days');
      tType = 'day';
      break;
    case 'latestMonth':
      startDate = startDate.subtract(30, 'days');
      tType = 'day';
      break;
    case 'latestQuarter':
      startDate = startDate.subtract(3, 'months');
      tType = 'day';
      break;
    case 'latestYear':
      startDate = startDate.subtract(365, 'days');
      tType = 'day';
      break;
  }

  return [
    startDate.startOf(tType).format(mFormat),
    endDate.endOf(tType).format(mFormat),
  ];
}

type dateType =
  | 'today'
  | 'yesterday'
  | 'tomorrow'
  | 'week'
  | 'lastWeek'
  | 'nextWeek'
  | 'month'
  | 'lastMonth'
  | 'nextMonth'
  | 'quarter'
  | 'lastQuarter'
  | 'nextQuarter'
  | 'year'
  | 'lastYear'
  | 'nextyear';

/**
 * 获取时间标准范围
 * @param date
 * @param type  使用 second，minute等枚举
 * @returns
 */
function standardRange(
  date: Date | string,
  type: dateType = 'today',
): string[] {
  let startDate = moment(date);
  let endDate = moment(date);
  const mFormat = DateFormat.FULLTIME;
  let tType: any = 'day';
  switch (type) {
    case 'today':
      tType = 'day';
      break;
    case 'yesterday':
      startDate.subtract(1, 'days');
      endDate.subtract(1, 'days');
      break;
    case 'tomorrow':
      startDate.subtract(-1, 'days');
      endDate.subtract(-1, 'days');
      break;
    case 'week':
      startDate = moment().weekday(1);
      endDate = moment().weekday(7);
      break;
    case 'lastWeek':
      startDate = moment().weekday(1).add(-7, 'days');
      endDate = moment().weekday(7).add(-7, 'days');
      break;
    case 'nextWeek':
      startDate = moment().weekday(1).add(7, 'days');
      endDate = moment().weekday(7).add(7, 'days');
      break;
    case 'month':
      tType = type;
      break;
    case 'lastMonth':
      startDate = moment().month(moment().month() - 1);
      endDate = moment().month(moment().month() - 1);
      tType = 'month';
      break;
    case 'nextMonth':
      startDate = moment().month(moment().month() + 1);
      endDate = moment().month(moment().month() + 1);
      tType = 'month';
      break;
    case 'quarter':
      tType = type;
      break;
    case 'lastQuarter':
      startDate = moment().quarter(moment().quarter() - 1);
      endDate = moment().quarter(moment().quarter() - 1);
      tType = 'quarter';
      break;
    case 'nextQuarter':
      startDate = moment().quarter(moment().quarter() + 1);
      endDate = moment().quarter(moment().quarter() + 1);
      tType = 'quarter';
      break;
    case 'year':
      tType = type;
      break;
    case 'lastYear':
      startDate = moment().year(moment().year() - 1);
      endDate = moment().year(moment().year() - 1);
      tType = 'year';
      break;
    case 'nextyear':
      startDate = moment().year(moment().year() + 1);
      endDate = moment().year(moment().year() + 1);
      tType = 'year';
      break;
  }

  return [
    startDate.startOf(tType).format(mFormat),
    endDate.endOf(tType).format(mFormat),
  ];
}

function moentTypeHandler(oFormat) {
  let type = null;
  switch (oFormat) {
    case DateFormat.FULLTIME:
      type = 'second';
      break;
    case DateFormat.YEARTOMINUTE:
      type = 'minute';
      break;
    case DateFormat.YEARTOHOUR:
      type = 'hour';
      break;
    case DateFormat.YEARTODAY:
      type = 'day';
      break;
    case DateFormat.YEARTOMONTH:
      type = 'month';
      break;
    case DateFormat.YEAR:
      type = 'year';
      break;
    default:
      type = 'minute';
      break;
  }
  return type;
}
/**
 * 获取时间格式范围
 * @param date
 * @param format  可以是YYYY-MM-DD的枚举
 * @returns
 */
function formatRange(
  date: Date | string,
  oFormat: string = DateFormat.FULLTIME,
): string[] {
  const mDate = moment(date);
  const mFormat = DateFormat.FULLTIME;
  const type = moentTypeHandler(oFormat);

  return [
    mDate.startOf(type).format(mFormat),
    mDate.endOf(type).format(mFormat),
  ];
}

/**
 * 根据格式获取开始时间
 * @param date
 * @param format  DateFormat枚举
 * @returns
 */
function startFormatOf(
  date: Date | string,
  oFormat: string = DateFormat.FULLTIME,
): string {
  const mDate = moment(date);
  const mFormat = DateFormat.FULLTIME;
  const type = moentTypeHandler(oFormat);
  return mDate.startOf(type).format(mFormat);
}
/**
 * 根据格式获取结束时间
 * @param date
 * @param format  DateFormat枚举
 * @returns
 */
function endFormatOf(
  date: Date | string,
  oFormat: string = DateFormat.FULLTIME,
): string {
  const mDate = moment(date);
  const mFormat = DateFormat.FULLTIME;
  const type = moentTypeHandler(oFormat);
  return mDate.endOf(type).format(mFormat);
}

export {
  format,
  range,
  formatRange,
  startFormatOf,
  endFormatOf,
  acronymMounth,
  lowercaseMounth,
  DateFormat,
  standardRange,
};

export default {
  format,
  range,
  formatRange,
  startFormatOf,
  endFormatOf,
  acronymMounth,
  lowercaseMounth,
  DateFormat,
  standardRange,
};
