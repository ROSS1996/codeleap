const editPost = async (
  id: number,
  editedTitle: string,
  editedContent: string
) => {
  try {
    const response = await fetch(`https://dev.codeleap.co.uk/careers/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: editedTitle,
        content: editedContent,
      }),
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

export default editPost;
