import { IBaseAttributes } from './baseAttributes';

export interface IModule extends IBaseAttributes {
  module_id: string;
  module_name: string;
  description?: string;
  parent_module_id?: string;
}
