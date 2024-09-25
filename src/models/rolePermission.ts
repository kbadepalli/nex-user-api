import { DataTypes } from 'sequelize';
import { BaseModel } from './baseModel';
import { sequelize } from '@/config/database';
import { IRolePermission } from '../interfaces/rolePermission';

export class RolePermission extends BaseModel<IRolePermission, Partial<IRolePermission>> implements IRolePermission {
  public role_permission_id!: string;
  public role_id!: string;
  public permission_id!: string;
  public is_active!: boolean;

  static initModel() {
    RolePermission.init(
      {
        role_permission_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        role_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        permission_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        ...BaseModel.baseAttributes,
      },
      {
        sequelize,
        tableName: 'role_permissions',
        timestamps: true,
        underscored: true,
      }
    );
  }
}
