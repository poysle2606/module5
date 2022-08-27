import {BenhNhan} from '../../benh-nhan/benh-nhan/model/benh-nhan';

export interface BenhAn {
  id?: number;
  codePatient?: string;
  patienter?: BenhNhan;
  startDay?: string;
  endDay?: string;
  reason?: string;
  method?: string;
  doctor?: string;
}
