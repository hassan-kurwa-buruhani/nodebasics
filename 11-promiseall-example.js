// app.js
async function fetchUser(userId) {
    const response = await fetch(`https://jsonnnplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) throw new Error("Failed to fetch user");
    return response.json();
  }
  
  async function fetchPostsByUser(userId) {
    const response = await fetch(`https://jsonnnplaceholder.typicode.com/posts?userId=${userId}`);
    if (!response.ok) throw new Error("Failed to fetch posts");
    return response.json();
  }
  
  async function displayUserData(userId) {
    try {
      // Fetch user and posts concurrently
      const [user, posts] = await Promise.all([
        fetchUser(userId),
        fetchPostsByUser(userId)
      ]);
  
      console.log(`User: ${user.name}`);
      console.log(`Email: ${user.email}`);
      console.log(`Posts (${posts.length}):`);
      posts.forEach(post => {
        console.log(`- ${post.title}`);
      });
  
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  // Run it
  displayUserData(1);
  