module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnviroment: "node",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    }
}