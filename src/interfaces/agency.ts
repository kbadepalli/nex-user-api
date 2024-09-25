import { IBaseAttributes } from './baseAttributes';

export interface IAgency extends IBaseAttributes {
  agency_id: string;
  agency_name: string;
  agency_slug: string;
  agency_type: string;
  parent_agency_id?: string;
  registration_number?: string;
  logo_url?: string;
  primary_office_address?: string;
  primary_office_phone?: string;
  primary_office_email?: string;
  website?: string;
}
