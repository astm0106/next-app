import { sqlExecuter } from "../../modules/database";

export default async (req: any, res: any) => {

	const querySelect =
    "SELECT\
         message\
        ,to_char(posting_time, 'YYYY/MM/DD HH24:MI:SS') AS posting_time\
    FROM\
         msg_board\
    ORDER BY\
         posting_time DESC\
    LIMIT 50";

    const data = await sqlExecuter.any(querySelect);
    // console.log(data);

    res.status(200).json({
        data
    });
};