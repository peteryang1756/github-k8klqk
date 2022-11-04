import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="聯繫" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p><iframe
  src="https://ssport.surveysparrow.com/s/Contact-Form/tt-viQ3pV8AhXTXds2ypscmCZ?"
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    border: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    zIndex: 999999
  }}
>
  Your browser doesn't support iframes
</iframe>

      </div>
    </Layout>
  );
}
