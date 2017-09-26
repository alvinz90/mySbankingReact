This is a demo mobile banking React Native project to show basic mobile banking process (login screen --> account summary page with mock data).
  
## How to use this Demo project  

*This project does not work on its own*. 

To use this demo project, follow these steps to setup your local dev enviroment:  

1) Get Node.js installed. https://nodejs.org/en/

2) install react-native cli: within the node.js command window, input this command:

*		npm i -g react-native-cli

3) create this app with this command:

*		react-native init mySbankingReact

4) install react navigation:

*		cd mySbankingReact
*		npm i --save react-navigation

5) install lodash (for json array grouping -- for sectionlist databinding ):

*		cd mySbankingReact

### npm install:

*      npm i -g npm
*      npm i --save lodash

### or you can do the yarn install: 

*      yarn add lodash 

6) get the source code files from github and merge them into the directory of 'mySbankingReact' (overwrite 'index.android.js' and 'index.ios.js')

7) launch the app using the command below (for android / ios):

*		react-native run-android 
*		react-native run-ios 

## Generate Android unsigned APK

To generate Android unsigned APK that can run on the android device without using the React Package server, use the steps below:

*		react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug *

Create debug build:

Mac:

*		cd android 
*		./gradlew assembleDebug 

windows:

*		cd android 
*		gradlew assembleDebug 
------------------------------------------------------------------------------------------------------------------

## IOS / Android Debug 

### Method 1
Press Cmd + D (shake the device for Android) to get the [react developer menu], and click 'Debug JS Remotely'; make sure the react Package server is up and running; open Chrome browser, type in this url:

http://localhost:8081/debugger-ui

### Method 2
within the terminal / command window, type in these commands (ios / android) for the log:

*		react-native log-ios 	
*		react-native log-android 

use the console.log to print the variables' values.
