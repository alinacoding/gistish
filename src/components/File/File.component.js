import "@fortawesome/fontawesome-free-solid";
import "@fortawesome/fontawesome-free-regular";
import Badge from "../Badge/Badge.component";

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
              return <Badge file={file} url={url} iconStyle={"fab fa-java"} />;
            case "markdown":
              return <Badge file={file} url={url} iconStyle={"fas fa-file"} />;
            case "python":
              return (
                <Badge file={file} url={url} iconStyle={"fab fa-python"} />
              );
            case "javascript":
              return <Badge file={file} url={url} iconStyle={"fab fa-js"} />;
            case "text":
              return <Badge file={file} url={url} iconStyle={"fas fa-file"} />;
            default:
              return <Badge file={file} url={url} iconStyle={"fas fa-file"} />;
          }
        })()
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default File;
