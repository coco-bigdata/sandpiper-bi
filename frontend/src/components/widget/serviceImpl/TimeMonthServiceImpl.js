import { WidgetService } from '../service/WidgetService'

const leftPanel = {
  icon: 'iconfont icon-yue',
  label: 'deyearmonth.label',
  defaultClass: 'time-filter'
}

const dialogPanel = {
  options: {
    attrs: {
      type: 'month',
      placeholder: 'deyearmonth.placeholder',
      viewIds: [],
      fieldId: '',
      dragItems: []
    },
    value: ''
  },
  defaultClass: 'time-filter',
  component: 'de-date'
}
const drawPanel = {
  type: 'custom',
  style: {
    width: 300,
    // height: 47,
    height: 90,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '',
    letterSpacing: 0,
    textAlign: '',
    color: ''
  },
  component: 'de-date'
}

class TimeMonthServiceImpl extends WidgetService {
  constructor(options = {}) {
    Object.assign(options, { name: 'timeMonthWidget' })
    super(options)
    this.filterDialog = true
    this.showSwitch = false
  }

  initLeftPanel() {
    const value = JSON.parse(JSON.stringify(leftPanel))
    return value
    // console.log('this is first initWidget')
  }

  initFilterDialog() {
    const value = JSON.parse(JSON.stringify(dialogPanel))
    return value
  }

  initDrawPanel() {
    const value = JSON.parse(JSON.stringify(drawPanel))
    return value
  }
  filterFieldMethod(fields) {
    return fields.filter(field => {
      return field['deType'] === 1
    })
  }
}
const timeMonthServiceImpl = new TimeMonthServiceImpl()
export default timeMonthServiceImpl
