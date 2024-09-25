import { Model, Optional, DataTypes } from 'sequelize';

export interface IBaseAttributes {
  created_at?: Date;
  updated_at?: Date;
  is_active: boolean;
}

export class BaseModel<TAttributes extends {}, TCreationAttributes extends Optional<TAttributes, keyof TAttributes>> extends Model<TAttributes, TCreationAttributes> {
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
  public is_active!: boolean;

  static baseAttributes = {
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  };
}
