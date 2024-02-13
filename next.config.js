const path = require('path')

module.exports = {

    webpack: config => {
        config.resolve.alias['src/components'] = path.join(__dirname, 'components')
        config.resolve.alias['src/utils'] = path.join(__dirname, 'utils')
        config.resolve.alias['public'] = path.join(__dirname, 'public')

        return config
    },
}
