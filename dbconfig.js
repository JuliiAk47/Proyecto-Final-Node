import 'dotenv/config';

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        trustServerCertificate: true,
        trustedConnection: true
    }
}

export default config;

/*USE [master]
GO
CREATE LOGIN [Pizzas] WITH PASSWORD=N'Pizzas', DEFAULT_DATABASE=[DAI-PIZZAS], CHECK_EXPIRATION=OFF,
CHECK_POLICY=OFF
GO

USE [DAI-Pizzas]
GO
CREATE USER [Pizzas] FOR LOGIN [Pizzas]
GO
USE [DAI-Pizzas]
GO
ALTER ROLE [db_owner] ADD MEMBER [Pizzas]
GO*/