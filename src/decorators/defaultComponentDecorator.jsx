// @flow

import * as React from 'preact-compat';

export default (decoratedHref: string, decoratedText: string, key: number): React.Node => {
  return (
    <a href={decoratedHref} key={key}>
      {decoratedText}
    </a>
  );
};
