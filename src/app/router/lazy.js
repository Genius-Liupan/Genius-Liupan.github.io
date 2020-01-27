/**
 * Created by Administrator on 2019/4/7.
 */
import React from 'react';

const Loading = null;

export default function lazy(loader) {
  const Component = React.lazy(loader);
  return (props = {}) => (
    <React.Suspense fallback={Loading}>
      <Component {...props} />
    </React.Suspense>
  );
}

