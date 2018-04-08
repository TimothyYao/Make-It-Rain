/* eslint-disable global-require */
import React from 'react';

export function MapPage() {
  const iframe = {
    __html: '<iframe src="https://esri.localtunnel.me/map.html" allow="geolocation *;" frameborder="0" style="border:0" width="100%" height="700px"></iframe>',
  };

  return (
    <div>
      <div dangerouslySetInnerHTML={iframe} />
    </div>
  );
}

export default (MapPage);
