const config = {
  STRIPE_KEY: "pk_test_51I9tNaLVe785J4180fWpz5FtFZU40siEIybejonXF3MmRNOsXUDeCe77uJVqhCbF2Qhi3yZlLEhjbHABBdEhfy4l00YVwjKAGg",
  MAX_ATTACHMENT_SIZE: 5000000,

  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-2021",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://t1bpwv53vk.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_mwtR1aJ34",
    APP_CLIENT_ID: "3tl7phd81i02i8uhbujmb0u3os",
    IDENTITY_POOL_ID: "us-east-1:d3d65db2-454c-41f4-a35b-66c774f76c49",
  },
};

export default config;