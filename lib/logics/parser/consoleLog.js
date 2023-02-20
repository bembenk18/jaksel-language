const consoleLog = (msg) => {
  let format = /duduhno (.*)/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `console.log(${match[1]});`,
  };
};

module.exports = consoleLog;
