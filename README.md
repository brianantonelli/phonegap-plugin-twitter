Add Twitter Framework
- Click app name in XCode
- Click your target
- Click Summary
- Scroll to Linked Frameworks and Libraries
- Click add (+)
- Select iOS5 / Twitter.framework
- Click add

Add plugin to Phonegap.plist
- Key: Twitter
- Value: Twitter

Add wildcard entry to external hosts whitelist (PhoneGap.plist/ExternalHosts)

If you have issues with the app crashing on iOS Simulator you may have a linker issue. For more information see: http://stackoverflow.com/questions/6738858/use-of-blocks-crashes-app-in-iphone-simulator-4-3-xcode-4-2-and-4-0-2