import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableSection({ section }) {

  const {attributes, listeners, setNodeRef, transform, transition} =
    useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}
      className="border p-4 rounded bg-white cursor-grab"
    >
      <h3 className="font-bold">{section.title}</h3>
      <p>{section.content}</p>
    </div>
  );
}