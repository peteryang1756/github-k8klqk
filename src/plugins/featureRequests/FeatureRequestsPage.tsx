/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect} from 'react';
import Layout from '@theme/Layout';

import cannyScript from './cannyScript';
import clsx from 'clsx';

const BOARD_TOKEN = '47411913-5744-0197-e6d8-366d6812f49b';

function FeatureRequests({basePath}: {basePath: string}): JSX.Element {
  useEffect(() => {
    cannyScript();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {Canny} = window as any;
    Canny('render', {
      boardToken: BOARD_TOKEN,
      basePath,
    });
  }, [basePath]);

  return (
    <Layout title="Feedback" description="Docusaurus 2 Feature Requests page">
      <main
        className={clsx('container', 'margin-vert--lg', styles.main)}
        data-canny
      />
    </Layout>
  );
}

export default FeatureRequests;
