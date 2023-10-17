import ReactDOM from 'react-dom';
import GoogleAds from './google-ads';

const appRoot = document.getElementById('google-adsense');

ReactDOM.render(
  <GoogleAds
    client=""
    slot=""
    style={{ display: 'inline-block', width: '100%', }}
  />, appRoot
);