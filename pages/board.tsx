import { NextPage } from 'next'
import Layout from '../components/layout'
import styles from '../styles/stylecomp/Board.module.css'
import { getRequestInstance } from "../modules/request";
import { useState } from 'react';

const Page: NextPage = ({ data }: any) => {

  //送信フォームの値
  const [message, setMessage] = useState('');
  //データ一覧
  const [result, setResult] = useState(data);

  return (
    <div>
      <Layout
        title="掲示板"
        description="掲示板"
      >
        <h1>掲示板</h1>
        <div className={styles.msgForm}>
          <div>
            <form>
              <textarea
                placeholder='メッセージを入力してください'
                rows={3}
                cols={20}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </form>
            <button onClick={() => addMsg()}>送信</button>
          </div>
        </div>
        <div className={styles.msgList}>
          {result.map(
            (d: any, index: number) =>
              <div key={index}>
                <div className={styles.text}>
                  {d.message}
                </div>
                <div className={styles.timestamp}>
                  {d.posting_time}
                </div>
              </div>
          )}
        </div>
      </Layout>
    </div>
  )
  //送信ボタンを押した時、空欄でなければメッセージが送信される
  function addMsg() {
    console.log(process.env.NEXT_PUBLIC_TEST)
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
    const req = await request.post("postdata", jsonData);
    setMessage("");

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