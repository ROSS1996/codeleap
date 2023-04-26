interface NewPostData {
  username: string;
  title: string;
  content: string;
}

const createNewPost = async (newPost: NewPostData) => {
  const response = await fetch("https://dev.codeleap.co.uk/careers/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });

  if (response.ok) {
    return response;
  } else {
    console.error(response.statusText);
  }
};

export default createNewPost;
