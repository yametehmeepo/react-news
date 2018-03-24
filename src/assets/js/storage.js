
const storage_name= 'reactnews';

const Storage = {
	fetch: function(){
		return JSON.parse(localStorage.getItem(storage_name) || '{}')
	},
	save: function(data){
		localStorage.setItem(storage_name, JSON.stringify(data))
	}
}

export default Storage;





