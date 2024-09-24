@objc(MyPlugin) class MyPlugin : CDVPlugin {
  
    @objc(echo: ) func echo(command: CDVInvokedUrlCommand) {
    var pluginResult = CDVPluginResult(
      status: CDVCommandStatus_ERROR
    )

    let msg = command.arguments[0] as? String ?? ""

    if msg.characters.count > 0 {
      /* UIAlertController is iOS 8 or newer only. */
      let toastController: UIAlertController =
        UIAlertController(
          title: "",
          message: msg,
          preferredStyle: .alert
        )
  
        self.viewController?.present(
        toastController,
        animated: true,
        completion: nil
      )

        Task {
            try await Task.sleep(nanoseconds: 4000000000)
            //Execute your code here
            DispatchQueue.main.async {
                toastController.dismiss(
                    animated: true,
                  completion: nil
                )
            }
        }

      pluginResult = CDVPluginResult(
        status: CDVCommandStatus_OK,
        messageAs: msg
      )
    }

      self.commandDelegate!.send(
      pluginResult,
      callbackId: command.callbackId
    )
  }


    @objc(showtoast: ) func showtoast(command: CDVInvokedUrlCommand) {
    var pluginResult = CDVPluginResult(
      status: CDVCommandStatus_ERROR
    )

    let msg = command.arguments[0] as? String ?? ""

    if msg.characters.count > 0 {
      /* UIAlertController is iOS 8 or newer only. */
      let toastController: UIAlertController =
        UIAlertController(
          title: "",
          message: msg,
          preferredStyle: .alert
        )
  
        self.viewController?.present(
        toastController,
        animated: true,
        completion: nil
      )

        Task {
            try await Task.sleep(nanoseconds: 4000000000)
            //Execute your code here
            DispatchQueue.main.async {
                toastController.dismiss(
                    animated: true,
                  completion: nil
                )
            }
        }

      pluginResult = CDVPluginResult(
        status: CDVCommandStatus_OK,
        messageAs: msg
      )
    }

      self.commandDelegate!.send(
      pluginResult,
      callbackId: command.callbackId
    )
  }
}
