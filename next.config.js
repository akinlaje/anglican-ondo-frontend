module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/login',
        permanent: false,
      },
    ];
  },
  images: {
    domains: [
      'ec2-18-224-16-187.us-east-2.compute.amazonaws.com',
      'localhost',
      '18.224.16.187.nip.io',
    ],
  },
  presets: ['next/babel'],
};
