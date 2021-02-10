const _Environments = {
  development: {
    BASE_URL: 'http://3.130.146.97/webservices/api/',
    LOGIN: 'login',
  },
};

function getEnvironment() {
  const platform = 'development';
  return _Environments[platform];
}

const Environment = getEnvironment();
module.exports = Environment;
