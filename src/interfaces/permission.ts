import { IBaseAttributes } from './baseAttributes';

export interface IPermission extends IBaseAttributes {
  permission_id: string;
  module_id: string;
  permission_name: string;
}
