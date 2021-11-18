import axios from 'axios';

export const Fetchdata = async () => {

    try {
        const res = await axios.get("https://api.spacexdata.com/v3/capsules");
        return res.data;
    } catch (error) {
        console.error(error.message);
    }
}

export const FetchCompanyDetails = async () => {

    try {
        const res = await axios.get("https://api.spacexdata.com/v3/capsules/upcoming");
        return res.data;
    } catch (error) {
        console.error(error.message);
    }
}