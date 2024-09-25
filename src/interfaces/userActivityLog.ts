import { IBaseAttributes } from './baseAttributes';

export interface IUserActivityLog extends IBaseAttributes {
  activity_id: string;
  user_id: string;
  activity_type: string;
  activity_description?: string;
  activity_timestamp: Date;
}
