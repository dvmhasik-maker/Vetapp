import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { App as CapacitorApp } from '@capacitor/app';
import { Toast } from '@capacitor/toast';

export default function AndroidBackButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const lastBackPressed = useRef(0);

  useEffect(() => {
    const listener = CapacitorApp.addListener(
      'backButton',
      async () => {

        // 홈이 아니면 이전 페이지로 이동
        if (location.pathname !== '/') {
          navigate(-1);
          return;
        }

        // 홈에서는 두 번 눌러 종료
        const now = Date.now();

        if (now - lastBackPressed.current < 2000) {
          await CapacitorApp.exitApp();
        } else {
          lastBackPressed.current = now;

          await Toast.show({
            text: '한 번 더 누르면 종료됩니다.',
            duration: 'short',
          });
        }
      }
    );

    return () => {
      listener.then((l) => l.remove());
    };
  }, [location.pathname, navigate]);

  return null;
}