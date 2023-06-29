module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    _keys: env.array('APP_KEYS'),
    get keys() {
      return this._keys;
    },
    set keys(value) {
      this._keys = value;
    },
  },
});
