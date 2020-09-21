'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 15;
const FONT_GAP = 15;
const TEXT_HEIGHT = 16;
const BAR_GAP = 50;
const BAR_WIDTH = 40;
const barHeight = 150;

const renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const lightness = function () {
  return Math.floor(Math.random() * 100);
}

const getMaxElement = function(times) {
  let maxElement = times[0];

  for (let i = 1; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили! ', CLOUD_X + GAP, CLOUD_Y + FONT_GAP + GAP);
  ctx.fillText('Список результатов:  ', CLOUD_X + GAP, CLOUD_Y + FONT_GAP + FONT_GAP + GAP);

  const maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {

    const shiftBar = function() {
      return barHeight - (barHeight* times[i]) / maxTime;
    }

    if (names[i] === 'Вы') {ctx.fillStyle = 'hsl(0, 100%, 50%)'}
    else {ctx.fillStyle = 'hsl(240, 100%, ' + lightness() + '%)'};

      ctx.fillRect(
      CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i,
      CLOUD_Y + GAP + TEXT_HEIGHT + FONT_GAP + TEXT_HEIGHT + GAP + GAP + shiftBar(),
      // barHeight - (barHeight* times[i]) / maxTime,
      BAR_WIDTH,
      (barHeight* times[i]) / maxTime
    );

    ctx.fillStyle = '#000';
    ctx.fillText(
      names[i],
      CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i,
      CLOUD_HEIGHT
    );

    ctx.fillText(
      Math.round(times[i]),
      CLOUD_X + GAP + (BAR_GAP + BAR_WIDTH) * i,
      CLOUD_Y + GAP + TEXT_HEIGHT + FONT_GAP + TEXT_HEIGHT + GAP + shiftBar()
    );
  }
};
