const horaMiddleware = (req, res, next) => {
    const now = new Date()
    let hours = `${now.getHours()}`
    let minutes = `${now.getMinutes()}`
    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    const formattedTime = `${hours}:${minutes}`
    req.dateType = `${formattedTime}`
    next()
  }
  
  module.exports = horaMiddleware;