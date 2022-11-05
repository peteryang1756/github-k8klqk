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
<div formsappId="63666da4e5740e14f43805dc"></div>
			<script src="https://my.forms.app/static/iframe.js" type="text/javascript"></script>
			<script>
				new formsapp('63666da4e5740e14f43805dc', {
					width: '100%',
					height: 'formHeight'
				});
			</script>

        </p>
      </div>
    </Layout>
  );
}
