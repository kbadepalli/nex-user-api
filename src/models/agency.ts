import { DataTypes } from 'sequelize';
import { BaseModel } from './baseModel';
import { sequelize } from '@/config/database';
import { IAgency } from '../interfaces/agency';

export class Agency extends BaseModel<IAgency, Partial<IAgency>> implements IAgency {
  public agency_id!: string;
  public agency_name!: string;
  public agency_slug!: string;
  public agency_type!: string;
  public parent_agency_id?: string;
  public registration_number?: string;
  public logo_url?: string;
  public primary_office_address?: string;
  public primary_office_phone?: string;
  public primary_office_email?: string;
  public website?: string;
  public is_active!: boolean;

  static initModel() {
    Agency.init(
      {
        agency_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        agency_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        agency_slug: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        agency_type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        parent_agency_id: {
          type: DataTypes.UUID,
        },
        registration_number: {
          type: DataTypes.STRING,
        },
        logo_url: {
          type: DataTypes.STRING,
        },
        primary_office_address: {
          type: DataTypes.STRING,
        },
        primary_office_phone: {
          type: DataTypes.STRING,
        },
        primary_office_email: {
          type: DataTypes.STRING,
        },
        website: {
          type: DataTypes.STRING,
        },
        ...BaseModel.baseAttributes,
      },
      {
        sequelize,
        tableName: 'agencies',
        timestamps: true,
        underscored: true,
      }
    );
  }
}
