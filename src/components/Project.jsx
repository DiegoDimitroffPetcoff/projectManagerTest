import { useForm } from "../hooks/useForm";
import { Content } from "./Content";

export function Project() {
  const { handleChange, handleSubmite, addContent, project } = useForm();
  return (
    <form
      onSubmit={handleSubmite}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {project &&
        project.map((project, projectId) => {
          return (
            <div key={projectId}>
              <input
                value={project.title}
                placeholder="Title"
                onChange={(e) => handleChange(e, projectId, null, "title")}
              />
              <input
                value={project.img}
                placeholder="img"
                onChange={(e) => handleChange(e, projectId, null, "img")}
              />
              <Content
                project={project}
                projectId={projectId}
                handleChange={handleChange}
              />
              <button onClick={(e) => addContent(e, projectId, null)}>
                Add Content
              </button>
            </div>
          );
        })}
      <div>
        <button>guardar</button>
      </div>
    </form>
  );
}
