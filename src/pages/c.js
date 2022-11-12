import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="聯繫" description="聯繫雙龍體育">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          <div class="formbold-main-wrapper">
  <div class="formbold-form-wrapper">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="formbold-mb-5">
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
      </div>
    </form>
  </div>
</div>
        </p>
      </div>
    </Layout>
  );
}
