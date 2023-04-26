export default function EditForm({
  editedTitle,
  editedContent,
  setEditedTitle,
  setEditedContent,
}: {
  editedTitle: string;
  editedContent: string;
  setEditedTitle: (arg0: string) => void;
  setEditedContent: (arg0: string) => void;
}) {
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
