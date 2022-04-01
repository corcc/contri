import { filter } from '../util/Match';
import * as Keywords from './Keywords';
export const Cases = {
	Seoul: Keywords.Seoul,
	Busan: Keywords.Busan,
	Daegu: Keywords.Daegu,
	Incheon: Keywords.Incheon,
	Gwangju: Keywords.Gwangju,
	Daejeon: Keywords.Daegu,
	Ulsan: Keywords.Ulsan,
	Sejong: Keywords.Sejong,
	'Gyeonggi-do': Keywords.GyeonggiDo,
	'Gangwon-do': Keywords.GangwonDo,
	'Chungcheongbuk-do': Keywords.ChungcheongbukDo,
	'Chungcheongnam-do': Keywords.ChungcheongnamDo,
	'Jeollabuk-do': Keywords.JeollabukDo,
	'Jeollanam-do': Keywords.JeollanamDo,
	'Gyeongsangbuk-do': Keywords.GyeongsangbukDo,
	'Gyeongsangnam-do': Keywords.GyeongsangnamDo,
	Jeju: Keywords.Jeju,
	Name
};
const js = JSON.stringify;
const jp = JSON.parse;
function Name (query:string) {
	return filter(query, jp(js(Cases)));
}
