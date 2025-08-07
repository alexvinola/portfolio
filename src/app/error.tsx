'use client';
 
import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string }; // Error estándar de JS + extra info
  reset: () => void;                  // Función para reiniciar el error
};

export default function Error({ error, reset }: ErrorProps) {
  // Opcional: efecto si quieres hacer algo cuando cambia el error
  useEffect(() => {
    // Puedes hacer tracking/log, o limpiarlo
    // console.error(error);
  }, [error]);

  return (
    <div>
      <h2>¡Ha ocurrido un error!</h2>
      <pre>{error.message}</pre>
      <button onClick={() => reset()}>Intentar de nuevo</button>
    </div>
  );
}
