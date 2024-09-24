/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // document.getElementById('deviceready').classList.add('ready');
    // testAlertPlugin();
    getDeviceInfo();
    testToastPlugin();
}

const getDeviceInfo = () => {

    console.log('platform >> ', device.platform);

    document.getElementById('version').innerHTML = device.cordova;
    document.getElementById('model').innerHTML = device.model;
    document.getElementById('platform').innerHTML = device.platform;
    document.getElementById('uuid').innerHTML = device.uuid;
    document.getElementById('androidVersion').innerHTML = device.androidVersion;
    document.getElementById('isVirtual').innerHTML = device.isVirtual;
    document.getElementById('serialNo').innerHTML = device.serialNo;

    try{
        testEchoPlugin();
    }catch(e) {
        console.log('Error > ', e)
    }

    try{
        testToastPlugin();
    }catch(e) {
        console.log('Error > ', e)
    }

    console.log('test plugins');

}

const onPluginSuccess = (result) => {
    alert(result);
}

const onPluginError = (message) => {
    alert(message);
}

const testMyPlugin = () => {
    const n1 = 0;
    const n2 = 0;

    setTimeout(() => {
        cordova.exec(onPluginSuccess, onPluginError, 'MyPlugin', 'coolMethod', [n1, n2]);
    }, 3000);
}

const testToastPlugin = () => {
    setTimeout(() => {
        cordova.exec(onPluginSuccess, onPluginError, 'MyPlugin', 'showtoast', ["Hello World!"]);
    }, 3000);
}


const testEchoPlugin = () => {
    setTimeout(() => {
        cordova.exec(onPluginSuccess, onPluginError, 'MyPlugin', 'echo', ["Hello World!"]);
    }, 3000);
}


const testAlertPlugin = () => {
    window.plugins.alertPlugin.show('Hello', 'I am a native Android alert dialog.', function() {
        console.log('We have a success!');
        }, function(err) {
        console.log('There was an error: ' + err);
    });
}