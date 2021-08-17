const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  assetPrefix: !debug ? '/react-f7-icons/' : '',
}
