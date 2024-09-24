This is demo code to create custom plugin using `plugman` for cordova platform. 
In this example I have created custom plugin `MyPlugin` and imported it into cordova project `alert-plugin`.

Use below command to create new plugin

`$ plugman create --name MyPlugin --plugin_id com-cordova-plugins-myplugin --plugin_version 0.0.1 --path ./`

then create folders for android and ios platforms, 
`platforms/android`
`platforms/ios`

follow code in `MyPlugin.swift` and `MyPlugin.java` files.

For iOS, I have used swift instead of Objective C, for this you will need to create Bridging Headers but as we used swift need to import swift support library.

`$ cordova plugin add cordova-plugin-add-swift-support --save`

after all this, add plugin to your cordova project and test.
