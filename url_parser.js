function parseURL(format, url) {
  const formatParts = format.split('/');
  const urlParts = url.split('/');

  const result = {};

  for (let i = 0; i < formatParts.length; i++) {
    if (formatParts[i].startsWith(':')) {
      const variableName = formatParts[i].substring(1);
      const variableValue = urlParts[i];

      if(i == formatParts.length -1) {
        const lastVariableParts = variableValue.split('?')
        result[variableName] = lastVariableParts[0];
      } else {
        result[variableName] = variableValue;
      }
    }
  }

  const urlParamsString = url.split('?')[1];
  if (urlParamsString) {
    const urlParams = urlParamsString.split('&');
    for (const param of urlParams) {
      const [paramName, paramValue] = param.split('=');
      result[paramName] = paramValue;
    }
  }

  return result;
}



const format = '/:version/api/:collection/:id';
const url = '/6/api/listings/3?sort=desc&limit=10'
const result = parseURL(format, url);
console.log(result);