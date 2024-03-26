import React, { useEffect } from 'react';
import Pusher from 'pusher-js';

const App = () => {
  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher('1865e20163cf542db5f2', {
      cluster: 'sa1'
    });

    const channel = pusher.subscribe('canal-cambios');
    channel.bind('event-cambios', (e) => {
      const data = JSON.parse(e.mensaje);
      console.log(data);
    });

    channel.bind('pusher:subscription_succeeded', () => {
      console.log('Suscripción al canal canal-cambios fue exitosa!');
    });

    return () => {
      channel.unbind('event-cambios');
      channel.unbind('pusher:subscription_succeeded');
      channel.unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>Pusher Test</h1>
      <p>Try publishing an event to channel <code>canal-cambios</code> with event name <code>event-cambios</code>.</p>
    </div>
  );
};

export default App;
