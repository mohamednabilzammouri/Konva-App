
const date = new Date()
export const POLYGON_INITIAL_STATE = {
  id: 0,
  points: [],
  curMousePos: [0, 0],
  isMouseOverStartPoint: false,
  isFinished: false,
  dateTime: {
    Year:date.getFullYear(),
    Month:date.getMonth(),
    Day:date.getDate(),
    Hour:date.getHours(),
    Minutes:date.getMinutes()
  }
};





