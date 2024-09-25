import { IBaseAttributes } from './baseAttributes';

export interface IRole extends IBaseAttributes {
  role_id: string;
  role_name: string;
  role_description?: string;
}
