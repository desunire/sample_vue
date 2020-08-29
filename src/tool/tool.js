
export function isJSON(str) {
    if (typeof str == 'string') {
        try {
            var obj=JSON.parse(str);
            return !!(typeof obj == 'object' && obj);
        } catch(e) {
            console.log('error：'+str+'!!!'+e);
            return false;
        }
    }
}
