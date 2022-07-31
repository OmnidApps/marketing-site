module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '17ff6e6b4819f30c7bb773682bacc95c'),
  },
});
