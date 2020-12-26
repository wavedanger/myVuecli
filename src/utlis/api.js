/**   
 * api接口统一管理
 */
import { get,post } from './http'

export const saidiaoai=param=>get('/saidiaoai',param)
export const qqlevel=param=>get('/qqlevel',param)
export const eventHistory=param=>post('/eventHistory',param)