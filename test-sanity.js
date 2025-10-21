const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'qqxc1e44',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-10-01'
});

async function testConnection() {
  try {
    console.log('Testing Sanity connection...');
    
    // Test fetching posts
    const posts = await client.fetch(`*[_type == "post"]`);
    console.log(`Found ${posts.length} posts`);
    
    if (posts.length > 0) {
      console.log('Posts:', posts);
    } else {
      console.log('No posts found. You need to create some posts in your Sanity studio.');
    }
    
    // Test fetching pages
    const pages = await client.fetch(`*[_type == "page"]`);
    console.log(`Found ${pages.length} pages`);
    
    if (pages.length > 0) {
      console.log('Pages:', pages);
    }
  } catch (error) {
    console.error('Error connecting to Sanity:', error);
  }
}

testConnection();