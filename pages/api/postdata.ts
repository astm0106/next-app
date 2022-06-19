import { sqlExecuter } from "../../modules/database";

export default async (req: any, res: any) => {

    // console.log(req.body.message);

    // const querySelect = "SELECT CONCAT($1, 'plus')  AS maxid FROM kenko_record"
    const queryInsert = 'INSERT INTO msg_board (message, posting_time) VALUES ($1, NOW())';
 
    const data = await sqlExecuter.any(
        queryInsert,
        req.body.message
    );
     console.log(data);

    res.status(200).json({
        data
    });
};