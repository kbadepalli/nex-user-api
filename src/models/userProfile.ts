import { DataTypes } from 'sequelize';
import { BaseModel } from './baseModel';
import { sequelize } from '@/config/database';
import { IUserProfile } from '../interfaces/userProfile';

export class UserProfile extends BaseModel<IUserProfile, Partial<IUserProfile>> implements IUserProfile {
  public user_id!: string;
  public cognito_user_id!: string;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public phone_number?: string;
  public role_id!: string;
  public profile_image_url?: string;
  public agency_id?: string;
  public assigned_office?: string;
  public employee_id?: string;
  public job_title?: string;
  public work_email?: string;
  public work_phone?: string;
  public last_login?: Date;
  public login_attempts?: number;
  public is_active!: boolean;

  static initModel() {
    UserProfile.init(
      {
        user_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        cognito_user_id: {
          type: DataTypes.UUID,
          allowNull: false,
          unique: true,
        },
        first_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        last_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        phone_number: {
          type: DataTypes.STRING,
        },
        role_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        ...BaseModel.baseAttributes,
      },
      {
        sequelize,
        tableName: 'user_profile',
        timestamps: true,
        underscored: true,
      }
    );
  }
}
