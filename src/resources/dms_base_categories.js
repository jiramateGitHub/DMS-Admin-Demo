import HttpRequest from '@/utils/http_request'

class DmsBaseCategories extends HttpRequest {
    constructor() {
        // api api
        super("https://localhost:3000/api/dms_base_categories")
            // super(process.env.API_URL + "/dms_base_categories")
    }

    async getUser() {
        const { data } = await this.get('/')
        return data
    }
}

export default DmsBaseCategories