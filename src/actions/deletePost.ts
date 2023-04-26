const deletePost = async (id: number) => {
  try {
    const response = await fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
      method: "DELETE",
    });

    if (response.ok) {
      return response;
    } else {
      alert(response.statusText);
    }
  } catch (error) {
    alert(error);
  }
};

export default deletePost;
