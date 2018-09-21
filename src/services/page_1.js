import { request_get, request_post } from '../utils/fetch';

const get_xxx1 = config => request_get('', config);
const get_xxx2 = config => request_post('', config);
export { get_xxx1, get_xxx2 };
