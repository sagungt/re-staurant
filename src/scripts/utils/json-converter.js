const JSONConvert = {
  toString: (json) => JSON.stringify(json).replaceAll('\'', '\\\'').replaceAll('"', '\''),
  toJson: (string) => JSON.parse(string.replaceAll('\'', '"').replaceAll('\'', '\\\'')),
};

export default JSONConvert;
