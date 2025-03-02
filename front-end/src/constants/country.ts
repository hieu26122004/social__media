import MY_DE from "@assets/my_de.svg";
import TAU_CONG from "@assets/tau_cong.svg";
import NGA_NGO from "@assets/nga_ngo.svg";
import DUC from "@assets/duc.svg";
import PHAP from "@assets/phap.svg";
import ANH_QUOC from "@assets/anh_quoc.svg";
import AN_DO from "@assets/an_do.svg";
import HAN_XENG from "@assets/han_xeng.svg";
import NHAT_BAN from "@assets/nhat_ban.svg";
import UC from "@assets/uc.svg";
import VIET_NAM from "@assets/viet_nam.svg";

export const COUNTRIES = [
  { id: 1, name: "United States", code: "US", flag: MY_DE },
  { id: 2, name: "China", code: "CN", flag: TAU_CONG },
  { id: 3, name: "Russia", code: "RU", flag: NGA_NGO },
  { id: 4, name: "Germany", code: "DE", flag: DUC },
  { id: 5, name: "France", code: "FR", flag: PHAP },
  { id: 6, name: "United Kingdom", code: "GB", flag: ANH_QUOC },
  { id: 7, name: "India", code: "IN", flag: AN_DO },
  { id: 8, name: "Japan", code: "JP", flag: NHAT_BAN },
  { id: 9, name: "South Korea", code: "KR", flag: HAN_XENG },
  { id: 10, name: "Vietnam", code: "VN", flag: VIET_NAM },
  { id: 11, name: "Australia", code: "AU", flag: UC },
];

export type Country = (typeof COUNTRIES)[0];
