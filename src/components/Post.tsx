import { useState } from "react";
import "./css/Post.css";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import { State } from "../redux/store";

function timeElapsed(dateTime: Date): string {
  const date = new Date(dateTime);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) {
    return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
  }

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  }

  const days = Math.floor(hours / 24);

  return `${days} day${days === 1 ? "" : "s"} ago`;
}

function DeleteSvg() {
  return (
    <div className="Action">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="30"
        viewBox="0 0 32 30"
        fill="none"
      >
        <path
          d="M7.80087 23.75C7.80087 25.125 8.971 26.25 10.4011 26.25H20.8023C22.2324 26.25 23.4025 25.125 23.4025 23.75V8.75H7.80087V23.75ZM10.9992 14.85L12.8324 13.0875L15.6017 15.7375L18.358 13.0875L20.1912 14.85L17.4349 17.5L20.1912 20.15L18.358 21.9125L15.6017 19.2625L12.8454 21.9125L11.0122 20.15L13.7685 17.5L10.9992 14.85ZM20.1522 5L18.852 3.75H12.3514L11.0512 5H6.50073V7.5H24.7027V5H20.1522Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function EditSvg() {
  return (
    <div className="Action">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="30"
        viewBox="0 0 32 30"
        fill="none"
      >
        <path
          d="M9.10095 21.2663L14.8385 21.2475L27.3614 9.3225C27.8528 8.85 28.1233 8.2225 28.1233 7.555C28.1233 6.8875 27.8528 6.26 27.3614 5.7875L25.2994 3.805C24.3165 2.86 22.6016 2.865 21.6265 3.80125L9.10095 15.7288V21.2663ZM23.461 5.5725L25.5269 7.55125L23.4506 9.52875L21.3886 7.5475L23.461 5.5725ZM11.7012 16.7713L19.5411 9.305L21.6031 11.2875L13.7645 18.7513L11.7012 18.7575V16.7713Z"
          fill="white"
        />
        <path
          d="M6.50067 26.25H24.7026C26.1367 26.25 27.3029 25.1287 27.3029 23.75V12.915L24.7026 15.415V23.75H10.6065C10.5727 23.75 10.5376 23.7625 10.5038 23.7625C10.4609 23.7625 10.418 23.7512 10.3738 23.75H6.50067V6.25H15.4027L18.003 3.75H6.50067C5.06661 3.75 3.90039 4.87125 3.90039 6.25V23.75C3.90039 25.1287 5.06661 26.25 6.50067 26.25Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

function EditForm({
  editedTitle,
  editedContent,
  setEditedTitle,
  setEditedContent,
}: any) {
  return (
    <form>
      <label htmlFor="editedTitle">Title</label>
      <input
        type="text"
        value={editedTitle}
        name="editedTitle"
        id="editedTitle"
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <label htmlFor="editedContent">Content</label>
      <input
        type="text"
        value={editedContent}
        name="editedContent"
        id="editedContent"
        onChange={(e) => setEditedContent(e.target.value)}
      />
    </form>
  );
}

function Post({
  id,
  username,
  title,
  content,
  dateTime,
}: {
  id: number;
  username: string;
  title: string;
  content: string;
  dateTime: Date;
}) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const usernameLocal = useSelector((state: State) => state.username);

  const handleOpenModal = (modalType: string) => {
    if (modalType === "edit") {
      setIsEditModalOpen(true);
    } else if (modalType === "delete") {
      setIsDeleteModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const editAction = async (
    id: number,
    editedTitle: string,
    editedContent: string
  ) => {
    try {
      const response = await fetch(
        `https://dev.codeleap.co.uk/careers/${id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: editedTitle,
            content: editedContent,
          }),
        }
      );

      if (response.ok) {
        alert("Post edited successfully");
        setIsEditModalOpen(false);
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      alert(error);
    }
  };

  const deleteAction = async (id: number) => {
    try {
      const response = await fetch(
        `https://dev.codeleap.co.uk/careers/${id}/`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        alert("Post deleted successfully");
        setIsDeleteModalOpen(false);
      } else {
        console.error(response.statusText);
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
              <div onClick={() => handleOpenModal("edit")}>
                <EditSvg />
              </div>
              <Modal
                onClose={handleCloseModal}
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
              <div>
                <div onClick={() => handleOpenModal("delete")}>
                  <DeleteSvg />
                </div>
                <Modal
                  onClose={handleCloseModal}
                  onAction={() => deleteAction(id)}
                  isOpen={isDeleteModalOpen}
                  header="Are you sure you want to delete this item?"
                  content={<p></p>}
                  actionButtonText="Delete"
                  actionButtonColor="#dc3545"
                />
              </div>
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
