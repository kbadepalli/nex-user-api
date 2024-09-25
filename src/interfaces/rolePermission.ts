import { IBaseAttributes } from './baseAttributes';

export interface IRolePermission extends IBaseAttributes {
  role_permission_id: string;
  role_id: string;
  permission_id: string;
}
