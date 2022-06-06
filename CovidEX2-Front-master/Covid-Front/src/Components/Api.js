const Api = function () {

    const status = (response) =>
    {
        if (response.status >= 200 && response.status < 300)
        {
            return Promise.resolve(response);
        }
        else
        {
            return Promise.reject(new Error(response.statusText));
        }
    }
    const userDbURL = "http://127.0.0.1:8000/api/users";
    const exportTableToExcelURL = 'http://localhost:8000/api/users/exportToExcel'
    const getByCityURL = (city) =>
    {
        return `http://127.0.0.1:8000/api/users/?city=${city}`
    }
    const getByDateURL = (from, till) =>
    {
        return `http://127.0.0.1:8000/api/users/?from=${from}&till=${till}`
    }
    return {
        status,
        userDbURL,
        getByDateURL,
        getByCityURL,
        exportTableToExcelURL
    };
}();
module.exports = Api;
