module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        verificationToken: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        timestamps: false
    });

    return User;
};
