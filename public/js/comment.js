const commentFormHandler = async function(event) {
    event.preventDefault();
   
    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;
  
    if (body) {
      //try {
         await fetch('/api/comment', {
          method: 'POST',
          body: JSON.stringify({ 
            postId, 
            body 
          }),
          headers: { 
            'Content-type': 'application/json' 
          }
        });
        document.location.reload();
  
      //   if (response.ok) {
      //     document.location.reload();
      //   } else {
      //     throw new Error('Failed to post comment');
      //   }
      // } catch (error) {
      //   console.error(error);
      // }
    }
  };
  
  document.
  querySelector('#new-comment-form').addEventListener('submit', commentFormHandler);
