declare namespace NodeJS {
    interface ProcessEnv {
        /**
         * The consumer key for the app
         */
        C2B_MPESA_CONSUMER_KEY: string;
        /**
         * The consumer secret for the app
         */
        C2B_MPESA_CONSUMER_SECRET: string;
        /**
         * The pass key for the app
         */
        C2B_MPESA_PASSKEY: string;
        /**
         * The short code for the app
         */
        C2B_MPESA_SHORTCODE: number;
        /**
         * The business name for the app, will be used to identify the initiator
         */
        PHONE_NUMBER: number;
        /**
         * The business name for the app, will be used to identify the initiator
         */
        B2C_PASSWORD: string;
        /**
         * The business name for the app, will be used to identify the initiator
         */
        B2C_SECURITY_CREDENTIAL: string;
        /**
         * The business name for the app, will be used to identify the initiator
         */
        B2C_MPESA_CONSUMER_KEY: string;
        /**
         * The business name for the app, will be used to identify the initiator
         */
        B2C_MPESA_CONSUMER_SECRET: string;
        /**
         * The business name for the app, will be used to identify the initiator
         */
        B2C_MPESA_PASSKEY: string;
        /**
         * The business name for the app, will be used to identify the initiator
         */
        B2C_MPESA_SHORTCODE: number;
    }
}