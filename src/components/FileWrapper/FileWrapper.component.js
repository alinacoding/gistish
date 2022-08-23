import Badge from "../Badge/Badge.component";
import "./FileWrapper.styles.css";

const FileWrapper = ({ properties }) => {
  return (
    <div className="file-flex">
      <Badge
        file={properties.file}
        url={properties.url}
        iconStyle={properties.iconStyle}
      />
    </div>
  );
};

export default FileWrapper;
