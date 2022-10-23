import React, { useEffect } from 'react';

const BoardToken = '47411913-5744-0197-e6d8-366d6812f49b';

const Feedback = () => {
  useEffect(() => {
    (function(w,d,i,s){function l(){if(!d.getElementById(i)){var f=d.getElementsByTagName(s)[0],e=d.createElement(s);e.type="text/javascript",e.async=!0,e.src="https://canny.io/sdk.js",f.parentNode.insertBefore(e,f)}}if("function"!=typeof w.Canny){var c=function(){c.q.push(arguments)};c.q=[],w.Canny=c,"complete"===d.readyState?l():w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})(window,document,"canny-jssdk","script");

    Canny('render', {
      boardToken: BoardToken,
      basePath: null, // See step 2
      ssoToken: null, // See step 3
    });
  }, []);

  return (
    <div data-canny />
  );
}

export default Feedback;
