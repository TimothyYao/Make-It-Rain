/* eslint-disable global-require */
import React from 'react';

export function MapPage() {
  const iframe = {
    __html: '<iframe src="./katherines_base.html" width="540" height="450"></iframe>',
  };

  return (
    <div>
      <div dangerouslySetInnerHTML={iframe} />
    </div>
  );
}

export default (MapPage);
