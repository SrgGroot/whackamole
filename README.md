# whackamole
Whack a mole game hosted on AWS (AWS Amplify) with cognito login, dynamoDB for storage, and graphql API.

Made to apply for the react native developer position at SmartPath. Hope you guys like it!

I have a Windows laptop, so I was not able to develop this for iOS. Please run the game on android for an optimal experience.

## Steps to run the react-native app

1) clone the repository
2) `npm install` and `cd whackamole`
3) `npm run android` with an android device (with developer options and usb debugging enabled) connected to the computer
4) run `amplify init` in the root folder of the cloned project You should see the following options provided by the CLI
```
E:\projects\whackamole_test\whackamole>amplify init
Note: It is recommended to run this command from the root of your app directory
? Do you want to use an existing environment? Yes
? Choose the environment you would like to use: dev
? Choose your default editor: Visual Studio Code
Using default provider  awscloudformation


For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use sgroot-profile

√ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```
  
  >To enable USB debugging on your device, you will first need to enable the "Developer options" menu by going to Settings → About phone → Software information and then tapping the Build number row at the bottom seven times. You can then go back to Settings → Developer options to enable "USB debugging".
