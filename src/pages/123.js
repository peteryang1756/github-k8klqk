import React from 'react';
import Layout from '@theme/Layout';
import styles from './demo.module.css';
import Translate, { translate } from '@docusaurus/Translate';

function Form() {
  return (
    <Layout title="Get a demo">
      <main>
        <div className={styles.content}>
          <h1>
            <Translate>Take Wings for a spin</Translate>
          </h1>
          <p>
            <Translate>
              Let's create a demo project that you can try out for free, no
              obligations.
            </Translate>
          </p>
        </div>
        <div className={styles.formwrapper}>
          <div className={styles.formbox}>
             <div class="formbold-main-wrapper">
  <div class="formbold-form-wrapper">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="formbold-mb-5">
        <>
  <p>&nbsp;</p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
</>

        <label for="name" class="formbold-form-label"> Full Name </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          class="formbold-form-input"
        />
      </div>

      <div class="formbold-mb-5">
        <label for="email" class="formbold-form-label"> Email Address </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          class="formbold-form-input"
        />
      </div>

      <div class="formbold-mb-5">
        <label for="subject" class="formbold-form-label"> Subject </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          class="formbold-form-input"
        />
      </div>

      <div class="formbold-mb-5">
        <label for="message" class="formbold-form-label"> Message </label>
        <textarea
          rows="6"
          name="message"
          id="message"
          placeholder="Type your message"
          class="formbold-form-input"
        ></textarea>
      </div>

      <div>
        <button class="formbold-btn">Submit</button>
<>
  <p>&nbsp;</p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
</>
      </div>
    </form>
                    placeholder="ACME"
                  ></input>
                </label>
              </p>
              <p>
                <label>
                  <Translate>Comments</Translate>{' '}
                  <textarea
                    name="comments"
                    placeholder="Any comments or requests you might have"
                    rows="3"
                  ></textarea>
                </label>
              </p>
              <p>
                <button className="button button--primary" type="submit">
                  <Translate>Get a Wings account</Translate>
                </button>
              </p>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Form;
