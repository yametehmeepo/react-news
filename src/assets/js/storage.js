
const storage_name= 'reactnews';

const Storage = {
	fetch: function(){
		return JSON.parse(sessionStorage.getItem(storage_name) || '{}')
	},
	save: function(data){
		sessionStorage.setItem(storage_name, JSON.stringify(data))
	}
}

export default Storage;





