/**
 * @description 时间数值换算
 * @example 6002s -> 01:40:02
 */
export function formatSeconds(time) {
  if (!time) return '';
  const inputSecondTime = Math.floor(parseFloat(time.toString()) * 10) / 10;
  let min = 0; // 初始化分
  let h = 0; // 初始化小时
  let secondTime = 0;
  let result = '';
  //如果秒数大于60，将秒数转换成整数
  min = Math.floor(inputSecondTime / 60);
  secondTime = Math.floor(inputSecondTime % 60); // 向下取整
  if (min > 60) {
    // 如果分钟大于60，将分钟转换成小时
    h = Math.floor(min / 60);
    min = parseInt((min % 60).toString(), 10); // 获取小时后取佘的分，获取分钟除以60取佘的分
  }
  if (h === 0) {
    result = `${min.toString().padStart(2, '0')}:${secondTime
      .toString()
      .padStart(2, '0')}`;
  } else {
    result = `${h.toString().padStart(2, '0')}:${min
      .toString()
      .padStart(2, '0')}:${secondTime.toString().padStart(2, '0')}`;
  }
  return result;
}
