function treeConstructor(strArr) {
    let parents = {};
    let children = {};

    for (let i = 0; i < strArr.length; i++) {
        
        let pair = strArr[i].replace(/[()]/g, "").split(",");
        let child = pair[0];
        let parent = pair[1];

        
        if (parents[parent]) {
            parents[parent].push(child);
        } else {
            parents[parent] = [child];
        }

        if (parents[parent].length > 2) {
            return false;
        }

      
        if (children[child]) {
            return false;
        } else {
            children[child] = parent;
        }
    }
   
        let rcount = 0;
        let pvalues = Object.keys(parents)
        for(let i = 0; i < pvalues.length; i++){
            if(!children[pvalues[i]]){
                rcount += 1;
            }
            if(rcount > 1){
                return false;
            }
        }
    return true;
}