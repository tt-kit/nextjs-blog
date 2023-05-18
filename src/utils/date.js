export const getTimeDiff = (d) => {
  const timestamp = + new Date(d)
  const now = new Date().getTime();
  const timeDiff = now - timestamp;

  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const year = day * 365;

  if (timeDiff < minute) {
    return "刚刚";
  } else if (timeDiff < hour) {
    return Math.floor(timeDiff / minute) + "分钟前";
  } else if (timeDiff < day) {
    return Math.floor(timeDiff / hour) + "小时前";
  } else if (timeDiff < week) {
    return Math.floor(timeDiff / day) + "天前";
  } else if (timeDiff < year) {
    return Math.floor(timeDiff / week) + "周前";
  } else {
    return Math.floor(timeDiff / year) + "年前";
  }
};
