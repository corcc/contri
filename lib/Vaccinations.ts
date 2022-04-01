import { filter } from '../util/Match';
import * as Keywords from './Keywords';
export const Vaccinations = {
	서울특별시: Keywords.Seoul,
	부산광역시: Keywords.Busan,
	대구광역시: Keywords.Daegu,
	인천광역시: Keywords.Incheon,
	광주광역시: Keywords.Gwangju,
	대전광역시: Keywords.Daejeon,
	울산광역시: Keywords.Ulsan,
	세종특별자치시: Keywords.Sejong,
	경기도: Keywords.GyeonggiDo,
	강원도: Keywords.GangwonDo,
	충청북도: Keywords.ChungcheongbukDo,
	충청남도: Keywords.ChungcheongnamDo,
	전라북도: Keywords.JeollabukDo,
	전라남도: Keywords.JeollanamDo,
	경상북도: Keywords.GyeongsangbukDo,
	경상남도: Keywords.GyeongsangnamDo,
	제주특별자치도: Keywords.Jeju,
	Name
};

const js = JSON.stringify;
const jp = JSON.parse;

function Name (query:string) {
	return filter(query, jp(js(Vaccinations)));
}
