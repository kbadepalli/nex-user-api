import { DataTypes } from 'sequelize';
import { BaseModel } from './baseModel';
import { sequelize } from '@/config/database';
import { IUserActivityLog } from '../interfaces/userActivityLog';

export class UserActivityLog extends BaseModel<IUserActivityLog, Partial<IUserActivityLog>> implements IUserActivityLog {
  public activity_id!: string;
  public user_id!: string;
  public activity_type!: string;
  public activity_description?: string;
  public activity_timestamp!: Date;
  public is_active!: boolean;

  static initModel() {
    UserActivityLog.init(
      {
        activity_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        user_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        activity_type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        activity_description: {
          type: DataTypes.STRING,
        },
        activity_timestamp: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        ...BaseModel.baseAttributes,
      },
      {
        sequelize,
        tableName: 'user_activity_log',
        timestamps: true,
        underscored: true,
      }
    );
  }
}
