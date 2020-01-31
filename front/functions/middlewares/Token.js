module.exports = (req, res, next) => {
  console.log(JSON.stringify(req.headers));
  next();
};
