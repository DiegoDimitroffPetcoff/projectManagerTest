import { useForm } from "../hooks/useForm";

export function Content({ project, projectId, handleChange }) {
/*   const { handleChange } = useForm(); */

  return (
    <>
      {" "}
      {project.content &&
        project.content.map((content, contentId) => {
          return (
            <>
              {" "}
              <textarea
                value={content.contentSubtitle}
                placeholder="Subtitle"
                onChange={(e) =>
                  handleChange(e, projectId, contentId, "contentSubtitle")
                }
              />
              <textarea
                value={content.contentSubcontent}
                placeholder="contentSubcontent"
                onChange={(e) =>
                  handleChange(e, projectId, contentId, "contentSubcontent")
                }
              />
            </>
          );
        })}
    </>
  );
}
