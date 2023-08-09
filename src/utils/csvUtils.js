import { postData } from './fetch-services';

const convertArrayOfObjectsToCSV = (array) => {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(array[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach((item) => {
        let ctr = 0;
        keys.forEach((key) => {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];

            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
};

const downloadCSV = async (apiEndpoint, searchQuery, filename) => {
    const result = await postData(apiEndpoint, {
        searchQuery: searchQuery
    });
    if (result.success) {
        const link = document.createElement("a");
        let csv = convertArrayOfObjectsToCSV(result.data.records);
        if (csv == null) return;

        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`;
        }

        link.setAttribute("href", encodeURI(csv));
        link.setAttribute("download", filename);
        link.click();
    }
};

export { convertArrayOfObjectsToCSV, downloadCSV };