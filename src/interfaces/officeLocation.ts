import { IBaseAttributes } from './baseAttributes';

export interface IOfficeLocation extends IBaseAttributes {
  office_id: string;
  office_name?: string;
  office_address?: string;
  office_phone?: string;
  office_email?: string;
  manager_id?: string;
}
