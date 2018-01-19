import axios from 'axios';

export default {
  /**
   * -- {带token的get请求} --
   * callback:
   * - err, 数据库异常
   * - result, 操作结果
   * @param {String}  url 访问地址
   * @param {String}  token Teambition唯一验证码
   * @param {async} Promise 回调函数
   * @author:ls
   */
  async axios_get(url, token) {
    return await axios({
      method: 'get',
      url: url,
      headers: {Authorization: `OAuth2 ${token}`}
    });
  },
  /**
   * -- {post请求} --
   * callback:
   * - err, 数据库异常
   * - result, 操作结果
   * @param {String}  url 访问地址
   * @param {object}  data 传输数据
   * @param {async} Promise 回调函数
   * @author:ls
   */
  async axios_post(url, data) {
    return await axios(url, {
      method: 'post',
      url: url,
      data: data
    });
  },
  /**
   * -- {post请求} --
   * callback:
   * - err, 数据库异常
   * - result, 操作结果
   * @param {String}  url 访问地址
   * @param {String}  token 用户访问秘钥
   * @param {async} Promise 回调函数
   * @author:ls
   */
  async axios_delete(url, token) {
    return await axios({
      method: 'delete',
      url: url,
      headers: {Authorization: `OAuth2 ${token}`}
    });
  },
  /**
   * -- {带token的post请求} --
   * callback:
   * - err, 数据库异常
   * - result, 操作结果
   * @param {String}  url 访问地址
   * @param {object}  data 传输数据
   * @param {String}  token Teambition唯一验证码
   * @param {async} Promise 回调函数
   * @author:ls
   */
  async axios_postToken(url, data, token) {
    return await axios({
      method: 'post',
      url: url,
      data: data,
      headers: {Authorization: `OAuth2 ${token}`}
    });
  },
  /**
   * -- {有头部的post请求} --
   * callback:
   * - err, 数据库异常
   * - result, 操作结果
   * @param {String}  url 访问地址
   * @param {Object}  headers 发送头部
   * @param {object}  data 传输数据
   * @param {async} Promise 回调函数
   * @author:ls
   */
  async axios_head_post(url, headers, data) {
    return await axios({
      method: 'post',
      url: url,
      headers,
      data
    });
  }
};
