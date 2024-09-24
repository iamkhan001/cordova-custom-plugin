package com.sa.anb.myplugin;

import org.apache.cordova.CordovaPlugin;


import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Context;
import android.widget.Toast;
import android.util.Log;

/**
 * This class echoes a string called from JavaScript.
 */
public class MyPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        
        Log.e("action", "action >> "+action+ ", args >> "+args);
        
        if (action.equals("coolMethod")) {
            // String message = args.getString(0);

            int n1 = args.getInt(0);
            int n2 = args.getInt(1);

            this.coolMethod(n1, n2, callbackContext);
            return true;
        }else if(action.equals("showtoast") || action.equals("echo")) {
            
            String message = args.getString(0);
            showtoast(message, callbackContext);
            return true;
        }
        return false;
    }

    private void coolMethod(int n1, int n2, CallbackContext callbackContext) {


        if (n1 != 0 && n2 != 0) {
            int r = n1 + n2;
            String message = "Result is: " + n1 + " + " + n2 + " = " + r;
            
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected number > 0.");
        }
    }

    private void showtoast(String messsage, CallbackContext callbackContext) {
        Context context=this.cordova.getActivity().getApplicationContext();
        Toast.makeText(context, messsage, Toast.LENGTH_SHORT).show();
        callbackContext.success("success");
    }
}
