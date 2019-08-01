var arraytool = {
    /*删除数组中某一个元素*/
    removeAaary(_arr, _obj) {
        if (_arr){
            var length = _arr.length;
            for (var i = 0; i < length; i++) {
                if (_arr[i] == _obj) {
                    if (i == 0) {
                        _arr.shift(); //删除并返回数组的第一个元素
                        return _arr;
                    }
                    else if (i == length - 1) {
                        _arr.pop();  //删除并返回数组的最后一个元素
                        return _arr;
                    }
                    else {
                        _arr.splice(i, 1); //删除下标为i的元素
                        return _arr;
                    }
                }
            }
        }
        return [];
    },

    /*删除数组中某一个id相同的元素*/
    removeArraybyid(_arr,_obj){
        if (_arr){
            var length = _arr.length;
            for (var i = 0; i < length; i++) {
                if (_arr[i].id == _obj.id) {
                    if (i == 0) {
                        _arr.shift(); //删除并返回数组的第一个元素
                        return _arr;
                    }
                    else if (i == length - 1) {
                        _arr.pop();  //删除并返回数组的最后一个元素
                        return _arr;
                    }
                    else {
                        _arr.splice(i, 1); //删除下标为i的元素
                        return _arr;
                    }
                }
            }
        }
        return _arr;
    },

    /*删除数组中某一个id相同的元素*/
    removeArrayWithid(_arr,id){
        if (_arr){
            var length = _arr.length;
            for (var i = 0; i < length; i++) {
                if (_arr[i].id == id) {
                    if (i == 0) {
                        _arr.shift(); //删除并返回数组的第一个元素
                        return _arr;
                    }
                    else if (i == length - 1) {
                        _arr.pop();  //删除并返回数组的最后一个元素
                        return _arr;
                    }
                    else {
                        _arr.splice(i, 1); //删除下标为i的元素
                        return _arr;
                    }
                }
            }
        }
        return _arr;
    },

    /*删除数组中某一个id相同的元素*/
    removeArraybyRoomid(_arr,_obj){
        if (_arr){
            var length = _arr.length;
            for (var i = 0; i < length; i++) {
                if (_arr[i].roomId == _obj.roomId) {
                    if (i == 0) {
                        _arr.shift(); //删除并返回数组的第一个元素
                        return _arr;
                    }
                    else if (i == length - 1) {
                        _arr.pop();  //删除并返回数组的最后一个元素
                        return _arr;
                    }
                    else {
                        _arr.splice(i, 1); //删除下标为i的元素
                        return _arr;
                    }
                }
            }
        }
        return _arr;
    },

    /*给数组中的元素根据id 添加一个新属性并返回*/
    addArrayPropByid(arr,prop,obj,propvalue){
        if (arr){
            arr.forEach(function (value) {
                if (value.id == obj.id){
                    value[prop] = propvalue
                }
            })
            return arr;
        }
        return arr;
    }

}

export default  arraytool;


export function isJSON(str) {
    if (typeof str == 'string') {
        try {
            var obj=JSON.parse(str);
            if(typeof obj == 'object' && obj ){
                return true;
            }else{
                return false;
            }
        } catch(e) {
            console.log('error：'+str+'!!!'+e);
            return false;
        }
    }
    console.log('It is not a string!')
}
