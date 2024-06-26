import dotenv from "dotenv";
dotenv.config();

type Ienv = {
  port: number | undefined;
  dbUrl: string | undefined;
  refreshTokenSecret: string | undefined;
  refreshTokenExpiresIn: string | undefined;
  accessTokenSecret: string | undefined;
  accessTokenExpiresIn: string | undefined;
  bcrypt: string | undefined;
  nodeEnv: string | undefined;
  fileUploadKey: string | undefined;
  fileUploadAPI: string | undefined;
  clientSiteUrl: string | undefined;
  emailAppPass: string | undefined;
  email: string | undefined;
};

const envConfig: Ienv = {
  port: parseInt(process.env.PORT || "5000", 10),
  dbUrl: process.env.DB_URL,
  refreshTokenSecret: process.env.refresh_token_secret,
  refreshTokenExpiresIn: process.env.refresh_token_expiresIn,
  accessTokenSecret: process.env.access_token_secret,
  accessTokenExpiresIn: process.env.access_token_expireIn,
  bcrypt: process.env.BCRYPT_SALT_ROUNDS,
  nodeEnv: process.env.NODE_ENV,
  fileUploadKey: process.env.FileUploadKey || "",
  fileUploadAPI: process.env.FileUploadAPI,
  clientSiteUrl: process.env.CLIENT_SITE_URL,
  emailAppPass: process.env.EMAIL_APP_PASSWORD,
  email: process.env.EMAIL,
};

export default envConfig;
