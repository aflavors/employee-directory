import axios from 'axios';

export default{
    getEmp: function(){
            // 50 Dummy Employees from Random User Generator API
            return axios.get("https://randomuser.me/api/?results=50&nat=us");
    }
}