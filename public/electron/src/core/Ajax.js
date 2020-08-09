import axios from 'axios';

export default async function(url, object){

	let CancelToken = axios.CancelToken;
	let source = CancelToken.source();

	if(object.timeout)
		setTimeout(()=>{
			source.cancel('Timeout');
		}, object.timeout);



	let bodyRequest = Object.assign({url, cancelToken: source.token}, object);

	bodyRequest.data = object.data ? object.data : object.body;

	bodyRequest.headers = object.headers ? object.headers : {};

	return axios.request(bodyRequest).then((response)=>{

		if(!response.data){
			return Promise.resolve({
				status: response.status
			});
		}

		if(typeof response.data !== 'object'){
			return Promise.resolve(response.data);
		}

		let object = Object.assign({
			status: response.status
		}, response.data);

        return Promise.resolve(object);

	}).catch((erro)=>{

		if(axios.isCancel(erro)){
			let response = {
				message: 'Timeout',
				status: 0
			};
			return Promise.reject(response);
		}

		if(erro.request.status === 0){
			let response = {
				message: 'Sem conexão com o servidor',
				status: 0
			};
			return Promise.reject(response);
		}

		let object;

		if(erro.response.data){
			object = Object.assign({
				status: erro.status ? erro.status : erro.response.status,
			}, erro.response.data);
		}else{
			object = {
				status: erro.status ? erro.status : erro.response.status,
			};
		}
		return Promise.reject(object);

	});

}