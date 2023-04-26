import { useState } from "react";
import "./css/Post.css";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import { State } from "../redux/store";
import { EditSvg, DeleteSvg } from "./utils/svgs";
import timeElapsed from "./utils/datetime";
import EditForm from "./EditForm";
import editPost from "../actions/editPost";
import deletePost from "../actions/deletePost";

interface PostProps {
  id: number;
  username: string;
  title: string;
  content: string;
  dateTime: Date;
  updatePosts: () => void;
}

function Post({
  id,
  username,
  title,
  content,
  dateTime,
  updatePosts,
}: PostProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);
  const usernameLocal = useSelector((state: State) => state.username);

  const editAction = async (
    id: number,
    editedTitle: string,
    editedContent: string
  ) => {
    try {
      const response = await editPost(id, editedTitle, editedContent);

      if (response?.ok) {
        alert("Post edited successfully");
        updatePosts();
        setIsEditModalOpen(false);
      } else {
        alert("Error trying to edit the post");
      }
    } catch (error) {
      alert(error);
    }
  };

  const deleteAction = async (id: number) => {
    try {
      const response = await deletePost(id);
      if (response?.ok) {
        alert("Post deleted successfully");
        updatePosts();
        setIsDeleteModalOpen(false);
      } else {
        console.error(response?.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Bubble Post" key={id}>
      <div className="Title">
        <h2>{title}</h2>
        {usernameLocal !== username ? (
          false
        ) : (
          <div className="Actions">
            <div>
              <div onClick={() => setIsEditModalOpen(true)}>
                <EditSvg />
              </div>
              <Modal
                onClose={() => setIsEditModalOpen(false)}
                onAction={() => editAction(id, editedTitle, editedContent)}
                isOpen={isEditModalOpen}
                header="Edit item"
                content={
                  <EditForm
                    editedTitle={editedTitle}
                    editedContent={editedContent}
                    setEditedTitle={setEditedTitle}
                    setEditedContent={setEditedContent}
                  />
                }
                actionButtonText="Edit"
                actionButtonColor="green"
              />
            </div>
            <div>
              <div onClick={() => setIsDeleteModalOpen(true)}>
                <DeleteSvg />
              </div>
              <Modal
                onClose={() => setIsDeleteModalOpen(false)}
                onAction={() => deleteAction(id)}
                isOpen={isDeleteModalOpen}
                header="Are you sure you want to delete this item?"
                content={<p></p>}
                actionButtonText="Delete"
                actionButtonColor="#dc3545"
              />
            </div>
          </div>
        )}
      </div>
      <div className="Content">
        <div className="Infos">
          <h3>@{username}</h3>
          <span>{timeElapsed(dateTime)}</span>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Post;
