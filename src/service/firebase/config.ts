import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_SECURE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: 'fir-auth-574cc',
  storageBucket: 'fir-auth-574cc.appspot.com',
  messagingSenderId: '666425866908',
  appId: '1:666425866908:web:23c5385019987dc383cb59',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
