import { IBaseAttributes } from './baseAttributes';

export interface IUserProfile extends IBaseAttributes {
  user_id: string;
  cognito_user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
  role_id: string;
  profile_image_url?: string;
  agency_id?: string;
  assigned_office?: string;
  employee_id?: string;
  job_title?: string;
  work_email?: string;
  work_phone?: string;
  last_login?: Date;
  login_attempts?: number;
}
