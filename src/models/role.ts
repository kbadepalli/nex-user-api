import { DataTypes } from 'sequelize';
import { BaseModel } from './baseModel';
import { sequelize } from '@/config/database';
import { IRole } from '../interfaces/role';

export class Role extends BaseModel<IRole, Partial<IRole>> implements IRole {
  public role_id!: string;
  public role_name!: string;
  public role_description?: string;
  public is_active!: boolean;

  static initModel() {
    Role.init(
      {
        role_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        role_name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        role_description: {
          type: DataTypes.STRING,
        },
        ...BaseModel.baseAttributes,
      },
      {
        sequelize,
        tableName: 'roles',
        timestamps: true,
        underscored: true,
      }
    );
  }
}
