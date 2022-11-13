import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="聯絡" description="聯絡我們">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
   <>
  <p>&nbsp;</p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
</>
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
</>
     
    <div className="example-form example-form_before">
  <div className="example-title">聯絡</div>
  <form
    method="post"
    action="https://send.pageclip.co/uLHUxztMTNIK2IljRIEgBJh6JVi7QruG/Site-contact"
  >
    <div className="form-group">
      <label>名稱</label>
      <input
        className="form-control"
        type="text"
        name="name"
        placeholder="peter"
       required
      />
      <label>電子郵件</label>
      <input
        required=""
        className="form-control"
        type="email"
        name="email"
        data-valuemissing="Need an email!"
        data-patternmismatch="Only a and b characters allowed!"
        placeholder="test@test.com"
       required
      />
    </div>
    <div className="form-group">
      <label>內容</label>
      <textarea
        required=""
        className="form-control"
        name="內容"
        pattern="[ab ]+"
        rows={4}
        data-valuemissing="Write me a story plz"
        data-patternmismatch="Plz only a and b characters!"
        placeholder="Tell me a story!"
        defaultValue={""}
       required
      />
    </div>
    <button type="submit">Submit</button>
  </form>
   <>
  <p>&nbsp;</p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
</>
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
</>

  <link rel="stylesheet" href="https://ssangyongsports.github.io/1.css" />
</div>

        </p>
      </div>
    </Layout>
  );
}
