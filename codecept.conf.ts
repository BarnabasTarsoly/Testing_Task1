import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: 'c:/hellojs2/cart_test.ts',
  output: 'c:/hellojs2/output',
  helpers: {
    Appium: {
      app: 'c:/hellojs2/nennospizza.apk',
      platform: 'Android',
      device: 'Pixel_3_API_30',
      desiredCapabilities: {
        "platformName": "Android",
        "platformVersion": "11.0",
        "deviceName": "Pixel_3_API_30",
        "automationName": "UIAutomator2",
        "app": "c:/hellojs2/nennospizza.apk"
      }
    }
  },
  include: {},
  name: 'hellojs2'
}