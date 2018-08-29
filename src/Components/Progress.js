import React from 'react';

const Progress = () => (
  <section>
    <div className="progress">
      <div
        className="progress-bar progress-bar-black progress-bar-striped bg-success progress-bar-animated"
        role="progressbar"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  </section>
);

export default Progress;
