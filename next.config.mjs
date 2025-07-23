/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL("https://pilandina.com.bo/wp-content/uploads/**"),
      new URL("https://delizia.bo/wp-content/uploads/**"),
      new URL("https://delizia.bo/wp-content/uploads/**"),
      new URL("https://www.soalpro.com/imagenes/animacion/**"),
      new URL("https://storage.googleapis.com/**"),
      new URL("https://i.postimg.cc/**"),
      new URL("https://storage.googleapis.com/**"),
      new URL("https://lacascada.com.bo/**"),
      new URL("https://farmacorp.com/cdn/**"),
      new URL("https://perlita.com.bo/wp-content/uploads/**"),
      new URL("https://www.fidalga.com/cdn/**"),
      new URL("https://spea.pt/**"),
      new URL("https://d1v72zbjsz4agk.cloudfront.net/**"),
      new URL("https://res.cloudinary.com/dnumlnadg/image/upload/**"),
    ],
  },
};

export default nextConfig;
