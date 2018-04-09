document.addEventListener('DOMContentLoaded', () => {
  const customOptions = {
    angle: 0,
    radiusScale: 1,
    pointer: {
      length: 0.5,
      strokeWidth: 0.03,
      color: 'black'
    },
    limitMax: false,
    limitMin: false,
    colorStart: 'purple',
    colorStop: 'red',
    strokeColor: 'grey',
    generateGradient: true,
    highDpiSupport: true,
    renderTicks: {
      divisions: 5,
      divWidth: 2,
      divLength: 0.75,
      divColor: 'black',
      subDivisions: 5,
      subLength: 0.5,
      subColor: 'black',
    },
  };

  const gaugeOne = new Gauge(document.getElementById('my-gauge-one')).setOptions(customOptions); // create sexy gauge!
  const gaugeTwo = new Gauge(document.getElementById('my-gauge-two')).setOptions(randomOptions()); // create sexy gauge!
  const gaugeThree = new Gauge(document.getElementById('my-gauge-three')).setOptions(randomOptions()); // create sexy gauge!
  const gaugeFour = new Gauge(document.getElementById('my-gauge-four')).setOptions(randomOptions()); // create sexy gauge!

  [gaugeOne.maxValue, gaugeTwo.maxValue, gaugeThree.maxValue, gaugeFour.maxValue] = [100, 100, 100, 100]; // set max gauge value
  gaugeOne.setMinValue(0);
  gaugeTwo.setMinValue(0);
  gaugeThree.setMinValue(0);
  gaugeFour.setMinValue(0);
  [gaugeOne.animationSpeed, gaugeTwo.animationSpeed, gaugeThree.animationSpeed, gaugeFour.animationSpeed] = [128, 128, 128, 128]; // set animation speed (32 is default value)
  setGauge(gaugeOne)
  setGauge(gaugeTwo)
  setGauge(gaugeThree)
  setGauge(gaugeFour)


})

const setGauge = (gauge) => {
  setInterval(() => gauge.set(Math.random() * 100), 3000);
}

const randomOptions = () => {
  const pointerLength = Math.random();
  return {
    angle: -0.5 + Math.random(),
    lineWidth: (Math.floor(Math.random() * 70) + 1) / 100,
    radiusScale: (Math.random() / 2 + 0.5),
    pointer: {
      length: pointerLength,
      strokeWidth: (Math.floor(Math.random() * 30) + 1) / 100,
      color: pointerLength < 0.2 ? 'white' : getRandomColor()
    },
    limitMax: false,
    limitMin: false,
    colorStart: getRandomColor(),
    colorStop: getRandomColor(),
    strokeColor: getRandomColor(),
    generateGradient: true,
    highDpiSupport: true,
    renderTicks: {
      divisions: Math.floor(Math.random() * 20), // Number of ticks, from 0-20
      divWidth: Math.random() * 10, // Width of tick, from 0.1 to 10
      divLength: Math.random(), // From 0 (no length) to 1 (full length of gauge area)
      divColor: getRandomColor(),
      subDivisions: Math.floor(Math.random() * 20), // Number of ticks between ticks, from 0-20
      subLength: Math.random(), // From 0 (no length) to 1 (full length of gauge area)
      subWidth: 0.6,
      subColor: getRandomColor()
    }
  };
};

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
