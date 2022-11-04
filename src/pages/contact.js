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
        <p>
          <div id="ss_survey_widget"></div>
  <script id="SS_SCRIPT">function sparrowLaunch(opts){var e="ss-widget",t="script",a=document,r=window,l=localStorage;var s,n,c,rm=a.getElementById('SS_SCRIPT');r.SS_WIDGET_TOKEN="tt-rXeAftBoHPXvEapvtFarHk";r.SS_ACCOUNT="ssport.surveysparrow.com";r.SS_SURVEY_NAME="Contact-Form";if(!a.getElementById(e) && !l.getItem('removed-ss-widget-tt-rXeAftBoHPXvEapvtFarHk')){var S=function(){S.update(arguments)};S.args=[];S.update=function(e){S.args.push(e)};r.SparrowLauncher=S;s=a.getElementsByTagName(t);c=s[s.length-1];n=a.createElement(t);n.type="text/javascript";n.async=!0;n.id=e;n.src=["https://","ssport.surveysparrow.com/widget/",r.SS_WIDGET_TOKEN,"?","customParams=",JSON.stringify(opts)].join("");c.parentNode.insertBefore(n,c);r.SS_VARIABLES=opts;rm.parentNode.removeChild(rm);}};</script>
  <script>sparrowLaunch({/*add custom params here*/})</script>
      </div>
    </Layout>
  );
}
