package com.rn_ts_daugia;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.geotechvn.dakland.ui.splash.SplashActivity;

import java.util.Map;
import java.util.HashMap;

public class OnLandMapModule extends ReactContextBaseJavaModule {
    ReactApplicationContext context = getReactApplicationContext();
    OnLandMapModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "OnLandMapModule";
    }

    @ReactMethod
    public void createMapEvent() {
        Log.i("OnLandMap", "This is OnLand Map module");
    }

    @ReactMethod
    public void newMapIntent() {
        Intent intent = new Intent(context, SplashActivity.class);
        if(intent.resolveActivity(context.getPackageManager()) != null) {
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getCurrentActivity().startActivity(intent);
        }
    }
}
