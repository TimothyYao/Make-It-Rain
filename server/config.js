const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://user1:password1@ds237409.mlab.com:37409/make_it_rain',
  port: process.env.PORT || 8000,
};

export default config;
