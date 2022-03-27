export function Downloader(fileData, fileName) {
  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(fileData)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = `${fileName}.json`;

    link.click();
  };
  exportData();
}
