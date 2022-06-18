import { NextPage } from 'next'
import { getRequestInstance } from "../modules/request";
 
const Page: NextPage = ({ data }) => {
   return data.map(
      (d: any, index:number) => <div>{index}番目のデータ: {d.maxid}</div>
   )
}
Page.getInitialProps = async (ctx: any) => {
	const request = getRequestInstance(Boolean(ctx.req));
	const res = await request.get("data").then(res => res);
	return res.data;
}
export default Page