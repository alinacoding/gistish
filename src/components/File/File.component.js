import "@fortawesome/fontawesome-free-solid";
import "@fortawesome/fontawesome-free-regular";
import "@fortawesome/fontawesome-free-brands";
import FileWrapper from "../FileWrapper/FileWrapper.component";

const File = (props) => {
  const { file, index, url } = props;
  return (
    <div key={file["language"] + index}>
      {file["language"] !== null ? (
        (() => {
          console.log(file);
          let language = file["language"].toLowerCase();
          switch (language) {
            case "java":
              return (
                <FileWrapper
                  properties={{
                    file: file,
                    url: url,
                    iconStyle: "fab fa-java",
                  }}
                />
              );
            case "markdown":
              return (
                <FileWrapper
                  properties={{
                    file: file,
                    url: url,
                    iconStyle: "fas fa-file",
                  }}
                />
              );
            case "python":
              return (
                <FileWrapper
                  properties={{
                    file: file,
                    url: url,
                    iconStyle: "fab fa-python",
                  }}
                />
              );
            case "ruby":
              return (
                <FileWrapper
                  properties={{
                    file: file,
                    url: url,
                    iconStyle: "fab fa-gem",
                  }}
                />
              );
            case "maven pom":
              return (
                <FileWrapper
                  properties={{
                    file: file,
                    url: url,
                    iconStyle: "fas fa-feather",
                  }}
                />
              );
            case "javascript":
              return (
                <FileWrapper
                  properties={{
                    file: file,
                    url: url,
                    iconStyle: "fab fa-js",
                  }}
                />
              );
            case "text":
              return (
                <FileWrapper
                  properties={{
                    file: file,
                    url: url,
                    iconStyle: "fas fa-file",
                  }}
                />
              );
            default:
              return (
                <FileWrapper
                  properties={{
                    file: file,
                    url: url,
                    iconStyle: "fas fa-file",
                  }}
                />
              );
          }
        })()
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default File;
