exports.config = {
    runner: 'local',
    port: 4723,
    specs: [
        './tests/features/**/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        browserName: '',
        'appium:platformVersion': '12.0',
        "appium:automationName": "UiAutomator2",
        "appium:deviceName": "Android",
        "appium:app":
          "C:/Users/A D M I N/OneDrive/Documents/demo-stripe-android/app/build/outputs/apk/dev/release/app-dev-release-unsigned.apk",
        "appium:appPackage": "com.example.demo",
        "appium:appActivity": ".ui.MainActivity",
        "appium:noReset": true,
    }],
    logLevel: 'info',
    bail: 0,    
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./tests/steps/*.js'],
    },
}
