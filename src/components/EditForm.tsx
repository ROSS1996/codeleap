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
        required
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <label htmlFor="editedContent">Content</label>
      <textarea
        name="editedContent"
        id="editedContent"
        cols={30}
        rows={10}
        value={editedContent}
        required
        placeholder="Content"
        onChange={(e) => setEditedContent(e.target.value)}
      ></textarea>
    </form>
  );
}
