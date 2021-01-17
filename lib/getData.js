const fs = require('fs')
const path = require('path')

const getData = configPath => {
  const {
    coverageThreshold: { global: thresholds },
    coverageDirectory = 'coverage',
  } = require(configPath)
  const reportPath = path.resolve(
    process.cwd(),
    coverageDirectory,
    'coverage-summary.json',
  )
  const { total: coverages } = JSON.parse(fs.readFileSync(reportPath, 'utf8'))

  return { thresholds, coverages }
}

module.exports = getData
