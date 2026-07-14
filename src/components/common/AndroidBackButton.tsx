import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { App as CapacitorApp } from '@capacitor/app'
import { Toast } from '@capacitor/toast'

export default function AndroidBackButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const lastBackPressed = useRef(0);

  useEffect(() => {
    const listener = CapacitorApp.addListener('backButton', async () => {
      console.log('[BackButton] pathname:', JSON.stringify(location.pathname));

      if (location.pathname !== '/') {
        console.log('[BackButton] treated as NOT home, navigating back');
        navigate(-1);
        return;
      }

      console.log('[BackButton] treated as HOME');
      const now = Date.now();
      if (now - lastBackPressed.current < 2000) {
        console.log('[BackButton] calling exitApp');
        await CapacitorApp.exitApp();
      } else {
        lastBackPressed.current = now;
        try {
          await Toast.show({
            text: '한 번 더 누르면 종료됩니다.',
            duration: 'short',
          });
          console.log('[BackButton] Toast succeeded');
        } catch (err) {
          console.error('[BackButton] Toast FAILED:', err);
        }
      }
    });

    return () => {
      listener.then((l) => l.remove());
    };
  }, [location.pathname, navigate]);

  return null;
}