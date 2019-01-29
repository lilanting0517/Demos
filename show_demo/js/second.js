// 柱形图

var bar = echarts.init(document.getElementById('bar'));
var num = 4;
// 将天数灌入数组
var dayData = dataTwo().dayData;

var optionBar = {
  grid: {
    top: 50,
    bottom: '20%',
  },
  legend: {
    data: ['交易量'],
    right: '5%',
    itemWidth: 18,
    itemHeight: 12,
    textStyle: {
      color: '#fff'
    }
  },
  xAxis: [{
    data: (function () {
      var tt = [];
      for (var i = 0; i < num; i++) {
        tt.push(dayData[i]["datetime"]);
      }
      return tt;
    })(),
    axisLine: {
      show: false,
      lineStyle: {
        color: '#07bffb'
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      interval: 0
    }
  }],
  yAxis: [{
    name: "批次",
    axisLine: {
      show: false,
      lineStyle: {
        color: '#07bffb'
      }
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    // interval:10,
    min: 0,
    max: 100,
    position: 'left'
  }],
  series: [{
    name: '交易量',
    type: 'bar',
    label: {
      normal: {
        show: true,
        position: 'top',
        color: '#fff'
      }
    },
    barWidth: '40%',
    barGap: 1,
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#00fecc'
        }, {
          offset: 0.8,
          color: '#2690cf'
        }], false)
      }
    },
    data: (function () {
      var tt = [];
      for (var i = 0; i < num; i++) {
        tt.push(dayData[i]["cnt"])
      }
      return tt;
    })(),
  }]
}

bar.setOption(optionBar);

setInterval(function () {
  // debugger
  num++;
  if (num > 365) {
    num = 6;
  }
  var data0 = optionBar.series[0].data;
  data0.shift();
  data0.push(dayData[num]["cnt"]);

  optionBar.xAxis[0].data.shift();
  optionBar.xAxis[0].data.push(dayData[num]["datetime"]);

  bar.setOption(optionBar);
}, 2100);


// 网络舆情切换
var yuNum = -1;
var yuLen = $('.public-opinion ul:eq(0) li').length;

setInterval(function () {
  yuNum++;
  if (yuNum >= yuLen) {
    yuNum = 0;
  }

  $('.public-opinion ul:eq(0) li').eq(yuNum).show();
  $('.public-opinion ul:eq(0) li').eq(yuNum).siblings().hide();

  $('.public-opinion ul:eq(1) li').eq(yuNum).show();
  $('.public-opinion ul:eq(1) li').eq(yuNum).siblings().hide();

  $('.public-opinion ul:eq(2) li').eq(yuNum).show();
  $('.public-opinion ul:eq(2) li').eq(yuNum).siblings().hide();

  $('.public-opinion ul:eq(3) li').eq(yuNum).show();
  $('.public-opinion ul:eq(3) li').eq(yuNum).siblings().hide();

}, 2000);

// 物流信息
var logistLen = $('.logistics .con-in').length;
var logNum = -1;
setInterval(function () {
  logNum++;
  if (logNum >= logistLen) {
    logNum = 0;
  }

  $('.logistics .con-in').eq(logNum).show();
  $('.logistics .con-in').eq(logNum).siblings().hide();

}, 4000);