import { DataTypes } from 'sequelize';
import { BaseModel } from './baseModel';
import { sequelize } from '@/config/database';
import { IOfficeLocation } from '../interfaces/officeLocation';

export class OfficeLocation extends BaseModel<IOfficeLocation, Partial<IOfficeLocation>> implements IOfficeLocation {
  public office_id!: string;
  public office_name?: string;
  public office_address?: string;
  public office_phone?: string;
  public office_email?: string;
  public manager_id?: string;
  public is_active!: boolean;

  static initModel() {
    OfficeLocation.init(
      {
        office_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        office_name: {
          type: DataTypes.STRING,
        },
        office_address: {
          type: DataTypes.STRING,
        },
        office_phone: {
          type: DataTypes.STRING,
        },
        office_email: {
          type: DataTypes.STRING,
        },
        manager_id: {
          type: DataTypes.UUID,
        },
        ...BaseModel.baseAttributes,
      },
      {
        sequelize,
        tableName: 'office_locations',
        timestamps: true,
        underscored: true,
      }
    );
  }
}
