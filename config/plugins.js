<<<<<<< HEAD
module.exports = () => ({});
=======
module.exports = ({ env }) => ({
    // ...
    'user-spermissions': {
      config: {
      jwtSecret: env(`JWT_SECRET`),
      },
      },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },

    },
    
    // ...
  });
>>>>>>> afc4d7d90e413cf2de4520c79461afb7e4c3d6e8
