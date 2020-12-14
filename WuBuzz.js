class WuBuzz {
    wuChant(value){
        let response = "";
        for (let n = 1; n <= value; n++) {
            if ((n% 3 === 0) && (n% 5 === 0)) {
                response += "WuTangForever\n";
            } else if ( n% 3 === 0) {
                response += "Wu\n";
            } else if  (n% 5 === 0) {
                response += "Tang\n";
            } else {
                response += n +"\n";
            }
        }
        return response;
    }
}



module.exports = WuBuzz;