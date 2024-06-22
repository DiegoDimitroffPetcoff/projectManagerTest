import { useState } from "react";
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

export function useForm() {
  const [project, setProject] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("data");

    if (boardFromStorage) return JSON.parse(boardFromStorage);
    return INITIAL_STATE;
  });

  function handleChange(e, moduleId, contentId, field) {
    const value = e.target.value;
    const newProject = [...project];
    if (field === "title" || field === "img") {
      newProject[moduleId][field] = value;
      setProject(newProject);
      window.localStorage.setItem("data", JSON.stringify(newProject));
    } else if ("contentSubtitle" === field || "contentSubcontent" === field) {
      newProject[moduleId].content[contentId][field] = value;
      window.localStorage.setItem("data", JSON.stringify(newProject));

      setProject(newProject);
    }
  }

  function handleSubmite(e) {
    e.preventDefault();
    window.localStorage.setItem("data", JSON.stringify(project));

    console.log(project);
  }
  function addContent(e, moduleId) {
    const newProject = [...project];
    newProject[moduleId].content.push({
      contentSubtitle: "",
      contentSubcontent: "",
    });
    setProject(newProject);
    window.localStorage.setItem("data", JSON.stringify(newProject));
  }
  return { handleChange, handleSubmite, addContent, project };
}
