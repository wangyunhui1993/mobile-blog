import {
	http
} from '@/js_sdk/luch-request/index.js'

export default {
	//查询文章
	getArticleList(params) {
		return new Promise((resolve, reject) => {
			http.post('/blog/article/query', params, {})
				.then(res => {
					const {
						data
					} = res;
					resolve(data);
				})
				.catch(error => {
					reject(error);
				})
		});
	},
	//查询文章
	getArticleDetail(article_id) {
		return new Promise((resolve, reject) => {
			http.post('/blog/article/detail', {article_id}, {})
				.then(res => {
					const {
						data
					} = res;
					resolve(data);
				})
				.catch(error => {
					reject(error);
				})
		});
	},
}
