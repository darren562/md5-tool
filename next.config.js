/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Previously created/moved comparisons
      {
        source: "/md5-vs-sha256",
        destination: "/guides/md5-vs-sha256",
        permanent: true,
      },
      {
        source: "/uuidv4-vs-uuidv7",
        destination: "/guides/uuidv4-vs-uuidv7",
        permanent: true,
      },
      {
        source: "/aes-gcm-vs-ctr",
        destination: "/guides/aes-gcm-vs-ctr",
        permanent: true,
      },
      {
        source: "/hmac-sha256-vs-sha256",
        destination: "/guides/hmac-sha256-vs-sha256",
        permanent: true,
      },
      {
        source: "/sha256-vs-sha3",
        destination: "/guides/sha256-vs-sha3",
        permanent: true,
      },
      {
        source: "/pbkdf2-vs-hkdf",
        destination: "/guides/pbkdf2-vs-hkdf",
        permanent: true,
      },
      {
        source: "/crc16-ibm-vs-crc16-modbus",
        destination: "/guides/crc16-ibm-vs-crc16-modbus",
        permanent: true,
      },
      {
        source: "/base16-vs-hex",
        destination: "/guides/base16-vs-hex",
        permanent: true,
      },

      // Now migrating the original 10 comparisons
      {
        source: "/md5-vs-sha1",
        destination: "/guides/md5-vs-sha1",
        permanent: true,
      },
      {
        source: "/sha1-vs-sha256",
        destination: "/guides/sha1-vs-sha256",
        permanent: true,
      },
      {
        source: "/crc32-vs-crc32c",
        destination: "/guides/crc32-vs-crc32c",
        permanent: true,
      },
      {
        source: "/base64-vs-base64url",
        destination: "/guides/base64-vs-base64url",
        permanent: true,
      },
      {
        source: "/base32-vs-base32hex",
        destination: "/guides/base32-vs-base32hex",
        permanent: true,
      },
      {
        source: "/ascii85-vs-base85-rfc1924",
        destination: "/guides/ascii85-vs-base85-rfc1924",
        permanent: true,
      },
      {
        source: "/base58-vs-base58check",
        destination: "/guides/base58-vs-base58check",
        permanent: true,
      },
      {
        source: "/uuid-vs-guid",
        destination: "/guides/uuid-vs-guid",
        permanent: true,
      },
      {
        source: "/jwt-hs256-vs-rs256",
        destination: "/guides/jwt-hs256-vs-rs256",
        permanent: true,
      },
      {
        source: "/aes-gcm-vs-cbc",
        destination: "/guides/aes-gcm-vs-cbc",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
