import { useState } from "react";
import "./App.css";
const INITIAL_STATE = [
  {
    title: "",
    content: [],
    img: "",
  },
  {
    title: "",
    content: [],
    img: "",
  },
];
function App() {
  const [project, setProject] = useState(INITIAL_STATE);

  function handleChange(e, moduleId, contentId, field) {
    const value = e.target.value;
    const newProject = [...project];
    if (field === "title" || field === "img") {
      newProject[moduleId][field] = value;
      setProject(newProject);
    } else if ("contentSubtitle" === field || "contentSubcontent" === field) {
      newProject[moduleId].content[contentId] = value;
      setProject(newProject);
    }
  }

  function handleSubmite(e) {
    e.preventDefault();
    console.log(project);
  }
  function addContent(e, moduleId) {
    const newProject = [...project];
    newProject[moduleId].content.push({
      contentSubtitle: "",
      contentSubcontent: "",
    });
    setProject(newProject);
  }
  return (
    <>
      <header>Project Creater</header>
      <body>
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
                  <button onClick={(e) => addContent(e, projectId, null)}>
                    Add Content
                  </button>

                  {project.content &&
                    project.content.map((content, contentId) => {
                      return (
                        <>
                          {" "}
                          <textarea
                            value={content.contentSubtitle}
                            placeholder="Subtitle"
                            onChange={(e) =>
                              handleChange(
                                e,
                                projectId,
                                contentId,
                                "contentSubtitle"
                              )
                            }
                          />
                          <textarea
                            value={content.contentSubcontent}
                            placeholder="contentSubcontent"
                            onChange={(e) =>
                              handleChange(
                                e,
                                projectId,
                                contentId,
                                "contentSubcontent"
                              )
                            }
                          />
                        </>
                      );
                    })}
                </div>
              );
            })}
          <div>
            <button>guardar</button>
          </div>
        </form>
      </body>
    </>
  );
}

export default App;
