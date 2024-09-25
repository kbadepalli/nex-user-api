import { DataTypes } from 'sequelize';
import { BaseModel } from './baseModel';
import { sequelize } from '@/config/database';
import { IPermission } from '../interfaces/permission';

export class Permission extends BaseModel<IPermission, Partial<IPermission>> implements IPermission {
  public permission_id!: string;
  public module_id!: string;
  public permission_name!: string;
  public is_active!: boolean; // Inherited from base interface

  static initModel() {
    Permission.init(
      {
        permission_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        module_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        permission_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        ...BaseModel.baseAttributes,
      },
      {
        sequelize,
        tableName: 'permissions',
        timestamps: true,
        underscored: true,
      }
    );
  }
}
