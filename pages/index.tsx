import { NextPage } from 'next'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { getRequestInstance } from "../modules/request";
import { useState } from 'react';

const Page: NextPage = ({ data }: any) => {
  //カウントボタン
  const [count, setCount] = useState(0);
  //送信フォームの値
  const [message, setMessage] = useState('');
  //データ一覧
  const [result, setResult] = useState(data);

  return (
    <div className={styles.center}>
      <Layout
        title="ホームページタイトル"
        description="ホームページ概要"
      >
        <p>ホームページコンテンツ</p>
      </Layout>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(cnt => cnt + 1)}>
          increment
        </button>
        <button onClick={() => setCount(cnt => cnt - 1)}>
          decrement
        </button>
        <form className='fetchForm'>
          <textarea
            placeholder='メッセージを入力してください'
            rows={4}
            cols={40}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </form>
        <button onClick={() => addMsg()}>メッセージ送信</button>
      </div>
      <ul>
        {result.map(
          (d: any, index: number) => <li key={index}>No.{index + 1}: {d.message}<br/>{d.posting_time}</li>
        )}
      </ul>
    </div>
  )
  //送信ボタンを押した時、空欄でなければメッセージが送信される
  function addMsg() {
    if (message !== "") {
      addMsgExecute();
    }
  }
 //メッセージ送信の実処理
  async function addMsgExecute() {
    const jsonData = {
      message: message
    }
    const request = getRequestInstance(true);
    // const req = await request.post("postdata", jsonData);
    // setMessage("");

    const res = await request.get("data").then(res => res);
    const array = res.data.data;
    console.log(array);
    setResult(array);
  }

}

//画面が最初に描画されるとき
Page.getInitialProps = async (ctx: any) => {
  const request = getRequestInstance(Boolean(ctx.req));
  const res = await request.get("data").then(res => res);
  return res.data;
}



export default Page