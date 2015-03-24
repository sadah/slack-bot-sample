module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Hello, ' + userName + '!'
  };

  return res.status(200).json(botPayload);
}
