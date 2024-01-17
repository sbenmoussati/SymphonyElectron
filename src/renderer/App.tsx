import { Routes, Route, HashRouter, BrowserRouter, Router } from 'react-router-dom';
import React from 'react';
import LoadingScreen from './components/loading-screen/loading-screen';
import BasicAuth from './components/basic-auth/basic-auth';

const Welcome = React.lazy(() => import('./components/welcome/welcome'));
const SnippingTool = React.lazy(
  () => import('./components/snipping-tool/snipping-tool')
);
const AboutApp = React.lazy(() => import('./components/about-app/about-app'));
const NotificationSettings = React.lazy(
  () => import('./components/notifications/notification-settings')
);
const NotificationComp = React.lazy(
  () => import('./components/notifications/notification-comp/notification-comp')
);
const CallNotification = React.lazy(
  () => import('./components/notifications/call-notification/call-notification')
);
const ScreenSharingIndicator = React.lazy(
  () => import('./components/screen-sharing-indicator/screen-sharing-indicator')
);
const ScreenPicker = React.lazy(
  () => import('./components/screen-picker/screen-picker')
);

const WindowsTitleBar = React.lazy(
  () => import('./components/windows-title-bar/windows-title-bar')
);

function getRoutes() {
  return (
    <Routes>
      <Route path='/windows-title-bar' Component={WindowsTitleBar}/>
      <Route path="/about" element={<AboutApp />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/snipping-tool" element={<SnippingTool />} />
      <Route path="/notification-settings" element={<NotificationSettings />} />
      <Route path="/notification" element={<NotificationComp />} />
      <Route path="/call-notification" element={<CallNotification />} />
      <Route path="/loading-screen" element={<LoadingScreen />} />
      <Route path="/basic-auth" element={<BasicAuth />} />
      <Route
        path="/screen-sharing-indicator"
        element={<ScreenSharingIndicator />}
      />
      <Route path="/screen-picker" element={<ScreenPicker />} />
    </Routes>
  );
};
export default function App() {
  return (
      <HashRouter>{ getRoutes() }</HashRouter>
  );
}

/**
 *TODO: remaining tasks
 *
 * Handle listeners removal on component unmount
 * Components: 
 *  - Call notifications
 * Presence status in sys tray / task bar
 */
