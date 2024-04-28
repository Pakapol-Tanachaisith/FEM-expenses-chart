const chart = document.querySelector("#chart");

export class Chart {
  constructor(data = []) {
    this.data = data;

    this.maxValue = Math.max(...data.map((item) => item.amount));
  }

  calculateBarHeight(value) {
    const heightPercentage = (value / this.maxValue) * 100;
    return `${heightPercentage}%`;
  }

  createBar(label, value) {
    const bar = document.createElement("div");
    bar.className = "bar";

    if (value === this.maxValue) {
      bar.classList.add("max");
    }

    bar.style.height = this.calculateBarHeight(value);

    const barLabel = document.createElement("span");
    barLabel.className = "bar-label";
    barLabel.textContent = label;

    const barValue = document.createElement("span");
    barValue.className = "bar-value";
    barValue.textContent = "$ " + value;

    bar.append(...[barValue, barLabel]);

    return bar;
  }

  render() {
    this.data.forEach((item) => {
      const bar = this.createBar(item.day, item.amount);
      chart.appendChild(bar);
    });
  }
}
