import axios from 'axios'
import queryString from 'query-string'

axios.defaults.timeout = 100000 * 10

const HTTP_HEADER = {
    "Content-Type": "application/json"
}

class _request {
    async get(url, params) {
        url = params
            ? `${url}?${queryString.stringify(params)}`
            : `${url}`

        let config = {
            url: `${process.env.GATEWAY}${url}`,
            method: 'get',
            headers: {...HTTP_HEADER}
        }
        if (localStorage.getItem('token')) {
            config.headers['authorization'] = `Bearer ${localStorage.getItem('token')}`
        }
        const result = await axios(config)
        return result
    }

    async post(url, params) {
        let config = {
            method: 'post',
            url: process.env.GATEWAY + url,
            headers: HTTP_HEADER,
            data: JSON.stringify(params)
        }

        if (localStorage.getItem('token')) {
            config.headers['authorization'] = `Bearer ${localStorage.getItem('token')}`
        }

        const result = await axios(config)
        return result
    }

    async put(url, params) {
        let config = {
            method: 'put',
            url: process.env.GATEWAY + url,
            headers: HTTP_HEADER,
            data: JSON.stringify(params)
        }

        if (localStorage.getItem('token')) {
            config.headers['authorization'] = `Bearer ${localStorage.getItem('token')}`
        }

        const result = await axios(config)
        return result
    }

    async delete(url, params) {
        let config = {
            method: 'delete',
            url: process.env.GATEWAY + url,
            headers: HTTP_HEADER,
            data: JSON.stringify(params)
        }

        if (localStorage.getItem('token')) {
            config.headers['authorization'] = `Bearer ${localStorage.getItem('token')}`
        }

        const result = await axios(config)
        return result
    }

    async upload(url, formData, progressEvent, successEvent, failEvent) {
        let config = {
            method: 'post',
            url: process.env.GATEWAY + url,
            headers: HTTP_HEADER,
            data: JSON.stringify(params)
        }

        if (localStorage.getItem('token')) {
            config.headers['authorization'] = `Bearer ${localStorage.getItem('token')}`
        }
        let result = await axios({
            method: 'post',
            url: url,
            headers: process.env.HTTP_HEADER,
            data: formData,
            withCredentials: true,
            axiosConfig
        });

        return result;
    }
}

const request = new _request()
export default request
