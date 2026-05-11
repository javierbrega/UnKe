import { useState, useEffect } from 'react';

type GeolocationStatus = 'idle' | 'loading' | 'success' | 'error' | 'denied';

interface GeolocationState {
  status: GeolocationStatus;
  latitude: number | null;
  longitude: number | null;
  error: string | null;
  denied: boolean;
}

export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>(() => {
    // Intentar leer de localStorage al inicio
    const saved = localStorage.getItem('unke_location');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          status: 'success',
          latitude: parsed.latitude,
          longitude: parsed.longitude,
          error: null,
          denied: false,
        };
      } catch (e) {
        // Ignorar error de parsing
      }
    }
    
    return {
      status: 'idle',
      latitude: null,
      longitude: null,
      error: null,
      denied: false,
    };
  });

  const requestGeolocation = () => {
    if (!navigator.geolocation) {
      setState({
        status: 'error',
        latitude: null,
        longitude: null,
        error: 'Geolocalización no soportada por el navegador.',
        denied: false,
      });
      return;
    }

    setState((prev) => ({ ...prev, status: 'loading' }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newState: GeolocationState = {
          status: 'success',
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
          denied: false,
        };
        setState(newState);
        localStorage.setItem('unke_location', JSON.stringify({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          timestamp: Date.now()
        }));
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          setState({
            status: 'denied',
            latitude: null,
            longitude: null,
            error: 'Permiso de ubicación denegado.',
            denied: true,
          });
        } else {
          setState({
            status: 'error',
            latitude: null,
            longitude: null,
            error: error.message,
            denied: false,
          });
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 5 * 60 * 1000, // 5 minutos
      }
    );
  };

  return { ...state, requestGeolocation };
}
