import { DataTypes } from 'sequelize';
import { BaseModel } from './baseModel';
import { sequelize } from '@/config/database';
import { IModule } from '../interfaces/module';

export class Module extends BaseModel<IModule, Partial<IModule>> implements IModule {
  public module_id!: string;
  public module_name!: string;
  public description?: string;
  public parent_module_id?: string;
  public is_active!: boolean;

  static initModel() {
    Module.init(
      {
        module_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        module_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
        },
        parent_module_id: {
          type: DataTypes.UUID,
        },
        ...BaseModel.baseAttributes,
      },
      {
        sequelize,
        tableName: 'modules',
        timestamps: true,
        underscored: true,
      }
    );
  }
}
