const configuration = {
  site: {
    name: 'MakerKit - Next.js Blog Starter',
    description:
      'MakerKit is the SaaS starter built with Next.js, Firebase and' +
      ' Tailwind that lets you launch your next idea in minutes.',
    themeColor: '#efee00',
    siteUrl: 'https://my-blog-i0gflm5lt-darkhorse-fraternity.vercel.app/',
    siteName: `tony's Blog Starter`,
    twitterHandle: 'makerkit_dev',
    githubHandle: 'makerkit',
    language: 'en',
  },
  blog: {
    maxReadMorePosts: 6,
  },
  production: process.env.NODE_ENV === 'production',
};

export default configuration;
