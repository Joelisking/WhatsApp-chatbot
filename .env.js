const production = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: '9000',
  Meta_WA_accessToken:
    'EAAFZBgKKB2dwBO2b5YVWlekZBmO4QemGdYdG85dbNZAXQXqFcdCTBjrpro9TaTUshFOvZCZBdKZAnAlSE9hkJ66C6F7payrcYSz8AEhcdnLmKPnHHleswPTHvSP6XAED1IWrDGZAqUNBh0ybqUAgupbnBsBCjtIIphoNeQbg8su6QynPCLxrhQbWOFw4ZBMM7Pd9HjhLhXeJgpIPyD0a49cZD',
  Meta_WA_SenderPhoneNumberId: '100839153050711',
  Meta_WA_wabaId: '100865203048011',
  Meta_WA_VerifyToken: '121232',
};

const fallback = {
  ...process.env,
  NODE_ENV: undefined,
};

module.exports = (environment) => {
  console.log(`Execution environment selected is: "${environment}"`);
  if (environment === 'production') {
    return production;
  } else if (environment === 'development') {
    return development;
  } else {
    return fallback;
  }
};
