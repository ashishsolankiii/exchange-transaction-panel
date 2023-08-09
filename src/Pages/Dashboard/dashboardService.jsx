import { postData } from '../../utils/fetch-services';

export const getDashboardById = async (id) => {
    if (!id) {
        return null;
    }
    const result = await postData('dashboard/getDashboardById', {
        _id: id,
    });
    return result.success ? result.data.details : [];
};
