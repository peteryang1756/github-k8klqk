import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="聯繫" description="有任何問題嗎？我們很樂意聽取您的意見。向我們發送訊息，我們會儘快回復。">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
<iframe
  width="100%"
  height="formHeight"
  id="iframe"
  scrolling="no"
  src="https://ssport.surveysparrow.com/s/Contact-Form/tt-viQ3pV8AhXTXds2ypscmCZ?"
  style={{ border: 0, overflow: "hidden", height: 2338 }}
/>

        </p>
      </div>
    </Layout>
  );
}
