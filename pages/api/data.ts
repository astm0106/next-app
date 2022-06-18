import { sqlExecuter } from "../../modules/database";
 
export default async (req: any, res: any) => {
 
	const data = await sqlExecuter.any(
               "SELECT MAX(CAST(id AS INTEGER)) AS maxid FROM kenko_record"
        );
	res.status(200).json({
		data
	});
};